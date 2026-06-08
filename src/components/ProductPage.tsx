import React, { useState } from "react";
import { 
  Sparkles, 
  Code2, 
  FileText, 
  ArrowUpRight, 
  ArrowRight, 
  Database, 
  ShieldCheck, 
  Briefcase,
  Layers,
  Menu,
  X
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import XenithLogo from "./XenithLogo";

interface ProductPageProps {
  onBackToHome: () => void;
  onTryXenith: () => void;
  onNavigatePricing: () => void;
  onNavigateTechnology: () => void;
  onNavigateCompany: () => void;
  onNavigateNews: () => void;
}

export default function ProductPage({
  onBackToHome,
  onTryXenith,
  onNavigatePricing,
  onNavigateTechnology,
  onNavigateCompany,
  onNavigateNews,
}: ProductPageProps) {
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
      <div className="absolute top-[50%] right-[-15%] w-[60%] h-[800px] pointer-events-none z-0 bg-[radial-gradient(circle_at_80%_50%,rgba(229,193,133,0.09),transparent_50%)] blur-[100px]" />
      <div className="absolute bottom-0 left-[10%] w-[80%] h-[500px] pointer-events-none z-0 bg-[radial-gradient(circle_at_50%_90%,rgba(229,193,133,0.06),transparent_60%)] blur-[110px]" />

      {/* Grid Pattern overlays */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:100%_120px] pointer-events-none opacity-20 z-0" />
      <div className="absolute inset-x-0 top-0 h-[600px] bg-[linear-gradient(90deg,rgba(255,255,255,0.007)_1px,transparent_1px)] bg-[size:40px_100%] pointer-events-none opacity-20 z-0" />

      {/* Decorative concentric background circle vectors seen in the original designs */}
      <div className="absolute top-[250px] left-1/2 -translate-x-[40%] w-[580px] h-[580px] rounded-full border border-white/[0.015] pointer-events-none z-0" />
      <div className="absolute top-[800px] left-1/2 -translate-x-[60%] w-[720px] h-[720px] rounded-full border border-[#f4cf8a]/[0.01] pointer-events-none z-0" />
      <div className="absolute top-[1400px] left-1/2 -translate-x-[35%] w-[650px] h-[650px] rounded-full border border-white/[0.012] pointer-events-none z-0" />

      {/* Product View Header (Matching Design exactly) */}
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
              <a className="text-white border-b border-[#f4cf8a]/60 pb-1 cursor-pointer transition font-medium">Product</a>
              <a className="hover:text-white transition cursor-pointer" onClick={onNavigateTechnology}>Technology</a>
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
                  className="text-white border-l-2 border-[#f4cf8a] pl-3 font-medium py-2.5 cursor-pointer transition" 
                  onClick={() => setIsMobileMenuOpen(false)}
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

      {/* Main product presentation */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 py-20 lg:py-28">
        
        {/* Hero Section Label */}
        <div className="mb-6 text-[10px] md:text-xs uppercase tracking-[0.35em] text-[#f4cf8a]/65 ">
          [ Product ]
        </div>

        {/* Hero Big Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-[-0.04em] leading-[1.1] max-w-3xl mb-8 font-display">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/70">Simple financial AI.</span>
          <br />
          <span className="text-white/25 mt-1 block">Three friendly surfaces.</span>
        </h1>

        {/* Hero Description */}
        <p className="text-sm sm:text-base text-white/50 max-w-2xl leading-relaxed mb-12 sm:mb-20 md:mb-32">
          Xenith provides a complete companion suite: an easy AI assistant for answering financial questions, a developer-friendly sandbox to test your code, and step-by-step guides that make learning digital finance straightforward.
        </p>

        {/* THREE SURFACES DETAILS SECTION */}
        <div className="space-y-24 sm:space-y-32 md:space-y-48 mb-24 sm:mb-36 md:mb-52">
          
          {/* Surface 1: Xenith AI (Reasoning surface) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Standard layout: content on left (col-6), graphic on right (col-6) */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* Category Pill Tag */}
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-[10px] uppercase tracking-[0.25em] text-white/75  backdrop-blur">
                <Sparkles size={11} className="text-[#e5c185]" />
                Xenith Assistant
              </div>

              {/* Title */}
              <h2 className="text-2xl sm:text-3xl font-light tracking-[-0.03em] font-display text-white leading-snug">
                An easy chat workspace for your finance questions.
              </h2>

              {/* Text */}
              <p className="text-sm text-white/50 leading-relaxed font-sans">
                Ask about market concepts, compare investment ideas in simple terms, and draft hypothetical budget plans in plain English. There are no confusing formulas or hidden black boxes.
              </p>

              {/* Bullets with customized golden bullet styling */}
              <ul className="space-y-3.5 pt-2 text-xs sm:text-sm text-white/70 transition-all">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#e5c185] font-bold select-none">•</span>
                  <span>Natural language chat to explore live and mock market data easily</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#e5c185] font-bold select-none">•</span>
                  <span>Clear explanations with links to helpful financial education sites</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#e5c185] font-bold select-none">•</span>
                  <span>Private and safe sandbox environment for stress-free practicing</span>
                </li>
              </ul>
            </div>

            {/* Graphics right side container */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full aspect-[4/3] max-w-[500px] rounded-2xl border border-white/[0.08] bg-[#0b0808]/40 backdrop-blur-md p-6 shadow-2xl overflow-hidden group hover:border-white/15 transition-all duration-500">
                {/* Micro interface decorations */}
                <div className="absolute top-4 right-5 flex items-center justify-center p-1 rounded-md bg-white/[0.03] border border-white/5">
                  <Sparkles size={14} className="text-white/40" />
                </div>
                {/* Inside simulated browser/terminal mockup lines as requested in input */}
                <div className="flex flex-col h-full justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2.5 pb-2 border-b border-white/[0.04]">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/30" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/30" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/30" />
                      <span className="text-[9px]  uppercase tracking-widest text-white/30 ml-2">Xenith Chat v1.4</span>
                    </div>

                    {/* Chat Bubble Simulation */}
                    <div className="space-y-3.5">
                      <div className="p-3.5 rounded-lg bg-white/[0.02] border border-white/[0.04] max-w-[85%]">
                        <div className="w-16 h-1 bg-[#e5c185]/40 rounded mb-1.5" />
                        <div className="w-full h-2.5 bg-white/10 rounded" />
                        <div className="w-2/3 h-2.5 bg-white/5 rounded mt-1.5" />
                      </div>
                      
                      <div className="p-3.5 rounded-lg bg-[#e5c185]/5 border border-[#e5c185]/10 max-w-[90%] ml-auto">
                        <div className="w-20 h-1 bg-[#e5c185] rounded mb-2" />
                        <div className="space-y-1.5">
                          <div className="w-full h-2 bg-white/20 rounded" />
                          <div className="w-11/12 h-2 bg-white/15 rounded" />
                          <div className="w-3/4 h-2 bg-white/10 rounded" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Input bottom area simulation */}
                  <div className="pt-4 border-t border-white/[0.04] flex items-center justify-between">
                    <div className="w-3/4 h-5 rounded-full bg-white/[0.02] border border-white/5" />
                    <div className="w-8 h-5 rounded-full bg-[#e5c185]/10 border border-[#e5c185]/20" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Surface 2: Xenith API (Developer endpoint) - Reversed layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Graphics container on left (col-6 in md/lg, ordered first on desktop, visual first on mobile) */}
            <div className="lg:col-span-6 flex justify-center order-last lg:order-first">
              <div className="relative w-full aspect-[4/3] max-w-[500px] rounded-2xl border border-white/[0.08] bg-[#0b0808]/40 backdrop-blur-md p-6 shadow-2xl overflow-hidden group hover:border-white/15 transition-all duration-500">
                
                {/* Micro interface decorations */}
                <div className="absolute top-4 right-5 flex items-center justify-center p-1 rounded-md bg-white/[0.03] border border-white/5">
                  <Code2 size={14} className="text-white/40" />
                </div>

                <div className="flex flex-col h-full justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2.5 pb-2 border-b border-white/[0.04]">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/30" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/30" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/30" />
                      <span className="text-[9px]  uppercase tracking-widest text-white/30 ml-2">curl_sandbox.sh</span>
                    </div>

                    {/* Developer Code Simulation lines */}
                    <div className="space-y-3  text-[10px] sm:text-xs text-white/40 pt-2 leading-relaxed">
                      <div>
                        <span className="text-[#e5c185]">const</span> <span className="text-white/80">xenith</span> = <span className="text-[#e5c185]">new</span> <span className="text-teal-400">XenithClient</span>(<span className="text-white/60">{"{"}</span>
                      </div>
                      <div className="pl-4">
                        <span className="text-zinc-500">apiKey:</span> <span className="text-green-300">"xk_test_sec_demo_abc"</span>
                      </div>
                      <div>
                        <span className="text-white/60">{"});"}</span>
                      </div>
                      <div className="pt-2">
                        <span className="text-[#e5c185]">const</span> <span className="text-white/80">stream</span> = <span className="text-[#e5c185]">await</span> <span className="text-white/80">xenith</span>.<span className="text-sky-300">intelligence</span>.<span className="text-sky-300">stream</span>(<span className="text-white/60">{"{"}</span>
                      </div>
                      <div className="pl-4">
                        <span className="text-zinc-500">model:</span> <span className="text-green-300">"xenith-friendly-v1"</span>,
                      </div>
                      <div className="pl-4">
                        <span className="text-zinc-500">grounding:</span> <span className="text-[#e5c185]">true</span>
                      </div>
                      <div>
                        <span className="text-white/60">{"});"}</span>
                      </div>
                    </div>
                  </div>

                  {/* status tag */}
                  <div className="pt-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#f4cf8a] animate-ping" />
                    <span className="text-[9px]  uppercase text-[#f4cf8a]/80 tracking-widest">Safe sandbox active (200 OK)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content info on right (col-6) */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* Category Pill Tag */}
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-[10px] uppercase tracking-[0.25em] text-white/75  backdrop-blur">
                <Code2 size={11} className="text-[#e5c185]" />
                Xenith Developer API
              </div>

              {/* Title */}
              <h2 className="text-2xl sm:text-3xl font-light tracking-[-0.03em] font-display text-white leading-snug">
                Simple sandbox API for quick prototyping.
              </h2>

              {/* Text */}
              <p className="text-sm text-white/50 leading-relaxed font-sans">
                A simple and clean API to write your very first financial script or bot. Read simulated balances, format mock invoices, and build your own custom helper dashboards effortlessly.
              </p>

              {/* Bullets */}
              <ul className="space-y-3.5 pt-2 text-xs sm:text-sm text-white/70">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#e5c185] font-bold select-none">•</span>
                  <span>Simple API keys that let you build without fear of breaking anything</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#e5c185] font-bold select-none">•</span>
                  <span>No complex backend setup required — run everything directly on a simple web page</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#e5c185] font-bold select-none">•</span>
                  <span>Webhooks to notify your code when a simulated payment completes</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Surface 3: Xenith Docs */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Standard layout: content on left, graphics on right */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* Category Pill Tag */}
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-[10px] uppercase tracking-[0.25em] text-white/75  backdrop-blur">
                <FileText size={11} className="text-[#e5c185]" />
                Xenith Guides
              </div>

              {/* Title */}
              <h2 className="text-2xl sm:text-3xl font-light tracking-[-0.03em] font-display text-white leading-snug">
                Plain-English guides with copy-paste magic.
              </h2>

              {/* Text */}
              <p className="text-sm text-white/50 leading-relaxed font-sans">
                No dry manuals here. We write step-by-step guides with fully working examples in Python and TypeScript, accompanied by interactive mock data so you can see things run in real time.
              </p>

              {/* Bullets */}
              <ul className="space-y-3.5 pt-2 text-xs sm:text-sm text-white/70">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#e5c185] font-bold select-none">•</span>
                  <span>Pre-filled templates for common budgets and compound interest charts</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#e5c185] font-bold select-none">•</span>
                  <span>Easy reference guides mapping digital finance concepts</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#e5c185] font-bold select-none">•</span>
                  <span>Fully interactive playground that requires no installations</span>
                </li>
              </ul>
            </div>

            {/* Graphics right side container */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full aspect-[4/3] max-w-[500px] rounded-2xl border border-white/[0.08] bg-[#0b0808]/40 backdrop-blur-md p-6 shadow-2xl overflow-hidden group hover:border-white/15 transition-all duration-500">
                
                {/* Micro interface decorations */}
                <div className="absolute top-4 right-5 flex items-center justify-center p-1 rounded-md bg-white/[0.03] border border-white/5">
                  <FileText size={14} className="text-white/40" />
                </div>

                <div className="flex flex-col h-full justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2.5 pb-2 border-b border-white/[0.04]">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/30" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/30" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/30" />
                      <span className="text-[9px]  uppercase tracking-widest text-white/30 ml-2">sample_workbook.json</span>
                    </div>

                    {/* Documentation Simulation design */}
                    <div className="space-y-3 pt-3">
                      <div className="flex justify-between items-center text-[10px]  border-b border-white/[0.03] pb-1.5">
                        <span className="text-white/60">GET /v1/simulation/balance</span>
                        <span className="text-[#e5c185] px-1.5 py-0.5 rounded bg-[#e5c185]/10 text-[8px]">SANDBOX</span>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="h-2 bg-white/15 rounded w-1/3" />
                        <div className="h-1.5 bg-white/5 rounded w-11/12" />
                        <div className="h-1.5 bg-white/5 rounded w-10/12" />
                      </div>

                      <div className="p-2.5 rounded bg-black/30 border border-white/5  text-[9px] text-teal-300">
                        "{`status`}": "{`demo_account_active`}",
                        <br />
                        "{`mock_balance`}": 5000.00
                      </div>
                    </div>
                  </div>

                  <div className="h-1 bg-gradient-to-r from-red-500/10 via-[#e5c185]/30 to-teal-500/10 rounded" />
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* USE CASES SECTION - Matches grid structure */}
        <div className="border-t border-white/[0.08] pt-12 sm:pt-16 md:pt-24 pb-12 sm:pb-16 md:pb-24 relative">
          
          <div className="mb-12 text-[10px] md:text-xs uppercase tracking-[0.35em] text-[#f4cf8a]/65 ">
            [ Use Cases ]
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Use Case 1: Portfolio operations */}
            <div className="p-6 rounded-xl border border-white/[0.06] bg-gradient-to-b from-[#110e0f] to-[#080606] hover:border-white/15 transition-all duration-300 hover:-translate-y-1">
              <div className="p-2 text-[#e5c185] bg-white/[0.02] border border-white/5 rounded-lg w-fit mb-5">
                <Layers size={18} />
              </div>
              <h3 className="text-lg font-normal mb-3 font-display text-white">Financial Planning</h3>
              <p className="text-xs text-white/45 leading-relaxed font-sans">
                Practice analyzing budgets, tracking savings benchmarks, and calculating potential long-term investment growth.
              </p>
            </div>

            {/* Use Case 2: Member intelligence */}
            <div className="p-6 rounded-xl border border-white/[0.06] bg-gradient-to-b from-[#110e0f] to-[#080606] hover:border-white/15 transition-all duration-300 hover:-translate-y-1">
              <div className="p-2 text-[#e5c185] bg-white/[0.02] border border-white/5 rounded-lg w-fit mb-5">
                <Database size={18} />
              </div>
              <h3 className="text-lg font-normal mb-3 font-display text-white">Simple Learning</h3>
              <p className="text-xs text-white/45 leading-relaxed font-sans">
                Instantly pull mock portfolios, interactive charts, and token listings to understand digital ledger logic safely.
              </p>
            </div>

            {/* Use Case 3: Compliance review */}
            <div className="p-6 rounded-xl border border-white/[0.06] bg-gradient-to-b from-[#110e0f] to-[#080606] hover:border-white/15 transition-all duration-300 hover:-translate-y-1">
              <div className="p-2 text-[#e5c185] bg-white/[0.02] border border-white/5 rounded-lg w-fit mb-5">
                <ShieldCheck size={18} />
              </div>
              <h3 className="text-lg font-normal mb-3 font-display text-white">Interactive History</h3>
              <p className="text-xs text-white/45 leading-relaxed font-sans">
                Review and audit your sandbox actions with simple transaction graphs, showing exactly how money moves.
              </p>
            </div>

          </div>

        </div>

        {/* READY TO INTEGRATE CTA - Matches original buttons */}
        <div className="border-t border-white/[0.08] pt-12 sm:pt-16 md:pt-24 pb-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-light tracking-[-0.03em] font-display text-white mb-2 leading-tight">
              Ready to try Xenith AI for yourself?
            </h2>
            <p className="text-xs sm:text-sm text-white/40">
              Start playing in minutes within our risk-free, sandboxed workspace.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto shrink-0">
            <button 
              onClick={onNavigatePricing}
              className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-full bg-white text-black px-7 py-3 text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#ffe5b0] transition-colors duration-300 cursor-pointer"
            >
              View Free & Premium Tiers <ArrowUpRight size={14} />
            </button>
            <button 
              onClick={onTryXenith}
              className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-full border border-white/10 hover:border-white/30 px-7 py-3 text-xs uppercase tracking-[0.2em] font-medium text-white/80 hover:text-white transition duration-300 cursor-pointer"
            >
              How Chat Works <ArrowRight size={14} />
            </button>
          </div>
        </div>

      </div>

      {/* Elegant Footer Details */}
      <footer className="border-t border-white/[0.04] bg-black/40 py-12 px-8 text-xs tracking-[0.15em] text-white/40  z-10 relative">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5 select-none pointer-events-none">
            <XenithLogo size={20} className="opacity-60" />
            <span className="text-[10px] tracking-[0.3em] text-white/50">Xenith Labs © 2026</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-9 text-[9px] lg:text-[10px] uppercase">
            <a onClick={onNavigateCompany} className="hover:text-white transition cursor-pointer">Company</a>
            <a onClick={onNavigateTechnology} className="hover:text-white transition cursor-pointer">Technology</a>
            <a onClick={onNavigatePricing} className="hover:text-white transition cursor-pointer">Pricing</a>
            <a onClick={onNavigateNews} className="hover:text-white transition cursor-pointer">News</a>
            <a href="mailto:hi@xenith.ai" className="hover:text-white transition cursor-pointer">Contact</a>
          </div>
        </div>
      </footer>
      
    </motion.div>
  );
}
