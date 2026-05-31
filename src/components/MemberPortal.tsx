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
  Activity
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

  // Active Member Tier state ("FREE", "PLUS", "PRO")
  const [activeTier, setActiveTier] = useState<"FREE" | "PLUS" | "PRO">("PLUS");

  // Dynamic values
  const [saiBalance, setSaiBalance] = useState(1000118);
  const [usdValuation, setUsdValuation] = useState(0); // Initially 0 as requested
  const [chartPoints, setChartPoints] = useState<number[]>([15, 25, 18, 30, 24, 35, 29, 45, 42, 58]);

  // API Connection State (initially NOT linked to represent 0/disabled state)
  const [isApiLinked, setIsApiLinked] = useState(false);
  const [linkingExchange, setLinkingExchange] = useState("BINANCE");
  const [apiKeyInput, setApiKeyInput] = useState("");
  const [apiSecretInput, setApiSecretInput] = useState("");
  const [platformBalance, setPlatformBalance] = useState(10064.80); // Corresponds to trading platform numbers
  const [isConnectingApi, setIsConnectingApi] = useState(false);
  const [showConfigPanel, setShowConfigPanel] = useState(false);

  // Sync state initially
  useEffect(() => {
    if (isApiLinked) {
      setUsdValuation(platformBalance);
    } else {
      setUsdValuation(0); // Display 0 initially
    }
  }, [isApiLinked, platformBalance]);

  // Generate real-time micro drifts in data when logged in
  useEffect(() => {
    if (!isLoggedIn) return;
    const interval = setInterval(() => {
      // Simulate real-time miner allocations
      setSaiBalance(prev => prev + (Math.random() > 0.6 ? Math.floor(Math.random() * 5) : 0));
      
      if (isApiLinked) {
        // Simulate valuation oscillations
        setUsdValuation(prev => {
          if (prev === 0) return platformBalance;
          return parseFloat((prev + (Math.random() - 0.45) * 5).toFixed(2));
        });
        
        // Drift chart path points slightly
        setChartPoints(prev => {
          const next = [...prev.slice(1)];
          const last = prev[prev.length - 1];
          const variance = (Math.random() - 0.45) * 5;
          next.push(Math.max(10, Math.min(90, last + variance)));
          return next;
        });
      }
    }, 2500);

    return () => clearInterval(interval);
  }, [isLoggedIn, isApiLinked, platformBalance]);

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
            className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-[#16120e] border border-[#f4cf8a]/30 text-[#f4cf8a] px-5 py-3 rounded-xl shadow-xl shadow-black/80 flex items-center gap-2.5 text-xs font-mono tracking-wide"
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
            <span className="text-sm font-semibold tracking-[0.35em] text-white font-display">Xenith</span>
          </div>

          <div className="flex items-center gap-4">
            {isLoggedIn ? (
              <div className="flex items-center gap-3">
                <button 
                  onClick={handleSignOut}
                  className="rounded-lg border border-white/[0.08] hover:border-white/20 bg-transparent hover:bg-white/[0.03] text-white px-5 py-2 text-[10px] tracking-[0.16em] transition-all duration-300 font-mono"
                >
                  Sign Out
                </button>
                <div 
                  onClick={() => {
                    onLaunchAi("Show me diagnostic stats about my current black member security parameters.");
                    showToast("Triggering secure parameter overview...");
                  }}
                  className="rounded-lg border border-white/[0.08] hover:border-white/20 bg-transparent hover:bg-white/[0.03] text-white/90 hover:text-white px-5 py-2 text-[10px] tracking-[0.16em] transition-all duration-300 font-mono flex items-center gap-2 cursor-pointer"
                >
                  <User size={12} className="text-[#f4cf8a]" />
                  <span>Profile</span>
                </div>
              </div>
            ) : (
              <span className="text-[10px] tracking-[0.25em] text-white/40 font-mono">
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
                
                <h3 className="text-xs tracking-[0.25em] text-[#f4cf8a] text-center mb-6 font-display font-medium">
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
                      className="w-full bg-black/40 hover:bg-black/60 focus:bg-black border border-white/[0.06] hover:border-white/15 focus:border-[#f4cf8a]/40 rounded-xl py-3.5 pl-11 pr-4 text-xs text-white placeholder:text-white/30 outline-none transition duration-200"
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
                      className="w-full bg-black/40 hover:bg-black/60 focus:bg-black border border-white/[0.06] hover:border-white/15 focus:border-[#f4cf8a]/40 rounded-xl py-3.5 pl-11 pr-11 text-xs text-white placeholder:text-white/30 outline-none transition duration-200"
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
                  <div className="flex items-center justify-between text-[11px] text-white/40 px-1 pt-1">
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
                    className="w-full rounded-xl bg-gradient-to-r from-[#eac57d] via-[#f4cf8a] to-[#ecd4a5] hover:opacity-90 active:opacity-100 text-black text-xs font-semibold py-3.5 mt-2 transition duration-200 shadow-md shadow-[#f4cf8a]/10 disabled:opacity-50 cursor-pointer flex items-center justify-center gap-2 tracking-[0.25em]"
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
                  <span className="relative bg-[#0c0909] px-3 text-[10px] font-mono text-white/20 tracking-widest">or</span>
                </div>

                {/* Ledger Key Card wallet option */}
                <button 
                  onClick={handleWalletLogin}
                  disabled={walletConnecting}
                  className="w-full rounded-xl border border-white/10 bg-[#070505] hover:bg-white/[0.02] hover:border-white/20 text-white/70 hover:text-white text-xs font-mono tracking-[0.2em] py-3.5 transition duration-200 cursor-pointer flex items-center justify-center gap-2.5"
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

          {/* Logged in views - Structured exactly like the image upload */}
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
                
                {/* 1. SECURE MEMBER PROFILE UNLOCKED ALERT BANNER */}
                <div className="rounded-xl border border-emerald-500/15 bg-[#050907] px-6 py-4.5 flex items-start gap-4 shadow-[0_4px_12px_rgba(16,185,129,0.02)]">
                  <div className="p-1 rounded-md bg-emerald-500/10 text-emerald-400 mt-1 shrink-0">
                    <Lock size={15} className="fill-emerald-400/20" />
                  </div>
                  <div className="space-y-1 select-none">
                    <h4 className="text-xs font-semibold text-emerald-400 tracking-wide font-sans">
                      Secure Member Profile Unlocked
                    </h4>
                    <p className="text-[11px] leading-relaxed text-white/45 font-sans">
                      You have access to Safe Safeguard Tokens and Features Below. Use Them To Try Our Xenith Tools.
                    </p>
                  </div>
                </div>

                {/* 2. BLACK MEMBER TIER (CENTER VALUE CARD GRID) */}
                <div className="rounded-2xl border border-white/[0.04] bg-[#0c0a0a]/40 p-6 shadow-xl relative overflow-hidden flex flex-col items-center">
                  <div className="text-center space-y-1 mb-6">
                    <h3 className="text-sm font-semibold tracking-[0.25em] text-[#f4cf8a] font-display select-none font-sans uppercase">
                      {getTierDisplayTitle()}
                    </h3>
                    <p className="text-[11px] text-white/50 tracking-normal font-sans">
                      Your member profile is unlocked.
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-3 w-full">
                    {/* Free Card alternative */}
                    <div 
                      onClick={() => {
                        setActiveTier("FREE");
                        showToast("Switched active view to FREE access telemetry.");
                      }}
                      className={`rounded-xl border p-4 flex flex-col items-center justify-center gap-1.5 transition-all duration-300 cursor-pointer select-none ${
                        activeTier === "FREE" 
                          ? "border-[#f4cf8a] bg-[#f4cf8a]/[0.02] shadow-[0_0_15px_rgba(244,207,138,0.06)]" 
                          : "border-white/[0.04] bg-transparent hover:bg-white/[0.01]"
                      }`}
                    >
                      <span className={`text-[10px] tracking-[0.15em] font-bold font-sans ${activeTier === "FREE" ? "text-white" : "text-white/60"}`}>FREE</span>
                      <span className="text-[9px] tracking-wide text-white/40 font-sans">Basic Access</span>
                    </div>

                    {/* Plus Card alternative */}
                    <div 
                      onClick={() => {
                        setActiveTier("PLUS");
                        showToast("Switched active view to PLUS Black Member telemetry.");
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
                      
                      <span className={`text-[10px] tracking-[0.15em] font-bold font-sans ${activeTier === "PLUS" ? "text-white" : "text-white/60"}`}>PLUS</span>
                      <span className="text-[9px] tracking-wide text-white/40 font-sans">Black Member</span>
                    </div>

                    {/* Pro Card alternative */}
                    <div 
                      onClick={() => {
                        setActiveTier("PRO");
                        showToast("Switched active view to PRO premium telemetry.");
                      }}
                      className={`rounded-xl border p-4 flex flex-col items-center justify-center gap-1.5 transition-all duration-300 cursor-pointer select-none ${
                        activeTier === "PRO" 
                          ? "border-[#f4cf8a] bg-[#f4cf8a]/[0.02] shadow-[0_0_15px_rgba(244,207,138,0.06)]" 
                          : "border-white/[0.04] bg-transparent hover:bg-white/[0.01]"
                      }`}
                    >
                      <span className={`text-[10px] tracking-[0.15em] font-bold font-sans ${activeTier === "PRO" ? "text-white" : "text-white/60"}`}>PRO</span>
                      <span className="text-[9px] tracking-wide text-white/40 font-sans">Premium Access</span>
                    </div>
                  </div>
                </div>

                {/* 3. XAI TOKEN CARD */}
                <div className="rounded-xl border border-white/[0.04] bg-[#0c0a0a]/40 p-6 flex items-center justify-between shadow-lg relative overflow-hidden select-none">
                  <div>
                    <div className="text-[10px] tracking-[0.25em] text-[#f4cf8a] font-mono font-medium mb-2.5">XAI Token</div>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-3xl font-light tracking-wide text-white font-sans">{saiBalance.toLocaleString()}</span>
                      <span className="text-xs text-white/60 font-mono">XAI</span>
                    </div>
                    <div className="text-[10px] text-white/40 font-sans tracking-wide mt-1.5">Allocated to your account</div>
                  </div>

                  {/* Glowing coin badge representation */}
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-[#f4cf8a]/5 blur-lg" />
                    <div 
                      onClick={() => {
                        onLaunchAi("Show me background details of the XAI Gas utility design.");
                        showToast("Retrieving XAI Utility telemetry...");
                      }}
                      className="w-16 h-16 rounded-full border border-[#f4cf8a]/45 bg-black/80 flex items-center justify-center shadow-[0_0_20px_rgba(244,207,138,0.15)] hover:shadow-[0_0_30px_rgba(244,207,138,0.3)] transition-all cursor-pointer group"
                    >
                      <span className="text-[10px] font-bold font-mono tracking-[0.25em] text-[#f4cf8a] group-hover:scale-105 transition duration-300 pl-[0.1em]">XAI</span>
                    </div>
                  </div>
                </div>

                {/* 4. TWO COLUMNS GRID (EXCHANGE API STATUS & STRATEGY PERFORMANCE) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 select-none">
                  
                  {/* Left Column: EXCHANGE API STATUS */}
                  <div className="rounded-xl border border-white/[0.04] bg-[#0c0a0a]/40 p-5.5 space-y-4 shadow-lg flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between border-b border-white/[0.03] pb-3 mb-3">
                        <span className="text-[10pt] tracking-[0.22em] text-[#f4cf8a] font-display font-medium">Exchange API Status</span>
                        <span className="text-[#f4cf8a]/85 inline-flex p-1 rounded border border-[#f4cf8a]/10 bg-[#f4cf8a]/5">
                          <ShieldCheck size={14} />
                        </span>
                      </div>

                      <div className="space-y-3 font-sans text-xs">
                        {/* Connection Signal */}
                        {isApiLinked ? (
                          <div className="flex items-center gap-2 text-emerald-400 font-semibold py-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)] animate-pulse" />
                            <span>Connected</span>
                          </div>
                        ) : (
                          <div className="flex items-center gap-2 text-amber-500 font-semibold py-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.8)] animate-pulse" />
                            <span>Awaiting API Handshake</span>
                          </div>
                        )}

                        {/* Detail attributes with gold parameters */}
                        <div className="flex items-center justify-between py-1 border-b border-white/[0.02]">
                          <span className="text-white/40">Connected Exchange:</span>
                          <span className="text-[#f4cf8a] font-medium">
                            {isApiLinked ? `${linkingExchange} Pro` : "None (Pending)"}
                          </span>
                        </div>

                        <div className="flex items-center justify-between py-1 border-b border-white/[0.02]">
                          <span className="text-white/40">API Permission:</span>
                          <span className="text-[#f4cf8a] font-medium">
                            {isApiLinked ? "Read + Trade Enabled" : "Unconfigured"}
                          </span>
                        </div>

                        <div className="flex items-center justify-between py-1 border-b border-white/[0.02]">
                          <span className="text-white/40">Withdrawal Access:</span>
                          <span className="text-[#f4cf8a] font-medium">
                            {isApiLinked ? "Disabled (100% Secure)" : "Blocked"}
                          </span>
                        </div>

                        <div className="flex items-center justify-between py-1">
                          <span className="text-white/40">Security Status:</span>
                          <span className={isApiLinked ? "text-emerald-400 font-semibold" : "text-amber-500 font-semibold"}>
                            {isApiLinked ? "Protected" : "Pending Link"}
                          </span>
                        </div>
                      </div>
                    </div>


                  </div>

                  {/* Right Column: STRATEGY PERFORMANCE */}
                  <div className="rounded-xl border border-white/[0.04] bg-[#0c0a0a]/40 p-5.5 space-y-4 shadow-lg">
                    <div className="flex items-center justify-between border-b border-white/[0.03] pb-3">
                      <span className="text-[10pt] tracking-[0.22em] text-[#f4cf8a] font-display font-medium">Strategy Performance</span>
                      <span className="text-[#f4cf8a]/85 inline-flex p-1 rounded border border-[#f4cf8a]/10 bg-[#f4cf8a]/5">
                        <ArrowUpRight size={14} />
                      </span>
                    </div>

                    <div className="space-y-2.5 font-sans text-xs">
                      {/* Indicator 1: Signals Detected */}
                      <div className="flex items-center justify-between py-1 border-b border-white/[0.02]">
                        <div className="flex items-center gap-2.5 text-white/80">
                          <span className="p-1 rounded bg-white/[0.03] border border-white/[0.05] text-white/40">
                            <Target size={12} />
                          </span>
                          <span>Signals Detected:</span>
                        </div>
                        <span className="text-white font-semibold">18</span>
                      </div>

                      {/* Indicator 2: Executed Trades */}
                      <div className="flex items-center justify-between py-1 border-b border-white/[0.02]">
                        <div className="flex items-center gap-2.5 text-white/80">
                          <span className="p-1 rounded bg-white/[0.03] border border-white/[0.05] text-white/40">
                            <ArrowUpRight size={12} />
                          </span>
                          <span>Executed Trades:</span>
                        </div>
                        <span className="text-white font-semibold">6</span>
                      </div>

                      {/* Indicator 3: Win Ratio */}
                      <div className="flex items-center justify-between py-1 border-b border-white/[0.02]">
                        <div className="flex items-center gap-2.5 text-white/80">
                          <span className="p-1 rounded bg-white/[0.03] border border-white/[0.05] text-white/40">
                            <Trophy size={12} />
                          </span>
                          <span>Win Ratio:</span>
                        </div>
                        <span className="text-white font-semibold">72%</span>
                      </div>

                      {/* Indicator 4: Estimated Spread Capture */}
                      <div className="flex items-center justify-between py-1">
                        <div className="flex items-center gap-2.5 text-white/80">
                          <span className="p-1 rounded bg-white/[0.03] border border-white/[0.05] text-white/40">
                            <DollarSign size={12} />
                          </span>
                          <span>Estimated Spread Capture:</span>
                        </div>
                        <span className="text-[#f4cf8a] font-bold">$42.80</span>
                      </div>
                    </div>
                  </div>

                </div>

                {/* 5. LINKED ASSET VALUE (VIA API) */}
                <div className="rounded-xl border border-white/[0.04] bg-[#0c0a0a]/40 p-6 flex flex-col md:flex-row items-start md:items-center justify-between shadow-lg gap-6 select-none font-sans">
                  <div>
                    <div className="text-[10px] tracking-[0.25em] text-[#f4cf8a] font-mono font-medium mb-2.5">
                      Linked Asset Value (Via API)
                    </div>
                    {isApiLinked ? (
                      <div className="flex items-baseline gap-1.5 mb-3">
                        <span className="text-3xl font-light tracking-wide text-white">
                          ${usdValuation.toLocaleString()}
                        </span>
                        <span className="text-xs text-white/50 font-mono">USD</span>
                      </div>
                    ) : (
                      <div className="flex items-baseline gap-2 mb-3">
                        <span className="text-3xl font-light tracking-wide text-white/35 font-sans">
                          $0.00
                        </span>
                        <span className="text-xs text-white/30 font-mono">USD</span>
                        <span className="inline-block bg-amber-500/10 border border-amber-500/20 text-amber-500 px-2 py-0.5 rounded text-[9px] font-mono tracking-wider animate-pulse ml-2 font-semibold">
                          API Not Linked
                        </span>
                      </div>
                    )}

                    <ul className="space-y-1.5 text-xs text-white/45 pl-1.5 font-sans">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#f4cf8a]" />
                        <span>
                          {isApiLinked ? `Linked secure read-only token to ${linkingExchange} API` : "API connection offline (Valuation: 0 USD)"}
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#f4cf8a]" />
                        <span>
                          {isApiLinked 
                            ? "Configure balance parameters in the Direct Exchange simulator below."
                            : 'Click "Manage Platform API" or setup controls to connect.'}
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* Right side container: button + conditional sparkline chart */}
                  <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full md:w-auto">
                    {/* Area sparkline linechart on the right - ONLY displays after being linked */}
                    {isApiLinked && (
                      <div className="w-full md:w-[180px] h-[50px] relative shrink-0">
                        <svg className="w-full h-full text-[#f4cf8a]/85" viewBox="0 0 240 50">
                          <defs>
                            <linearGradient id="g-gold-redone" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#f4cf8a" stopOpacity="0.25" />
                              <stop offset="100%" stopColor="#f4cf8a" stopOpacity="0.0" />
                            </linearGradient>
                          </defs>
                          <path 
                            d={`${generateSvgPath()} L 240 50 L 0 50 Z`} 
                            fill="url(#g-gold-redone)"
                            className="transition-all duration-1000"
                          />
                          <path 
                            d={generateSvgPath()} 
                            fill="none" 
                            stroke="#f4cf8a" 
                            strokeWidth="1.5" 
                            className="transition-all duration-1000"
                          />
                          {/* Interactive dynamic gold indicator point */}
                          <circle 
                            cx="240" 
                            cy={50 - 5 - ((chartPoints[chartPoints.length-1] - Math.min(...chartPoints)) / (Math.max(...chartPoints) - Math.min(...chartPoints) || 1)) * 40}
                            r="3.5" 
                            fill="#ffd17d" 
                            className="animate-pulse shadow-md"
                          />
                        </svg>
                      </div>
                    )}

                    <button
                      onClick={() => setShowConfigPanel(!showConfigPanel)}
                      className={`px-4 py-2.5 text-[10px] font-bold tracking-widest font-mono rounded-lg transition duration-200 cursor-pointer shrink-0 w-full sm:w-auto border select-none ${
                        showConfigPanel
                          ? "bg-[#f4cf8a] text-black hover:bg-[#ebd09d] border-[#f4cf8a]"
                          : "border-[#f4cf8a]/20 hover:border-[#f4cf8a]/45 text-[#f4cf8a] hover:bg-white/[0.02]"
                      }`}
                    >
                      {showConfigPanel ? "[ Close Simulator ]" : "[ Manage Platform API ]"}
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
                          <h4 className="text-[10px] font-bold tracking-[0.25em] text-white font-mono">
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
                        To link your external exchange balances (custody remains 100% on your exchange platform with 0 withdrawal risk), specify assets and access permissions inside this terminal. Any balance controls must be configured directly within this exchange platform simulator interface to feed the API.
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-1">
                        {/* Platform Configuration (Controls Exchange Numbers) */}
                        <div className="space-y-4 font-sans">
                          <div>
                            <label className="text-[9px] tracking-widest text-[#f4cf8a] block mb-1.5 font-mono font-medium">Select Exchange Terminal</label>
                            <select 
                              value={linkingExchange}
                              onChange={(e) => {
                                setLinkingExchange(e.target.value);
                                showToast(`Target exchange terminal re-routed to: ${e.target.value}`);
                              }}
                              className="w-full bg-black border border-white/10 hover:border-white/20 text-xs text-white rounded-lg p-2.5 outline-none font-mono focus:border-[#f4cf8a]/40 cursor-pointer"
                            >
                              <option value="BINANCE">BINANCE (Tier-1 Liquidity Engine)</option>
                              <option value="BITCANO">BITCANO (Institutional Sovereign Vault)</option>
                              <option value="BITGET">BITGET (High-Speed Arbitrage Gateway)</option>
                              <option value="MEXC">MEXC (Delta-Neutral Execution Port)</option>
                            </select>
                          </div>

                          <div>
                            <label className="text-[9px] tracking-widest text-[#f4cf8a] block mb-1.5 font-mono font-medium">
                              Exchange Asset Balance (Control Amount)
                            </label>
                            <div className="relative rounded-lg bg-black border border-white/10 focus-within:border-[#f4cf8a]/40 flex items-center">
                              <span className="absolute left-3 text-xs text-white/40 font-mono font-semibold">$</span>
                              <input 
                                type="number"
                                value={platformBalance}
                                onChange={(e) => {
                                  const val = Math.max(0, parseFloat(e.target.value) || 0);
                                  setPlatformBalance(val);
                                  if (isApiLinked) {
                                    setUsdValuation(val);
                                  }
                                }}
                                className="w-full bg-transparent pl-7 pr-3 py-2.5 text-xs text-white outline-none font-mono font-medium"
                                placeholder="0.00"
                              />
                            </div>
                            <span className="text-[10px] text-white/35 block mt-2 font-sans">
                              * Enter your simulated balance inside the trading platform. The Xenith API queries this direct value instantly.
                            </span>
                          </div>

                          <div className="flex flex-wrap items-center gap-2">
                            <span className="text-[8px] tracking-wider text-white/30 font-mono font-semibold font-sans">Quick Presets:</span>
                            <button 
                              type="button"
                              onClick={() => {
                                setPlatformBalance(1500.00);
                                if (isApiLinked) setUsdValuation(1500.00);
                                showToast("Platform balance reset to $1,500.00.");
                              }}
                              className="text-[9px] font-mono border border-white/5 bg-white/[0.02] hover:bg-white/[0.06] rounded px-2.5 py-1 text-white/100 transition cursor-pointer"
                            >
                              $1.5K
                            </button>
                            <button 
                              type="button"
                              onClick={() => {
                                setPlatformBalance(10064.80);
                                if (isApiLinked) setUsdValuation(10064.80);
                                showToast("Platform balance reset to $10,064.80.");
                              }}
                              className="text-[9px] font-mono border border-white/5 bg-white/[0.02] hover:bg-white/[0.06] rounded px-2.5 py-1 text-white/100 transition cursor-pointer"
                            >
                              $10.0K
                            </button>
                            <button 
                              type="button"
                              onClick={() => {
                                setPlatformBalance(84390.00);
                                if (isApiLinked) setUsdValuation(84390.00);
                                showToast("Platform balance reset to $84,390.00.");
                              }}
                              className="text-[9px] font-mono border border-white/5 bg-white/[0.02] hover:bg-white/[0.06] rounded px-2.5 py-1 text-white/100 transition cursor-pointer"
                            >
                              $84.3K
                            </button>
                          </div>
                        </div>

                        {/* Security Handshake Options */}
                        <div className="space-y-3.5 p-4 rounded-lg bg-black/60 border border-white/[0.04] flex flex-col justify-between font-sans">
                          <div>
                            <div className="text-[9px] tracking-widest text-[#f4cf8a] font-mono font-semibold flex items-center gap-1.5 mb-2.5">
                              <ShieldCheck size={12} /> Crypto Authentication Keys
                            </div>

                            <div className="space-y-3 font-sans">
                              <div>
                                <label className="text-[9px] tracking-wider text-white/40 block mb-1 font-mono">Exchange API Key</label>
                                <input 
                                  type="text"
                                  value={apiKeyInput || "xk_live_b48f93cd8e019f2d119c4bb2720a4"}
                                  onChange={(e) => setApiKeyInput(e.target.value)}
                                  className="w-full bg-black/40 border border-white/10 hover:border-white/15 text-xs text-white rounded-lg p-2 outline-none font-mono text-white/70 focus:border-[#f4cf8a]/40"
                                  placeholder={`Enter ${linkingExchange} secure API key`}
                                />
                              </div>

                              <div>
                                <label className="text-[9px] tracking-wider text-white/40 block mb-1 font-mono">API Secret Phrase</label>
                                <input 
                                  type="password"
                                  value="************************************************"
                                  disabled
                                  className="w-full bg-black/[0.40] border border-[#f4cf8a]/10 text-xs text-white/20 rounded-lg p-2 outline-none font-mono select-none"
                                />
                              </div>
                            </div>
                          </div>

                          <div className="border-t border-white/[0.04] pt-2 flex items-center justify-between text-[10px] font-mono">
                            <span className="text-white/45">Withdrawal Permission:</span>
                            <span className="text-rose-400 font-semibold tracking-wider flex items-center gap-1">
                              <Lock size={10} /> Blocked (0% Risk)
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Simulator controls execution */}
                      <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between font-sans">
                        <div className="text-[10px] text-white/45 font-mono">
                          API Link Pipeline Status:{" "}
                          <span className={`font-bold tracking-wider ${isApiLinked ? "text-emerald-400" : "text-amber-500 animate-pulse"}`}>
                            {isApiLinked ? "Active & Transmitting" : "Disconnected"}
                          </span>
                        </div>

                        <div className="flex gap-2 font-sans">
                          {isApiLinked ? (
                            <>
                              <button
                                type="button"
                                onClick={() => {
                                  setIsApiLinked(false);
                                  showToast("API key disabled. Core valuation sync detached.");
                                }}
                                className="rounded-lg border border-red-500/30 hover:border-red-500/50 bg-red-500/10 hover:bg-red-500/20 text-red-400 text-[10px] font-bold font-mono tracking-wider px-4 py-2 cursor-pointer transition duration-200"
                              >
                                Stop API Feed
                              </button>
                              <button
                                type="button"
                                onClick={() => {
                                  setUsdValuation(platformBalance);
                                  showToast(`Polled updated platform figures: $${platformBalance.toLocaleString()} USD!`);
                                }}
                                className="rounded-lg bg-[#f4cf8a]/15 border border-[#f4cf8a]/30 hover:border-[#f4cf8a] text-[#f4cf8a] text-[10px] font-bold font-mono uppercase tracking-wider px-4 py-2 cursor-pointer transition duration-200"
                              >
                                Push Live Sync
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
                                  showToast("API key handshaked successfully. Valuation data synced!");
                                }, 1500);
                              }}
                              className="rounded-lg bg-[#f4cf8a] hover:bg-[#ebd09d] disabled:opacity-45 text-black text-[10px] font-bold font-mono tracking-wider px-4.5 py-2.5 cursor-pointer transition duration-200 flex items-center gap-1.5"
                            >
                              {isConnectingApi ? (
                                <>
                                  <Loader2 size={12} className="animate-spin text-black" />
                                  <span>Establishing Connection...</span>
                                </>
                              ) : (
                                <>
                                  <Link size={12} />
                                  <span>Establish API Handshake</span>
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
                      <h4 className="text-[10px] tracking-[0.25em] text-[#f4cf8a] font-display font-semibold">
                        About Xenith
                      </h4>
                      <p className="text-xs leading-relaxed text-white/55 font-sans pt-1">
                        Xenith is an AI-powered tool built to help you learn about next-generation wealth, smart payment systems, and secure digital assets safely.
                      </p>
                    </div>

                    <button 
                      onClick={() => {
                        onLaunchAi("Detail the long-term technical roadmap of the SAI Token value network.");
                        onClose();
                      }}
                      className="rounded-full border border-[#f4cf8a]/40 hover:border-[#ffd17d] hover:bg-white/[0.03] text-[9px] tracking-[0.2em] font-mono text-[#f4cf8a] hover:text-white px-5 py-2 transition-all cursor-pointer"
                    >
                      Learn More
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

                    <span className="text-[10px] font-bold font-mono tracking-[0.3em] text-white/70">
                      X-Ai Framework
                    </span>
                  </div>
                </div>

              </motion.div>
            )}
          </AnimatePresence>

        </div>

        {/* Global Footer Credits */}
        <footer className="border-t border-white/[0.04] mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between text-[10px] tracking-[0.25em] text-white/30 font-mono gap-4 w-full select-none">
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
