import React, { useState } from "react";
import { 
  ArrowUpRight,
  ChevronRight,
  Menu,
  X,
  Plus,
  Compass,
  Layers,
  Cpu,
  Bookmark
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import XenithLogo from "./XenithLogo";

interface CompanyPageProps {
  onBackToHome: () => void;
  onNavigateProduct: () => void;
  onNavigateTechnology: () => void;
  onNavigatePricing: () => void;
  onNavigateNews: () => void;
  onTryXenith: () => void;
}

export default function CompanyPage({
  onBackToHome,
  onNavigateProduct,
  onNavigateTechnology,
  onNavigatePricing,
  onNavigateNews,
  onTryXenith,
}: CompanyPageProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMilestoneInxt, setActiveMilestoneInxt] = useState(4); // Default to a later milestone for visual impact
  
  const highlights = [
    { name: "Xenith Core 4.3", desc: "Our most capable risk-reasoning model.", link: "#" },
    { name: "Colossus Node", desc: "Active across 100+ global liquidity pools.", link: "#" },
    { name: "Sovereign Engine", desc: "Zero-delay microsecond execution API.", link: "#" },
    { name: "Research Lab", desc: "Join our quantitative engineering team.", link: "#" }
  ];

  const coreValues = [
    {
      num: "01",
      title: "Arbitrage from first principles",
      desc: "We challenge conventional liquidity models by optimizing order routing down to absolute micro-spreads, grounded in direct cryptographic logic rather than central intermediaries."
    },
    {
      num: "02",
      title: "No spread is too narrow",
      desc: "We capture structural inefficiencies other engines miss by constantly optimizing multi-hop pathfinders across highly volatile, decentralized ledger states."
    },
    {
      num: "03",
      title: "Build securely, scale instantly",
      desc: "Millisecond validation loops and automated safety gates ensure robust deployment. We live at the absolute frontier of computational speed and security."
    }
  ];

  const offices = [
    "Palo Alto",
    "San Francisco",
    "London",
    "Singapore",
    "Zurich"
  ];

  const milestones = [
    { year: "2024", date: "June 12, 2024", title: "Genesis Epoch", desc: "Xenith Labs established. Completed initial mathematical proofs for high-frequency multi-hop ledger routing." },
    { year: "2024", date: "October 03, 2024", title: "Sovereign Alpha", desc: "First successful automated cross-pool spread capture executed under test-net conditions." },
    { year: "2025", date: "January 15, 2025", title: "Colossus Node Mesh", desc: "Inaugurated dedicated millisecond latency relays in London, Singapore, and New York hubs." },
    { year: "2025", date: "May 20, 2025", title: "Secure Sandbox Launch", desc: "Opened virtual simulated sandboxes with zero-risk gas markets for institutional builders." },
    { year: "2025", date: "September 25, 2025", title: "Expanding Xenith for Enterprise", desc: "Releasing enterprise-grade websocket streams delivering 300K real-time telemetry updates per second." },
    { year: "2026", date: "March 18, 2026", title: "Core 4.3 Integration", desc: "Fully integrated modern deep-reasoning intelligence to predict and secure structural capital slippages." },
    { year: "2026", date: "May 28, 2026", title: "Autonomous Capital Model", desc: "Deploying fully automated cryptographic execution bridges across five key global sovereign networks." }
  ];

  const newsCards = [
    {
      id: "kilo",
      tag: "⚡ Xenith Core",
      title: "Introducing Core 4.3 Model Sandbox",
      date: "May 27, 2026",
      theme: "from-[#f4cf8a]/5 to-black/90 border-[#f4cf8a]/10 hover:border-[#f4cf8a]/30",
      graphic: (
        <div className="absolute inset-0 select-none">
          <img 
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80" 
            alt="Xenith Core 4.3"
            className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700 ease-out"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
        </div>
      )
    },
    {
      id: "beta",
      tag: "⚙️ Arbitrage",
      title: "Dynamic Hop Routing Release",
      date: "May 25, 2026",
      theme: "from-[#f4cf8a]/5 to-black/90 border-[#f4cf8a]/10 hover:border-[#f4cf8a]/30",
      graphic: (
        <div className="absolute inset-0 select-none">
          <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80" 
            alt="Hop Routing"
            className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700 ease-out"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
        </div>
      )
    },
    {
      id: "opencode",
      tag: "🛡️ Compliance",
      title: "SOC 2 Type II Gold Standard Certification",
      date: "May 21, 2026",
      theme: "from-[#f4cf8a]/5 to-black/90 border-[#f4cf8a]/10 hover:border-[#f4cf8a]/30",
      graphic: (
        <div className="absolute inset-0 select-none">
          <img 
            src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80" 
            alt="compliance"
            className="w-full h-full object-cover opacity-65 group-hover:scale-105 transition-transform duration-700 ease-out"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
        </div>
      )
    },
    {
      id: "openclaw",
      tag: "🌐 Infrastructure",
      title: "Zurich Latency Node Go-Live",
      date: "May 19, 2026",
      theme: "from-[#f4cf8a]/5 to-black/90 border-[#f4cf8a]/10 hover:border-[#f4cf8a]/30",
      graphic: (
        <div className="absolute inset-0 select-none">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80" 
            alt="Zurich Node"
            className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700 ease-out"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
        </div>
      )
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="min-h-screen bg-[#050505] text-[#b0b0b0] font-sans relative overflow-x-hidden selection:bg-white/10 selection:text-white"
    >
      {/* Background radial soft glows */}
      <div className="absolute top-0 right-0 w-[55%] h-[700px] pointer-events-none z-0 bg-[radial-gradient(circle_at_85%_15%,rgba(244,207,138,0.018),transparent_55%)] blur-[95px]" />
      <div className="absolute top-[35%] left-0 w-[50%] h-[750px] pointer-events-none z-0 bg-[radial-gradient(circle_at_20%_40%,rgba(244,207,138,0.008),transparent_45%)] blur-[100px]" />
      <div className="absolute bottom-10 right-0 w-[60%] h-[950px] pointer-events-none z-0 bg-[radial-gradient(circle_at_90%_80%,rgba(244,207,138,0.012),transparent_50%)] blur-[110px]" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.003)_1px,transparent_1px)] bg-[size:100%_120px] pointer-events-none opacity-40 z-0" />

      {/* Headers and menus */}
      <header className="relative z-20 border-b border-white/[0.04] bg-black/10 backdrop-blur-md text-xs tracking-[0.28em] text-white/45">
        <div className="flex items-center justify-between px-8 py-5">
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
              <a className="hover:text-[#f4cf8a] transition cursor-pointer" onClick={onNavigateProduct}>Product</a>
              <a className="hover:text-[#f4cf8a] transition cursor-pointer" onClick={onNavigateTechnology}>Technology</a>
              <a className="hover:text-[#f4cf8a] transition cursor-pointer" onClick={onNavigatePricing}>Pricing</a>
              <a className="text-white border-b border-[#f4cf8a]/60 pb-1 cursor-pointer transition font-medium">Company</a>
              <a className="hover:text-[#f4cf8a] transition cursor-pointer" onClick={onNavigateNews}>News</a>
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
              className="border-t border-white/[0.04] bg-[#050505]/98 backdrop-blur-lg lg:hidden overflow-hidden"
            >
              <nav className="flex flex-col px-8 py-6 gap-5 text-xs tracking-[0.25em]">
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
                  className="text-white/60 hover:text-white pl-3 py-2.5 cursor-pointer transition" 
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onNavigatePricing();
                  }}
                >
                  Pricing
                </a>
                <a 
                  className="text-white border-l-2 border-[#f4cf8a] pl-3 font-medium py-2.5 cursor-pointer transition" 
                  onClick={() => setIsMobileMenuOpen(false)}
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

      {/* Main Core Layout optimized for Typography-First modern aesthetic */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 py-10 sm:py-16 md:py-20 lg:py-24 space-y-16 sm:space-y-24 md:space-y-36">
        
        {/* SECTION A: Split Hero Header to match visual weight of the mock design */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Left Column: Mission Content */}
          <div className="lg:col-span-7 flex flex-col items-start pt-2">
            <span className="text-[11px] tracking-[0.28em] text-[#f4cf8a]/90  block mb-5 uppercase">
              [ Our Mission ]
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-light text-white leading-[1.02] tracking-[-0.035em] mb-7 max-w-2xl">
              Accelerate global capital efficiency.
            </h1>
            <p className="text-sm md:text-base text-white/50 leading-relaxed max-w-xl font-sans font-light mb-8">
              We build AI systems to comprehend global markets. Frontier computational risk-modeling, real-time decentralized ledger pathfinders, and high-frequency settlement nodes—purpose-engineered to augment how sovereign capital operates.
            </p>
            <div className="flex items-center gap-4">
              <button 
                onClick={onTryXenith}
                className="rounded-full bg-gradient-to-r from-[#ffd17d] to-[#e4a84b] text-black px-6 py-3 text-xs font-semibold tracking-wider hover:opacity-90 transition cursor-pointer shadow"
              >
                Join Us
              </button>
              <button 
                onClick={() => {
                  const el = document.getElementById("footer-contact");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="rounded-full border border-[#f4cf8a]/30 bg-[#f4cf8a]/5 px-6 py-3 text-xs text-[#f4cf8a] hover:border-[#f4cf8a]/50 hover:bg-[#f4cf8a]/10 transition cursor-pointer font-medium"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Right Column: Highlights with Sleek Arrow Hover Effects */}
          <div className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-white/[0.08] lg:pl-10 pt-10 lg:pt-2 space-y-6">
            {highlights.map((item, idx) => (
              <a 
                key={idx}
                href={item.link}
                onClick={(e) => {
                  e.preventDefault();
                  onTryXenith();
                }}
                className="group flex items-center justify-between py-4 border-b border-white/[0.05] hover:border-[#f4cf8a]/30 transition-colors duration-300"
              >
                <div>
                  <h4 className="text-sm font-medium text-white group-hover:text-[#f4cf8a] transition duration-200">
                    {item.name}
                  </h4>
                  <p className="text-xs text-white/40 mt-1 font-sans font-light">
                    {item.desc}
                  </p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#f4cf8a]/60 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition duration-300 shrink-0" />
              </a>
            ))}
          </div>
        </section>

        {/* SECTION B: Centered "At Our Core" with elegant layout and numbering */}
        <section className="border-t border-white/[0.05] pt-12 sm:pt-16 md:pt-24 text-center">
          <div className="max-w-2xl mx-auto space-y-4 mb-10 sm:mb-16 md:mb-20">
            <h2 className="text-3xl sm:text-4xl font-display font-light text-white tracking-[-0.03em] leading-tight">
              At our core
            </h2>
            <p className="text-sm text-white/50 leading-relaxed font-sans font-light">
              We're a specialized, security-first team driven by quantitative rigor, mathematical integrity, and unwavering long-term commitment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {coreValues.map((card, idx) => (
              <div 
                key={idx}
                className="flex flex-col justify-between p-8 rounded-2xl border border-white/[0.04] bg-neutral-900/[0.15] hover:border-[#f4cf8a]/20 hover:bg-neutral-900/[0.25] transition-all duration-500 group"
              >
                <div>
                  <span className="text-4xl sm:text-5xl font-display font-light text-[#f4cf8a]/15 group-hover:text-[#f4cf8a]/30 transition-colors duration-500 block mb-8 font-sans">
                    {card.num}
                  </span>
                  <h3 className="text-base font-normal text-white mb-3 font-sans group-hover:text-[#f4cf8a] transition duration-200">
                    {card.title}
                  </h3>
                  <p className="text-xs text-white/45 leading-relaxed font-sans font-light">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION C: Infrastructure / Hubs with Left Label Columns */}
        <section className="border-t border-white/[0.05] pt-12 sm:pt-16 md:pt-24 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4 space-y-4">
            <span className="text-[11px] tracking-[0.28em] text-[#f4cf8a]/80  block uppercase">
              [ Offices ]
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-light text-white tracking-[-0.03em] leading-tight">
              Collaboration across borders
            </h2>
            <p className="text-xs md:text-sm text-white/50 leading-relaxed font-sans font-light max-w-sm">
              We locate our secure computation clusters and team members across key regional financial grids to guarantee redundancy and sub-millisecond network speeds.
            </p>
            <div className="pt-2 flex gap-3">
              <button 
                onClick={onTryXenith}
                className="rounded-full bg-gradient-to-r from-[#ffd17d] to-[#e4a84b] text-black text-[10px] px-5 py-2  font-medium tracking-wider hover:opacity-95 transition shadow"
              >
                Open Roles
              </button>
              <button 
                onClick={onTryXenith}
                className="rounded-full border border-[#f4cf8a]/30 bg-[#f4cf8a]/5 text-[#f4cf8a] text-[10px] px-5 py-2  tracking-wider hover:border-[#f4cf8a]/50 transition"
              >
                Careers
              </button>
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 pt-4">
            {offices.map((office, idx) => (
              <div 
                key={idx}
                className="rounded-xl border border-[#f4cf8a]/10 bg-[#f4cf8a]/[0.02] p-4.5 text-center text-xs  font-medium tracking-wide text-[#f4cf8a]"
              >
                {office}
              </div>
            ))}
          </div>
        </section>

        {/* SECTION D: Our Path of Progress - Fully interactive Horizontal Timeline */}
        <section className="border-t border-white/[0.05] pt-12 sm:pt-16 md:pt-24 text-center">
          <div className="max-w-2xl mx-auto space-y-4 mb-10 sm:mb-16 md:mb-20 block">
            <span className="text-[11px] tracking-[0.28em] text-[#f4cf8a]/90  block mb-3 uppercase">
              [ Timeline ]
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-light text-white tracking-[-0.03em] leading-tight">
              Our path of progress
            </h2>
            <p className="text-sm text-white/50 leading-relaxed font-sans font-light">
              From genesis mathematical concept to secure global scale — every major milestone on the roadmap.
            </p>
          </div>

          {/* Fully Interactive Timeline Slider Track */}
          <div className="relative max-w-4xl mx-auto px-4 py-8 mb-12 select-none">
            {/* Background Line Connector */}
            <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-white/[0.08] -translate-y-1/2" />
            
            {/* Active Selected Highlighted Track */}
            <div 
              className="absolute top-1/2 left-0 h-[1.5px] bg-[#f4cf8a] -translate-y-1/2 transition-all duration-500" 
              style={{ width: `${(activeMilestoneInxt / (milestones.length - 1)) * 100}%` }}
            />

            {/* Steps Container */}
            <div className="relative flex justify-between items-center w-full">
              {milestones.map((item, idx) => {
                const isActive = idx === activeMilestoneInxt;
                const isPassed = idx < activeMilestoneInxt;
                
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveMilestoneInxt(idx)}
                    className="group relative flex flex-col items-center focus:outline-none focus:ring-0 cursor-pointer"
                    aria-label={`Select timeline marker for ${item.title}`}
                  >
                    {/* Circle Node indicator */}
                    <div 
                      className={`w-3.5 h-3.5 rounded-full border-2 transition-all duration-300 flex items-center justify-center bg-black
                        ${isActive ? "border-[#f4cf8a] scale-125 shadow-[0_0_12px_rgba(244,207,138,0.45)]" : "border-white/20 hover:border-[#f4cf8a]/50"}
                        ${isPassed && !isActive ? "border-white/55" : ""}
                      `}
                    >
                      {isActive && <div className="w-1 h-1 rounded-full bg-[#f4cf8a] animate-pulse" />}
                    </div>

                    {/* Simple Year Label above each dot */}
                    <span 
                      className={`absolute top-6 text-[9px]  tracking-widest transition-all duration-300
                        ${isActive ? "text-[#f4cf8a] font-medium" : "text-white/40 group-hover:text-white/60"}
                      `}
                    >
                      {item.year}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Displayed Selected Milestone Detail Container */}
          <div className="max-w-2xl mx-auto bg-neutral-900/[0.1] border border-white/[0.02] p-8 rounded-2xl min-h-[160px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeMilestoneInxt}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-3"
              >
                <div className="text-[10px]  tracking-[0.25em] text-[#f4cf8a]/85 uppercase">
                  {milestones[activeMilestoneInxt].date}
                </div>
                <h3 className="text-xl font-display font-medium text-white tracking-tight">
                  {milestones[activeMilestoneInxt].title}
                </h3>
                <p className="text-xs text-white/50 leading-relaxed max-w-xl mx-auto font-sans font-light">
                  {milestones[activeMilestoneInxt].desc}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* SECTION E: Latest product news & tech release briefs */}
        <section className="border-t border-white/[0.05] pt-12 sm:pt-16 md:pt-24">
          <div className="flex items-center justify-between mb-6 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-display font-light text-white tracking-[-0.03em]">
              Latest news
            </h2>
            <button 
              onClick={onTryXenith}
              className="text-xs font-sans text-[#f4cf8a] hover:text-white transition duration-200 flex items-center gap-1 cursor-pointer"
            >
              All posts <ChevronRight className="w-3 h-3" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {newsCards.map((post) => (
              <div 
                key={post.id}
                onClick={onTryXenith}
                className="group cursor-pointer flex flex-col h-full animate-fade-in"
              >
                {/* Graphics Cover Container inspired directly by the mock design */}
                <div className={`relative w-full aspect-[4/3] rounded-2xl border bg-gradient-to-b ${post.theme} p-4 overflow-hidden mb-4 shadow-lg transition-transform duration-500 group-hover:scale-[1.02] hover:shadow-[#f4cf8a]/5`}>
                  {/* Subtle inner grid lines inside the graphic cover to look clean */}
                  <div className="absolute inset-x-0 top-0 h-[100px] border-b border-white/[0.02] bg-[size:200%_40px] pointer-events-none" />
                  
                  {post.graphic}
                </div>

                <div className="space-y-1 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[9px]  tracking-widest text-white/40">
                      {post.date}
                    </span>
                    <h4 className="text-xs sm:text-sm font-medium text-white group-hover:text-[#f4cf8a] transition duration-200 mt-1 lines-clamp-2">
                      {post.title}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION F: Complex Contact section - aligned to a premium standard */}
        <section id="footer-contact" className="border-t border-white/[0.05] pt-12 sm:pt-16 md:pt-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-[11px] tracking-[0.28em] text-[#f4cf8a]/90  block uppercase">
              [ Get In Touch ]
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-light text-white tracking-[-0.03em] leading-tight">
              Talk to an expert.
            </h2>
            <p className="text-xs md:text-sm text-white/50 leading-relaxed max-w-sm font-sans font-light">
              Integration requests, partnership prospects, secure credential diagnostics, or general system inquiries—we verify and replies safely within 24 hours.
            </p>
          </div>

          <div className="lg:col-span-7 space-y-4  text-xs text-white/45 max-w-2xl w-full">
            <div className="border border-[#f4cf8a]/10 rounded-2xl bg-[#f4cf8a]/[0.01] divide-y divide-[#f4cf8a]/5 overflow-hidden">
              <div className="flex items-center justify-between p-5 hover:bg-[#f4cf8a]/[0.02] transition-colors duration-300">
                <span className="text-[#f4cf8a]/70 tracking-wider uppercase font-medium">Systems Integration</span>
                <a href="mailto:integrations@xenith.ai" className="text-white hover:underline hover:text-[#f4cf8a] transition cursor-pointer">
                  integrations@xenith.ai ↗
                </a>
              </div>
              <div className="flex items-center justify-between p-5 hover:bg-[#f4cf8a]/[0.02] transition-colors duration-300">
                <span className="text-[#f4cf8a]/70 tracking-wider uppercase font-medium">Institutional Trust</span>
                <a href="mailto:trust@xenith.ai" className="text-white hover:underline hover:text-[#f4cf8a] transition cursor-pointer">
                  trust@xenith.ai ↗
                </a>
              </div>
              <div className="flex items-center justify-between p-5 hover:bg-[#f4cf8a]/[0.02] transition-colors duration-300">
                <span className="text-[#f4cf8a]/70 tracking-wider uppercase font-medium">Global Latency Relays</span>
                <span className="text-[#f4cf8a]/80 font-sans font-light">Singapore · New York · London · Zurich</span>
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* FOOTER: Multi-column comprehensive layout styled exactly like xAI / Apple / OpenAI */}
      <footer className="border-t border-white/[0.04] bg-black/50 py-16 px-8 text-xs tracking-wide text-white/40 mt-16 sm:mt-24 md:mt-32 z-10 relative">
        <div className="max-w-7xl mx-auto">
          {/* Main 6-column Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-10 md:gap-8 pb-12 mb-12 border-b border-white/[0.04]">
            
            {/* Column 0: Brand Info */}
            <div className="col-span-2 space-y-4">
              <div className="flex items-center gap-2.5 select-none pointer-events-none">
                <XenithLogo size={24} className="opacity-90" />
                <span className="text-sm font-semibold tracking-[0.3em] text-white">Xenith</span>
              </div>
              <p className="text-[10px] sm:text-xs leading-relaxed text-[#f4cf8a]/80 font-sans font-light max-w-xs">
                Sovereign digital finance interfaces. We build advanced model interfaces, smart sandboxes, and safe playground endpoints.
              </p>
            </div>

            {/* Column 1: Products */}
            <div className="space-y-4">
              <span className="text-[10px] tracking-wider text-white  uppercase block">Products</span>
              <ul className="space-y-2.5 text-[11px] font-sans font-light">
                <li><a onClick={onNavigateProduct} className="hover:text-white transition cursor-pointer">Xenith Core</a></li>
                <li><a onClick={onNavigateTechnology} className="hover:text-white transition cursor-pointer">Sovereign Engine</a></li>
                <li><a onClick={onNavigateProduct} className="hover:text-white transition cursor-pointer">Risk Sandboxes</a></li>
                <li><a onClick={onNavigateProduct} className="hover:text-white transition cursor-pointer">API Playground</a></li>
              </ul>
            </div>

            {/* Column 2: Developers */}
            <div className="space-y-4">
              <span className="text-[10px] tracking-wider text-white  uppercase block">Developers</span>
              <ul className="space-y-2.5 text-[11px] font-sans font-light">
                <li><a onClick={onNavigateTechnology} className="hover:text-white transition cursor-pointer">API Keys</a></li>
                <li><a onClick={onNavigateTechnology} className="hover:text-white transition cursor-pointer">Websocket SDK</a></li>
                <li><a onClick={onNavigateTechnology} className="hover:text-white transition cursor-pointer">System Status</a></li>
                <li><a onClick={onNavigateTechnology} className="hover:text-white transition cursor-pointer">Documentation</a></li>
              </ul>
            </div>

            {/* Column 3: Company */}
            <div className="space-y-4">
              <span className="text-[10px] tracking-wider text-white  uppercase block">Company</span>
              <ul className="space-y-2.5 text-[11px] font-sans font-light">
                <li><a onClick={onBackToHome} className="hover:text-white transition cursor-pointer font-medium text-white/90">About Us</a></li>
                <li><a onClick={onTryXenith} className="hover:text-white transition cursor-pointer">Open Roles</a></li>
                <li><a onClick={onTryXenith} className="hover:text-white transition cursor-pointer">Sponsorships</a></li>
                <li><a onClick={onNavigatePricing} className="hover:text-white transition cursor-pointer">Pricing Plans</a></li>
                <li><a onClick={onNavigateNews} className="hover:text-white transition cursor-pointer">Xenith News</a></li>
              </ul>
            </div>

            {/* Column 4: Trust / Security */}
            <div className="space-y-4">
              <span className="text-[10px] tracking-wider text-white  uppercase block">Trust</span>
              <ul className="space-y-2.5 text-[11px] font-sans font-light">
                <li><a onClick={onNavigateTechnology} className="hover:text-white transition cursor-pointer">Safety Portal</a></li>
                <li><a onClick={onNavigateTechnology} className="hover:text-white transition cursor-pointer">Privacy Portal</a></li>
                <li><a onClick={onNavigateTechnology} className="hover:text-white transition cursor-pointer">Audit Logs</a></li>
                <li><a onClick={onNavigateTechnology} className="hover:text-white transition cursor-pointer">Compliance</a></li>
              </ul>
            </div>

            {/* Column 5: Social / Brand */}
            <div className="space-y-4 col-span-2 lg:col-span-1">
              <span className="text-[10px] tracking-wider text-white  uppercase block">Social</span>
              <ul className="space-y-2.5 text-[11px] font-sans font-light">
                <li><a href="https://x.com" target="_blank" rel="noreferrer" className="hover:text-white transition cursor-pointer">@xenith</a></li>
                <li><a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white transition cursor-pointer">GitHub</a></li>
                <li><a href="https://discord.com" target="_blank" rel="noreferrer" className="hover:text-white transition cursor-pointer">Discord</a></li>
              </ul>
            </div>

          </div>

          {/* Bottom Copyright bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between text-[10px]  tracking-wider text-[#808080]/50 gap-4">
            <div className="flex items-center gap-2">
              <span>Xenith Labs © 2026</span>
              <span className="text-white/10">•</span>
              <span>All rights reserved</span>
            </div>
            <div className="flex items-center gap-6">
              <a onClick={onNavigateTechnology} className="hover:text-white transition cursor-pointer">Terms of Service</a>
              <a onClick={onNavigateTechnology} className="hover:text-white transition cursor-pointer">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>

    </motion.div>
  );
}
