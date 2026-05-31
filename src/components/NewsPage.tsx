import React, { useState } from "react";
import { 
  ArrowUpRight,
  ChevronRight,
  Menu,
  X,
  Compass,
  Layers,
  Cpu,
  Bookmark,
  ArrowUp
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import XenithLogo from "./XenithLogo";

interface NewsPageProps {
  onBackToHome: () => void;
  onNavigateProduct: () => void;
  onNavigateTechnology: () => void;
  onNavigatePricing: () => void;
  onNavigateCompany: () => void;
  onTryXenith: () => void;
}

export default function NewsPage({
  onBackToHome,
  onNavigateProduct,
  onNavigateTechnology,
  onNavigatePricing,
  onNavigateCompany,
  onTryXenith,
}: NewsPageProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState<null | string>(null);

  const heroPost = {
    id: "xenith-ol-v4",
    tag: "Primary Release",
    date: "May 28, 2026",
    title: "Introducing Xenith Finance Operating Layer v4.2",
    description: "Our largest modernization update yet. Seamless integration of real-time multi-agent execution vectors, zero-knowledge hedge computation modules, and high-frequency AI portfolio controllers optimized for global sovereign networks.",
    theme: "from-neutral-900/90 via-neutral-950/80 to-black/90 border-[#f4cf8a]/10 hover:border-[#f4cf8a]/35",
    graphic: (
      <div className="absolute inset-0 select-none group/hero">
        <img 
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80" 
          alt="Xenith Operating Layer v4.2"
          className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-[1200ms] ease-out"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-t from-black/80 via-black/20 to-transparent p-3 sm:p-6">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-center sm:text-left">
            <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full border border-[#f4cf8a]/35 flex items-center justify-center bg-black/80 shadow-2xl backdrop-blur-md relative z-10 animate-pulse shrink-0">
              <XenithLogo size={28} className="text-[#f4cf8a]" />
            </div>
            <div className="hidden sm:block h-10 sm:h-12 w-[1px] bg-white/20 relative z-10" />
            <div className="flex flex-col relative z-10 items-center sm:items-start select-none">
              <span className="text-white text-lg sm:text-2xl md:text-3xl font-display font-medium tracking-wide">OL v4.2</span>
              <span className="text-[#f4cf8a]/80 text-[8px] sm:text-[9.5px] md:text-[10px] font-mono tracking-[0.22em] uppercase max-w-[150px] sm:max-w-none">Sovereign Finance Engine</span>
            </div>
          </div>
        </div>
      </div>
    )
  };

  const topGridPosts = [
    {
      id: "quant-sandbox",
      date: "May 25, 2026",
      title: "Launch of Quant Sandbox 2.0",
      tag: "⚡ Beta Release",
      theme: "from-[#f4cf8a]/10 via-neutral-900 to-black border-[#f4cf8a]/10 hover:border-[#f4cf8a]/20",
      graphic: (
        <div className="absolute inset-0 select-none">
          <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80" 
            alt="Quant Sandbox 2.0"
            className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700 ease-out"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />
        </div>
      )
    },
    {
      id: "agentic-traders",
      date: "May 22, 2026",
      title: "Next-Gen Multi-Agent SDK",
      tag: "🤖 Agentic APIs",
      theme: "from-stone-950 via-neutral-950 to-black border-white/5 hover:border-white/15",
      graphic: (
        <div className="absolute inset-0 select-none">
          <img 
            src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80" 
            alt="Multi-Agent SDK"
            className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700 ease-out"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />
        </div>
      )
    },
    {
      id: "autonomous-hedging",
      date: "May 19, 2026",
      title: "Autonomous Hedge Protocols",
      tag: "🛠️ Safety Networks",
      theme: "from-emerald-950/20 via-neutral-950 to-black border-emerald-500/10 hover:border-emerald-500/25",
      graphic: (
        <div className="absolute inset-0 select-none">
          <img 
            src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=600&q=80" 
            alt="Autonomous Hedge Protocols"
            className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700 ease-out"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />
        </div>
      )
    },
    {
      id: "mpc-cryptography",
      date: "May 16, 2026",
      title: "MPC Private Strat Protection",
      tag: "🔒 Zero Knowledge",
      theme: "from-teal-950/20 via-[#f4cf8a]/5 to-black border-teal-500/10 hover:border-teal-500/25",
      graphic: (
        <div className="absolute inset-0 select-none">
          <img 
            src="https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&w=600&q=80" 
            alt="MPC Cryptography"
            className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700 ease-out"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />
        </div>
      )
    }
  ];

  const allPosts = [
    {
      title: "Unifying Real-Time Quant Feeds with Sovereign Agent Pipelines",
      description: "Connect native low-latency Bloomberg and Refinitiv WebSockets directly into Xenith execution cores for synchronized pricing evaluation.",
      date: "May 15, 2026"
    },
    {
      title: "Partnership with CoreWeave for Sovereign GPU Grids",
      description: "Xenith has signed a definitive hosting agreement with CoreWeave to secure 5,000 H100 dedicated instances for zero-latency execution simulation layers.",
      date: "May 6, 2026"
    },
    {
      title: "Multi-Language SDK support in Rust, C++, and Go",
      description: "We are releasing comprehensive binding libraries for low-latency systems programmers interfacing with Xenith engines.",
      date: "May 6, 2026"
    },
    {
      title: "Xenith Predictor API Upgrade: Hyper-Realistic Market Paths",
      description: "Enhanced Monte Carlo path algorithms with continuous stochastic drift adjustments now active across all sandbox layers.",
      date: "May 6, 2026"
    },
    {
      title: "Cloning and Executing Core Strategies via Natural Voice Prompts",
      description: "Our dynamic workspace and playground now support voice-initiated strategy configuration and model parameter adjustments on the fly.",
      date: "Apr 30, 2026"
    },
    {
      title: "Sovereign Intelligence ThinkFast 1.0 Real-time Inference",
      description: "Low-power financial reasoning nodes are now active, boosting inference speeds by 400% for micro-arbitrage signals.",
      date: "Apr 23, 2026"
    },
    {
      title: "Sub-millisecond Clearing API and State Synchronization",
      description: "Instantaneous cross-ledger validation and atomic order-clearing operations have finished private beta testing with 99.999% uptime.",
      date: "Apr 17, 2026"
    },
    {
      title: "Xenith Labs Acquires QuantMesh High-frequency Router",
      description: "In an effort to expand our low-latency physical colocation footprint inside Chicago and Frankfurt data hubs, Xenith Labs has fully integrated QuantMesh networks.",
      date: "Feb 2, 2026"
    },
    {
      title: "Release of Dynamic Hedging Automation API",
      description: "Deploy state-of-the-art visual and server-side algorithms to auto-rebalance portfolios under extreme stress scenarios.",
      date: "Jan 28, 2026"
    },
    {
      title: "Xenith Labs raises $25M Series B for Sovereign Computing",
      description: "Securing capital expansions to push research boundaries for decentralized, non-custodial financial engineering systems.",
      date: "Jan 6, 2026"
    },
    {
      title: "Introducing Xenith Enterprise Workspaces",
      description: "Equipping institutional hedge funds, sovereign banking structures, and high-net-worth family desks with self-governing computation nodes.",
      date: "Dec 30, 2025"
    },
    {
      title: "Secure Multi-Party RAG Systems for Algorithmic Secrecy",
      description: "Deploy powerful vector search indices over private proprietary trading data without exposing proprietary intellectual property models.",
      date: "Dec 22, 2025"
    },
    {
      title: "Partnering with Financial Regulators on Sandbox Frameworks",
      description: "Xenith Labs is thrilled to demonstrate how safe visual sandboxes can assist policy audits while keeping compliance airtight and seamless.",
      date: "Dec 22, 2025"
    },
    {
      title: "Introducing Automated Risk-Off Guardians",
      description: "Proactive safety systems that track real-time volatility correlations and automatically hedge exposure during global black swan metrics.",
      date: "Dec 17, 2025"
    },
    {
      title: "Autonomous Strategy Generations via Unified Intelligent Prompts",
      description: "Express raw financial logic in simple human statements, and let the Xenith Compiler transform them into fully verified, backtested C++ quant modules.",
      date: "Dec 11, 2025"
    },
    {
      title: "Benchmarking Xenith Core against Legacy Middleware",
      description: "A detailed 100-page benchmark report comparing our sovereign finance engine with traditional financial trading architectures, showing 12x lower latency.",
      date: "Nov 19, 2025"
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="min-h-screen bg-[#050505] text-[#b0b0b0] font-sans relative overflow-x-hidden selection:bg-[#f4cf8a]/30 selection:text-[#f4cf8a]"
    >
      {/* Background radial soft glows matching the rest of the application */}
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
              <a className="hover:text-[#f4cf8a] transition cursor-pointer" onClick={onNavigateCompany}>Company</a>
              <a className="text-white border-b border-[#f4cf8a]/60 pb-1 cursor-pointer transition font-medium">News</a>
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
                  className="text-white/60 hover:text-white pl-3 py-2.5 cursor-pointer transition" 
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onNavigateCompany();
                  }}
                >
                  Company
                </a>
                <a 
                  className="text-white border-l-2 border-[#f4cf8a] pl-3 font-medium py-2.5 cursor-pointer transition" 
                  onClick={() => setIsMobileMenuOpen(false)}
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

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 py-12 space-y-14">
        
        {/* HERO SECTION - Large visual element matching the mock exactly */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch pt-2">
          
          {/* Left Column: Post details */}
          <div className="lg:col-span-6 flex flex-col justify-between items-start py-2 space-y-6 pr-4">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] tracking-[0.25em] text-emerald-400 font-mono font-medium uppercase">
                  {heroPost.tag}
                </span>
                <span className="text-white/15 text-[10px]">•</span>
                <span className="text-[10px] tracking-[0.25em] text-[#808080] font-mono">
                  {heroPost.date}
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-light text-white leading-[1.05] tracking-[-0.035em]">
                {heroPost.title}
              </h1>
              
              <p className="text-sm md:text-base text-white/50 leading-relaxed font-sans font-light max-w-xl">
                {heroPost.description}
              </p>
            </div>

            <button 
              onClick={onTryXenith}
              className="group inline-flex items-center gap-2 rounded-full border border-[#f4cf8a]/40 bg-[#f4cf8a]/5 px-6 py-3 text-xs tracking-wider text-[#f4cf8a] hover:border-[#f4cf8a]/60 hover:bg-[#f4cf8a]/10 transition-all cursor-pointer"
            >
              <span>Read More</span>
              <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right Column: Hero interactive Graphics Cover */}
          <div className="lg:col-span-6 aspect-[4/3] rounded-2xl border border-[#f4cf8a]/10 bg-neutral-900/[0.15] overflow-hidden relative group-hover:border-[#f4cf8a]/30 transition-colors duration-500 shadow-xl">
            {heroPost.graphic}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
          </div>

        </section>

        {/* TOP GRID POSTS - 4 columns exactly resembling the image */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
          {topGridPosts.map((post) => (
            <div 
              key={post.id}
              onClick={onTryXenith}
              className="group cursor-pointer flex flex-col h-full space-y-3"
            >
              {/* Graphics Cover Container inspired directly by the layout */}
              <div className={`relative w-full aspect-[4/3] rounded-2xl border bg-gradient-to-b ${post.theme} overflow-hidden shadow-lg transition-all duration-500 group-hover:scale-[1.01]`}>
                {post.graphic}
                <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
                
                {/* Embedded tag bubble on top-left of grid panels */}
                <span className="absolute top-4 left-4 text-[9px] font-mono tracking-widest text-[#f4cf8a] bg-black/60 border border-[#f4cf8a]/10 px-2 py-1 rounded-md backdrop-blur">
                  {post.tag}
                </span>
              </div>

              {/* Title & metadata */}
              <div className="space-y-1 px-1">
                <span className="text-[9px] font-mono tracking-[0.25em] text-[#808080] uppercase">
                  {post.date}
                </span>
                <h4 className="text-sm font-medium text-white group-hover:text-[#f4cf8a] transition duration-200 block">
                  {post.title}
                </h4>
              </div>
            </div>
          ))}
        </section>

        {/* CHRONOLOGICAL POSTS LIST - "All posts" on the left column */}
        <section className="border-t border-white/[0.05] pt-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Label Title Left */}
          <div className="lg:col-span-3">
            <h2 className="text-2xl sm:text-3xl font-display font-light text-white tracking-[-0.025em]">
              All posts
            </h2>
          </div>

          {/* List Content Right */}
          <div className="lg:col-span-9 divide-y divide-white/[0.04]">
            {allPosts.map((post, index) => {
              const isSelected = selectedPost === post.title;
              return (
                <div 
                  key={index}
                  onClick={() => setSelectedPost(isSelected ? null : post.title)}
                  className="group cursor-pointer py-6 first:pt-0 transition-colors duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                    <div className="space-y-2 max-w-xl">
                      <h4 className="text-[15px] font-medium text-white/90 group-hover:text-[#f4cf8a] transition-all duration-200">
                        {post.title}
                      </h4>
                      <p className="text-xs md:text-sm text-white/45 font-sans font-light leading-relaxed group-hover:text-white/60 transition duration-200">
                        {post.description}
                      </p>
                    </div>
                    
                    <span className="text-[9px] md:text-[10px] font-mono tracking-widest text-white/30 shrink-0 select-none md:pt-1">
                      {post.date}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

        </section>
        
      </div>

      {/* FOOTER: Multi-column comprehensive layout styled exactly like xAI / Apple / OpenAI */}
      <footer className="border-t border-white/[0.04] bg-black/50 py-16 px-8 text-xs tracking-wide text-white/40 mt-24 z-10 relative">
        <div className="max-w-7xl mx-auto">
          {/* Main 6-column Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-10 md:gap-8 pb-12 mb-12 border-b border-white/[0.04]">
            
            {/* Column 0: Brand Info */}
            <div className="col-span-2 space-y-4">
              <div className="flex items-center gap-2.5 select-none pointer-events-none">
                <XenithLogo size={24} className="opacity-90" />
                <span className="text-sm font-semibold tracking-[0.3em] text-white font-display">Xenith</span>
              </div>
              <p className="text-[10px] sm:text-xs leading-relaxed text-[#f4cf8a]/80 font-sans font-light max-w-xs">
                Sovereign digital finance interfaces. We build advanced model interfaces, smart sandboxes, and safe playground endpoints.
              </p>
            </div>

            {/* Column 1: Products */}
            <div className="space-y-4">
              <span className="text-[10px] tracking-wider text-white font-mono uppercase block">Products</span>
              <ul className="space-y-2.5 text-[11px] font-sans font-light">
                <li><a onClick={onNavigateProduct} className="hover:text-white transition cursor-pointer">Xenith Core</a></li>
                <li><a onClick={onNavigateTechnology} className="hover:text-white transition cursor-pointer">Sovereign Engine</a></li>
                <li><a onClick={onNavigateProduct} className="hover:text-white transition cursor-pointer">Risk Sandboxes</a></li>
                <li><a onClick={onNavigateProduct} className="hover:text-white transition cursor-pointer">API Playground</a></li>
              </ul>
            </div>

            {/* Column 2: Developers */}
            <div className="space-y-4">
              <span className="text-[10px] tracking-wider text-white font-mono uppercase block">Developers</span>
              <ul className="space-y-2.5 text-[11px] font-sans font-light">
                <li><a onClick={onNavigateTechnology} className="hover:text-white transition cursor-pointer">API Keys</a></li>
                <li><a onClick={onNavigateTechnology} className="hover:text-white transition cursor-pointer">Websocket SDK</a></li>
                <li><a onClick={onNavigateTechnology} className="hover:text-white transition cursor-pointer">System Status</a></li>
                <li><a onClick={onNavigateTechnology} className="hover:text-white transition cursor-pointer">Documentation</a></li>
              </ul>
            </div>

            {/* Column 3: Company */}
            <div className="space-y-4">
              <span className="text-[10px] tracking-wider text-white font-mono uppercase block">Company</span>
              <ul className="space-y-2.5 text-[11px] font-sans font-light">
                <li><a onClick={onNavigateCompany} className="hover:text-white transition cursor-pointer">About Us</a></li>
                <li><a onClick={onTryXenith} className="hover:text-white transition cursor-pointer">Open Roles</a></li>
                <li><a onClick={onTryXenith} className="hover:text-white transition cursor-pointer">Sponsorships</a></li>
                <li><a onClick={onNavigatePricing} className="hover:text-white transition cursor-pointer font-medium text-white/90">Pricing Plans</a></li>
              </ul>
            </div>

            {/* Column 4: Trust / Security */}
            <div className="space-y-4">
              <span className="text-[10px] tracking-wider text-white font-mono uppercase block">Trust</span>
              <ul className="space-y-2.5 text-[11px] font-sans font-light">
                <li><a onClick={onNavigateTechnology} className="hover:text-white transition cursor-pointer">Safety Portal</a></li>
                <li><a onClick={onNavigateTechnology} className="hover:text-white transition cursor-pointer">Privacy Portal</a></li>
                <li><a onClick={onNavigateTechnology} className="hover:text-white transition cursor-pointer">Audit Logs</a></li>
                <li><a onClick={onNavigateTechnology} className="hover:text-white transition cursor-pointer">Compliance</a></li>
              </ul>
            </div>

            {/* Column 5: Social / Brand */}
            <div className="space-y-4 col-span-2 lg:col-span-1">
              <span className="text-[10px] tracking-wider text-white font-mono uppercase block">Social</span>
              <ul className="space-y-2.5 text-[11px] font-sans font-light">
                <li><a href="https://x.com" target="_blank" rel="noreferrer" className="hover:text-white transition cursor-pointer">@xenith</a></li>
                <li><a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white transition cursor-pointer">GitHub</a></li>
                <li><a href="https://discord.com" target="_blank" rel="noreferrer" className="hover:text-white transition cursor-pointer">Discord</a></li>
              </ul>
            </div>

          </div>

          {/* Bottom Copyright bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between text-[10px] font-mono tracking-wider text-[#808080]/50 gap-4">
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
