import React, { useState } from "react";
import { 
  Check, 
  HelpCircle, 
  Sparkles, 
  ArrowRight, 
  Loader2, 
  ShieldAlert,
  Inbox,
  ArrowUpRight,
  Shield,
  Eye,
  Lock,
  Cpu,
  Menu,
  X
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import XenithLogo from "./XenithLogo";

interface PricingPageProps {
  onBackToHome: () => void;
  onNavigateProduct: () => void;
  onNavigateTechnology: () => void;
  onNavigateCompany: () => void;
  onNavigateNews: () => void;
  onTryXenith: () => void;
  onTriggerWorkspace: (prompt: string) => void;
}

interface PlanItem {
  id: string;
  name: string;
  priceMonthly: number | string;
  priceAnnual: number | string;
  tagline: string;
  isPopular: boolean;
  features: string[];
  ctaText: string;
  actionValue: string;
}

export default function PricingPage({
  onBackToHome,
  onNavigateProduct,
  onNavigateTechnology,
  onNavigateCompany,
  onNavigateNews,
  onTryXenith,
  onTriggerWorkspace,
}: PricingPageProps) {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("annual");
  const [enrollingPlanName, setEnrollingPlanName] = useState<string | null>(null);
  const [verificationSuccess, setVerificationSuccess] = useState(false);
  const [formInputs, setFormInputs] = useState({ companyName: "", ledgerAddr: "0x8fa1...9e45" });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showAllPlans, setShowAllPlans] = useState(false);
  const [mobileCompareTab, setMobileCompareTab] = useState<"basic" | "plus" | "pro">("plus");

  const plans: PlanItem[] = [
    {
      id: "starter",
      name: "BASIC NODE",
      priceMonthly: 0,
      priceAnnual: 0,
      tagline: "Entry-level node for autonomous trading and sandbox evaluation.",
      isPopular: false,
      features: [
        "Autonomous Execution (Sandbox)",
        "Basic AI Market Ingestion",
        "Passive Portfolio Monitoring",
        "Pre-Emptive Risk Alerts"
      ],
      ctaText: "Start Free Trial",
      actionValue: "Initialize 0 USD Retail Experience tier and explore trial features."
    },
    {
      id: "basic",
      name: "PLUS NODE",
      priceMonthly: 19.9,
      priceAnnual: 15.9,
      tagline: "Advanced stratum with multi-agent orchestration and dynamic capital routing.",
      isPopular: true,
      features: [
        "Advanced Market Intelligence",
        "Multi-Agent Coordination",
        "Automated Capital Allocation",
        "Active Smart Risk Shields",
        "Gateway & Webhook Tunnels"
      ],
      ctaText: "Choose Plus Node",
      actionValue: "Become Plus Node Member and unlock premium features."
    },
    {
      id: "pro",
      name: "PRO NODE",
      priceMonthly: 199,
      priceAnnual: 159,
      tagline: "Institutional infrastructure delivering dedicated speed execution and API suites.",
      isPopular: false,
      features: [
        "Dedicated Speed-Lane Engine",
        "Institutional Order Routing",
        "Unlimited Capital Capacity",
        "Full REST & WebSocket APIs",
        "Dedicated Bare-Metal Node"
      ],
      ctaText: "Activate Pro Node",
      actionValue: "Request Pro Node workspace and verify strict rules."
    },
    {
      id: "genesis",
      name: "GENESIS NODE (Invite-Only)",
      priceMonthly: "Invite",
      priceAnnual: "Invite",
      tagline: "Bespoke liquidity structures for sovereign institutional partners.",
      isPopular: false,
      features: [
        "Infinite Agent Concurrency",
        "Custom Drawdown Guard Models",
        "Direct On-Site Deployment",
        "Exclusive Pre-Release Models"
      ],
      ctaText: "Request Invite",
      actionValue: "Apply for exclusive GENESIS NODE entry pass."
    }
  ];

  const handleCtaClick = (plan: PlanItem) => {
    setEnrollingPlanName(plan.name);
    setVerificationSuccess(false);
  };

  const submitEnrollment = (e: React.FormEvent) => {
    e.preventDefault();
    setVerificationSuccess(true);
    setTimeout(() => {
      onTriggerWorkspace(`Configure and initiate my new account as a: ${enrollingPlanName || "Sovereign Member"} under ${billingCycle} billing billing rules.`);
      setEnrollingPlanName(null);
    }, 1600);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="min-h-screen bg-[#060505] text-white font-sans relative overflow-x-hidden selection:bg-[#f4cf8a]/30 selection:text-[#f4cf8a]"
    >
      {/* Absolute Glow Backgrounds matching the uploaded image */}
      <div className="absolute top-0 right-0 w-[55%] h-[700px] pointer-events-none z-0 bg-[radial-gradient(circle_at_85%_15%,rgba(229,193,133,0.18),transparent_55%)] blur-[95px]" />
      <div className="absolute top-[25%] left-[-10%] w-[50%] h-[700px] pointer-events-none z-0 bg-[radial-gradient(circle_at_20%_40%,rgba(255,255,255,0.015),transparent_45%)] blur-[100px]" />
      <div className="absolute top-[45%] right-[-15%] w-[60%] h-[950px] pointer-events-none z-0 bg-[radial-gradient(circle_at_90%_50%,rgba(229,193,133,0.12),transparent_50%)] blur-[110px]" />
      <div className="absolute bottom-0 left-[10%] w-[80%] h-[600px] pointer-events-none z-0 bg-[radial-gradient(circle_at_50%_90%,rgba(229,193,133,0.08),transparent_60%)] blur-[120px]" />

      {/* Grid Pattern overlays */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:100%_120px] pointer-events-none opacity-20 z-0" />
      <div className="absolute inset-x-0 top-0 h-[600px] bg-[linear-gradient(90deg,rgba(255,255,255,0.007)_1px,transparent_1px)] bg-[size:40px_100%] pointer-events-none opacity-20 z-0" />

      {/* Thin line circle vectors seen in the design */}
      <div className="absolute top-[220px] left-1/2 -translate-x-[40%] w-[620px] h-[620px] rounded-full border border-white/[0.018] pointer-events-none z-0 animate-[spin_120s_linear_infinite]" />
      <div className="absolute top-[900px] left-1/2 -translate-x-[60%] w-[820px] h-[820px] rounded-full border border-[#f4cf8a]/[0.012] pointer-events-none z-0 animate-[spin_180s_linear_infinite]" />

      {/* Navigation Header */}
      <header className="relative z-20 border-b border-white/[0.04] bg-black/10 backdrop-blur-md text-xs tracking-[0.11em] text-white/45">
        <div className="flex items-center justify-between px-5 sm:px-8 py-5">
          <div className="flex items-center gap-9">
            <div 
              className="flex items-center gap-2.5 cursor-pointer group select-none" 
              onClick={() => {
                onBackToHome();
                setIsMobileMenuOpen(false);
              }}
            >
              <XenithLogo size={30} className="opacity-90 group-hover:opacity-100 transition duration-300" />
              <span className="text-sm font-semibold tracking-[0.4em] text-white group-hover:text-[#f4cf8a] transition duration-300 font-display">Xenith</span>
            </div>
            <nav className="hidden items-center gap-7 lg:flex">
              <a className="hover:text-white transition cursor-pointer" onClick={onNavigateProduct}>Product</a>
              <a className="hover:text-white transition cursor-pointer" onClick={onNavigateTechnology}>Technology</a>
              <a className="text-white border-b border-[#f4cf8a]/60 pb-1 cursor-pointer transition font-medium">Pricing</a>
              <a className="hover:text-white transition cursor-pointer" onClick={onNavigateCompany}>Company</a>
              <a className="hover:text-white transition cursor-pointer" onClick={onNavigateNews}>News</a>
            </nav>
          </div>
          <div className="flex items-center gap-3">
            <button 
              onClick={onTryXenith}
              className="hidden sm:inline-block rounded-full border border-white/15 px-6 py-2.5 text-white/80 hover:border-[#f4cf8a]/60 hover:text-white transition cursor-pointer shadow-sm hover:shadow-[#f4cf8a]/5 text-[11px] tracking-wider"
            >
              Try Xenith
            </button>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-white/80 p-2 hover:text-[#f4cf8a] transition cursor-pointer flex items-center justify-center border border-white/10 rounded bg-white/[0.02]"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="border-t border-white/[0.04] bg-[#060505]/98 backdrop-blur-lg lg:hidden overflow-hidden"
            >
              <nav className="flex flex-col px-8 py-6 gap-5 text-xs tracking-[0.1em]">
                <a 
                  className="text-white/60 hover:text-white pl-3 py-2.5 cursor-pointer transition" 
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onNavigateProduct();
                  }}
                >
                  Product
                </a>
                <a 
                  className="text-white/60 hover:text-white pl-3 py-2.5 cursor-pointer transition" 
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onNavigateTechnology();
                  }}
                >
                  Technology
                </a>
                <a 
                  className="text-white border-l-2 border-[#f4cf8a] pl-3 font-medium py-2.5 cursor-pointer transition" 
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Pricing
                </a>
                <a 
                  className="text-white/60 hover:text-white pl-3 py-2.5 cursor-pointer transition" 
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onNavigateCompany();
                  }}
                >
                  Company
                </a>
                <a 
                  className="text-white/60 hover:text-white pl-3 py-2.5 cursor-pointer transition" 
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onNavigateNews();
                  }}
                >
                  News
                </a>
                <div className="pt-4 border-t border-white/[0.05] sm:hidden">
                  <button 
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      onTryXenith();
                    }}
                    className="w-full text-center rounded-full border border-white/10 bg-[#f4cf8a]/10 px-6 py-3 text-[#f4cf8a] hover:bg-[#f4cf8a]/20 transition cursor-pointer text-[11px] tracking-wider font-semibold"
                  >
                    Try Xenith
                  </button>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 py-20 lg:py-24">
        
        {/* HERO HEADER */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="mb-6 text-[10px] md:text-xs uppercase tracking-[0.12em] text-[#f4cf8a]/65 font-sans">
            [ Pricing ]
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-[-0.04em] leading-[1.08] mb-6 font-display">
            Alpha Node Pricing:<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffd17d] to-[#e4a84b]">Unchain Your Capital</span>
          </h1>
          <p className="text-xs uppercase tracking-wider text-[#f4cf8a] max-w-xl mx-auto leading-relaxed font-sans font-medium">
            Zero Custody Risk. Pay SAI Gas Fee. Generate Non-Symmetric Returns.
          </p>

          {/* Elegant Billing Cycle Switcher */}
          <div className="mt-8 flex flex-col items-center justify-center space-y-4">
            <div className="inline-flex items-center gap-1 rounded-full bg-white/[0.02] p-1 border border-white/[0.05]">
              <button
                onClick={() => setBillingCycle("monthly")}
                className={`rounded-full px-4 py-1.5 text-[10px] font-sans uppercase tracking-wider transition duration-250 cursor-pointer ${
                  billingCycle === "monthly" 
                    ? "bg-[#f4cf8a] text-black font-semibold shadow-md" 
                    : "text-white/60 hover:text-white"
                }`}
              >
                Monthly Billing
              </button>
              <button
                onClick={() => setBillingCycle("annual")}
                className={`rounded-full px-4 py-1.5 text-[10px] font-sans uppercase tracking-wider transition duration-250 cursor-pointer flex items-center gap-1.5 ${
                  billingCycle === "annual" 
                    ? "bg-[#f4cf8a] text-black font-semibold shadow-md" 
                    : "text-white/60 hover:text-white"
                }`}
              >
                <span>Annual Pricing</span>
                <span className={`px-2 py-0.5 rounded-full text-[8.5px] font-bold tracking-normal transition-colors duration-250 ${
                  billingCycle === "annual"
                    ? "bg-black text-[#f4cf8a] shadow-sm font-extrabold"
                    : "bg-[#f4cf8a]/10 text-[#f4cf8a] border border-[#f4cf8a]/20"
                }`}>
                  -20%
                </span>
              </button>
            </div>
            <p className="text-[10px] uppercase tracking-[0.1em] text-white/40 font-sans">
              Save up to $360 per year with sovereign multi-month accounts
            </p>
          </div>
        </div>

        {/* PRICING CARDS */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 items-stretch mb-6 gap-6 transition-all duration-300 ${
          showAllPlans ? "lg:grid-cols-4" : "lg:grid-cols-3 max-w-5xl mx-auto"
        }`}>
          {plans.map((plan) => {
            const hasPrice = typeof plan.priceMonthly === "number" && plan.priceMonthly > 0;
            const price = billingCycle === "annual" ? plan.priceAnnual : plan.priceMonthly;
            const isGenesis = plan.id === "genesis";

            if (isGenesis && !showAllPlans) {
              return null;
            }

            return (
              <div 
                key={plan.id}
                className={`flex flex-col justify-between p-7 rounded-xl border relative transition-all duration-300 ${
                  isGenesis
                    ? "border-[#e5c185]/20 bg-[#070505] shadow-[0_24px_48px_rgba(229,193,133,0.02)] hover:border-[#ffd17d]/40"
                    : plan.isPopular 
                      ? "border-[#f4cf8a]/40 bg-[#0b0808]/50 shadow-[0_24px_48px_rgba(244,207,138,0.03)]" 
                      : "border-white/[0.04] bg-[#0c0a0a]/20 hover:border-white/[0.08]"
                }`}
              >
                {plan.isPopular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-[#e5c185] text-black font-sans text-[8px] font-bold tracking-[0.1em] px-3.5 py-1 rounded-full shadow-sm">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="space-y-6">
                  {/* Top Header */}
                  <div>
                    <span className="text-xs font-sans tracking-wide text-[#f4cf8a]/60 block mb-1 min-h-[40px]">
                      {plan.name}
                    </span>
                    <p className="text-xs text-white/40 font-sans leading-relaxed min-h-[48px]">
                      {plan.tagline}
                    </p>
                  </div>

                  {/* Price Block */}
                  <div className="py-4 border-y border-white/[0.04] flex items-baseline gap-1">
                    {typeof price === "string" ? (
                      <span className="text-3xl md:text-4xl font-light tracking-tight text-[#f4cf8a] font-display">
                        {price}
                      </span>
                    ) : hasPrice ? (
                      <>
                        <span className="text-3xl md:text-4xl font-light tracking-tight text-white font-display">
                          $ {price}
                        </span>
                        <span className="text-[9px] font-sans tracking-wide text-white/35 ml-1">
                          / mo
                        </span>
                      </>
                    ) : (
                      <>
                        <span className="text-3xl md:text-4xl font-light tracking-tight text-white font-display">
                          $ 0
                        </span>
                        <span className="text-[9px] font-sans tracking-wide text-white/35 ml-1">
                          / Trial
                        </span>
                      </>
                    )}
                  </div>

                  {/* Features List */}
                  <ul className="space-y-3.5 pt-2">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-xs text-white/60">
                        <Check size={13} className="text-[#e5c185] shrink-0 mt-0.5 stroke-[2]" />
                        <span className="leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                 {/* Call To Action */}
                <div className="pt-8 w-full">
                  <button
                    onClick={() => handleCtaClick(plan)}
                    className={`w-full rounded-full py-3.5 text-[10px] font-bold tracking-[0.06em] transition-all duration-300 cursor-pointer ${
                      plan.isPopular 
                        ? "bg-white text-black hover:bg-[#ffe5b0]" 
                        : "border border-white/10 text-white/80 hover:border-white/20 hover:text-white bg-white/[0.01]"
                    }`}
                  >
                    {plan.ctaText}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* See All Plans toggle button */}
        <div className="flex justify-center mb-10 sm:mb-14 pt-2">
          <button
            onClick={() => setShowAllPlans(!showAllPlans)}
            className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.01] hover:bg-white/[0.04] hover:border-white/20 transition-all px-8 py-3 text-[10px] font-sans tracking-[0.06em] text-[#f4cf8a] hover:text-[#ffd17d] cursor-pointer shadow-lg"
          >
            <span>{showAllPlans ? "Hide Extra Plans" : "See All Plans"}</span>
            <ArrowRight size={11} className={`transition-transform duration-300 ${showAllPlans ? "rotate-90" : ""}`} />
          </button>
        </div>

        {/* COMPARISON TABLE */}
        <div className="border-t border-white/[0.05] pt-12 sm:pt-16 mb-12 sm:mb-16">
          <div className="mb-10">
            <div className="text-[10px] font-sans tracking-[0.12em] text-[#f4cf8a]/65 mb-2">
              [ Compare ]
            </div>
            <h2 className="text-xl md:text-2xl font-light font-display text-white">
              Every detail, side-by-side.
            </h2>
          </div>

          {/* Mobile Optimized Tab View */}
          <div className="sm:hidden space-y-5">
            <div className="flex rounded-lg bg-white/[0.02] p-1 border border-white/[0.05]">
              {(["basic", "plus", "pro"] as const).map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setMobileCompareTab(tab)}
                  className={`flex-1 text-center py-2 text-[10px] font-sans uppercase tracking-wider rounded-md transition-all cursor-pointer ${
                    mobileCompareTab === tab
                      ? "bg-[#f4cf8a]/10 text-[#f4cf8a] border border-[#f4cf8a]/15 font-semibold"
                      : "text-white/40 hover:text-white/70"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="border border-white/[0.04] bg-[#0c0a0a]/35 rounded-xl p-5 space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-white/[0.03]">
                <span className="text-[10px] uppercase font-sans tracking-wider text-white/40">Autonomous Execution</span>
                <span className="text-xs text-white font-medium text-right font-sans">
                  {mobileCompareTab === "basic" && "Sandbox Simulation"}
                  {mobileCompareTab === "plus" && "Fully Autonomous"}
                  {mobileCompareTab === "pro" && "High-Frequency Multi-Strategy"}
                </span>
              </div>

              <div className="flex justify-between items-center py-2 border-b border-white/[0.03]">
                <span className="text-[10px] uppercase font-sans tracking-wider text-white/40">AI Market Intelligence</span>
                <span className="text-xs text-white font-medium text-right font-sans">
                  {mobileCompareTab === "basic" && "Basic Ingestion"}
                  {mobileCompareTab === "plus" && "Sentiment & Volatility"}
                  {mobileCompareTab === "pro" && "Continuous Live Feed"}
                </span>
              </div>

              <div className="flex justify-between items-center py-2 border-b border-white/[0.03]">
                <span className="text-[10px] uppercase font-sans tracking-wider text-white/40">AGI Decision & Allocation</span>
                <span className="text-xs font-sans font-semibold text-right text-[#e5c185]">
                  {mobileCompareTab === "basic" && "Manual Strategy"}
                  {mobileCompareTab === "plus" && "Auto Exposure Rebalancing"}
                  {mobileCompareTab === "pro" && "Dynamic Capital Yield Engine"}
                </span>
              </div>

              <div className="flex justify-between items-center py-2 border-b border-white/[0.03]">
                <span className="text-[10px] uppercase font-sans tracking-wider text-white/40">AI Risk Intelligence</span>
                <span className="text-xs font-sans font-medium text-right text-[#e5c185]">
                  {mobileCompareTab === "basic" && "Standard Alerts"}
                  {mobileCompareTab === "plus" && "Exposure Cuts & Drawdown"}
                  {mobileCompareTab === "pro" && "Adaptive Protection Shield"}
                </span>
              </div>

              <div className="flex justify-between items-center py-2 border-b border-white/[0.03]">
                <span className="text-[10px] uppercase font-sans tracking-wider text-white/40">API & Infrastructure</span>
                <span className="text-xs font-sans font-medium text-right">
                  {mobileCompareTab === "basic" && "Shared Sandbox Portal"}
                  {mobileCompareTab === "plus" && "Webhook & Local Tunnels"}
                  {mobileCompareTab === "pro" && <span className="text-[#e5c185] font-semibold">REST, WebSockets & Bare-Metal</span>}
                </span>
              </div>

              <div className="flex justify-between items-center py-1">
                <span className="text-[10px] uppercase font-sans tracking-wider text-white/40">Priority Support</span>
                <span className="text-xs font-sans font-medium text-right text-white/80">
                  {mobileCompareTab === "basic" && "Community Forums"}
                  {mobileCompareTab === "plus" && "Standard Helpdesk Queue"}
                  {mobileCompareTab === "pro" && "24/7 Dedicated Quant Hotdesk"}
                </span>
              </div>
            </div>
          </div>

          {/* Desktop Table View */}
          <div className="hidden sm:block overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="border-b border-white/[0.06] text-[9px] tracking-wide font-sans text-white/40">
                  <th className="py-4 font-normal uppercase tracking-wider">Capabilities Cluster (Analysis → Decision → Execution → Risk)</th>
                  <th className="py-4 font-normal uppercase tracking-wider">Basic Node</th>
                  <th className="py-4 font-normal uppercase tracking-wider">Plus Node</th>
                  <th className="py-4 font-normal uppercase tracking-wider">Pro Node</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.03] text-xs font-sans text-white/60">
                {/* Row 1 */}
                <tr className="hover:bg-white/[0.01] transition-colors">
                  <td className="py-4.5 font-normal text-white">Autonomous Execution</td>
                  <td className="py-4.5">Sandbox Simulation</td>
                  <td className="py-4.5">Fully Automated Execution</td>
                  <td className="py-4.5 text-[#e5c185] font-semibold">High-Frequency Multi-Strategy</td>
                </tr>

                {/* Row 2 */}
                <tr className="hover:bg-white/[0.01] transition-colors">
                  <td className="py-4.5 font-normal text-white">AI Market Intelligence</td>
                  <td className="py-4.5">Basic Signal Ingestion</td>
                  <td className="py-4.5">Predictive Sentiment & Volatility Ingest</td>
                  <td className="py-4.5 text-white">Continuous Multi-Venue Live Feed</td>
                </tr>

                {/* Row 3 */}
                <tr className="hover:bg-white/[0.01] transition-colors">
                  <td className="py-4.5 font-normal text-white">AGI Decision & Allocation</td>
                  <td className="py-4.5">Manual Strategy Only</td>
                  <td className="py-4.5">Automated Exposure Rebalancing</td>
                  <td className="py-4.5 text-[#e5c185] font-semibold flex items-center gap-1.5"><Check size={14} className="stroke-[2.5]" /> <span>Dynamic Capital Yield Engine</span></td>
                </tr>

                {/* Row 4 */}
                <tr className="hover:bg-white/[0.01] transition-colors">
                  <td className="py-4.5 font-normal text-white">AI Risk Intelligence</td>
                  <td className="py-4.5">Standard Alerts</td>
                  <td className="py-4.5 text-[#e5c185]">Exposure Cuts & Live Drawdown Protect</td>
                  <td className="py-4.5 text-[#e5c185] font-semibold">Active Adaptive Protection Shield</td>
                </tr>

                {/* Row 5 */}
                <tr className="hover:bg-white/[0.01] transition-colors">
                  <td className="py-4.5 font-normal text-white">API & Infrastructure</td>
                  <td className="py-4.5">Shared Sandbox Portal</td>
                  <td className="py-4.5">Webhook Tunnels & Local Proxies</td>
                  <td className="py-4.5 text-white font-semibold">REST, WebSockets & Bare-Metal Nodes</td>
                </tr>

                {/* Row 6 */}
                <tr className="hover:bg-white/[0.01] transition-colors">
                  <td className="py-4.5 font-normal text-white">Priority Support</td>
                  <td className="py-4.5">Community Q&A Forum</td>
                  <td className="py-4.5">Standard Helpdesk Queue</td>
                  <td className="py-4.5 text-[#e5c185] font-semibold">24/7 Dedicated Quant Engineer Hotdesk</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ SECTION */}
        <div className="border-t border-white/[0.05] pt-12 sm:pt-16 mb-6 sm:mb-8">
          <div className="mb-10">
            <div className="text-[10px] font-sans tracking-[0.12em] text-[#f4cf8a]/65 mb-2">
              [ FAQ ]
            </div>
            <h2 className="text-xl md:text-2xl font-light font-display text-white">
              Institutional Intelligence Commons FAQ
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* FAQ 1 */}
            <div className="p-6.5 rounded-xl border border-white/[0.04] bg-[#0c0a0a]/25 space-y-2">
              <h4 className="text-sm font-normal text-white font-sans">
                How does XENITH differ from traditional trading bots?
              </h4>
              <p className="text-xs text-white/45 leading-relaxed">
                Traditional bots run on rigid, static rules. XENITH is an AGI-driven Autonomous Trading Intelligence System that dynamically analyzes market structures, reasons in real-time, and auto-adjusts strategies to optimize executions.
              </p>
            </div>

            {/* FAQ 2 */}
            <div className="p-6.5 rounded-xl border border-white/[0.04] bg-[#0c0a0a]/25 space-y-2">
              <h4 className="text-sm font-normal text-white font-sans">
                How do multiple AI Agents collaborate within the system?
              </h4>
              <p className="text-xs text-white/45 leading-relaxed">
                Specialized agent threads work in absolute harmony: Research parses data feeds, Strategy plans models, Execution routes orders, Risk audits capital safety, and Settlement optimizes real-world outcomes.
              </p>
            </div>

            {/* FAQ 3 */}
            <div className="p-6.5 rounded-xl border border-white/[0.04] bg-[#0c0a0a]/25 space-y-2">
              <h4 className="text-sm font-normal text-white font-sans">
                Are my assets safe and non-custodial?
              </h4>
              <p className="text-xs text-white/45 leading-relaxed">
                Absolutely. XENITH is completely non-custodial. Your funds reside strictly on your own Exchange accounts (Binance, OKX, Bybit, etc.). The system communicates using secure, trade-only API keys with withdrawal permissions physically disabled.
              </p>
            </div>

            {/* FAQ 4 */}
            <div className="p-6.5 rounded-xl border border-white/[0.04] bg-[#0c0a0a]/25 space-y-2">
              <h4 className="text-sm font-normal text-white font-sans">
                Which exchanges and API endpoints are supported?
              </h4>
              <p className="text-xs text-white/45 leading-relaxed">
                XENITH integrates with all major liquidity venues. Pro layers provide standard REST suites, high-speed WebSocket feeds, and Webhook connectivity tunnels to seamlessly power external institutional software environments.
              </p>
            </div>
          </div>
        </div>

        {/* BOTTOM CALL TO ACTION */}
        <div className="border-t border-white/[0.05] pt-12 sm:pt-16 pb-8 text-center">
          <h2 className="text-3xl md:text-5xl font-light font-display text-white mb-4 leading-tight">
            Not sure which tier fits?
          </h2>
          <p className="text-xs md:text-sm text-white/40 max-w-xl mx-auto leading-relaxed mb-9">
            Tell us about your stack and traffic profile. We&apos;ll recommend a tier — or sketch a custom plan in a 30-minute call.
          </p>
          <button 
            onClick={() => handleCtaClick(plans[1])}
            className="inline-flex items-center gap-2 rounded-full bg-white text-black px-8 py-3.5 text-xs tracking-[0.06em] font-medium hover:bg-[#ffe5b0] transition-colors duration-300 cursor-pointer shadow-sm animate-fade-in"
          >
            Contact Sales <ArrowUpRight size={14} className="stroke-[2.5]" />
          </button>
        </div>

      </div>

      {/* Footer Navigation */}
      <footer className="border-t border-white/[0.04] bg-black/40 py-12 px-8 text-xs tracking-[0.15em] text-white/40 font-sans z-10 relative">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 font-sans">
          <div className="flex items-center gap-2.5 select-none pointer-events-none">
            <XenithLogo size={20} className="opacity-60" />
            <span className="text-[10px] tracking-[0.12em] text-white/50">Xenith Labs © 2026</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-9 text-[9px] lg:text-[10px] font-sans font-semibold">
            <a onClick={onNavigateCompany} className="hover:text-white transition cursor-pointer">Company</a>
            <a onClick={onNavigateTechnology} className="hover:text-white transition cursor-pointer">Technology</a>
            <a className="text-white border-b border-[#f4cf8a]/60 pb-0.5 cursor-pointer">Pricing</a>
            <a onClick={onNavigateNews} className="hover:text-white transition cursor-pointer">News</a>
            <a href="mailto:hi@xenith.ai" className="hover:text-white transition cursor-pointer">Contact</a>
          </div>
        </div>
      </footer>

      {/* Dynamic Plan Enrollment Modal Popup */}
      <AnimatePresence>
        {enrollingPlanName && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              className="relative w-full max-w-md max-h-[90svh] overflow-y-auto rounded-3xl border border-white/[0.08] bg-[#0c0909] p-6 text-white shadow-2xl space-y-6"
            >
              {/* Internal subtle background flare */}
              <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-[#f4cf8a]/10 blur-3xl pointer-events-none" />

              <div className="flex items-center justify-between border-b border-white/[0.05] pb-4">
                <div className="flex items-center gap-2">
                  <Inbox size={14} className="text-[#f4cf8a]" />
                  <span className="text-xs tracking-[0.1em] font-sans text-white/90 font-sans">Enrollment Portal</span>
                </div>
                <button 
                  onClick={() => setEnrollingPlanName(null)}
                  className="rounded-full border border-white/5 p-1 text-white/35 hover:text-white hover:border-white/20 transition cursor-pointer"
                >
                  <Inbox size={12} className="rotate-45" />
                </button>
              </div>

              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-[10px] tracking-[0.06em] text-[#f4cf8a]/60 font-sans font-sans font-semibold">Selected Plan</div>
                  <h4 className="text-xl font-medium text-white font-display mt-1">{enrollingPlanName}</h4>
                  <p className="text-[10px] font-sans text-white/40 tracking-wider">
                    {billingCycle === "annual" ? "Annual Settlement Compliant" : "Month-to-Month Routing"}
                  </p>
                </div>

                <form onSubmit={submitEnrollment} className="space-y-4 font-sans">
                  <div>
                    <label className="block text-[8px] tracking-wide text-white/40 font-sans mb-1.5 font-semibold">Company or Your Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="e.g. Jane Doe"
                      className="w-full bg-black/60 border border-white/5 focus:border-[#f4cf8a]/40 rounded-xl px-4 py-3 placeholder:text-white/20 text-base sm:text-xs outline-none text-white font-sans transition"
                      value={formInputs.companyName}
                      onChange={e => setFormInputs({...formInputs, companyName: e.target.value})}
                    />
                  </div>

                  <div>
                    <label className="block text-[8px] tracking-wide text-white/40 font-sans mb-1.5 font-semibold">Ethereum Address (Simulated)</label>
                    <input 
                      required
                      type="text"
                      className="w-full bg-black/60 border border-white/5 focus:border-[#f4cf8a]/40 rounded-xl px-4 py-3 text-base sm:text-xs outline-none text-white font-sans transition"
                      value={formInputs.ledgerAddr}
                      onChange={e => setFormInputs({...formInputs, ledgerAddr: e.target.value})}
                    />
                  </div>

                  <div className="bg-[#f4cf8a]/5 border border-[#f4cf8a]/10 rounded-xl p-3 text-[10px] leading-relaxed text-[#f4cf8a]/75 flex items-start gap-2">
                    <ShieldAlert size={14} className="shrink-0 mt-0.5" />
                    <span>Signing this request unlocks your profile instantly. All trial components are safely generated in simulation mode so you can practice without spending real funds.</span>
                  </div>

                  <button 
                    type="submit"
                    className="w-full rounded-xl bg-gradient-to-r from-[#ffd17d] to-[#e4a84b] text-black text-[10px] font-semibold py-3.5 mt-2 transition duration-200 cursor-pointer flex items-center justify-center gap-2 shadow tracking-[0.1em]"
                  >
                    {verificationSuccess ? (
                      <>
                        <Loader2 size={12} className="animate-spin text-black" />
                        <span>Initializing Workspace...</span>
                      </>
                    ) : (
                      "Confirm Enrollment"
                    )}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </motion.div>
  );
}
