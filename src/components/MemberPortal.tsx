import React, { useState, useEffect } from "react";
import { 
  User, 
  Lock, 
  Eye, 
  EyeOff, 
  Wallet, 
  ShieldCheck, 
  X, 
  CheckCircle,
  Globe,
  Loader2,
  Star,
  Target,
  Trophy,
  DollarSign,
  ArrowUpRight,
  Link,
  AlertTriangle,
  Settings,
  Activity,
  History,
  TrendingUp,
  Sliders,
  HelpCircle,
  Key,
  Cpu,
  Layers,
  RefreshCw
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import XenithLogo from "./XenithLogo";

interface MemberPortalProps {
  isOpen: boolean;
  onClose: () => void;
  onLaunchAi: (prompt: string) => void;
}

export default function MemberPortal({ isOpen, onClose, onLaunchAi }: MemberPortalProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [walletConnecting, setWalletConnecting] = useState(false);
  const [notification, setNotification] = useState<string | null>(null);

  // Active Tab state inside portal
  const [activeTab, setActiveTab] = useState<"dashboard" | "agent" | "stability" | "intelligence" | "risk" | "api" | "settings" | "help">("dashboard");

  // Active Member Tier state ("FREE", "PLUS", "PRO")
  const [activeTier, setActiveTier] = useState<"FREE" | "PLUS" | "PRO">("PLUS");

  // Dynamic values
  const [saiBalance, setSaiBalance] = useState(1000118);
  const [apiLatency, setApiLatency] = useState(0); // Simulated API latency in ms
  const [linkStability, setLinkStability] = useState(0); // Simulated link stability of the node connection
  const [chartPoints, setChartPoints] = useState<number[]>([15, 25, 18, 30, 24, 35, 29, 45, 42, 58]);

  // API Connection State (initially NOT linked to represent 0/disabled state)
  const [isApiLinked, setIsApiLinked] = useState(false);
  const [linkingExchange, setLinkingExchange] = useState("BINANCE");
  const [apiKeyInput, setApiKeyInput] = useState("");
  const [apiSecretInput, setApiSecretInput] = useState("");
  const [selectedRouteProfile, setSelectedRouteProfile] = useState<"DIRECT" | "PROXY" | "VPN">("PROXY");
  const [isConnectingApi, setIsConnectingApi] = useState(false);
  const [showConfigPanel, setShowConfigPanel] = useState(false);

  // Sync state initially based on link status and selected route profile
  useEffect(() => {
    if (isApiLinked) {
      if (selectedRouteProfile === "DIRECT") {
        setApiLatency(14);
        setLinkStability(99.99);
      } else if (selectedRouteProfile === "PROXY") {
        setApiLatency(26);
        setLinkStability(99.96);
      } else {
        setApiLatency(52);
        setLinkStability(99.85);
      }
    } else {
      setApiLatency(0);
      setLinkStability(0);
    }
  }, [isApiLinked, selectedRouteProfile]);

  // Generate real-time micro drifts in telemetry when logged in
  useEffect(() => {
    if (!isLoggedIn) return;
    const interval = setInterval(() => {
      // Simulate real-time miner allocations
      setSaiBalance(prev => prev + (Math.random() > 0.6 ? Math.floor(Math.random() * 5) : 0));
      
      if (isApiLinked) {
        // Simulate slight latency vibrations
        setApiLatency(prev => {
          if (prev === 0) return 18;
          const drift = (Math.random() - 0.5) * 2;
          const base = selectedRouteProfile === "DIRECT" ? 14 : selectedRouteProfile === "PROXY" ? 26 : 52;
          return Math.max(5, Math.min(180, Math.round(base + drift)));
        });

        // Simulate micro stability fluctuations
        setLinkStability(prev => {
          if (prev === 0) return 99.9;
          const drift = (Math.random() - 0.5) * 0.02;
          const base = selectedRouteProfile === "DIRECT" ? 99.99 : selectedRouteProfile === "PROXY" ? 99.96 : 99.85;
          return parseFloat(Math.max(99.3, Math.min(100.0, base + drift)).toFixed(2));
        });
        
        // Drift connection safety/latency chart lines
        setChartPoints(prev => {
          const next = [...prev.slice(1)];
          const last = prev[prev.length - 1];
          const variance = (Math.random() - 0.5) * 5;
          const targetBase = selectedRouteProfile === "DIRECT" ? 20 : selectedRouteProfile === "PROXY" ? 40 : 65;
          next.push(Math.max(10, Math.min(90, targetBase + variance)));
          return next;
        });
      }
    }, 2500);

    return () => clearInterval(interval);
  }, [isLoggedIn, isApiLinked, selectedRouteProfile]);

  // Select active chart points based on link status
  const getActiveChartPoints = () => {
    return isApiLinked ? chartPoints : [25, 25, 25, 25, 25, 25, 25, 25, 25, 25];
  };

  // Create SVG path based on chart points
  const generateSvgPath = () => {
    const activePoints = getActiveChartPoints();
    const width = 240;
    const height = 45;
    const padding = 5;
    const step = width / (activePoints.length - 1);
    const maxVal = Math.max(...activePoints);
    const minVal = Math.min(...activePoints);
    const valRange = maxVal - minVal || 1;

    return activePoints.map((val, idx) => {
      const x = idx * step;
      // Invert Y axes for SVG orientation
      const y = height - padding - ((val - minVal) / valRange) * (height - padding * 2);
      return `${idx === 0 ? "M" : "L"} ${x} ${y}`;
    }).join(" ");
  };

  const showToast = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3000);
  };

  const handleManualLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      showToast("Please enter your email and password to proceed.");
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsLoggedIn(true);
      showToast("Welcome back! Your dashboard is now ready.");
    }, 1200);
  };

  const handleWalletLogin = () => {
    setWalletConnecting(true);
    setTimeout(() => {
      setWalletConnecting(false);
      setIsLoggedIn(true);
      showToast("Connected successfully! Your wallet session has started.");
    }, 1500);
  };

  const handleSignOut = () => {
    setIsLoggedIn(false);
    setEmail("");
    setPassword("");
    showToast("Session closed correctly.");
  };

  // Maps tier name to subtitle displays dynamically
  const getTierDisplayTitle = () => {
    switch (activeTier) {
      case "FREE": return "FREE MEMBER TIER";
      case "PRO": return "PRO MEMBER TIER";
      default: return "BLACK MEMBER TIER";
    }
  };

  if (!isOpen) return null;

  return (
    <div id="xenith-private-portal-wrapper" className="fixed inset-0 z-50 overflow-y-auto bg-[#070606] text-white font-sans selection:bg-[#f4cf8a]/30 selection:text-[#f4cf8a] backdrop-blur-xl">
      
      {/* Background ambient luxury lighting */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-0 w-[450px] h-[450px] bg-[#f4cf8a]/3 rounded-full blur-[160px]" />
        <div className="absolute bottom-1/5 left-1/10 w-[550px] h-[550px] bg-amber-950/[0.03] rounded-full blur-[200px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.005)_1px,transparent_1px)] bg-[size:32px_32px] opacity-40" />
      </div>

      {/* Internal Notification Banner */}
      <AnimatePresence>
        {notification && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-[#16120e] border border-[#f4cf8a]/30 text-[#f4cf8a] px-5 py-3 rounded-xl shadow-xl shadow-black/80 flex items-center gap-2.5 text-xs font-sans tracking-wide"
          >
            <CheckCircle size={14} className="text-emerald-400" />
            <span>{notification}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-10 min-h-screen max-w-4xl mx-auto px-6 py-8 flex flex-col justify-between">
        
        {/* Top Header Rail */}
        <header className="flex items-center justify-between border-b border-white/[0.04] pb-6 mb-8">
          <div className="flex items-center gap-3 select-none">
            <XenithLogo size={24} className="opacity-95" />
            <span className="text-sm font-semibold tracking-[0.12em] text-white font-display">Xenith</span>
          </div>

          <div className="flex items-center gap-4">
            {isLoggedIn ? (
              <div className="flex items-center gap-3">
                <button 
                  onClick={handleSignOut}
                  className="rounded-lg border border-white/[0.08] hover:border-white/20 bg-transparent hover:bg-white/[0.03] text-white px-5 py-2 text-[11px] tracking-[0.16em] transition-all duration-300 font-sans"
                >
                  Sign Out
                </button>
                <div 
                  onClick={() => {
                    onLaunchAi("Show me diagnostic stats about my current black member security parameters.");
                    showToast("Triggering secure parameter overview...");
                  }}
                  className="rounded-lg border border-white/[0.08] hover:border-white/20 bg-transparent hover:bg-white/[0.03] text-white/90 hover:text-white px-5 py-2 text-[11px] tracking-[0.16em] transition-all duration-300 font-sans flex items-center gap-2 cursor-pointer"
                >
                  <User size={12} className="text-[#f4cf8a]" />
                  <span>Profile</span>
                </div>
              </div>
            ) : (
              <span className="text-[11.5px] tracking-[0.1em] text-white/40 font-sans">
                Unauthorized Client Session
              </span>
            )}

            <button 
              onClick={onClose}
              title="Close Portal"
              className="text-white/40 hover:text-white border border-white/5 hover:border-white/15 p-2 rounded-full transition duration-150 cursor-pointer"
            >
              <X size={15} />
            </button>
          </div>
        </header>

        {/* Dynamic Display Board */}
        <div className="space-y-6 w-full max-w-2xl mx-auto pt-2 flex-grow">

          {/* Interactive Login Panel (shown when logged out) */}
          <AnimatePresence mode="wait">
            {!isLoggedIn ? (
              <motion.div 
                key="login-view"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                className="rounded-2xl border border-white/[0.06] bg-[#0c0909]/95 p-6 sm:p-8 shadow-2xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#f4cf8a]/3 rounded-full blur-2xl pointer-events-none" />
                
                <h3 className="text-sm tracking-[0.1em] text-[#f4cf8a] text-center mb-6 font-display font-medium">
                  Secure Portal Login
                </h3>

                <form onSubmit={handleManualLogin} className="space-y-4">
                  {/* Username field */}
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30" size={15} />
                    <input 
                      type="text"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email or Username"
                      className="w-full bg-black/40 hover:bg-black/60 focus:bg-black border border-white/[0.06] hover:border-white/15 focus:border-[#f4cf8a]/40 rounded-xl py-3.5 pl-11 pr-4 text-[16px] sm:text-[13px] text-white placeholder:text-white/30 outline-none transition duration-200"
                    />
                  </div>

                  {/* Password field */}
                  <div className="relative">
                    <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30" size={15} />
                    <input 
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Password"
                      className="w-full bg-black/40 hover:bg-black/60 focus:bg-black border border-white/[0.06] hover:border-white/15 focus:border-[#f4cf8a]/40 rounded-xl py-3.5 pl-11 pr-11 text-[16px] sm:text-[13px] text-white placeholder:text-white/30 outline-none transition duration-200"
                    />
                    <button 
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/30 hover:text-white transition duration-150"
                    >
                      {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                    </button>
                  </div>

                  {/* Settings row */}
                  <div className="flex items-center justify-between text-[12px] text-white/40 px-1 pt-1">
                    <label className="flex items-center gap-2 cursor-pointer select-none hover:text-white/60 transition duration-150">
                      <input 
                        type="checkbox"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                        className="rounded border-white/10 bg-black text-[#f4cf8a] focus:ring-0 focus:ring-offset-0 h-3.5 w-3.5"
                      />
                      <span>Remember me</span>
                    </label>
                    <a 
                      onClick={() => showToast("Security parameters reset triggers sent to primary email.")}
                      className="hover:text-[#f4cf8a] hover:underline cursor-pointer transition duration-150"
                    >
                      Forgot password?
                    </a>
                  </div>

                  {/* Submit Button */}
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-xl bg-gradient-to-r from-[#eac57d] via-[#f4cf8a] to-[#ecd4a5] hover:opacity-90 active:opacity-100 text-black text-[13.5px] font-semibold py-3.5 mt-2 transition duration-200 shadow-md shadow-[#f4cf8a]/10 disabled:opacity-50 cursor-pointer flex items-center justify-center gap-2 tracking-[0.1em]"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={13} className="animate-spin text-black" />
                        <span>Signing in securely...</span>
                      </>
                    ) : (
                      "Login"
                    )}
                  </button>
                </form>

                {/* Separator block */}
                <div className="relative my-5 text-center">
                  <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-white/[0.05]" /></div>
                  <span className="relative bg-[#0c0909] px-3 text-[10px] font-sans text-white/20 tracking-wide">or</span>
                </div>

                {/* Ledger Key Card wallet option */}
                <button 
                  onClick={handleWalletLogin}
                  disabled={walletConnecting}
                  className="w-full rounded-xl border border-white/10 bg-[#070505] hover:bg-white/[0.02] hover:border-white/20 text-white/70 hover:text-white text-[13.5px] font-sans tracking-[0.06em] py-3.5 transition duration-200 cursor-pointer flex items-center justify-center gap-2.5"
                >
                  {walletConnecting ? (
                    <>
                      <Loader2 size={13} className="animate-spin text-[#f4cf8a]" />
                      <span>Connecting to wallet...</span>
                    </>
                  ) : (
                    <>
                      <Wallet size={13} className="text-[#f4cf8a]" />
                      <span>Login with Wallet</span>
                    </>
                  )}
                </button>
              </motion.div>
            ) : null}
          </AnimatePresence>

          {/* Logged in views - Tabbed Navigation Platform */}
          <AnimatePresence>
            {isLoggedIn && (
              <motion.div
                key="private-telemetry-portal-content"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="space-y-6"
              >
                
                {/* PORTAL PAGE SELECTOR TABS */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pb-4 border-b border-white/[0.05] select-none">
                  {[
                    { id: "dashboard", label: "Dashboard", icon: <Sliders size={12} /> },
                    { id: "agent", label: "AI Trading Agent", icon: <Cpu size={12} /> },
                    { id: "stability", label: "Node Telemetry", icon: <Activity size={12} strokeWidth={2} /> },
                    { id: "intelligence", label: "Market Intelligence", icon: <Globe size={12} /> },
                    { id: "risk", label: "Risk Center", icon: <ShieldCheck size={12} /> },
                    { id: "api", label: "API Connections", icon: <Key size={12} /> },
                    { id: "settings", label: "Account Settings", icon: <Settings size={12} /> },
                    { id: "help", label: "Help Center", icon: <HelpCircle size={12} /> },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => {
                        setActiveTab(tab.id as any);
                        showToast(`View updated to: ${tab.label}`);
                      }}
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg text-[11.5px] uppercase tracking-[0.05em] font-semibold font-sans transition-all duration-200 cursor-pointer border ${
                        activeTab === tab.id
                          ? "border-[#f4cf8a]/40 bg-[#f4cf8a]/10 text-[#f4cf8a] shadow-[0_0_12px_rgba(244,207,138,0.05)] font-bold text-white"
                          : "border-white/[0.04] bg-[#0c0a0a]/20 text-white/55 hover:text-white hover:bg-white/[0.04] hover:border-white/[0.08]"
                      }`}
                    >
                      <span className={activeTab === tab.id ? "text-[#f4cf8a]" : "text-white/40"}>
                        {tab.icon}
                      </span>
                      <span className="truncate">{tab.label}</span>
                    </button>
                  ))}
                </div>

                {/* TAB WINDOW SWITCHER */}
                {activeTab === "dashboard" && (
                  <div className="space-y-6">
                    {/* 1. SECURE MEMBER PROFILE UNLOCKED ALERT BANNER */}
                    <div className="rounded-xl border border-emerald-500/15 bg-[#050907] px-6 py-4.5 flex items-start gap-4 shadow-[0_4px_12px_rgba(16,185,129,0.02)]">
                      <div className="p-1 rounded-md bg-emerald-500/10 text-emerald-400 mt-1 shrink-0">
                        <Lock size={15} className="fill-emerald-400/20" />
                      </div>
                      <div className="space-y-1 select-none">
                        <h4 className="text-[13px] font-semibold text-emerald-400 tracking-wide font-sans animate-pulse">
                          Secure AI Trading Command Center Unlocked
                        </h4>
                        <p className="text-[12px] leading-relaxed text-white/55 font-sans">
                          Your non-custodial AI agent trading bot is offline until you link an API. All wallet custody remains strictly local to your personal exchanges.
                        </p>
                      </div>
                    </div>

                    {/* 2. BLACK MEMBER TIER (CENTER VALUE CARD GRID) */}
                    <div className="rounded-2xl border border-white/[0.04] bg-[#0c0a0a]/40 p-6 shadow-xl relative overflow-hidden flex flex-col items-center">
                      <div className="text-center space-y-1 mb-6">
                        <h3 className="text-[15px] font-semibold tracking-[0.1em] text-[#f4cf8a] font-display select-none font-sans uppercase">
                          AI Bot Configuration Plan
                        </h3>
                        <p className="text-[12px] text-white/50 tracking-normal font-sans">
                          Select the strategy execution tier for your connected exchanges.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full">
                        {/* Free Card alternative */}
                        <div 
                          onClick={() => {
                            setActiveTier("FREE");
                            showToast("Switched configuration to Free Basic Agent.");
                          }}
                          className={`rounded-xl border p-4 flex flex-col items-center justify-center gap-1.5 transition-all duration-300 cursor-pointer select-none ${
                            activeTier === "FREE" 
                              ? "border-[#f4cf8a] bg-[#f4cf8a]/[0.02] shadow-[0_0_15px_rgba(244,207,138,0.06)]" 
                              : "border-white/[0.04] bg-transparent hover:bg-white/[0.01]"
                          }`}
                        >
                          <span className={`text-[11.5px] tracking-[0.15em] font-bold font-sans ${activeTier === "FREE" ? "text-white" : "text-white/60"}`}>BASIC AGENT</span>
                          <span className="text-[10px] tracking-wide text-white/40 font-sans">Sandbox strategy</span>
                        </div>

                        {/* Plus Card alternative */}
                        <div 
                          onClick={() => {
                            setActiveTier("PLUS");
                            showToast("Switched configuration to Plus black Agent.");
                          }}
                          className={`relative rounded-xl border p-4 flex flex-col items-center justify-center gap-1.5 transition-all duration-300 cursor-pointer select-none ${
                            activeTier === "PLUS" 
                              ? "border-[#f4cf8a] bg-[#f4cf8a]/[0.02] shadow-[0_0_15px_rgba(244,207,138,0.12)]" 
                              : "border-white/[0.04] bg-transparent hover:bg-white/[0.01]"
                          }`}
                        >
                          {/* Active tiny glowing star badge indicator */}
                          <div className="absolute top-2 right-2.5 rounded-full bg-[#f4cf8a]/10 border border-[#f4cf8a]/30 p-0.5 text-[#f4cf8a]">
                            <Star size={8} className="fill-[#f4cf8a]" />
                          </div>
                          
                          <span className={`text-[11.5px] tracking-[0.15em] font-bold font-sans ${activeTier === "PLUS" ? "text-white" : "text-white/60"}`}>PLUS AGENT</span>
                          <span className="text-[10px] tracking-wide text-white/40 font-sans">Optimized bot</span>
                        </div>

                        {/* Pro Card alternative */}
                        <div 
                          onClick={() => {
                            setActiveTier("PRO");
                            showToast("Switched configuration to Pro Premium Agent.");
                          }}
                          className={`rounded-xl border p-4 flex flex-col items-center justify-center gap-1.5 transition-all duration-300 cursor-pointer select-none ${
                            activeTier === "PRO" 
                              ? "border-[#f4cf8a] bg-[#f4cf8a]/[0.02] shadow-[0_0_15px_rgba(244,207,138,0.06)]" 
                              : "border-white/[0.04] bg-transparent hover:bg-white/[0.01]"
                          }`}
                        >
                          <span className={`text-[11.5px] tracking-[0.15em] font-bold font-sans ${activeTier === "PRO" ? "text-white" : "text-white/60"}`}>PRO AGENT</span>
                          <span className="text-[10px] tracking-wide text-white/40 font-sans">High volume</span>
                        </div>
                      </div>
                    </div>

                    {/* 3. XAI TOKEN CARD */}
                    <div className="rounded-xl border border-white/[0.04] bg-[#0c0a0a]/40 p-6 flex items-center justify-between shadow-lg relative overflow-hidden select-none">
                      <div>
                        <div className="text-[12px] tracking-[0.1em] text-[#f4cf8a] font-sans font-medium mb-2.5 uppercase">XAI Membership Credits</div>
                        <div className="flex items-baseline gap-1.5">
                          <span className="text-3xl font-light tracking-wide text-white font-sans">{saiBalance.toLocaleString()}</span>
                          <span className="text-[13px] text-white/60 font-sans">XAI Code</span>
                        </div>
                        <div className="text-[11.5px] text-white/40 font-sans tracking-wide mt-1.5">Redeem for advanced features, premium strategy unlock, and subscription benefits.</div>
                      </div>

                      {/* Glowing coin badge representation */}
                      <div className="relative">
                        <div className="absolute inset-0 rounded-full bg-[#f4cf8a]/5 blur-lg" />
                        <div 
                          onClick={() => {
                            onLaunchAi("Show me custom membership options for redeeming the XAI utility and strategy unlock credits.");
                            showToast("Retrieving XAI Utility details...");
                          }}
                          className="w-16 h-16 rounded-full border border-[#f4cf8a]/45 bg-black/80 flex items-center justify-center shadow-[0_0_20px_rgba(244,207,138,0.15)] hover:shadow-[0_0_30px_rgba(244,207,138,0.3)] transition-all cursor-pointer group"
                        >
                          <span className="text-[11.5px] font-bold font-sans tracking-[0.1em] text-[#f4cf8a] group-hover:scale-105 transition duration-300 pl-[0.1em]">XAI</span>
                        </div>
                      </div>
                    </div>

                    {/* 4. TWO COLUMNS GRID (EXCHANGE API STATUS & STRATEGY PERFORMANCE) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 select-none">
                      
                      {/* Left Column: EXCHANGE API STATUS */}
                      <div className="rounded-xl border border-white/[0.04] bg-[#0c0a0a]/40 p-5.5 space-y-4 shadow-lg flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between border-b border-white/[0.03] pb-3 mb-3">
                            <span className="text-[11.5pt] tracking-[0.08em] text-[#f4cf8a] font-display font-medium">Exchange API Connectivity</span>
                            <span className="text-[#f4cf8a]/85 inline-flex p-1 rounded border border-[#f4cf8a]/10 bg-[#f4cf8a]/5">
                              <ShieldCheck size={14} />
                            </span>
                          </div>

                          <div className="space-y-3 font-sans text-[13px]">
                            {/* Connection Signal */}
                            {isApiLinked ? (
                              <div className="flex items-center gap-2 text-emerald-400 font-semibold py-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)] animate-pulse" />
                                <span>API Feed Synchronized</span>
                              </div>
                            ) : (
                              <div className="flex items-center gap-2 text-amber-500 font-semibold py-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.8)] animate-pulse" />
                                <span>Awaiting Exchange API Link</span>
                              </div>
                            )}

                            {/* Detail attributes with gold parameters */}
                            <div className="flex items-center justify-between py-1 border-b border-white/[0.02] gap-4">
                              <span className="text-white/45 shrink-0">Exchanges Supported:</span>
                              <span className="text-[#f4cf8a] font-medium text-right font-sans min-w-0 break-words">Binance, OKX, Bybit, Gate.io, Bitcano</span>
                            </div>

                            <div className="flex items-center justify-between py-1 border-b border-white/[0.02] gap-4">
                              <span className="text-white/45 shrink-0">API Restrictions:</span>
                              <span className="text-emerald-400 font-medium text-right font-sans">Read & Trade Only</span>
                            </div>

                            <div className="flex items-center justify-between py-1 border-b border-white/[0.02] gap-4">
                              <span className="text-white/45 shrink-0">Withdrawal Status:</span>
                              <span className="text-[#f4cf8a] font-medium text-right font-sans">Strictly Disabled In Key</span>
                            </div>

                            <div className="flex items-center justify-between py-1 gap-4">
                              <span className="text-white/45 shrink-0">Architecture Mode:</span>
                              <span className="text-[#f4cf8a] font-medium text-right font-sans">100% Non-Custodial</span>
                            </div>
                          </div>
                        </div>

                        <div className="text-[11.5px] text-white/35 font-sans leading-tight bg-white/[0.02] p-2.5 rounded border border-white/[0.04]">
                          🛡️ <span className="text-white/60 font-medium">Secure API Guarantee</span>: Funds stay in your account. Read/Trade Permissions only. Withdrawal permission is rejected by design. API keys encrypted securely.
                        </div>
                      </div>

                      {/* Right Column: STRATEGY PERFORMANCE */}
                      <div className="rounded-xl border border-white/[0.04] bg-[#0c0a0a]/40 p-5.5 space-y-4 shadow-lg">
                        <div className="flex items-center justify-between border-b border-white/[0.03] pb-3">
                          <span className="text-[11.5pt] tracking-[0.08em] text-[#f4cf8a] font-display font-medium">Strategy Monitoring</span>
                          <span className="text-[#f4cf8a]/85 inline-flex p-1 rounded border border-[#f4cf8a]/10 bg-[#f4cf8a]/5">
                            <ArrowUpRight size={14} />
                          </span>
                        </div>

                        <div className="space-y-2.5 font-sans text-[13px]">
                          {/* Indicator 1: Signals Detected */}
                          <div className="flex items-center justify-between py-1 border-b border-white/[0.02]">
                            <div className="flex items-center gap-2.5 text-white/80">
                              <span className="p-1 rounded bg-white/[0.03] border border-white/[0.05] text-white/40">
                                <Target size={12} />
                              </span>
                              <span>AI Signals Generated:</span>
                            </div>
                            <span className="text-white font-semibold">18</span>
                          </div>

                          {/* Indicator 2: Executed Trades */}
                          <div className="flex items-center justify-between py-1 border-b border-white/[0.02]">
                            <div className="flex items-center gap-2.5 text-white/80">
                              <span className="p-1 rounded bg-white/[0.03] border border-white/[0.05] text-white/40">
                                <Activity size={12} />
                              </span>
                              <span>Trades Executed:</span>
                            </div>
                            <span className="text-white font-semibold">6</span>
                          </div>

                          {/* Indicator 3: Win Ratio */}
                          <div className="flex items-center justify-between py-1 border-b border-white/[0.02]">
                            <div className="flex items-center gap-2.5 text-white/80">
                              <span className="p-1 rounded bg-white/[0.03] border border-white/[0.05] text-white/40">
                                <Trophy size={12} />
                              </span>
                              <span>Win Rate:</span>
                            </div>
                            <span className="text-white font-semibold">72%</span>
                          </div>

                          {/* Indicator 4: Estimated Spread Capture */}
                          <div className="flex items-center justify-between py-1 border-b border-white/[0.02]">
                            <div className="flex items-center gap-2.5 text-white/80">
                              <span className="p-1 rounded bg-white/[0.03] border border-white/[0.05] text-white/40">
                                <DollarSign size={12} />
                              </span>
                              <span>Estimated PnL:</span>
                            </div>
                            <span className="text-emerald-400 font-bold">+$42.80</span>
                          </div>

                          {/* Indicator 5: Strategy Confidence */}
                          <div className="flex items-center justify-between py-1 border-b border-white/[0.02]">
                            <div className="flex items-center gap-2.5 text-white/80">
                              <span className="p-1 rounded bg-white/[0.03] border border-white/[0.05] text-white/30">
                                <ShieldCheck size={12} />
                              </span>
                              <span>Strategy Confidence:</span>
                            </div>
                            <span className="text-white">94%</span>
                          </div>

                          {/* Indicator 6: Opportunities Identification */}
                          <div className="flex items-center justify-between py-1">
                            <div className="flex items-center gap-2.5 text-white/80">
                              <span className="p-1 rounded bg-white/[0.03] border border-white/[0.05] text-white/30">
                                <Globe size={12} />
                              </span>
                              <span>Opportunities Polled:</span>
                            </div>
                            <span className="text-white">128</span>
                          </div>
                        </div>
                      </div>

                    </div>

                    {/* 5. SECURE API LINK PERFORMANCE TELEMETRY */}
                    <div className="rounded-xl border border-white/[0.04] bg-[#0c0a0a]/40 p-6 flex flex-col md:flex-row items-start md:items-center justify-between shadow-lg gap-6 select-none font-sans">
                      <div className="flex-1 space-y-3">
                        <div className="text-[10px] tracking-[0.1em] text-[#f4cf8a] font-sans font-medium uppercase">
                          API Link Quality & Stability Telemetry
                        </div>
                        {isApiLinked ? (
                          <div className="flex flex-col sm:flex-row sm:items-baseline gap-3 sm:gap-5 mb-2">
                            <div>
                              <span className="text-3xl font-light tracking-wide text-white font-mono">
                                {apiLatency}ms
                              </span>
                              <span className="text-[9px] text-emerald-400 font-sans font-semibold ml-2">LATENCY (EXCELLENT)</span>
                            </div>
                            <div className="sm:border-l border-white/10 sm:pl-5">
                              <span className="text-3xl font-light tracking-wide text-white font-mono">
                                {linkStability}%
                              </span>
                              <span className="text-[9px] text-emerald-400 font-sans font-semibold ml-2">STABILITY (ONLINE)</span>
                            </div>
                          </div>
                        ) : (
                          <div className="flex items-baseline gap-2 mb-2">
                            <span className="text-3xl font-light tracking-wide text-white/35 font-sans font-mono animate-pulse">
                              -- ms
                            </span>
                            <span className="text-xs text-white/30 font-sans">FEED LATENCY</span>
                            <span className="inline-block bg-amber-500/10 border border-amber-500/20 text-amber-500 px-2 py-0.5 rounded text-[9px] font-sans tracking-wider animate-pulse ml-2 font-semibold">
                              API Key Disconnected
                            </span>
                          </div>
                        )}

                        <div className="space-y-1.5 text-xs text-white/45 font-sans bg-white/[0.01] p-3 rounded border border-white/[0.03]">
                          <p className="flex items-center gap-2 text-[11px]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#f4cf8a]" />
                            <span><strong>Non-Custodial Architecture:</strong> Bot is strictly forbidden from fetching account balances or personal wallet quantities.</span>
                          </p>
                          <p className="flex items-center gap-2 text-[11px]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#f4cf8a]" />
                            <span><strong>Heartbeat Synchrony:</strong> Telemetry checks status with secure trade servers every 5 seconds.</span>
                          </p>
                          <p className="flex items-center gap-2 text-[11px]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#f4cf8a]" />
                            <span><strong>Withdrawal Protections:</strong> Withdrawal permission tests are enforced continuously. Failure automatically detaches keys.</span>
                          </p>
                        </div>
                      </div>

                      {/* Right side container: button + conditional sparkline chart */}
                      <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full md:w-auto">
                        {/* Area sparkline linechart on the right - ONLY displays after being linked */}
                        {isApiLinked && (
                          <div className="w-full md:w-[180px] h-[50px] relative shrink-0">
                            <svg className="w-full h-full text-emerald-400" viewBox="0 0 240 50">
                              <defs>
                                <linearGradient id="g-emerald-fade" x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="0%" stopColor="#10b981" stopOpacity="0.25" />
                                  <stop offset="100%" stopColor="#10b981" stopOpacity="0.0" />
                                </linearGradient>
                              </defs>
                              <path 
                                d={`${generateSvgPath()} L 240 50 L 0 50 Z`} 
                                fill="url(#g-emerald-fade)"
                                className="transition-all duration-1000"
                              />
                              <path 
                                d={generateSvgPath()} 
                                fill="none" 
                                stroke="#10b981" 
                                strokeWidth="1.5" 
                                className="transition-all duration-1000"
                              />
                              {/* Interactive dynamic indicator point */}
                              <circle 
                                cx="240" 
                                cy={50 - 5 - ((chartPoints[chartPoints.length-1] - Math.min(...chartPoints)) / (Math.max(...chartPoints) - Math.min(...chartPoints) || 1)) * 40}
                                r="3.5" 
                                fill="#34d399" 
                                className="animate-pulse shadow-md"
                              />
                            </svg>
                            <span className="absolute -bottom-3.5 right-0 text-[7.5px] text-white/30 tracking-tight font-mono uppercase">Node Signal Oscillation</span>
                          </div>
                        )}

                        <button
                          onClick={() => setShowConfigPanel(!showConfigPanel)}
                          className={`px-4 py-2.5 text-[10px] font-bold tracking-wide font-sans rounded-lg transition duration-200 cursor-pointer shrink-0 w-full sm:w-auto border select-none ${
                            showConfigPanel
                              ? "bg-[#f4cf8a] text-black hover:bg-[#ebd09d] border-[#f4cf8a]"
                              : "border-[#f4cf8a]/20 hover:border-[#f4cf8a]/45 text-[#f4cf8a] hover:bg-white/[0.02]"
                          }`}
                        >
                          {showConfigPanel ? "[ Close Simulator ]" : "[ Connect Exchange API ]"}
                        </button>
                      </div>
                    </div>

                    {/* EXPANDABLE SIMULATION PLATFORM TERMINAL (CONTROL NUMBERS OF THAT PLATFORM) */}
                    <AnimatePresence>
                      {showConfigPanel && (
                        <motion.div
                          key="exchange-simulator-console"
                          initial={{ opacity: 0, scale: 0.98, height: 0 }}
                          animate={{ opacity: 1, scale: 1, height: "auto" }}
                          exit={{ opacity: 0, scale: 0.98, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="border border-[#f4cf8a]/15 bg-[#080505]/95 rounded-xl p-5.5 space-y-4 shadow-2xl relative overflow-hidden select-none"
                        >
                          {/* Technical decoration indicators */}
                          <div className="absolute top-0 right-0 w-32 h-32 bg-[#f4cf8a]/5 rounded-full blur-2xl pointer-events-none" />

                          <div className="flex items-center justify-between border-b border-white/[0.05] pb-2.5">
                            <div className="flex items-center gap-2">
                              <span className={`w-2 h-2 rounded-full ${isApiLinked ? "bg-emerald-500 animate-pulse" : "bg-amber-500"}`} />
                              <h4 className="text-[10px] font-bold tracking-[0.1em] text-white font-sans">
                                Trading Platform Engine Terminal (API Emulator)
                              </h4>
                            </div>
                            <button 
                              onClick={() => setShowConfigPanel(false)}
                              className="text-white/40 hover:text-white transition cursor-pointer"
                            >
                              <X size={14} />
                            </button>
                          </div>

                          <p className="text-[11.5px] leading-relaxed text-white/50 font-sans">
                            To establish your secure API uplink (where trade authorization is granted but asset custody stays 100% on your exchange), configure the keys and select your preferred gateway proxy tunnel below. Setting a tunnel modifies latency and signal protection algorithms.
                          </p>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-1">
                            {/* Platform Configuration (Controls Telemetry Routing) */}
                            <div className="space-y-4 font-sans">
                              <div>
                                <label className="text-[9px] tracking-wide text-[#f4cf8a] block mb-1.5 font-sans font-medium">Select Exchange Terminal</label>
                                <select 
                                  value={linkingExchange}
                                  onChange={(e) => {
                                    setLinkingExchange(e.target.value);
                                    showToast(`Target exchange terminal re-routed to: ${e.target.value}`);
                                  }}
                                  className="w-full bg-black border border-white/10 hover:border-white/20 text-[16px] sm:text-xs text-white rounded-lg p-2.5 outline-none font-sans focus:border-[#f4cf8a]/40 cursor-pointer"
                                >
                                  <option value="BINANCE">BINANCE (Tier-1 Liquidity Engine)</option>
                                  <option value="OKX">OKX (Unified Trading Platform)</option>
                                  <option value="BYBIT">BYBIT (High-Speed Spot Gate)</option>
                                  <option value="BITCANO">BITCANO (Secure Trading Node)</option>
                                  <option value="GATE">GATE.IO (Multi-Asset Trading Hub)</option>
                                </select>
                              </div>

                              <div>
                                <label className="text-[10px] tracking-wide text-[#f4cf8a] block mb-2 font-sans font-semibold uppercase">
                                  Connection Gateway Routing Profile
                                </label>
                                <div className="flex gap-2 w-full">
                                  <button
                                    type="button"
                                    onClick={() => {
                                      setSelectedRouteProfile("DIRECT");
                                      showToast("Gateway switched to Direct Fiber Node (Ultra Low Latency).");
                                    }}
                                    className={`flex-1 py-1.5 px-1 text-[10px] rounded border transition text-center font-sans tracking-wide font-normal cursor-pointer ${
                                      selectedRouteProfile === "DIRECT"
                                        ? "bg-[#f4cf8a]/95 text-black border-[#f4cf8a] font-semibold"
                                        : "bg-black text-white/50 border-white/10 hover:border-white/20 hover:text-white"
                                    }`}
                                  >
                                    [ Direct Node ]
                                  </button>
                                  <button
                                    type="button"
                                    onClick={() => {
                                      setSelectedRouteProfile("PROXY");
                                      showToast("Gateway switched to Balanced Cloud Proxy.");
                                    }}
                                    className={`flex-1 py-1.5 px-1 text-[10px] rounded border transition text-center font-sans tracking-wide font-normal cursor-pointer ${
                                      selectedRouteProfile === "PROXY"
                                        ? "bg-[#f4cf8a]/95 text-black border-[#f4cf8a] font-semibold"
                                        : "bg-black text-white/50 border-white/10 hover:border-white/20 hover:text-white"
                                    }`}
                                  >
                                    [ Cloud Proxy ]
                                  </button>
                                  <button
                                    type="button"
                                    onClick={() => {
                                      setSelectedRouteProfile("VPN");
                                      showToast("Gateway switched to Multi-hop Secured VPN Tunnel.");
                                    }}
                                    className={`flex-1 py-1.5 px-1 text-[10px] rounded border transition text-center font-sans tracking-wide font-normal cursor-pointer ${
                                      selectedRouteProfile === "VPN"
                                        ? "bg-[#f4cf8a]/95 text-black border-[#f4cf8a] font-semibold"
                                        : "bg-black text-white/50 border-white/10 hover:border-white/20 hover:text-white"
                                    }`}
                                  >
                                    [ Safe VPN ]
                                  </button>
                                </div>
                                <span className="text-[10px] text-white/35 block mt-2 font-sans">
                                  * Profiles adjust target connection latency and signal encryption layers between servers.
                                </span>
                              </div>
                            </div>

                            {/* Security Handshake Options */}
                            <div className="space-y-3.5 p-4 rounded-lg bg-black/60 border border-white/[0.04] flex flex-col justify-between font-sans">
                              <div>
                                <div className="text-[9px] tracking-wide text-[#f4cf8a] font-sans font-semibold flex items-center gap-1.5 mb-2.5">
                                  <ShieldCheck size={12} /> API Credentials Configuration
                                </div>

                                <div className="space-y-3 font-sans">
                                  <div>
                                    <label className="text-[9px] tracking-wider text-white/40 block mb-1 font-sans">API Read Key</label>
                                    <input 
                                      type="text"
                                      value={apiKeyInput || "xk_live_b48f93cd8e019f2d119c4bb2720a4"}
                                      onChange={(e) => setApiKeyInput(e.target.value)}
                                      className="w-full bg-black/40 border border-white/10 hover:border-white/15 text-[16px] sm:text-xs text-white rounded-lg p-2 outline-none font-sans text-white/70 focus:border-[#f4cf8a]/40"
                                      placeholder={`Enter ${linkingExchange} secure API key`}
                                    />
                                  </div>

                                  <div>
                                    <label className="text-[9px] tracking-wider text-white/40 block mb-1 font-sans">API Read/Trade Sign Phrase</label>
                                    <input 
                                      type="password"
                                      value="************************************************"
                                      disabled
                                      className="w-full bg-black/[0.40] border border-[#f4cf8a]/10 text-xs text-white/20 rounded-lg p-2 outline-none font-sans select-none"
                                    />
                                  </div>
                                </div>
                              </div>

                              <div className="border-t border-white/[0.04] pt-2 flex items-center justify-between text-[10px] font-sans">
                                <span className="text-white/45">Withdrawal Permission:</span>
                                <span className="text-rose-400 font-semibold tracking-wider flex items-center gap-1 uppercase">
                                  <Lock size={10} /> Disabled (0% Risk)
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Simulator controls execution */}
                          <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between font-sans">
                            <div className="text-[10px] text-white/45 font-sans">
                              API Key Sync Status:{" "}
                              <span className={`font-bold tracking-wider ${isApiLinked ? "text-emerald-400" : "text-amber-500 animate-pulse"}`}>
                                {isApiLinked ? "ACTIVE & SECURE" : "DISCONNECTED"}
                              </span>
                            </div>

                            <div className="flex gap-2 font-sans">
                              {isApiLinked ? (
                                <>
                                  <button
                                    type="button"
                                    onClick={() => {
                                      setIsApiLinked(false);
                                      showToast("API keys disconnected successfully.");
                                    }}
                                    className="rounded-lg border border-red-500/30 hover:border-red-500/50 bg-red-500/10 hover:bg-red-500/20 text-red-400 text-[10px] font-bold font-sans tracking-wider px-4 py-2 cursor-pointer transition duration-200"
                                  >
                                    Disconnect Keys
                                  </button>
                                  <button
                                    type="button"
                                    onClick={() => {
                                      showToast(`Ping check success! Handshake response recorded in ${apiLatency}ms.`);
                                    }}
                                    className="rounded-lg bg-[#f4cf8a]/15 border border-[#f4cf8a]/30 hover:border-[#f4cf8a] text-[#f4cf8a] text-[10px] font-bold font-sans uppercase tracking-wider px-4 py-2 cursor-pointer transition duration-200"
                                  >
                                    Test Link Ping
                                  </button>
                                </>
                              ) : (
                                <button
                                  type="button"
                                  disabled={isConnectingApi}
                                  onClick={() => {
                                    setIsConnectingApi(true);
                                    const timer = setTimeout(() => {
                                      setIsConnectingApi(false);
                                      setIsApiLinked(true);
                                      showToast("API Connection Established. Handshake confirmed!");
                                    }, 1500);
                                  }}
                                  className="rounded-lg bg-[#f4cf8a] hover:bg-[#ebd09d] disabled:opacity-45 text-black text-[10px] font-bold font-sans tracking-wider px-4.5 py-2.5 cursor-pointer transition duration-200 flex items-center gap-1.5"
                                >
                                  {isConnectingApi ? (
                                    <>
                                      <Loader2 size={12} className="animate-spin text-black" />
                                      <span>Testing Handshake...</span>
                                    </>
                                  ) : (
                                    <>
                                      <Link size={12} />
                                      <span>Verify & Connect API</span>
                                    </>
                                  )}
                                </button>
                              )}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* 6. ABOUT XENITH WITH CORE GLOBE BLOCK */}
                    <div className="rounded-xl border border-white/[0.04] bg-[#0c0a0a]/40 p-6 flex flex-col sm:flex-row items-center justify-between shadow-lg gap-6 select-none">
                      <div className="flex-1 space-y-4">
                        <div className="space-y-2">
                          <h4 className="text-[10px] tracking-[0.1em] text-[#f4cf8a] font-display font-semibold uppercase">
                            About Xenith AI
                          </h4>
                          <p className="text-xs leading-relaxed text-white/55 font-sans pt-1">
                            Xenith AI is an autonomous trading agent designed to monitor markets, identify opportunities, manage risk, and execute strategies through secure exchange API connections. Funds always remain in user-controlled exchange accounts without custody transfer.
                          </p>
                        </div>

                        <button 
                          onClick={() => {
                            setActiveTab("agent");
                            showToast("Navigating to strategy views...");
                          }}
                          className="rounded-full border border-[#f4cf8a]/40 hover:border-[#ffd17d] hover:bg-white/[0.03] text-[9px] tracking-[0.06em] font-sans text-[#f4cf8a] hover:text-white px-5 py-2 transition-all cursor-pointer"
                        >
                          Check AI Status
                        </button>
                      </div>

                      {/* Earth Skeletal Globe Grid card */}
                      <div className="relative w-full sm:w-56 h-32 shrink-0 flex flex-col items-center justify-center gap-3 rounded-xl border border-white/[0.04] bg-black/60 select-none overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#040303]/30 pointer-events-none" />
                        
                        {/* Golden Skeletal Globe representation */}
                        <div className="relative w-12 h-12 flex items-center justify-center text-[#f4cf8a]/50">
                          <Globe size={40} className="animate-[spin_45s_linear_infinite] opacity-40 text-[#f4cf8a]" />
                          <div className="absolute inset-0 rounded-full border border-[#f4cf8a]/20 animate-pulse scale-95" />
                        </div>

                        <span className="text-[10px] font-bold font-sans tracking-[0.12em] text-white/70">
                          Xenith AI Bot Agent
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {/* ADDITIONAL PAGES */}

                {/* NEW PAGE 1: AI Trading Agent */}
                {activeTab === "agent" && (
                  <div className="space-y-6">
                    <div className="rounded-xl border border-white/[0.06] bg-[#0c0a0a]/50 p-6 shadow-xl space-y-4">
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-white/[0.05] pb-4 gap-2">
                        <div>
                          <h3 className="text-sm font-semibold tracking-[0.08em] text-[#f4cf8a] font-display uppercase">AI Autonomous Trading Agent</h3>
                          <p className="text-[11px] text-white/45">Real-time status analysis of your trading robot parameters.</p>
                        </div>
                        <div className="flex items-center gap-2 bg-[#f4cf8a]/10 border border-[#f4cf8a]/20 text-[#f4cf8a] py-1 px-2.5 rounded-md text-[10px] tracking-wide font-medium font-sans">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#f4cf8a] animate-ping" />
                          <span>BOT RUNNING: SIMULATION MODE</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="p-4 rounded-lg bg-black/40 border border-white/[0.03] space-y-1">
                          <span className="text-[10px] text-white/40 font-sans block">Market Status</span>
                          <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1.5 pt-0.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Bullish Consolidation
                          </span>
                        </div>
                        <div className="p-4 rounded-lg bg-black/40 border border-white/[0.03] space-y-1">
                          <span className="text-[10px] text-white/40 font-sans block">Current Strategy</span>
                          <span className="text-xs text-white font-medium block truncate">Mean Reversion Spot Layering</span>
                        </div>
                        <div className="p-4 rounded-lg bg-black/40 border border-white/[0.03] space-y-1">
                          <span className="text-[10px] text-white/40 font-sans block">Risk Settings Level</span>
                          <span className="text-xs text-amber-400 font-semibold">Moderately Safe (3.5% DD Cap)</span>
                        </div>
                      </div>

                      <div className="space-y-3 pt-2">
                        <h4 className="text-xs font-semibold text-white/80 font-sans tracking-wide uppercase">Active Opportunities Scanner</h4>
                        
                        <div className="space-y-2.5">
                          <div className="p-3 rounded-lg bg-black/50 border border-emerald-500/10 flex items-center justify-between gap-3 text-xs transition hover:border-[#f4cf8a]/20">
                            <div className="space-y-1.5 min-w-0">
                              <span className="font-semibold text-white font-sans">BTC-USDT Overbought Divergence</span>
                              <div className="flex items-center gap-2 text-[10px] text-white/40">
                                <span>Confidence score: <strong className="text-emerald-400">97.4%</strong></span>
                                <span>|</span>
                                <span>Action: Layer Sell Limit Grid</span>
                              </div>
                            </div>
                            <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded shrink-0 whitespace-nowrap">EXECUTION APPLIED</span>
                          </div>

                          <div className="p-3 rounded-lg bg-black/50 border border-[#f4cf8a]/10 flex items-center justify-between gap-3 text-xs transition hover:border-[#f4cf8a]/20">
                            <div className="space-y-1.5 min-w-0">
                              <span className="font-semibold text-white font-sans">ETH-USDT Delta-Spread Inversion</span>
                              <div className="flex items-center gap-2 text-[10px] text-white/40">
                                <span>Confidence score: <strong className="text-[#f4cf8a]">94.2%</strong></span>
                                <span>|</span>
                                <span>Action: Cross-Book Arbitrage</span>
                              </div>
                            </div>
                            <span className="text-[10px] uppercase font-bold tracking-wider text-[#f4cf8a] bg-[#f4cf8a]/10 px-2 py-1 rounded shrink-0 whitespace-nowrap">QUEUED FOR SYNCHRONY</span>
                          </div>

                          <div className="p-3 rounded-lg bg-black/50 border border-white/[0.03] flex items-center justify-between gap-3 text-xs transition opacity-75">
                            <div className="space-y-1.5 min-w-0">
                              <span className="font-semibold text-white/70 font-sans">SOL-USDT Local Volatility Spike</span>
                              <div className="flex items-center gap-2 text-[10px] text-white/40">
                                <span>Confidence score: <strong>81.5%</strong></span>
                                <span>|</span>
                                <span>Action: Dynamic Stop-Limit adjustment</span>
                              </div>
                            </div>
                            <span className="text-[10px] uppercase font-bold tracking-wider text-white/35 bg-white/5 px-2 py-1 rounded shrink-0 whitespace-nowrap">MONITORING</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* NEW PAGE 2: Node Telemetry & Stability */}
                {activeTab === "stability" && (
                  <div className="space-y-6">
                    <div className="rounded-xl border border-white/[0.06] bg-[#0c0a0a]/50 p-6 shadow-xl space-y-5">
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-white/[0.05] pb-4 gap-2">
                        <div>
                          <h3 className="text-sm font-semibold tracking-[0.08em] text-[#f4cf8a] font-display uppercase">Node Telemetry & Feed Stability</h3>
                          <p className="text-[11px] text-white/45">Real-time diagnosis of secure gateway handshakes and signal tunnels.</p>
                        </div>
                        <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 py-1 px-2.5 rounded-md text-[10px] tracking-wide font-medium font-sans">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                          <span>UPLINK STABLE: {isApiLinked ? "PROXY NODE SECURED" : "PENDING COLD BOOT"}</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 select-none font-sans">
                        {/* Port Status Checklist */}
                        <div className="space-y-3">
                          <h4 className="text-xs font-semibold text-[#f4cf8a] uppercase tracking-wider">Gateway Port Mapping</h4>
                          <div className="p-4 rounded-lg bg-black/40 border border-white/[0.03] space-y-3 text-xs">
                            <div className="flex justify-between items-center border-b border-white/[0.02] pb-2 gap-3">
                              <span className="text-white/60 min-w-0">REST Data Feed Client:</span>
                              <div className="text-right shrink-0">
                                <span className="text-emerald-400 font-mono font-bold">ACTIVE</span>
                                <span className="text-[10px] text-white/40 font-mono ml-2">({isApiLinked ? apiLatency : "--"}ms)</span>
                              </div>
                            </div>
                            <div className="flex justify-between items-center border-b border-white/[0.02] pb-2 gap-3">
                              <span className="text-white/60 min-w-0">WebSocket Stream Tunnel:</span>
                              <div className="text-right shrink-0">
                                <span className="text-emerald-400 font-mono font-bold">ONLINE</span>
                                <span className="text-[10px] text-white/40 font-mono ml-2">({isApiLinked ? Math.round(apiLatency * 0.4) : "--"}ms)</span>
                              </div>
                            </div>
                            <div className="flex justify-between items-center border-b border-white/[0.02] pb-2 gap-3">
                              <span className="text-white/60 min-w-0">API Signature Encrypter:</span>
                              <div className="text-right shrink-0">
                                <span className="text-emerald-400 font-mono font-bold">SHA-256</span>
                                <span className="text-[10px] text-white/40 font-mono ml-2">(SECURE)</span>
                              </div>
                            </div>
                            <div className="flex justify-between items-center text-xs gap-3">
                              <span className="text-white/60 min-w-0">Asset Custody Isolation:</span>
                              <span className="text-[#f4cf8a] font-mono font-bold uppercase text-[10px] shrink-0">100% NON-CUSTODIAL</span>
                            </div>
                          </div>
                        </div>

                        {/* Stability Metrics Profile */}
                        <div className="space-y-3">
                          <h4 className="text-xs font-semibold text-[#f4cf8a] uppercase tracking-wider">Handshake Audit Checklist</h4>
                          <div className="p-4 rounded-lg bg-black/40 border border-white/[0.03] space-y-3 text-xs">
                            <div className="flex justify-between items-center border-b border-white/[0.02] pb-2 gap-3">
                              <span className="text-white/60 min-w-0">IP Whitelist Constraint:</span>
                              <span className="text-emerald-400 font-sans font-semibold shrink-0">ENFORCED</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-white/[0.02] pb-2 gap-3">
                              <span className="text-white/60 min-w-0">Withdrawal Permission:</span>
                              <span className="text-rose-400 font-sans font-bold flex items-center gap-1 shrink-0">
                                <Lock size={10} /> DETECTED: OFF (SAFE)
                              </span>
                            </div>
                            <div className="flex justify-between items-center border-b border-white/[0.02] pb-2 gap-3">
                              <span className="text-white/60 min-w-0">Link Packet Loss Rating:</span>
                              <span className="text-emerald-400 font-mono font-bold shrink-0">0.00%</span>
                            </div>
                            <div className="flex justify-between items-center text-xs gap-3">
                              <span className="text-white/60 min-w-0">Target Exchange Feed:</span>
                              <span className="text-white font-mono font-semibold shrink-0">{isApiLinked ? linkingExchange : "NONE"}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Diagnostic Log */}
                      <div className="space-y-3 pt-1 select-none font-sans">
                        <h4 className="text-xs font-semibold text-white/80 font-sans tracking-wide uppercase">Real-Time Encryption & Router Logs</h4>
                        <div className="p-4 rounded-lg bg-black/50 border border-white/[0.04] space-y-2 font-mono text-[11px] sm:text-[10.5px]">
                          {isApiLinked ? (
                            <>
                              <div className="text-white/40 flex items-start gap-1.5 leading-relaxed">
                                <span className="text-emerald-400 shrink-0">[ONLINE]</span>
                                <span>Direct VPN handshake success with {linkingExchange} Tokyo hub nodes.</span>
                              </div>
                              <div className="text-white/40 flex items-start gap-1.5 leading-relaxed">
                                <span className="text-emerald-400 shrink-0">[ONLINE]</span>
                                <span>SSL connection established. TLS 1.3 handshake signature: <strong className="text-white/65">SHA256_RSA4096</strong></span>
                              </div>
                              <div className="text-white/40 flex items-start gap-1.5 leading-relaxed">
                                <span className="text-[#f4cf8a] shrink-0">[SYSTEM]</span>
                                <span>Audit checklist completed. Withdrawal abilities scanned: NONE. Read/Trade keys are active.</span>
                              </div>
                              <div className="text-white/40 flex items-start gap-1.5 leading-relaxed">
                                <span className="text-emerald-400 shrink-0">[ONLINE]</span>
                                <span>Node telemetry stream initialized. Average response drift: ±1.2ms.</span>
                              </div>
                            </>
                          ) : (
                            <div className="text-amber-500/80 py-4 text-center text-xs">
                              No active API keys connected. To check live connection feeds or network pings, establish an exchange API handshake using the connector simulator.
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* NEW PAGE 3: Market Intelligence */}
                {activeTab === "intelligence" && (
                  <div className="space-y-6">
                    <div className="rounded-xl border border-white/[0.06] bg-[#0c0a0a]/50 p-6 shadow-xl space-y-5">
                      <div className="flex items-center justify-between border-b border-white/[0.05] pb-4">
                        <div>
                          <h3 className="text-sm font-semibold tracking-[0.08em] text-[#f4cf8a] font-display uppercase">AI Market Intelligence</h3>
                          <p className="text-[11px] text-white/45">Advanced system scanning and volatility monitor feeds generated 24/7.</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="space-y-3">
                          <h4 className="text-xs font-semibold text-[#f4cf8a] uppercase tracking-wider">AI Sentiment Analyst</h4>
                          <div className="p-4 rounded-lg bg-black/40 border border-white/[0.03] space-y-3">
                            <div className="flex justify-between items-center text-xs">
                              <span className="text-white/60">Bull/Bear Matrix Score:</span>
                              <span className="text-[#f4cf8a] font-bold">72 / 100 (Strong Buy skew)</span>
                            </div>
                            <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                              <div className="bg-[#f4cf8a] h-full rounded-full" style={{ width: "72%" }} />
                            </div>
                            <p className="text-[11px] text-white/50 leading-relaxed">
                              Orderbooks display intensive bid clustering above support lines on spot exchanges. Bot algorithm favors buying micro-dips under $68K BTC.
                            </p>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <h4 className="text-xs font-semibold text-[#f4cf8a] uppercase tracking-wider">Volatility & Risk Alerts</h4>
                          <div className="p-4 rounded-lg bg-black/40 border border-white/[0.03] space-y-2.5 text-xs">
                            <div className="flex justify-between items-center py-1 border-b border-white/[0.02]">
                              <span className="text-white/50">Liquidation Cascade Alert:</span>
                              <span className="text-emerald-400 font-semibold uppercase">Low Risk</span>
                            </div>
                            <div className="flex justify-between items-center py-1 border-b border-white/[0.02]">
                              <span className="text-white/50">Market Spread Divergence:</span>
                              <span className="text-[#f4cf8a] font-mono font-semibold">High Opportunity</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-white/50">Average Book Liquidation:</span>
                              <span className="text-white font-mono">0.05% expected slippage</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3 pt-2">
                        <h4 className="text-xs font-semibold text-white/80 uppercase tracking-wider">Trending Assets Scanner</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          <div className="p-3.5 rounded-lg bg-black/40 border border-emerald-500/10 flex flex-col justify-between hover:border-emerald-500/30 transition">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-xs font-bold text-white">SOL</span>
                              <span className="text-[10px] text-emerald-400 font-bold">+4.8%</span>
                            </div>
                            <span className="text-[10px] text-white/40 block">Daily Vol: $2.4B</span>
                            <span className="text-[9px] uppercase tracking-wide text-emerald-400 font-semibold mt-1.5">Bullish Breakout Scan</span>
                          </div>

                          <div className="p-3.5 rounded-lg bg-black/40 border border-white/[0.03] flex flex-col justify-between hover:border-[#f4cf8a]/20 transition">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-xs font-bold text-white">AVAX</span>
                              <span className="text-[10px] text-white/60">0.0%</span>
                            </div>
                            <span className="text-[10px] text-white/40 block">Daily Vol: $410M</span>
                            <span className="text-[9px] uppercase tracking-wide text-white/45 font-semibold mt-1.5">Ranging consolidation</span>
                          </div>

                          <div className="p-3.5 rounded-lg bg-black/40 border border-red-500/10 flex flex-col justify-between hover:border-red-500/30 transition">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-xs font-bold text-white">NEAR</span>
                              <span className="text-[10px] text-rose-400 font-bold">-2.1%</span>
                            </div>
                            <span className="text-[10px] text-white/40 block">Daily Vol: $310M</span>
                            <span className="text-[9px] uppercase tracking-wide text-rose-400 font-semibold mt-1.5">Overbought pull Warning</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* NEW PAGE 4: Risk Center */}
                {activeTab === "risk" && (
                  <div className="space-y-6">
                    <div className="rounded-xl border border-white/[0.06] bg-[#0c0a0a]/50 p-6 shadow-xl space-y-4">
                      <div className="flex items-center justify-between border-b border-white/[0.05] pb-4">
                        <div>
                          <h3 className="text-sm font-semibold tracking-[0.08em] text-[#f4cf8a] font-display uppercase">AI Risk Center & Capital Safeguards</h3>
                          <p className="text-[11px] text-white/45">Advanced protection matrices to protect client exchange portfolios.</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="p-4 rounded-lg bg-black/30 border border-white/[0.03] space-y-3.5">
                          <h4 className="text-xs font-semibold text-[#f4cf8a] uppercase tracking-wider">Dynamic Risk Metrics</h4>
                          
                          <div className="space-y-2.5 font-sans text-xs">
                            <div className="flex justify-between py-1 border-b border-white/[0.02]">
                              <span className="text-white/45">Portfolio Max Drawdown:</span>
                              <span className="text-[#f4cf8a] font-semibold font-mono">3.50% Maximum Cap</span>
                            </div>
                            <div className="flex justify-between py-1 border-b border-white/[0.02]">
                              <span className="text-white/45">Vol Target annualized:</span>
                              <span className="text-white font-mono">15% Target Standard</span>
                            </div>
                            <div className="flex justify-between py-1">
                              <span className="text-white/45">Single Asset Cap:</span>
                              <span className="text-rose-400 font-bold">Max 25% allocation ratio</span>
                            </div>
                          </div>
                        </div>

                        <div className="p-4 rounded-lg bg-emerald-500/5 border border-emerald-500/10 space-y-3">
                          <h4 className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">Automatic API Protection Guard</h4>
                          <p className="text-[11.5px] leading-relaxed text-white/60">
                            The bot strictly verifies withdrawal permissions upon every connection heartbeat. If a withdrawal check request returns positive, the bot instantly detaches its trading API keys and wipes its session state to ensure absolute security.
                          </p>
                          <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/15 p-2 rounded text-[10px] text-emerald-400 font-sans">
                            <CheckCircle size={12} />
                            <span>100% NON-CUSTODIAL SECURE CODE ENGINE ACTIVE</span>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 rounded-lg bg-black/40 border border-white/[0.03] space-y-3">
                        <h4 className="text-xs font-semibold text-white/80 uppercase tracking-widest">Active Safety Checklist</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          <div className="flex items-start gap-2.5 p-2 rounded bg-white/[0.01]">
                            <span className="p-1 rounded bg-emerald-500/10 text-emerald-400"><CheckCircle size={10} /></span>
                            <div className="space-y-0.5">
                              <span className="text-[11px] block text-white font-medium">Automatic Stops</span>
                              <span className="text-[9.5px] block text-white/40">Guaranteed stop loss</span>
                            </div>
                          </div>
                          <div className="flex items-start gap-2.5 p-2 rounded bg-white/[0.01]">
                            <span className="p-1 rounded bg-emerald-500/10 text-emerald-400"><CheckCircle size={10} /></span>
                            <div className="space-y-0.5">
                              <span className="text-[11px] block text-white font-medium">Zero Leverage Limit</span>
                              <span className="text-[9.5px] block text-white/40">Auto spot no margin risk</span>
                            </div>
                          </div>
                          <div className="flex items-start gap-2.5 p-2 rounded bg-white/[0.01]">
                            <span className="p-1 rounded bg-emerald-500/10 text-emerald-400"><CheckCircle size={10} /></span>
                            <div className="space-y-0.5">
                              <span className="text-[11px] block text-white font-medium">Connection Heartbeat</span>
                              <span className="text-[9.5px] block text-white/40">Pings once every 5 seconds</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* NEW PAGE 5: API Connections */}
                {activeTab === "api" && (
                  <div className="space-y-6">
                    <div className="rounded-xl border border-white/[0.06] bg-[#0c0a0a]/50 p-6 shadow-xl space-y-5">
                      <div className="flex items-center justify-between border-b border-white/[0.05] pb-4">
                        <div>
                          <h3 className="text-sm font-semibold tracking-[0.08em] text-[#f4cf8a] font-display uppercase">API Credentials & Exchange Connections</h3>
                          <p className="text-[11px] text-white/45">Direct configuration gateways. Your funds always remain fully in your own exchange custody.</p>
                        </div>
                      </div>

                      <div className="space-y-4">
                        {/* Connected exchanges row */}
                        <div className="p-4 rounded-xl bg-black/40 border border-white/[0.03] space-y-3.5">
                          <div className="flex justify-between items-center text-xs">
                            <span className="text-[#f4cf8a] font-semibold uppercase tracking-wider">BINANCE GLOBAL API</span>
                            {isApiLinked ? (
                              <span className="px-2 py-0.5 rounded text-[9.5px] bg-emerald-500/10 text-emerald-400 font-bold uppercase tracking-wider">CONNECTED & AUTUMN_SYNC</span>
                            ) : (
                              <span className="px-2 py-0.5 rounded text-[9.5px] bg-amber-500/10 text-amber-400 font-bold uppercase tracking-wider">NOT LINKED (0 USD FOUND)</span>
                            )}
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs">
                            <div className="space-y-0.5">
                              <span className="text-white/40 block text-[9.5px]">Permission Access:</span>
                              <span className="text-white font-medium">Read & Trade only</span>
                            </div>
                            <div className="space-y-0.5">
                              <span className="text-white/40 block text-[9.5px]">Withdrawals:</span>
                              <span className="text-rose-400 font-bold">Strictly Disabled In Key</span>
                            </div>
                            <div className="space-y-0.5">
                              <span className="text-white/40 block text-[9.5px]">IP whitelisted gateway:</span>
                              <span className="text-white font-mono text-[10px]">Active (8 Gateway IPs)</span>
                            </div>
                            <div className="space-y-0.5">
                              <span className="text-white/40 block text-[9.5px]">Cipher Encryption:</span>
                              <span className="text-white font-mono text-[10px]">AES-256 Symmetric</span>
                            </div>
                          </div>
                        </div>

                        <div className="p-4 rounded-xl bg-black/40 border border-white/[0.03] space-y-3">
                          <div className="flex justify-between items-center text-xs">
                            <span className="text-white/40 font-semibold uppercase">OKX EXCHANGE API</span>
                            <span className="px-2 py-0.5 rounded text-[9.5px] bg-white/5 text-white/40 font-bold uppercase">NOT CONFIGURED</span>
                          </div>
                          <button 
                            type="button" 
                            onClick={() => {
                              showToast("Initial exchange routing switched to OKX. Open settings to save.");
                              setLinkingExchange("OKX");
                              setShowConfigPanel(true);
                            }}
                            className="rounded border border-white/10 hover:border-white/20 bg-transparent text-white px-3 py-1.5 text-[10px] tracking-wide font-sans cursor-pointer transition uppercase"
                          >
                            + Link OKX secure API Key
                          </button>
                        </div>

                        <div className="p-4 rounded-xl bg-black/40 border border-white/[0.03] space-y-3">
                          <div className="flex justify-between items-center text-xs">
                            <span className="text-white/40 font-semibold uppercase">BYBIT APP EXCHANGE API</span>
                            <span className="px-2 py-0.5 rounded text-[9.5px] bg-white/5 text-white/40 font-bold uppercase">NOT CONFIGURED</span>
                          </div>
                          <button 
                            type="button" 
                            onClick={() => {
                              showToast("Initial exchange routing switched to BYBIT. Open settings to save.");
                              setLinkingExchange("BYBIT");
                              setShowConfigPanel(true);
                            }}
                            className="rounded border border-white/10 hover:border-white/20 bg-transparent text-white px-3 py-1.5 text-[10px] tracking-wide font-sans cursor-pointer transition uppercase"
                          >
                            + Link BYBIT secure API Key
                          </button>
                        </div>

                        <div className="p-4 rounded-xl bg-black/40 border border-white/[0.03] space-y-3">
                          <div className="flex justify-between items-center text-xs">
                            <span className="text-white/40 font-semibold uppercase">BITCANO EXCHANGE API</span>
                            <span className="px-2 py-0.5 rounded text-[9.5px] bg-white/5 text-white/40 font-bold uppercase">NOT CONFIGURED</span>
                          </div>
                          <button 
                            type="button" 
                            onClick={() => {
                              showToast("Initial exchange routing switched to BITCANO. Open settings to save.");
                              setLinkingExchange("BITCANO");
                              setShowConfigPanel(true);
                            }}
                            className="rounded border border-white/10 hover:border-white/20 bg-transparent text-white px-3 py-1.5 text-[10px] tracking-wide font-sans cursor-pointer transition uppercase"
                          >
                            + Link BITCANO secure API Key
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* NEW PAGE 6: Account Settings */}
                {activeTab === "settings" && (
                  <div className="space-y-6">
                    <div className="rounded-xl border border-white/[0.06] bg-[#0c0a0a]/50 p-6 shadow-xl space-y-5">
                      <div className="flex items-center justify-between border-b border-white/[0.05] pb-4">
                        <div>
                          <h3 className="text-sm font-semibold tracking-[0.08em] text-[#f4cf8a] font-display uppercase">Account Settings & Global Preferences</h3>
                          <p className="text-[11px] text-white/45">Review profile security, subscription features, and notifications.</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-xs">
                        <div className="space-y-3">
                          <h4 className="text-xs font-semibold text-[#f4cf8a] uppercase tracking-wider">Client Profile</h4>
                          <div className="p-4 rounded-lg bg-black/40 border border-white/[0.03] space-y-3.5">
                            <div className="space-y-1">
                              <span className="text-white/40 block text-[10px]">Client Identification:</span>
                              <span className="text-white font-medium">user_x816d2_live</span>
                            </div>
                            <div className="space-y-1">
                              <span className="text-white/40 block text-[10px]">Registered Email:</span>
                              <span className="text-white font-medium">tks.crossborder@gmail.com</span>
                            </div>
                            <div className="space-y-1">
                              <span className="text-white/40 block text-[10px]">Platform Language:</span>
                              <span className="text-white font-medium">English (United States)</span>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <h4 className="text-xs font-semibold text-[#f4cf8a] uppercase tracking-wider">Security Controls</h4>
                          <div className="p-4 rounded-lg bg-black/40 border border-white/[0.03] space-y-3">
                            <div className="flex items-center justify-between py-1 border-b border-white/[0.02]">
                              <span className="text-white/50">Two-Factor Authentication:</span>
                              <span className="text-emerald-400 font-bold uppercase text-[10px]">ENABLED</span>
                            </div>
                            <div className="flex items-center justify-between py-1 border-b border-white/[0.02]">
                              <span className="text-white/50">Transaction Log Auditing:</span>
                              <span className="text-white font-mono text-[10px]">AUTO-SAVE</span>
                            </div>
                            <div className="flex items-center justify-between py-1">
                              <span className="text-white/50">Multi-IP session limits:</span>
                              <span className="text-white font-mono text-[10px]">RESTRICT ACTIVE</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 rounded-lg bg-[#f4cf8a]/5 border border-[#f4cf8a]/10 space-y-3">
                        <div className="flex justify-between items-center text-xs">
                          <div>
                            <span className="text-white/40 uppercase block text-[9.5px]">Active Membership Plan</span>
                            <span className="text-white font-semibold text-sm">PLUS AGENT SUITE</span>
                          </div>
                          <span className="bg-[#f4cf8a]/10 border border-[#f4cf8a]/20 text-[#f4cf8a] px-2 py-0.5 rounded text-[9.5px] font-bold">ANNUAL ACTIVE</span>
                        </div>
                        <p className="text-[11px] leading-relaxed text-white/55 font-sans">
                          You are registered under the annual billing package, saving $216/year automatically equivalent to receiving two free membership months. Next diagnostic check will occur on June 10, 2027.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* NEW PAGE 7: Help Center */}
                {activeTab === "help" && (
                  <div className="space-y-6">
                    <div className="rounded-xl border border-white/[0.06] bg-[#0c0a0a]/50 p-6 shadow-xl space-y-4">
                      <div className="flex items-center justify-between border-b border-white/[0.05] pb-4">
                        <div>
                          <h3 className="text-sm font-semibold tracking-[0.08em] text-[#f4cf8a] font-display uppercase">Help Center & Tutorials</h3>
                          <p className="text-[11px] text-white/45">Step-by-step documentation and frequently asked security questions.</p>
                        </div>
                      </div>

                      <div className="space-y-3.5">
                        <h4 className="text-xs font-semibold text-[#f4cf8a] uppercase tracking-wider">Tutorial Guides</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                          <a 
                            onClick={() => {
                              onLaunchAi("Give me a comprehensive step-by-step guide to generating API keys on Binance and disabling withdrawal permissions.");
                              showToast("Spawning setup tutorial...");
                            }}
                            className="p-3 bg-black/40 rounded-lg border border-white/[0.04] text-xs hover:border-[#f4cf8a]/30 transition block cursor-pointer"
                          >
                            <span className="font-semibold text-white block mb-0.5">🛡️ Binance Secure Key Tutorial</span>
                            <span className="text-[10.5px] text-white/40 block">Configure API access with withdrawal permission disabled check.</span>
                          </a>

                          <a 
                            onClick={() => {
                              onLaunchAi("Explain to me how OKX secure trade parameters are whitelisted to Xenith AI.");
                              showToast("Spawning setup tutorial...");
                            }}
                            className="p-3 bg-black/40 rounded-lg border border-white/[0.04] text-xs hover:border-[#f4cf8a]/30 transition block cursor-pointer"
                          >
                            <span className="font-semibold text-white block mb-0.5">🛡️ OKX API Integration Guide</span>
                            <span className="text-[10.5px] text-white/40 block">Ensure your private keys are encapsulated via AES-256 ciphers.</span>
                          </a>
                        </div>
                      </div>

                      <div className="space-y-3 pt-2">
                        <h4 className="text-xs font-semibold text-white/80 uppercase tracking-wider">Security & FAQ</h4>
                        <div className="space-y-2.5 text-xs text-white/70">
                          <div className="p-3 bg-black/40 rounded-lg border border-white/[0.02]">
                            <strong className="text-[#f4cf8a] block mb-1">Q: Does Xenith AI hold my cryptocurrency assets?</strong>
                            <p className="text-[11px] text-white/50 leading-relaxed">
                              <strong>No. Assets NEVER leave your personal exchange wallet.</strong> Xenith AI is configured strictly with Read and Trade rights over APIs. The bot cannot execute withdrawal orders or carry assets away. You retain 100% control.
                            </p>
                          </div>

                          <div className="p-3 bg-black/40 rounded-lg border border-white/[0.02]">
                            <strong className="text-[#f4cf8a] block mb-1">Q: Can I disable the AI bot instantly?</strong>
                            <p className="text-[11px] text-white/50 leading-relaxed">
                              Yes, you can click "Stop API Feed" in the Dashboard or disconnect keys instantly inside the API Connections tab, or rotate keys directly on your exchange dashboard at any moment.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="pt-2 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between text-[11px] text-white/45 gap-2 font-sans">
                        <span>Need further quantitative advice or configuration support?</span>
                        <a 
                          onClick={() => {
                            onLaunchAi("Help me open a support ticket for my API configuration sync questions.");
                            showToast("Opening support terminal...");
                          }}
                          className="text-[#f4cf8a] font-bold hover:underline cursor-pointer transition"
                        >
                          Submit Support Ticket →
                        </a>
                      </div>
                    </div>
                  </div>
                )}

              </motion.div>
            )}
          </AnimatePresence>

        </div>

        {/* Global Footer Credits */}
        <footer className="border-t border-white/[0.04] mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between text-[10px] tracking-[0.1em] text-white/30 font-sans gap-4 w-full select-none">
          <div>
            © 2025 Xenith. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 text-white/35 font-sans">
            <a className="hover:text-white transition cursor-pointer" onClick={() => showToast("Enviroment rules are standard SoC.")}>Privacy Policy</a>
            <span>|</span>
            <a className="hover:text-white transition cursor-pointer" onClick={() => showToast("Standard terms verified.")}>Terms of Service</a>
            <span>|</span>
            <a className="hover:text-white transition cursor-pointer" onClick={() => showToast("Primary support ticker: live@xenith.finance")}>Support</a>
          </div>
        </footer>

      </div>
    </div>
  );
}
