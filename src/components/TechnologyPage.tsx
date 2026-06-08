import React, { useState } from "react";
import { 
  Shield, 
  Eye, 
  Lock, 
  Cpu, 
  Globe, 
  Layers, 
  Zap, 
  Database, 
  Activity,
  ArrowUpRight,
  ArrowRight,
  Menu,
  X
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import XenithLogo from "./XenithLogo";

interface TechnologyPageProps {
  onBackToHome: () => void;
  onNavigateProduct: () => void;
  onNavigatePricing: () => void;
  onNavigateCompany: () => void;
  onNavigateNews: () => void;
  onTryXenith: () => void;
}

export default function TechnologyPage({
  onBackToHome,
  onNavigateProduct,
  onNavigatePricing,
  onNavigateCompany,
  onNavigateNews,
  onTryXenith,
}: TechnologyPageProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="min-h-screen bg-[#060505] text-white font-sans relative overflow-x-hidden selection:bg-[#f4cf8a]/30 selection:text-[#f4cf8a]"
    >
      {/* Absolute Glow Backgrounds matching the uploaded image */}
      <div className="absolute top-0 right-0 w-[45%] h-[600px] pointer-events-none z-0 bg-[radial-gradient(circle_at_80%_20%,rgba(229,193,133,0.14),transparent_55%)] blur-[80px]" />
      <div className="absolute top-[30%] left-[-10%] w-[50%] h-[700px] pointer-events-none z-0 bg-[radial-gradient(circle_at_20%_40%,rgba(255,255,255,0.012),transparent_45%)] blur-[90px]" />
      <div className="absolute top-[40%] right-[-10%] w-[55%] h-[900px] pointer-events-none z-0 bg-[radial-gradient(circle_at_90%_50%,rgba(229,193,133,0.11),transparent_50%)] blur-[100px]" />
      <div className="absolute bottom-0 left-[10%] w-[80%] h-[500px] pointer-events-none z-0 bg-[radial-gradient(circle_at_50%_90%,rgba(229,193,133,0.06),transparent_60%)] blur-[110px]" />

      {/* Grid Pattern overlays */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:100%_120px] pointer-events-none opacity-20 z-0" />
      <div className="absolute inset-x-0 top-0 h-[600px] bg-[linear-gradient(90deg,rgba(255,255,255,0.007)_1px,transparent_1px)] bg-[size:40px_100%] pointer-events-none opacity-20 z-0" />

      {/* Thin line circle vectors seen in the design */}
      <div className="absolute top-[280px] left-1/2 -translate-x-[40%] w-[580px] h-[580px] rounded-full border border-white/[0.015] pointer-events-none z-0" />
      <div className="absolute top-[850px] left-1/2 -translate-x-[60%] w-[720px] h-[720px] rounded-full border border-[#f4cf8a]/[0.01] pointer-events-none z-0" />
      <div className="absolute top-[1500px] left-1/2 -translate-x-[35%] w-[650px] h-[650px] rounded-full border border-white/[0.012] pointer-events-none z-0" />

      {/* Navigation Header */}
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
              <a className="hover:text-white transition cursor-pointer" onClick={onNavigateProduct}>Product</a>
              <a className="text-white border-b border-[#f4cf8a]/60 pb-1 cursor-pointer transition font-medium">Technology</a>
              <a className="hover:text-white transition cursor-pointer" onClick={onNavigatePricing}>Pricing</a>
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
                  className="text-white border-l-2 border-[#f4cf8a] pl-3 font-medium py-2.5 cursor-pointer transition" 
                  onClick={() => setIsMobileMenuOpen(false)}
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

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 py-12 sm:py-16 md:py-20 lg:py-28">
        
        {/* HERO SECTION */}
        <div className="mb-12 sm:mb-16 md:mb-24 lg:mb-32">
          {/* Label Tag */}
          <div className="mb-6 text-[10px] md:text-xs tracking-[0.35em] text-[#f4cf8a]/65 ">
            [ Technology ]
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-[-0.04em] leading-[1.1] max-w-3xl mb-8 font-display">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/70">Built with simplicity</span>
            <br />
            <span className="text-white/25 mt-1 block font-light">so you can learn with confidence.</span>
          </h1>

          {/* Description */}
          <p className="text-sm sm:text-base text-white/50 max-w-2xl leading-relaxed">
            Xenith is built on three simple commitments: your queries are private, every financial explanation is easy to trace, and our interactive code sandbox lets you learn about ledger tech with zero real-world risk.
          </p>
        </div>

        {/* ARCHITECTURE SECTION */}
        <div className="border-t border-white/[0.08] lg:border-white/[0.04] pt-12 sm:pt-16 md:pt-20 pb-12 sm:pb-16 md:pb-24 lg:pb-32">
          
          <div className="mb-12 text-[10px] md:text-xs tracking-[0.35em] text-[#f4cf8a]/65 ">
            [ Structure ]
          </div>

          <div className="space-y-4">
            
            {/* Architecture Row 01 */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6 md:p-8 rounded-xl border border-white/[0.04] bg-[#0b0808]/20 hover:bg-[#0b0808]/40 hover:border-white/[0.1] transition-all duration-300">
              <div className="md:col-span-1 text-base md:text-lg  text-white/20">
                01
              </div>
              <div className="md:col-span-4 space-y-1">
                <h3 className="text-sm font-normal text-white uppercase tracking-wider">Three Surfaces</h3>
                <p className="text-[10px] uppercase tracking-widest text-[#f4cf8a]/55 ">Xenith Chat, API, Guides</p>
              </div>
              <div className="md:col-span-7 flex items-center">
                <p className="text-xs sm:text-sm text-white/45 font-sans leading-relaxed">
                  Three simple ways to explore: ask our conversational AI assistant, test mock code calls, or read clean text templates.
                </p>
              </div>
            </div>

            {/* Architecture Row 02 */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6 md:p-8 rounded-xl border border-white/[0.04] bg-[#0b0808]/20 hover:bg-[#0b0808]/40 hover:border-white/[0.1] transition-all duration-300">
              <div className="md:col-span-1 text-base md:text-lg  text-white/20">
                02
              </div>
              <div className="md:col-span-4 space-y-1">
                <h3 className="text-sm font-normal text-white uppercase tracking-wider">AId-Driven Planner</h3>
                <p className="text-[10px] uppercase tracking-widest text-[#f4cf8a]/55  font-sans">Self-correcting helper</p>
              </div>
              <div className="md:col-span-7 flex items-center">
                <p className="text-xs sm:text-sm text-white/45 font-sans leading-relaxed">
                  Our helper reads your plain english queries, outlines a step-by-step response, and double-checks its arithmetic.
                </p>
              </div>
            </div>

            {/* Architecture Row 03 */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6 md:p-8 rounded-xl border border-white/[0.04] bg-[#0b0808]/20 hover:bg-[#0b0808]/40 hover:border-white/[0.1] transition-all duration-300">
              <div className="md:col-span-1 text-base md:text-lg  text-white/20">
                03
              </div>
              <div className="md:col-span-4 space-y-1">
                <h3 className="text-sm font-normal text-white uppercase tracking-wider">Simulated Ledger</h3>
                <p className="text-[10px] uppercase tracking-widest text-[#f4cf8a]/55 ">Test keys & mock holdings</p>
              </div>
              <div className="md:col-span-7 flex items-center">
                <p className="text-xs sm:text-sm text-white/45 font-sans leading-relaxed">
                  Full play-money environments and test balances, letting you experience finance logic without any danger of real losses.
                </p>
              </div>
            </div>

            {/* Architecture Row 04 */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6 md:p-8 rounded-xl border border-white/[0.04] bg-[#0b0808]/20 hover:bg-[#0b0808]/40 hover:border-white/[0.1] transition-all duration-300">
              <div className="md:col-span-1 text-base md:text-lg  text-white/20">
                04
              </div>
              <div className="md:col-span-4 space-y-1">
                <h3 className="text-sm font-normal text-white uppercase tracking-wider">Private Workspace</h3>
                <p className="text-[10px] uppercase tracking-widest text-[#f4cf8a]/55 ">Isolated and safe memory</p>
              </div>
              <div className="md:col-span-7 flex items-center">
                <p className="text-xs sm:text-sm text-white/45 font-sans leading-relaxed">
                  Your chat history and custom configurations live only in your browser database, keeping your data entirely yours.
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* SECURITY PILLARS SECTION */}
        <div className="border-t border-white/[0.08] pt-12 sm:pt-16 md:pt-20 pb-12 sm:pb-16 md:pb-24 lg:pb-36">
          
          <div className="mb-6 text-[10px] md:text-xs tracking-[0.35em] text-[#f4cf8a]/65 ">
            [ Safety ]
          </div>

          <h2 className="text-2xl sm:text-3xl font-light tracking-[-0.03em] font-display text-white leading-snug mb-12">
            Four commitments to safe learning.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Pillar 1 */}
            <div className="p-6 rounded-xl border border-white/[0.04] bg-neutral-900/10 hover:border-white/[0.1] hover:bg-neutral-900/20 transition-all duration-300">
              <div className="p-2 text-[#e5c185] bg-white/[0.02] border border-white/5 rounded-lg w-fit mb-5">
                <Shield size={18} className="stroke-[1.5]" />
              </div>
              <h3 className="text-sm font-normal mb-3 tracking-wide text-white">Risk-free practicing</h3>
              <p className="text-xs text-white/40 leading-relaxed">
                Everything works with simulated token wallets, letting you practice with sample keys safely.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="p-6 rounded-xl border border-white/[0.04] bg-neutral-900/10 hover:border-white/[0.1] hover:bg-neutral-900/20 transition-all duration-300">
              <div className="p-2 text-[#e5c185] bg-white/[0.02] border border-white/5 rounded-lg w-fit mb-5">
                <Eye size={18} className="stroke-[1.5]" />
              </div>
              <h3 className="text-sm font-normal mb-3 tracking-wide text-white">Completely visible</h3>
              <p className="text-xs text-white/40 leading-relaxed">
                We trace every explanation to its source, so you understand the math and reasoning behind every reply.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="p-6 rounded-xl border border-white/[0.04] bg-neutral-900/10 hover:border-white/[0.1] hover:bg-neutral-900/20 transition-all duration-300">
              <div className="p-2 text-[#e5c185] bg-white/[0.02] border border-white/5 rounded-lg w-fit mb-5">
                <Lock size={18} className="stroke-[1.5]" />
              </div>
              <h3 className="text-sm font-normal mb-3 tracking-wide text-white">Strict privacy</h3>
              <p className="text-xs text-white/40 leading-relaxed">
                We require absolutely no actual banking keys, banking credentials, or personal debit card passwords.
              </p>
            </div>

            {/* Pillar 4 */}
            <div className="p-6 rounded-xl border border-white/[0.04] bg-neutral-900/10 hover:border-white/[0.1] hover:bg-neutral-900/20 transition-all duration-300">
              <div className="p-2 text-[#e5c185] bg-white/[0.02] border border-white/5 rounded-lg w-fit mb-5">
                <Cpu size={18} className="stroke-[1.5]" />
              </div>
              <h3 className="text-sm font-normal mb-3 tracking-wide text-white">Predictable logic</h3>
              <p className="text-xs text-white/40 leading-relaxed">
                Our templates and tools are deterministic, meaning you get the same correct results every time you execute.
              </p>
            </div>

          </div>

        </div>

        {/* PERFORMANCE METRICS SECTION */}
        <div className="border-t border-white/[0.08] pt-12 sm:pt-16 md:pt-20 pb-12 sm:pb-16 md:pb-24 lg:pb-32">
          
          <div className="mb-12 text-[10px] md:text-xs tracking-[0.35em] text-[#f4cf8a]/65 ">
            [ Key Numbers ]
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 rounded-xl border border-white/[0.04] bg-[#0b0808]/20 p-8 md:p-10 divide-y-0 divide-x-0 sm:divide-x sm:divide-white/[0.04] gap-y-8 sm:gap-y-0">
            {/* Metric 1 */}
            <div className="space-y-2 text-center sm:text-left sm:px-4 first:pl-0">
              <p className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white font-display">Under 1s</p>
              <p className="text-[9px] sm:text-[10px]  tracking-widest text-[#f4cf8a]/70 font-semibold">Typical AI reply speed</p>
            </div>

            {/* Metric 2 */}
            <div className="space-y-2 text-center sm:text-left sm:px-6">
              <p className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white font-display">100%</p>
              <p className="text-[9px] sm:text-[10px]  tracking-widest text-white/40">Simulated risk-free sandbox</p>
            </div>

            {/* Metric 3 */}
            <div className="space-y-2 text-center sm:text-left sm:px-6">
              <p className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white font-display">SOC 2</p>
              <p className="text-[9px] sm:text-[10px]  tracking-widest text-white/40">Secure platform standards</p>
            </div>

            {/* Metric 4 */}
            <div className="space-y-2 text-center sm:text-left sm:px-6 last:pr-0">
              <p className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white font-display font-sans">90+ days</p>
              <p className="text-[9px] sm:text-[10px]  tracking-widest text-[#f4cf8a]/70 font-semibold">Local history storage</p>
            </div>
          </div>

        </div>

        {/* STACK LIST SECTION */}
        <div className="border-t border-white/[0.08] pt-12 sm:pt-16 md:pt-20 pb-12 sm:pb-16 md:pb-24 lg:pb-36">
          
          <div className="mb-12 text-[10px] md:text-xs tracking-[0.35em] text-[#f4cf8a]/65 ">
            [ Tech Stack ]
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
            
            {/* Left Column info */}
            <div className="lg:col-span-5 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-light tracking-[-0.03em] font-display text-white leading-tight">
                A simple look at what we run.
              </h2>
              <p className="text-xs sm:text-sm text-white/45 font-sans leading-relaxed max-w-md">
                No complex layers. These are the straightforward components that power your Xenith playground under the hood.
              </p>
            </div>

            {/* Right Column details list */}
            <div className="lg:col-span-7 space-y-1">
              
              {/* Row 1 */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-5 border-b border-white/[0.04] hover:bg-white/[0.01] transition duration-200">
                <div className="flex items-center gap-3.5 mb-2 sm:mb-0">
                  <span className="p-1 px-1.5 rounded bg-white/[0.03] text-white/40 border border-white/5">
                    <Layers size={11} className="text-[#f4cf8a]/85" />
                  </span>
                  <span className="text-[9px] sm:text-[10px]  tracking-widest text-white/50 font-semibold">Core Framework</span>
                </div>
                <div className="text-xs sm:text-sm text-white/80 ">
                  React 18 & Vite (Lightning-fast client rendering)
                </div>
              </div>

              {/* Row 2 */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-5 border-b border-white/[0.04] hover:bg-white/[0.01] transition duration-200">
                <div className="flex items-center gap-3.5 mb-2 sm:mb-0">
                  <span className="p-1 px-1.5 rounded bg-white/[0.03] text-white/40 border border-white/5">
                    <Zap size={11} className="text-[#f4cf8a]/85" />
                  </span>
                  <span className="text-[9px] sm:text-[10px]  tracking-widest text-white/50 font-semibold">AI Integration</span>
                </div>
                <div className="text-xs sm:text-sm text-white/80 ">
                  Server-side Google Gemini (Rich model reasoning)
                </div>
              </div>

              {/* Row 3 */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-5 border-b border-white/[0.04] hover:bg-white/[0.01] transition duration-200">
                <div className="flex items-center gap-3.5 mb-2 sm:mb-0">
                  <span className="p-1 px-1.5 rounded bg-white/[0.03] text-white/40 border border-white/5">
                    <Database size={11} className="text-[#f4cf8a]/85" />
                  </span>
                  <span className="text-[9px] sm:text-[10px]  tracking-widest text-white/50 font-semibold">Data Safety</span>
                </div>
                <div className="text-xs sm:text-sm text-white/80 ">
                  Browser-side LocalStorage (Zero leak guarantee)
                </div>
              </div>

              {/* Row 4 */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-5 border-b border-white/[0.04] hover:bg-white/[0.01] transition duration-200">
                <div className="flex items-center gap-3.5 mb-2 sm:mb-0">
                  <span className="p-1 px-1.5 rounded bg-white/[0.03] text-white/40 border border-white/5">
                    <Lock size={11} className="text-[#f4cf8a]/85" />
                  </span>
                  <span className="text-[9px] sm:text-[10px]  tracking-widest text-white/50 font-semibold">Security Check</span>
                </div>
                <div className="text-xs sm:text-sm text-white/80 ">
                  Per-request sandbox simulation & rate guards
                </div>
              </div>

              {/* Row 5 */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-5 border-b border-white/[0.04] hover:bg-white/[0.01] transition duration-200">
                <div className="flex items-center gap-3.5 mb-2 sm:mb-0">
                  <span className="p-1 px-1.5 rounded bg-white/[0.03] text-white/40 border border-white/5">
                    <Activity size={11} className="text-[#f4cf8a]/85" />
                  </span>
                  <span className="text-[9px] sm:text-[10px]  tracking-widest text-white/50 font-semibold">Visual Magic</span>
                </div>
                <div className="text-xs sm:text-sm text-white/80 ">
                  Tailwind CSS + Motion (Silky smooth feedback)
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* CENTERE CE AND COMPLIANCE CTA */}
        <div className="border-t border-white/[0.08] pt-12 sm:pt-16 md:pt-24 pb-12 flex flex-col items-center justify-center text-center">
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-[-0.03em] font-display text-white mb-4 leading-tight">
            Learn and build step-by-step.
          </h2>
          
          <p className="text-xs sm:text-sm text-white/40 max-w-xl leading-relaxed mb-8">
            Check out our easy, copy-paste sample code, explore secure wallet APIs, and build your own custom client dashboards in under 10 minutes.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <button 
              onClick={onTryXenith}
              className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-full bg-white text-black px-7 py-3 text-xs tracking-[0.2em] font-medium hover:bg-[#ffe5b0] transition-colors duration-300 cursor-pointer"
            >
              Request Free Trial <ArrowUpRight size={14} />
            </button>
            <button 
              onClick={onNavigateProduct}
              className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-full border border-white/10 hover:border-white/30 px-7 py-3 text-xs tracking-[0.2em] font-medium text-white/80 hover:text-white transition duration-300 cursor-pointer"
            >
              See It In Product <ArrowRight size={14} />
            </button>
          </div>

        </div>

      </div>

      {/* Footer Navigation */}
      <footer className="border-t border-white/[0.04] bg-black/40 py-12 px-8 text-xs tracking-[0.15em] text-white/40  z-10 relative">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5 select-none pointer-events-none">
            <XenithLogo size={20} className="opacity-60" />
            <span className="text-[10px] tracking-[0.3em] text-white/50">Xenith Labs © 2026</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-9 text-[9px] lg:text-[10px]">
            <a onClick={onNavigateCompany} className="hover:text-white transition cursor-pointer">Company</a>
            <a className="text-white border-b border-[#f4cf8a]/60 pb-0.5 cursor-pointer">Technology</a>
            <a onClick={onNavigatePricing} className="hover:text-white transition cursor-pointer">Pricing</a>
            <a onClick={onNavigateNews} className="hover:text-white transition cursor-pointer">News</a>
            <a href="mailto:hi@xenith.ai" className="hover:text-white transition cursor-pointer">Contact</a>
          </div>
        </div>
      </footer>

    </motion.div>
  );
}
