import React, { useState } from "react";
import { 
  Check, 
  HelpCircle, 
  Sparkles, 
  ArrowRight, 
  Loader2, 
  ShieldAlert,
  Inbox
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface PlanItem {
  name: string;
  priceMonthly: number | string;
  priceAnnual: number | string;
  tagline: string;
  isPopular: boolean;
  features: string[];
  ctaText: string;
  actionValue: string;
}

export default function PricingTable({ onTriggerWorkspace }: { onTriggerWorkspace: (prompt: string) => void }) {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("annual");
  const [enrollingPlanName, setEnrollingPlanName] = useState<string | null>(null);
  const [verificationSuccess, setVerificationSuccess] = useState(false);
  const [formInputs, setFormInputs] = useState({ companyName: "", ledgerAddr: "0x8fa1...9e45" });
  const [showAllPlans, setShowAllPlans] = useState(false);

  const plans: PlanItem[] = [
    {
      name: "BASIC NODE",
      priceMonthly: 0,
      priceAnnual: 0,
      tagline: "Dedicated entry pool for Malaysian retail traders with a RM 500 trial quota maximum.",
      isPopular: false,
      features: [
        "RM 500 trial limit for sandbox transactions",
        "Beginner-friendly digital finance sandbox",
        "Xenith smart exploration assistant",
        "Simple, clear indicators and plain reports"
      ],
      ctaText: "Start Free Trial",
      actionValue: "Initialize 0 RM Retail Experience tier and explore trial features."
    },
    {
      name: "PLUS NODE",
      priceMonthly: 89,
      priceAnnual: 71,
      tagline: "Optimized AI Node for retail traders. Seamless performance with zero custody risk.",
      isPopular: true,
      features: [
        "Base AI Frequency",
        "Standard Spread Capture",
        "Standard Gas Fee"
      ],
      ctaText: "Choose Plus Node",
      actionValue: "Become Plus Node Member and unlock premium features."
    },
    {
      name: "PRO NODE",
      priceMonthly: 890,
      priceAnnual: 712,
      tagline: "For high-volume accounts. Precision mining, unlimited capacity, and dual-engine backup configuration to ensure zero downtime.",
      isPopular: false,
      features: [
        "Enhanced Dark Pool Routing",
        "Millisecond Order Priority",
        "Reduced Gas Fee",
        "Access Advanced Analytics"
      ],
      ctaText: "Activate Pro Node",
      actionValue: "Request Pro Node workspace and verify strict rules."
    },
    {
      name: "GENESIS NODE (Invite-Only) - LIMIT 30 SEATS",
      priceMonthly: "Invite",
      priceAnnual: "Invite",
      tagline: "Premium institutional node for sovereign liquidity, limited to 30 active licenses.",
      isPopular: false,
      features: [
        "Institutional Maker Rebates",
        "Global SAI Gas Dividend",
        "Ecosystem Co-Founder Rights",
        "Dedicated Premium Support",
        "Access Pre-Launch Product"
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
    <div id="pricing-matrix" className="space-y-12">
      
      {/* Billing Selector Tab */}
      <div className="flex flex-col items-center justify-center space-y-4">
        <div className="inline-flex items-center gap-1 rounded-full bg-white/[0.02] p-1 border border-white/[0.05]">
          <button
            onClick={() => setBillingCycle("monthly")}
            className={`rounded-full px-4 py-1.5 text-[10px]  uppercase tracking-wider transition duration-250 cursor-pointer ${
              billingCycle === "monthly" 
                ? "bg-[#f4cf8a] text-black font-semibold shadow-md" 
                : "text-white/60 hover:text-white"
            }`}
          >
            Monthly Billing
          </button>
          <button
            onClick={() => setBillingCycle("annual")}
            className={`rounded-full px-4 py-1.5 text-[10px]  uppercase tracking-wider transition duration-250 cursor-pointer flex items-center gap-1.5 ${
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
        <p className="text-[10px] uppercase tracking-[0.25em] text-white/40 ">
          Save up to $360 per year with sovereign multi-month accounts
        </p>
      </div>

      {/* Pricing Grids */}
      <div className={`grid gap-6 sm:grid-cols-2 items-stretch transition-all duration-300 ${
        showAllPlans ? "lg:grid-cols-4" : "lg:grid-cols-3 max-w-5xl mx-auto"
      }`}>
        {plans.map((plan, index) => {
          const billingPrice = billingCycle === "monthly" ? plan.priceMonthly : plan.priceAnnual;
          const isGenesis = plan.name.includes("GENESIS");
          
          if (isGenesis && !showAllPlans) {
            return null;
          }
          
          return (
            <div 
              key={plan.name}
              className={`rounded-3xl border relative p-6 flex flex-col justify-between backdrop-blur transition-all duration-300 ${
                isGenesis
                  ? "border-[#ffd17d]/20 bg-[#070505] shadow-xl hover:border-[#ffd17d]/45"
                  : plan.isPopular 
                    ? "border-[#f4cf8a]/40 bg-[#0c0909]/95 shadow-xl shadow-[#f4cf8a]/5 md:-translate-y-2.5" 
                    : "border-white/[0.06] bg-black/40 hover:border-white/15"
              }`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 right-6 -translate-y-1/2 rounded-full bg-gradient-to-r from-[#ffd17d] to-[#e4a84b] text-black font-semibold  text-[9px] uppercase tracking-widest px-3 py-1 flex items-center gap-1 shadow-sm font-sans">
                  <Sparkles size={10} />
                  <span>Selected Member Tier</span>
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-white font-display mb-1 tracking-tight min-h-[40px] uppercase">{plan.name}</h4>
                  <p className="text-[11px] text-white/40 leading-relaxed min-h-[48px]">{plan.tagline}</p>
                </div>

                {/* Price Display */}
                <div className="py-2 border-y border-white/[0.04] flex items-baseline gap-1">
                  {typeof billingPrice === "string" ? (
                    <span className="text-2.5xl sm:text-3.5xl font-medium tracking-wide text-[#f4cf8a] font-display">
                      {billingPrice}
                    </span>
                  ) : (
                    <>
                      <span className="text-2xl sm:text-3.5xl font-light tracking-tight text-white font-display">
                        RM {billingPrice}
                      </span>
                      <span className="text-[10px] uppercase  tracking-widest text-[#f4cf8a]/70">
                        / {billingCycle === "monthly" ? "mo" : "mo, billed annually"}
                      </span>
                    </>
                  )}
                </div>

                {/* Features Checklists */}
                <ul className="space-y-3">
                  {plan.features.map(f => (
                    <li key={f} className="flex items-start gap-2.5 text-xs text-white/60">
                      <Check size={13} className="text-[#f4cf8a] shrink-0 mt-0.5" />
                      <span className="leading-snug">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8">
                <button
                  onClick={() => handleCtaClick(plan)}
                  className={`w-full rounded-xl py-3.5 text-[10px] font-bold uppercase tracking-widest transition duration-250 cursor-pointer flex items-center justify-center gap-2 ${
                    plan.isPopular 
                      ? "bg-gradient-to-r from-[#ffd17d] to-[#e4a84b] text-black hover:opacity-90 shadow-md shadow-[#f4cf8a]/15" 
                      : "border border-white/15 bg-black/40 text-white/80 hover:border-white/30 hover:text-white"
                  }`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight size={11} />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* See All Plans toggle button */}
      <div className="flex justify-center pt-2">
        <button
          onClick={() => setShowAllPlans(!showAllPlans)}
          className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.01] hover:bg-white/[0.04] hover:border-white/20 transition-all px-8 py-3 text-[10px]  uppercase tracking-[0.2em] text-[#f4cf8a] hover:text-[#ffd17d] cursor-pointer shadow-lg"
        >
          <span>{showAllPlans ? "Hide Extra Plans" : "See All Plans"}</span>
          <ArrowRight size={11} className={`transition-transform duration-300 ${showAllPlans ? "rotate-90" : ""}`} />
        </button>
      </div>

      {/* Dynamic Plan Enrollment Modal Popup */}
      <AnimatePresence>
        {enrollingPlanName && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              className="relative w-full max-w-md overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0c0909] p-6 text-white shadow-2xl space-y-6"
            >
              {/* Internal subtle background flare */}
              <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-[#f4cf8a]/10 blur-3xl pointer-events-none" />

              <div className="flex items-center justify-between border-b border-white/[0.05] pb-4">
                <div className="flex items-center gap-2">
                  <Inbox size={14} className="text-[#f4cf8a]" />
                  <span className="text-xs uppercase tracking-[0.25em]  text-white/90">Enrollment Portal</span>
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
                  <div className="text-[10px] uppercase tracking-[0.2em] text-[#f4cf8a]/60 ">SELECTED PLAN</div>
                  <h4 className="text-xl font-medium text-white font-display mt-1">{enrollingPlanName}</h4>
                  <p className="text-[10px] uppercase  text-white/40 tracking-wider">
                    {billingCycle === "annual" ? "ANNUAL SETTLEMENT COMPLIANT" : "MONTH-TO-MONTH ROUTING"}
                  </p>
                </div>

                <form onSubmit={submitEnrollment} className="space-y-4">
                  <div>
                    <label className="block text-[8px] uppercase tracking-widest text-white/40  mb-1.5">Company or Your Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="e.g. Jane Doe"
                      className="w-full bg-black/60 border border-white/5 focus:border-[#f4cf8a]/40 rounded-xl px-4 py-3 placeholder:text-white/20 text-xs outline-none text-white  transition"
                      value={formInputs.companyName}
                      onChange={e => setFormInputs({...formInputs, companyName: e.target.value})}
                    />
                  </div>

                  <div>
                    <label className="block text-[8px] uppercase tracking-widest text-white/40  mb-1.5">Ethereum Address (Simulated)</label>
                    <input 
                      required
                      type="text" 
                      className="w-full bg-black/60 border border-white/5 focus:border-[#f4cf8a]/40 rounded-xl px-4 py-3 text-xs outline-none text-white  transition"
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
                    className="w-full rounded-xl bg-gradient-to-r from-[#ffd17d] to-[#e4a84b] text-black text-[10px] font-semibold uppercase tracking-[0.25em] py-3.5 mt-2 transition duration-200 cursor-pointer flex items-center justify-center gap-2 shadow"
                  >
                    {verificationSuccess ? (
                      <>
                        <Loader2 size={12} className="animate-spin text-black" />
                        <span>Initializing Workspace...</span>
                      </>
                    ) : (
                      "CONFIRM ENROLLMENT"
                    )}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
