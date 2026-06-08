import React, { useState, useEffect } from "react";
import { 
  Lock, 
  User, 
  Eye, 
  EyeOff, 
  Check, 
  ChevronRight, 
  ShieldCheck, 
  TrendingUp, 
  Users, 
  Target, 
  DollarSign, 
  Layers, 
  Star, 
  ArrowUpRight, 
  Activity, 
  Search, 
  Sparkles,
  Info
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import XenithLogo from "./XenithLogo";

interface PartnerDashboardProps {
  onBackToHome: () => void;
}

export default function PartnerDashboard({ onBackToHome }: PartnerDashboardProps) {
  // Authentication States
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [partnerId, setPartnerId] = useState("XP-848201");
  const [passkey, setPasskey] = useState("");
  const [showPasskey, setShowPasskey] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [authStep, setAuthStep] = useState<"idle" | "decrypting" | "biometric" | "success">("idle");
  const [authProgress, setAuthProgress] = useState(0);

  // Interactive Dashboard States
  const [selectedPackageFilter, setSelectedPackageFilter] = useState<"ALL" | "FREE" | "PLUS" | "PRO">("PLUS");
  const [showToast, setShowToast] = useState<string | null>(null);
  
  // Simulated interactive table state to allow adding new API allocations
  const [members, setMembers] = useState([
    { id: "Sub-Node 01", package: "PLUS (RM 89)", transferred: 89, active: true },
    { id: "Sub-Node 02", package: "PRO (RM 890)", transferred: 890, active: true },
    { id: "Sub-Node 03", package: "PLUS (RM 89)", transferred: 89, active: true },
    { id: "Sub-Node 04", package: "PRO (RM 890)", transferred: 890, active: true },
    { id: "Sub-Node 05", package: "PLUS (RM 89)", transferred: 89, active: true },
    { id: "Sub-Node 06", package: "PRO (RM 890)", transferred: 890, active: true },
  ]);
  
  const [isAddMemberOpen, setIsAddMemberOpen] = useState(false);
  const [newMemberId, setNewMemberId] = useState("");
  const [newMemberPackage, setNewMemberPackage] = useState<"FREE" | "PLUS" | "PRO">("PLUS");
  const [activeSopTab, setActiveSopTab] = useState<"incubation" | "scarcity" | "briefing">("incubation");



  // Dynamic telemetry offsets (simulating real-time updates while looking at the values)
  const [teamProfit, setTeamProfit] = useState(48500);
  const [totalPoolValue, setTotalPoolValue] = useState(997544);
  const [profitShare, setProfitShare] = useState(24250);
  const [subscriptionFlow, setSubscriptionFlow] = useState(17136);

  useEffect(() => {
    if (!isLoggedIn) return;
    
    // Smooth micro ticks for financial telemetry to look realistic (with tiny variations)
    const interval = setInterval(() => {
      const change = (Math.random() - 0.48) * 12;
      setTeamProfit(prev => {
        const next = Math.max(48000, prev + change);
        setProfitShare(parseFloat((next * 0.5).toFixed(2)));
        return parseFloat(next.toFixed(2));
      });
      setTotalPoolValue(prev => parseFloat((prev + change * 2).toFixed(2)));
      setSubscriptionFlow(prev => {
        const flowChange = Math.random() > 0.85 ? 89 : 0;
        return prev + flowChange;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [isLoggedIn]);

  const triggerToast = (msg: string) => {
    // No-op: do not display a toast pop-up as per user requests to avoid popups on any action.
  };

  // High-End Authentication Flow
  const handlePartnerLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!partnerId.trim() || !passkey.trim()) {
      triggerToast("Please input all authentication credentials.");
      return;
    }

    setIsAuthenticating(true);
    setAuthStep("decrypting");
    setAuthProgress(0);

    // Decryption stage animation
    const decryptInterval = setInterval(() => {
      setAuthProgress(prev => {
        if (prev >= 100) {
          clearInterval(decryptInterval);
          // Set to next step
          setTimeout(() => {
            setAuthStep("biometric");
            setAuthProgress(0);
            
            // Biometric biometric handshake scan stage animation
            const scanInterval = setInterval(() => {
              setAuthProgress(p => {
                if (p >= 100) {
                  clearInterval(scanInterval);
                  setTimeout(() => {
                    setAuthStep("success");
                    setTimeout(() => {
                      setIsLoggedIn(true);
                      setIsAuthenticating(false);
                      triggerToast("Secure Identity Verified. Welcome, Partner.");
                    }, 800);
                  }, 200);
                  return 100;
                }
                return p + 4;
              });
            }, 60);

          }, 400);
          return 100;
        }
        return prev + 10;
      });
    }, 100);
  };

  const handleSignOut = () => {
    setIsLoggedIn(false);
    setAuthStep("idle");
    setPasskey("");
    triggerToast("Sovereign session terminated.");
  };

  const handleAddMember = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMemberId.trim()) {
      triggerToast("Please supply a valid Sub-Node ID.");
      return;
    }

    const pkgStr = newMemberPackage === "FREE" ? "BASIC" : newMemberPackage === "PLUS" ? "PLUS (RM 89)" : "PRO (RM 890)";
    const transferAmt = newMemberPackage === "FREE" ? 0 : newMemberPackage === "PLUS" ? 89 : 890;

    const newMember = {
      id: newMemberId,
      package: pkgStr,
      transferred: transferAmt,
      active: true
    };

    setMembers(prev => [newMember, ...prev]);
    setNewMemberId("");
    setIsAddMemberOpen(false);
    triggerToast(`Sub-Node ${newMemberId} whitelisted successfully under ${newMemberPackage}.`);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white/70 overflow-x-hidden font-sans relative selection:bg-[#f4cf8a]/30 selection:text-[#f4cf8a]">
      {/* Background Grid Accent Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(212,175,55,0.04),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.003)_1px,transparent_1px)] bg-[size:40px_40px] opacity-40" />
      </div>

      <main className="relative z-10 w-full min-h-screen flex flex-col justify-between">
        
        {/* LOG IN PAGE (Shown when logged out) */}
        {!isLoggedIn ? (
          <div className="flex-grow flex flex-col items-center justify-center p-6 min-h-[90vh]">
            <div className="w-full max-w-sm flex flex-col items-center">
              
              {/* Logo block */}
              <div className="mb-8 transform hover:scale-[1.02] transition-duration-500 flex flex-col items-center">
                <XenithLogo size={110} showText={false} />
                <span className="text-lg font-light tracking-[0.5em] text-white mt-4 font-display">XENITH</span>
                <span className="text-[10px] tracking-[0.35em] text-[#f4cf8a] uppercase mt-1.5 ">Partner Integration Framework</span>
              </div>

              {/* Advanced Login Interface */}
              <div className="w-full rounded-2xl border border-white/[0.05] bg-[#090707]/90 px-6 py-8 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] backdrop-blur-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#f4cf8a]/5 rounded-full blur-2xl pointer-events-none" />
                
                <AnimatePresence mode="wait">
                  {/* IDLE LOGIN STATE */}
                  {authStep === "idle" && (
                    <motion.div
                      key="login-idle"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                    >
                      <h3 className="text-xs font-semibold tracking-[0.3em] text-[#f4cf8a] uppercase text-center mb-6 font-display">
                        Sovereign Access Terminal
                      </h3>

                      <form onSubmit={handlePartnerLogin} className="space-y-4">
                        {/* ID Input */}
                        <div className="relative">
                          <User className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30" size={15} />
                          <input 
                            type="text"
                            value={partnerId}
                            onChange={(e) => setPartnerId(e.target.value)}
                            placeholder="SOVEREIGN REGISTRY ID"
                            className="w-full bg-black/60 border border-white/[0.06] hover:border-white/15 focus:border-[#f4cf8a]/40 rounded-xl py-4.5 pl-11 pr-4 text-xs tracking-widest text-[#f4cf8a]  placeholder:text-white/20 placeholder:tracking-normal outline-none transition duration-200"
                          />
                        </div>

                        {/* Quantum Security Key (Password) */}
                        <div className="relative">
                          <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30" size={15} />
                          <input 
                            type={showPasskey ? "text" : "password"}
                            value={passkey}
                            onChange={(e) => setPasskey(e.target.value)}
                            placeholder="CYPHER KEYWORD"
                            className="w-full bg-black/60 border border-white/[0.06] hover:border-white/15 focus:border-[#f4cf8a]/40 rounded-xl py-4.5 pl-11 pr-11 text-xs tracking-wide text-white/80  placeholder:text-white/20 placeholder:tracking-normal outline-none transition duration-200"
                          />
                          <button 
                            type="button"
                            onClick={() => setShowPasskey(!showPasskey)}
                            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/30 hover:text-white transition duration-150"
                          >
                            {showPasskey ? <EyeOff size={15} /> : <Eye size={15} />}
                          </button>
                        </div>

                        {/* Security Hint */}
                        <div className="text-[9px] text-white/30 text-center leading-relaxed  px-2 pt-2 select-none">
                          * Enter any credentials to trigger decryption & biometric protocol routines.
                        </div>

                        {/* Decrypt Access Action Button */}
                        <button 
                          type="submit"
                          className="w-full rounded-xl bg-gradient-to-r from-[#eac57d] via-[#f4cf8a] to-[#ecd4a5] text-black text-[10px] font-semibold tracking-[0.25em] py-4 mt-4 transition duration-300 hover:opacity-90 active:scale-98 shadow-md shadow-[#f4cf8a]/10 cursor-pointer flex items-center justify-center gap-2 uppercase"
                        >
                          Decrypt Credentials
                        </button>
                      </form>
                    </motion.div>
                  )}

                  {/* DECRYPTING BLOCK STATE */}
                  {authStep === "decrypting" && (
                    <motion.div
                      key="login-decrypting"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="flex flex-col items-center py-6 text-center select-none"
                    >
                      <div className="relative w-20 h-20 mb-6 flex items-center justify-center">
                        <svg className="w-full h-full transform -rotate-90">
                          <circle cx="40" cy="40" r="32" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="2.5" fill="none" />
                          <circle 
                            cx="40" 
                            cy="40" 
                            r="32" 
                            stroke="#f4cf8a" 
                            strokeWidth="2.5" 
                            fill="none" 
                            strokeDasharray={2 * Math.PI * 32}
                            strokeDashoffset={2 * Math.PI * 32 * (1 - authProgress / 100)}
                            className="transition-all duration-100"
                          />
                        </svg>
                        <Lock className="absolute text-[#f4cf8a]" size={20} />
                      </div>
                      
                      <h4 className="text-[10px]  tracking-[0.3em] uppercase text-white/90">Decryption Protocol Initiated</h4>
                      <div className="text-[18px]  text-white tracking-wider font-light mt-2">{authProgress}%</div>
                      <p className="text-[9px] text-white/30  mt-4 tracking-normal">Decoding key-pairs and validation blocks...</p>
                    </motion.div>
                  )}

                  {/* BIOMETRIC SIGNATURE VERIFICATION */}
                  {authStep === "biometric" && (
                    <motion.div
                      key="login-biometric"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="flex flex-col items-center py-6 text-center select-none"
                    >
                      <div className="relative w-20 h-20 mb-6 flex items-center justify-center">
                        {/* Radar Scan representation */}
                        <div className="absolute inset-0 border border-[#f4cf8a]/15 rounded-full animate-ping pointer-events-none" />
                        <div className="absolute top-0 left-0 w-full h-full border border-dashed border-[#f4cf8a]/35 rounded-full animate-spin [animation-duration:8s]" />
                        <ShieldCheck className="text-[#f4cf8a] animate-pulse" size={28} />
                      </div>
                      
                      <h4 className="text-[10px]  tracking-[0.3em] uppercase text-emerald-400">Handshake Signature Check</h4>
                      <div className="text-[10px]  text-white/90 tracking-widest mt-2">CYPHER SECURITY PASSED</div>
                      <div className="w-full bg-white/5 h-1 rounded-full overflow-hidden mt-4 max-w-[150px]">
                        <div className="bg-emerald-400 h-full transition-all duration-100" style={{ width: `${authProgress}%` }} />
                      </div>
                      <p className="text-[9px] text-white/35  mt-4">Verifying partner signature certificate...</p>
                    </motion.div>
                  )}

                  {/* ACCESS SUCCESS REDIRECT */}
                  {authStep === "success" && (
                    <motion.div
                      key="login-success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex flex-col items-center py-6 text-center select-none"
                    >
                      <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mb-6">
                        <Check size={26} className="stroke-[3]" />
                      </div>
                      
                      <h4 className="text-[10px]  tracking-[0.3em] uppercase text-emerald-400">Authenticated</h4>
                      <p className="text-[11px] text-white/50 font-sans mt-2 tracking-wide leading-relaxed">
                        Secure session established.<br/>Redirecting to Partner Command Tower...
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        ) : (
          
          /* DYNAMIC PORTAL DASHBOARD (Shown once logged in - matches reference image specs perfectly) */
          <div className="flex-grow w-full max-w-4xl mx-auto px-6 py-8 space-y-6">
            
            {/* 1. HEADER SECTION (Logo & Title | Sign Out & Profile) */}
            <header className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/[0.04] pb-6 gap-4 select-none">
              <div 
                className="flex items-center gap-3 cursor-pointer group"
                onClick={onBackToHome}
              >
                <div className="transform group-hover:scale-105 transition-all">
                  <XenithLogo size={24} className="opacity-95" />
                </div>
                <span className="text-sm font-semibold tracking-[0.35em] text-white font-display select-none">XENITH</span>
              </div>

              {/* Header Right Actions */}
              <div className="flex items-center gap-3.5 sm:self-center">
                <button 
                  onClick={handleSignOut}
                  className="rounded border border-amber-500/20 px-5 py-1.5 text-[9px] tracking-[0.16em] uppercase text-[#f4cf8a] hover:bg-[#f4cf8a]/5 transition cursor-pointer font-semibold"
                >
                  Sign Out
                </button>
                <div className="rounded border border-white/[0.08] bg-black/30 text-white/80 px-4 py-1.5 text-[9px] tracking-[0.15em] flex items-center gap-1.5  select-none">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                  👤 Profile
                </div>
              </div>
            </header>

            {/* 2. LOCKED ALERT BANNER (Secure Member Profile Unlocked Alert) */}
            <div className="rounded-xl border border-emerald-500/15 bg-[#050907] px-6 py-4 flex items-start gap-3.5 shadow-[0_4px_16px_rgba(16,185,129,0.015)]">
              <div className="p-1 rounded bg-emerald-500/10 text-emerald-400 shrink-0 mt-0.5">
                <Lock size={13} className="fill-emerald-400/20" />
              </div>
              <div className="space-y-0.5 selection:bg-emerald-500/20">
                <h4 className="text-xs font-semibold text-emerald-400 tracking-wider">
                  🔐 Secure Member Profile Unlocked
                </h4>
                <p className="text-[11px] text-white/45 font-sans leading-relaxed">
                  You have access to Safe Safeguard Tokens and Features Below. Use Them To Try Our Xenith Tools.
                </p>
              </div>
            </div>


            {/* 3. TEAM NETWORK OVERVIEW SECTION (Intro members & Package breakdown) */}
            <section className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/[0.03] pb-3.5 select-none">
                <div className="space-y-1">
                  <h3 className="text-[11px] tracking-[0.3em] font-medium text-[#f4cf8a] font-display uppercase">
                    Sovereign Liquidity Network
                  </h3>
                  <p className="text-[10px] text-white/40">
                    Monitor authorization bandwidth, pool scaling allocations, API interface quotas, and performance yields.
                  </p>
                </div>

                <div className="flex flex-col sm:items-end gap-1.5 tracking-wider text-right">
                  <span className="text-white/35 text-[9px]  uppercase">Your Level: Black Member</span>
                  <div className="bg-[#f4cf8a]/10 border border-[#f4cf8a]/30 text-[#f4cf8a] font-bold px-4 py-1.5 rounded flex items-center justify-center gap-1.5 select-none text-[10px] tracking-widest ">
                    PLUS <Star size={9} className="fill-[#f4cf8a]" />
                  </div>
                </div>
              </div>

              {/* Sub Panels Grid */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
                
                {/* Intro Members count panel */}
                <div className="md:col-span-4 rounded-xl border border-white/[0.05] bg-[#0c090a]/40 p-6 flex flex-col justify-between shadow-md min-h-[160px] select-none">
                  <div className="text-[9px]  tracking-[0.25em] text-[#f4cf8a] uppercase">
                    Sub-Node Allocations
                  </div>
                  <div>
                    <div className="text-5xl font-light tracking-tight text-white mb-1.5">
                      60
                    </div>
                    <div className="text-[11px] text-white/40">
                      Active authorized API nodes
                    </div>
                  </div>
                </div>

                {/* Package Breakdown selections panel */}
                <div className="md:col-span-8 rounded-xl border border-white/[0.05] bg-[#0c090a]/40 p-6 flex flex-col justify-between shadow-md overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#f4cf8a]/3 rounded-full blur-xl pointer-events-none" />
                  
                  <div className="text-[9px]  tracking-[0.25em] text-[#f4cf8a] uppercase mb-4 text-center">
                    Liquidity Allocation Tiers
                  </div>

                  <div className="grid grid-cols-3 gap-3 w-full">
                    {/* Free Option Card */}
                    <div 
                      onClick={() => {
                        setSelectedPackageFilter(selectedPackageFilter === "FREE" ? "ALL" : "FREE");
                        triggerToast("Filtering subnet portfolio to BASIC allocations.");
                      }}
                      className={`rounded-lg border p-4.5 flex flex-col items-center justify-center gap-1 transition-all cursor-pointer ${
                        selectedPackageFilter === "FREE"
                          ? "border-[#f4cf8a]/60 bg-[#f4cf8a]/[0.03] shadow-inner"
                          : "border-white/[0.04] bg-black/20 hover:border-white/10"
                      }`}
                    >
                      <span className="text-[9px] font-bold  tracking-wider text-white">BASIC</span>
                      <span className="text-xs font-semibold text-white/80 mt-1">12 Nodes</span>
                    </div>

                    {/* Plus Option Card */}
                    <div 
                      onClick={() => {
                        setSelectedPackageFilter(selectedPackageFilter === "PLUS" ? "ALL" : "PLUS");
                        triggerToast("Filtering subnet portfolio to PLUS allocations.");
                      }}
                      className={`rounded-lg border p-4.5 flex flex-col items-center justify-center gap-1 transition-all cursor-pointer ${
                        selectedPackageFilter === "PLUS"
                          ? "border-[#f4cf8a]/60 bg-[#f4cf8a]/[0.03] shadow-inner"
                          : "border-white/[0.04] bg-black/20 hover:border-white/10"
                      }`}
                    >
                      <span className="text-[9px] font-bold  tracking-wider text-white">PLUS (RM 89)</span>
                      <span className="text-xs font-semibold text-white/80 mt-1">32 Nodes</span>
                    </div>

                    {/* Pro Option Card */}
                    <div 
                      onClick={() => {
                        setSelectedPackageFilter(selectedPackageFilter === "PRO" ? "ALL" : "PRO");
                        triggerToast("Filtering subnet portfolio to PRO allocations.");
                      }}
                      className={`rounded-lg border p-4.5 flex flex-col items-center justify-center gap-1 transition-all cursor-pointer ${
                        selectedPackageFilter === "PRO"
                          ? "border-[#f4cf8a]/60 bg-[#f4cf8a]/[0.03] shadow-inner"
                          : "border-white/[0.04] bg-black/20 hover:border-white/10"
                      }`}
                    >
                      <span className="text-[9px] font-bold  tracking-wider text-white">PRO (RM 890)</span>
                      <span className="text-xs font-semibold text-white/80 mt-1">16 Nodes</span>
                    </div>
                  </div>

                  {/* Total Members Indicator */}
                  <div className="text-center mt-3.5 text-[9px]  tracking-widest text-[#f4cf8a]/80 select-none">
                    Total API Connections: 60
                  </div>
                </div>

              </div>
            </section>

            {/* 4. MAIN CENTRAL TELEMETRY SECTION (GRID OF MEMBER TABLE AND FINANCIALS) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* MEMBER PACKAGE LIST */}
              <div className="lg:col-span-6 rounded-xl border border-white/[0.05] bg-[#0c090a]/40 p-6 flex flex-col justify-between shadow-md space-y-4">
                <div className="flex items-center justify-between border-b border-white/[0.03] pb-3 select-none">
                  <h3 className="text-[10px] tracking-[0.25em] font-medium text-[#f4cf8a] font-display uppercase">
                    Sub-Node Clearance Allocations
                  </h3>
                  
                  {/* Interactive Button to insert a mock member */}
                  <button 
                    onClick={() => setIsAddMemberOpen(!isAddMemberOpen)}
                    className="text-[9px]  border border-[#f4cf8a]/30 bg-black hover:bg-[#f4cf8a]/5 text-[#f4cf8a] transition-all px-3 py-1 rounded cursor-pointer shrink-0"
                  >
                    {isAddMemberOpen ? "Close Panel" : "+ Register Sub-Node"}
                  </button>
                </div>

                {/* Conditional Slide expansion to insert new member */}
                <AnimatePresence>
                  {isAddMemberOpen && (
                    <motion.form 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      onSubmit={handleAddMember}
                      className="bg-black/60 border border-white/[0.05] p-3 rounded-lg space-y-3"
                    >
                      <div className="flex items-center gap-2">
                        <input 
                          type="text" 
                          value={newMemberId}
                          onChange={(e) => setNewMemberId(e.target.value)}
                          placeholder="e.g. Sub-Node 07"
                          className="flex-grow bg-black border border-white/10 rounded px-2.5 py-1.5 text-xs text-white placeholder:text-white/20 outline-none"
                        />
                        <select 
                          value={newMemberPackage}
                          onChange={(e) => setNewMemberPackage(e.target.value as any)}
                          className="bg-black border border-white/10 rounded px-2.5 py-1.5 text-xs text-white outline-none cursor-pointer"
                        >
                          <option value="FREE">BASIC</option>
                          <option value="PLUS">PLUS (RM 89)</option>
                          <option value="PRO">PRO (RM 890)</option>
                        </select>
                      </div>
                      <button 
                        type="submit"
                        className="w-full bg-[#f4cf8a] hover:bg-[#ebd09d] text-black text-[9px]  uppercase tracking-widest font-semibold py-1.5 rounded transition cursor-pointer"
                      >
                        Confirm Allocation
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>

                {/* Table implementation */}
                <div className="overflow-x-auto">
                  <table className="w-full text-left font-sans text-xs">
                    <thead>
                      <tr className="text-white/30 uppercase tracking-[0.2em] text-[9px] border-b border-white/[0.04]">
                        <th className="pb-2 font-normal">Sub-Node ID</th>
                        <th className="pb-2 font-normal">Allocation Tier</th>
                        <th className="pb-2 font-normal text-right">Connected AUM</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/[0.02]">
                      {members
                        .filter(m => {
                          if (selectedPackageFilter === "ALL") return true;
                          if (selectedPackageFilter === "FREE") return m.package.includes("FREE") || m.package.includes("BASIC");
                          if (selectedPackageFilter === "PLUS") return m.package.includes("PLUS");
                          if (selectedPackageFilter === "PRO") return m.package.includes("PRO");
                          return true;
                        })
                        .map((m, idx) => (
                          <tr key={idx} className="hover:bg-white/[0.01] transition-all">
                            <td className="py-2.5 text-white/80 ">{m.id}</td>
                            <td className="py-2.5">
                              <span className={m.package.includes("PLUS") ? "text-[#f4cf8a]/90 font-medium" : m.package.includes("PRO") ? "text-amber-500 font-semibold" : "text-white/40"}>
                                {m.package}
                              </span>
                            </td>
                            <td className="py-2.5 text-right  text-white/95">{m.transferred === 0 ? "—" : `RM ${m.transferred}`}</td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                  
                  {members.filter(m => {
                    if (selectedPackageFilter === "ALL") return true;
                    if (selectedPackageFilter === "FREE") return m.package.includes("FREE") || m.package.includes("BASIC");
                    if (selectedPackageFilter === "PLUS") return m.package.includes("PLUS");
                    if (selectedPackageFilter === "PRO") return m.package.includes("PRO");
                    return true;
                  }).length === 0 && (
                    <div className="text-center py-6 text-[10px] text-white/35 ">
                      No active sub-nodes matching this priority tier.
                    </div>
                  )}
                </div>

                <div 
                  onClick={() => {
                    setSelectedPackageFilter("ALL");
                    triggerToast("Displaying complete allocation portfolio.");
                  }}
                  className="pt-2 border-t border-white/[0.03] text-center sm:text-left"
                >
                  <span className="text-[10px] tracking-wider  text-[#f4cf8a]/80 hover:text-white transition cursor-pointer select-none">
                    View complete network ➔
                  </span>
                </div>
              </div>

              {/* THREE DETAILED STATISTICS WIDGET BLOCKS */}
              <div className="lg:col-span-6 space-y-4">
                
                {/* Statistics Card 1: TOTAL SUBSCRIPTION FLOW */}
                <div className="rounded-xl border border-white/[0.05] bg-[#0c090a]/40 p-5 flex items-center justify-between shadow-md relative group select-none">
                  <div className="space-y-4 max-w-[70%]">
                    <div className="text-[9px]  tracking-[0.25em] text-[#f4cf8a] uppercase">
                      Cumulative Connected AUM
                    </div>
                    <div>
                      <div className="text-2xl font-light tracking-tight text-white mb-1">
                        RM {subscriptionFlow.toLocaleString()}
                      </div>
                      <p className="text-[9.5px] leading-relaxed text-white/40">
                        Aggregate asset allocation validated across active sub-node interfaces.
                      </p>
                    </div>
                  </div>

                  {/* Circular Gold Coin Stamp Badge: RM */}
                  <div className="w-12 h-12 rounded-full border border-[#f4cf8a]/30 bg-[#f4cf8a]/5 flex items-center justify-center text-[#f4cf8a]  text-[10px] tracking-widest font-bold shadow-[0_0_15px_rgba(244,207,138,0.06)] group-hover:scale-105 group-hover:border-[#f4cf8a]/50 transition duration-300">
                    RM
                  </div>
                </div>

                {/* Statistics Card 2: TEAM EXCHANGE PROFIT (WITH GRADIENT SPARKLINES) */}
                <div className="rounded-xl border border-white/[0.05] bg-[#0c090a]/40 p-5 flex items-center justify-between shadow-md relative group select-none overflow-hidden">
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(244,207,138,0.01)_1px,transparent_1px)] bg-[size:100%_12px] opacity-10" />
                  
                  <div className="space-y-4 max-w-[60%] relative z-10">
                    <div className="text-[9px]  tracking-[0.25em] text-[#f4cf8a] uppercase">
                      Routing Arbitrage Profit
                    </div>
                    <div>
                      <div className="text-2xl font-light tracking-tight text-[#f4cf8a] mb-1">
                        ${teamProfit.toLocaleString()}
                      </div>
                      <p className="text-[9.5px] leading-relaxed text-white/40">
                        Aggregated arbitrage yield from synchronized sub-node liquidities.
                      </p>
                    </div>
                  </div>

                  {/* Gorgeous gold neon sparkline chart drawing */}
                  <div className="w-[120px] h-[50px] relative shrink-0">
                    <svg className="w-full h-full text-[#f4cf8a]" viewBox="0 0 120 50">
                      <defs>
                        <linearGradient id="glow-grad-profit" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#f4cf8a" stopOpacity="0.25" />
                          <stop offset="100%" stopColor="#f4cf8a" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>
                      <path 
                        d="M 0 45 L 20 40 L 40 42 L 60 28 L 80 32 L 100 12 L 120 8 L 120 50 L 0 50 Z" 
                        fill="url(#glow-grad-profit)" 
                      />
                      <path 
                        d="M 0 45 L 20 40 L 40 42 L 60 28 L 80 32 L 100 12 L 120 8" 
                        fill="none" 
                        stroke="#f4cf8a" 
                        strokeWidth="1.5" 
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <circle cx="120" cy="8" r="3" fill="#ffe5b0" className="animate-pulse" />
                    </svg>
                  </div>
                </div>

                {/* Statistics Card 3: TOTAL POOL VALUE */}
                <div className="rounded-xl border border-white/[0.05] bg-[#0c090a]/40 p-5 flex items-center justify-between shadow-md relative group select-none">
                  <div className="space-y-4 max-w-[70%]">
                    <div className="text-[9px]  tracking-[0.25em] text-[#f4cf8a] uppercase">
                      Liquidity Pool Capacity
                    </div>
                    <div>
                      <div className="text-2xl font-light tracking-tight text-white mb-1">
                        ${totalPoolValue.toLocaleString()}
                      </div>
                      <p className="text-[9.5px] leading-relaxed text-white/40">
                        Aggregate institutional liquidity depth on high-speed routing ledger.
                      </p>
                    </div>
                  </div>

                  {/* Circular icon with layers */}
                  <div className="w-12 h-12 rounded-full border border-white/10 bg-white/[0.02] flex items-center justify-center text-[#f4cf8a] transition duration-300 group-hover:scale-105 group-hover:border-white/20">
                    <Layers size={18} className="stroke-[1.5]" />
                  </div>
                </div>

              </div>
            </div>

            {/* 5. GORGEOUS HIGH-IMPACT HORIZONTAL PANEL (YOUR 50% PROFIT SHARE) */}
            <section className="rounded-2xl border border-[#f4cf8a]/35 bg-[linear-gradient(135deg,#0a0806_0%,#18120d_100%)] p-6 sm:p-8 relative overflow-hidden select-none shadow-[0_12px_24px_rgba(0,0,0,0.4)]">
              {/* Highlight flare backgrounds */}
              <div className="absolute right-0 top-0 h-[220px] w-[220px] bg-[#f4cf8a]/5 rounded-full blur-[80px] pointer-events-none" />
              <div className="absolute top-offset bottom-0 left-0 bg-[linear-gradient(45deg,rgba(0,0,0,0.6)_1px,transparent_1px)] bg-[size:10px_10px] opacity-20 pointer-events-none" />

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                
                {/* Left Coin Logo Stamp */}
                <div className="md:col-span-1 hidden sm:flex justify-center md:justify-start">
                  <div className="w-16 h-16 rounded-full border border-[#f4cf8a]/45 bg-[#1a120b] flex items-center justify-center text-[#f4cf8a] shadow-[0_0_20px_rgba(244,207,138,0.15)] select-none">
                    <span className="text-2xl font-light font-display">$</span>
                  </div>
                </div>

                {/* Center Profit specifications */}
                <div className="md:col-span-6 space-y-1 text-center sm:text-left">
                  <h3 className="text-[9px] tracking-[0.3em] font-medium text-[#f4cf8a] uppercase font-display">
                    Allocated Routing Performance (50%)
                  </h3>
                  <div className="text-4xl sm:text-5xl font-light tracking-tight text-white mb-2 leading-none">
                    ${profitShare.toLocaleString()}
                  </div>
                  <p className="text-[10px] text-[#f4cf8a]/70  tracking-wide leading-relaxed">
                    Prorated yield routed via smart contracts across synchronized sub-nodes.
                  </p>
                </div>

                {/* Right Area Chart display depicting continuous performance history */}
                <div className="md:col-span-5 h-[70px] w-full relative">
                  <svg className="w-full h-full text-[#f4cf8a]/80" viewBox="0 0 280 70">
                    <defs>
                      <linearGradient id="glow-your-share" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#f4cf8a" stopOpacity="0.25" />
                        <stop offset="100%" stopColor="#f4cf8a" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    <path 
                      d="M 0 65 Q 40 50 80 58 T 160 38 T 240 22 T 280 12 L 280 70 L 0 70 Z" 
                      fill="url(#glow-your-share)"
                    />
                    <path 
                      d="M 0 65 Q 40 50 80 58 T 160 38 T 240 22 T 280 12" 
                      fill="none" 
                      stroke="#f4cf8a" 
                      strokeWidth="2" 
                      strokeLinecap="round"
                    />
                    <circle cx="280" cy="12" r="3.5" fill="#ffffff" className="animate-ping" />
                    <circle cx="280" cy="12" r="3" fill="#ffd17d" />
                  </svg>
                </div>

              </div>
            </section>

            {/* 6. BOTTOM LAYER (LIQUIDITY BANDWIDTH & LIQUIDITY MATRIX CAPACITY) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* LIQUIDITY CLEARING BANDWIDTH */}
              <div className="lg:col-span-6 rounded-xl border border-white/[0.05] bg-[#0c090a]/40 p-6 flex flex-col justify-between shadow-md space-y-5 select-none">
                <div className="space-y-1">
                  <h3 className="text-[10px] tracking-[0.25em] font-medium text-[#f4cf8a] font-display uppercase">
                    Liquidity Clearing Bandwidth
                  </h3>
                </div>

                {/* Numerical rows layout */}
                <div className="space-y-2.5 font-sans text-xs">
                  <div className="flex items-center justify-between pb-1.5 border-b border-white/[0.03]">
                    <span className="text-white/40">Node Level:</span>
                    <span className="text-emerald-400 font-semibold text-sm">Genesis Node (Level Black)</span>
                  </div>
                  <div className="flex items-center justify-between pb-1.5 border-b border-white/[0.03]">
                    <span className="text-white/40">Authorized API Connections:</span>
                    <span className="text-amber-500 font-semibold text-sm">1 / 3 Links Active</span>
                  </div>
                  <div className="flex flex-col gap-1 pt-1">
                    <span className="text-[#f4cf8a] font-semibold text-[10px] tracking-wider uppercase">System Notice:</span>
                    <span className="text-white/80 text-[11px] leading-relaxed">
                      Your Genesis Node currently has 2 remaining [Retail API Interface] authorized whitelist slots. Please allocate your clearing bandwidth with absolute caution.
                    </span>
                  </div>
                </div>

                {/* Visual Logic Mapping Circles */}
                <div className="flex items-center justify-center gap-6 py-4 border-t border-white/[0.02] ">
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-12 h-12 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 font-semibold text-xs flex items-center justify-center">
                      1
                    </div>
                    <span className="text-[8px] tracking-wider text-white/30 uppercase mt-1">Active Links</span>
                  </div>

                  {/* Flow Arrow representation */}
                  <div className="flex-grow max-w-[80px] h-px bg-white/10 relative flex items-center justify-center">
                    <span className="absolute -top-3 text-[7px] text-[#f4cf8a]/50 uppercase tracking-widest  scale-90">Bandwidth</span>
                    <div className="absolute right-0 w-1 h-1 border-t border-r border-white/30 transform rotate-45" />
                  </div>

                  <div className="flex flex-col items-center gap-1">
                    <div className="w-12 h-12 rounded-full border border-[#f4cf8a]/40 bg-[#f4cf8a]/5 text-[#f4cf8a] font-semibold text-xs flex items-center justify-center shadow-[0_0_12px_rgba(244,207,138,0.1)]">
                      2
                    </div>
                    <span className="text-[8px] tracking-wider text-white/30 uppercase mt-1">Available Whitelists</span>
                  </div>
                </div>
              </div>

              {/* SOVEREIGN SCALING PROTOCOLS (SOP) */}
              <div className="lg:col-span-6 rounded-xl border border-white/[0.05] bg-[#0c090a]/40 p-6 flex flex-col justify-between shadow-md space-y-4">
                <div className="space-y-1 select-none">
                  <h3 className="text-[10px] tracking-[0.25em] font-medium text-[#f4cf8a] font-display uppercase">
                    Sovereign Co-Routing SOP
                  </h3>
                  <p className="text-[9px] text-white/35 lowercase">
                    Standard operating procedures for premium partner network expansion
                  </p>
                </div>

                {/* SOP Tabs Selection */}
                <div className="grid grid-cols-3 gap-1.5 p-1 bg-black/40 rounded-lg border border-white/[0.03]">
                  <button 
                    type="button"
                    onClick={() => {
                      setActiveSopTab("incubation");
                      triggerToast("Protocol initialized: Proof of Profit Incubation.");
                    }}
                    className={`py-2 text-[9px] tracking-widest uppercase  rounded transition-all cursor-pointer ${
                      activeSopTab === "incubation" 
                        ? "bg-[#f4cf8a]/10 text-[#f4cf8a] border border-[#f4cf8a]/20 font-semibold" 
                        : "text-white/40 hover:text-white/70"
                    }`}
                  >
                    Incubate
                  </button>
                  <button 
                    type="button"
                    onClick={() => {
                      setActiveSopTab("scarcity");
                      triggerToast("Protocol initialized: Network Scarcity Limits.");
                    }}
                    className={`py-2 text-[9px] tracking-widest uppercase  rounded transition-all cursor-pointer ${
                      activeSopTab === "scarcity" 
                        ? "bg-[#f4cf8a]/10 text-[#f4cf8a] border border-[#f4cf8a]/20 font-semibold" 
                        : "text-white/40 hover:text-white/70"
                    }`}
                  >
                    Limit
                  </button>
                  <button 
                    type="button"
                    onClick={() => {
                      setActiveSopTab("briefing");
                      triggerToast("Protocol initialized: Closed-Door Assistance.");
                    }}
                    className={`py-2 text-[9px] tracking-widest uppercase  rounded transition-all cursor-pointer ${
                      activeSopTab === "briefing" 
                        ? "bg-[#f4cf8a]/10 text-[#f4cf8a] border border-[#f4cf8a]/20 font-semibold" 
                        : "text-white/40 hover:text-white/70"
                    }`}
                  >
                    Assist
                  </button>
                </div>

                {/* Tab content space with high-contrast text layout */}
                <div className="flex-grow flex flex-col justify-center min-h-[140px] bg-black/20 p-4 rounded-xl border border-white/[0.02]">
                  <AnimatePresence mode="wait">
                    {activeSopTab === "incubation" && (
                      <motion.div
                        key="incubation"
                        initial={{ opacity: 0, x: 8 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -8 }}
                        transition={{ duration: 0.15 }}
                        className="space-y-3"
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-[10px]  bg-[#f4cf8a]/10 text-[#f4cf8a] px-2 py-0.5 rounded uppercase tracking-wider">
                            SOP 01
                          </span>
                          <span className="text-white font-medium text-xs tracking-wide">
                            Proof of Profit (14-Day Incubation)
                          </span>
                        </div>
                        <p className="text-[11px] text-white/50 leading-relaxed text-justify">
                          Maintain zero external disclosure for the first 14 days of activation. Allow your automated arbitrage ledger to generate verified consistent returns (<span className="text-emerald-400 font-semibold">+0.5% to +0.8% daily</span>) in your private terminal. Let the objective yield performance establish absolute trust before allocating bandwidth to external peers.
                        </p>
                        <div className="text-[10.5px] text-[#f4cf8a]/70  tracking-wider bg-white/[0.01] p-2 rounded border border-white/[0.02]">
                          🎯 Mode: Verify actual private ledger yields before allocating credentials.
                        </div>
                      </motion.div>
                    )}

                    {activeSopTab === "scarcity" && (
                      <motion.div
                        key="scarcity"
                        initial={{ opacity: 0, x: 8 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -8 }}
                        transition={{ duration: 0.15 }}
                        className="space-y-3"
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-[10px]  bg-[#f4cf8a]/10 text-[#f4cf8a] px-2 py-0.5 rounded uppercase tracking-wider">
                            SOP 02
                          </span>
                          <span className="text-white font-medium text-xs tracking-wide">
                            Limit Matrix Allocations (Scarcity Strategy)
                          </span>
                        </div>
                        <p className="text-[11px] text-white/50 leading-relaxed text-justify">
                          Access bandwidth is strictly restricted to <span className="text-amber-500 font-semibold">3 active sub-node channels</span> per core Genesis server. Maintain this quota strictly to protect local routing priority speeds. This enhances scarcity and encourages allocating connections exclusively to maximum-tier partners.
                        </p>
                        <div className="text-[10.5px] text-[#f4cf8a]/70  tracking-wider bg-white/[0.01] p-2 rounded border border-white/[0.02]">
                          ⚡ Notice: Limited high-priority whitelist slots ensure supreme connection speed.
                        </div>
                      </motion.div>
                    )}

                    {activeSopTab === "briefing" && (
                      <motion.div
                        key="briefing"
                        initial={{ opacity: 0, x: 8 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -8 }}
                        transition={{ duration: 0.15 }}
                        className="space-y-3"
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-[10px]  bg-[#f4cf8a]/10 text-[#f4cf8a] px-2 py-0.5 rounded uppercase tracking-wider">
                            SOP 03
                          </span>
                          <span className="text-white font-medium text-xs tracking-wide">
                            Technical Co-Clearing (Assist Protocol)
                          </span>
                        </div>
                        <p className="text-[11px] text-white/50 leading-relaxed text-justify">
                          Avoid raw sales pitches or complicated high-frequency explanations directly. Rely on our Technical Advisory program: organize closed-door sessions with qualified candidates, and let our infrastructure engineering experts present our cold-storage, live arbitration, and sandbox physical isolation layers.
                        </p>
                        <div className="text-[10.5px] text-[#f4cf8a]/70  tracking-wider bg-white/[0.01] p-2 rounded border border-white/[0.02]">
                          👔 Assist: We guide technical validation; you manage executive strategic trust.
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

            </div>

            {/* 7. ABOUT XENITH & ROTATING X-AI FRAMEWORK NET-SPHERE */}
            <section className="rounded-xl border border-white/[0.05] bg-[#0c090a]/30 p-6 flex flex-col md:flex-row items-stretch justify-between shadow-md gap-6 select-none font-sans">
              <div className="md:max-w-[55%] flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-[10px] tracking-[0.25em] font-medium text-[#f4cf8a] uppercase font-display">
                    About Xenith
                  </h3>
                  <p className="text-xs leading-relaxed text-white/50 text-justify">
                    Xenith is an AI-powered tool built to help you manage digital assets securely through real-time data, strategy automation, and advanced API connectivity.
                  </p>
                </div>
              </div>

              {/* Wireframe Rotating Sphere box */}
              <div className="flex-grow rounded-lg border border-white/[0.04] bg-[#070505] p-5 flex items-center justify-between hover:border-white/10 transition duration-300">
                <span className="text-[10px] tracking-[0.22em] text-white/60  uppercase pl-2">
                  X-AI Framework
                </span>

                {/* Simulated spinning hologram net sphere inside custom container */}
                <div className="w-16 h-16 relative flex items-center justify-center shrink-0">
                  <div className="absolute inset-0 rounded-full border border-[#f4cf8a]/20 animate-spin [animation-duration:10s]" />
                  <div className="absolute inset-1.5 rounded-full border border-dashed border-[#f4cf8a]/10 animate-spin [animation-duration:5s] [animation-direction:reverse]" />
                  <div className="absolute inset-4 rounded-full border border-white/5 animate-ping [animation-duration:3s]" />
                  
                  {/* Glowing center hub */}
                  <div className="w-3.5 h-3.5 rounded-full bg-[#f4cf8a] shadow-[0_0_15px_rgba(244,207,138,0.8)] z-10" />
                  
                  {/* Orbital lines */}
                  <div className="absolute w-[1px] h-full bg-[#f4cf8a]/15 transform rotate-45 transform-origin-center animate-pulse" />
                  <div className="absolute w-[1px] h-full bg-[#f4cf8a]/15 transform -rotate-45 transform-origin-center animate-pulse" />
                </div>
              </div>
            </section>

            {/* 8. FOOTER STAMP */}
            <footer className="pt-8 border-t border-white/[0.03] text-center text-[9px] tracking-[0.3em] text-white/20 uppercase  space-y-3">
              <div>© 2025 Xenith. All rights reserved.</div>
              <div className="flex justify-center gap-4 text-white/40 hover:text-white/60 transition text-[8.5px]">
                <span>Privacy Policy</span>
                <span>|</span>
                <span>Terms of Service</span>
                <span>|</span>
                <span>Support</span>
              </div>
            </footer>

          </div>
        )}
      </main>
    </div>
  );
}
