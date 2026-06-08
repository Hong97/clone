import React, { useState, useRef, useEffect } from "react";
import { 
  ArrowUp, 
  ChevronRight, 
  Code2, 
  FileText, 
  Sparkles, 
  Shield, 
  Terminal, 
  Layers, 
  Cpu, 
  X, 
  Check, 
  Copy,
  ExternalLink,
  Menu
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

import ChatWorkspace from "./components/ChatWorkspace";
import ApiPlayground from "./components/ApiPlayground";
import MetricDashboard from "./components/MetricDashboard";
import TechMeshEffect from "./components/TechMeshEffect";
import MemberPortal from "./components/MemberPortal";
import TechIntro from "./components/TechIntro";
import PricingTable from "./components/PricingTable";
import XenithLogo from "./components/XenithLogo";
import ProductPage from "./components/ProductPage";
import TechnologyPage from "./components/TechnologyPage";
import PricingPage from "./components/PricingPage";
import CompanyPage from "./components/CompanyPage";
import NewsPage from "./components/NewsPage";
import PartnerDashboard from "./components/PartnerDashboard";

export default function App() {
  const [currentPage, setCurrentPage] = useState<"home" | "product" | "technology" | "pricing" | "company" | "news" | "partner">("home");
  const [searchVal, setSearchVal] = useState("");
  const [activeWorkspace, setActiveWorkspace] = useState(false);
  const [initialAiPrompt, setInitialAiPrompt] = useState("");
  const [selectedMetric, setSelectedMetric] = useState<string | null>(null);
  const [showDocsModal, setShowDocsModal] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);
  const [showMemberPortal, setShowMemberPortal] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // States for live financial & machine computing telemetry updates
  const [blockHeight, setBlockHeight] = useState(846201);
  const [btcPrice, setBtcPrice] = useState(96482.40);
  const [gasGwei, setGasGwei] = useState(14.28);
  const [sysTime, setSysTime] = useState("");

  useEffect(() => {
    // Dynamic system clock updating with high frequency milliseconds
    const updateTime = () => {
      const now = new Date();
      const datePart = now.toISOString().replace("T", " ").substring(0, 19);
      const ms = String(now.getMilliseconds()).padStart(3, "0");
      setSysTime(`${datePart}.${ms} UTC`);
    };

    updateTime();
    const clockInterval = setInterval(updateTime, 45);

    // Continuous random mini ticks to simulate fully streaming global indices
    const telemetryInterval = setInterval(() => {
      setBlockHeight(prev => prev + (Math.random() > 0.88 ? 1 : 0));
      setBtcPrice(prev => prev + (Math.random() - 0.495) * 4.2);
      setGasGwei(prev => {
        const adjustment = (Math.random() - 0.5) * 0.4;
        return parseFloat(Math.max(6.5, Math.min(26.0, prev + adjustment)).toFixed(2));
      });
    }, 1200);

    return () => {
      clearInterval(clockInterval);
      clearInterval(telemetryInterval);
    };
  }, []);

  // References to scroll targets
  const techRef = useRef<HTMLDivElement>(null);
  const productsRef = useRef<HTMLDivElement>(null);
  const playgroundRef = useRef<HTMLDivElement>(null);
  const pricingRef = useRef<HTMLDivElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);

  const handleLaunchAi = (promptText: string) => {
    setInitialAiPrompt(promptText);
    setActiveWorkspace(true);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchVal.trim()) {
      handleLaunchAi(searchVal);
      setSearchVal("");
    }
  };

  const handleScrollToTech = () => {
    setCurrentPage("technology");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScrollToProducts = () => {
    setCurrentPage("product");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScrollToPlayground = () => {
    if (currentPage !== "home") {
      setCurrentPage("home");
      setTimeout(() => {
        playgroundRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    } else {
      playgroundRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleScrollToPricing = () => {
    setCurrentPage("pricing");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScrollToCompany = () => {
    setCurrentPage("company");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScrollToNews = () => {
    setCurrentPage("news");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScrollToPartner = () => {
    setCurrentPage("partner");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScrollToMetrics = (metricKey: string) => {
    setSelectedMetric(metricKey);
    setTimeout(() => {
      metricsRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 100);
  };

  const handleCopyDocsCode = () => {
    const code = `import { XenithClient } from "@xenith/sdk";

const xenith = new XenithClient({
  apiKey: "xk_live_83b3e70d4c92a6b29f0e"
});

// Stream liquidity intelligence
const stream = await xenith.intelligence.streamSentiment({
  asset: "BTC",
  grounding: true
});`;
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  if (currentPage === "partner") {
    return (
      <PartnerDashboard
        onBackToHome={() => {
          setCurrentPage("home");
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      />
    );
  }

  if (currentPage === "product") {
    return (
      <>
        {/* Interactive Node Hologram & Grid Mesh */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <TechMeshEffect />
        </div>

        <ProductPage
          onBackToHome={() => {
            setCurrentPage("home");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          onTryXenith={() => setShowMemberPortal(true)}
          onNavigatePricing={handleScrollToPricing}
          onNavigateTechnology={handleScrollToTech}
          onNavigateCompany={handleScrollToCompany}
          onNavigateNews={handleScrollToNews}
        />

        <MemberPortal 
          isOpen={showMemberPortal} 
          onClose={() => setShowMemberPortal(false)} 
          onLaunchAi={handleLaunchAi}
        />
      </>
    );
  }

  if (currentPage === "technology") {
    return (
      <>
        {/* Interactive Node Hologram & Grid Mesh */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <TechMeshEffect />
        </div>
        
        <TechnologyPage 
          onBackToHome={() => {
            setCurrentPage("home");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          onNavigateProduct={handleScrollToProducts}
          onNavigatePricing={handleScrollToPricing}
          onNavigateCompany={handleScrollToCompany}
          onNavigateNews={handleScrollToNews}
          onTryXenith={() => setShowMemberPortal(true)}
        />

        <MemberPortal 
          isOpen={showMemberPortal} 
          onClose={() => setShowMemberPortal(false)} 
          onLaunchAi={handleLaunchAi}
        />
      </>
    );
  }

  if (currentPage === "pricing") {
    return (
      <>
        {/* Interactive Node Hologram & Grid Mesh */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <TechMeshEffect />
        </div>
        
        <PricingPage 
          onBackToHome={() => {
            setCurrentPage("home");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          onNavigateProduct={handleScrollToProducts}
          onNavigateTechnology={handleScrollToTech}
          onNavigateCompany={handleScrollToCompany}
          onNavigateNews={handleScrollToNews}
          onTryXenith={() => setShowMemberPortal(true)}
          onTriggerWorkspace={handleLaunchAi}
        />

        <MemberPortal 
          isOpen={showMemberPortal} 
          onClose={() => setShowMemberPortal(false)} 
          onLaunchAi={handleLaunchAi}
        />
      </>
    );
  }

  if (currentPage === "company") {
    return (
      <>
        {/* Interactive Node Hologram & Grid Mesh */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <TechMeshEffect />
        </div>
        
        <CompanyPage 
          onBackToHome={() => {
            setCurrentPage("home");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          onNavigateProduct={handleScrollToProducts}
          onNavigateTechnology={handleScrollToTech}
          onNavigatePricing={handleScrollToPricing}
          onNavigateNews={handleScrollToNews}
          onTryXenith={() => setShowMemberPortal(true)}
        />

        <MemberPortal 
          isOpen={showMemberPortal} 
          onClose={() => setShowMemberPortal(false)} 
          onLaunchAi={handleLaunchAi}
        />
      </>
    );
  }

  if (currentPage === "news") {
    return (
      <>
        {/* Interactive Node Hologram & Grid Mesh */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <TechMeshEffect />
        </div>
        
        <NewsPage 
          onBackToHome={() => {
            setCurrentPage("home");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          onNavigateProduct={handleScrollToProducts}
          onNavigateTechnology={handleScrollToTech}
          onNavigatePricing={handleScrollToPricing}
          onNavigateCompany={handleScrollToCompany}
          onTryXenith={() => setShowMemberPortal(true)}
        />

        <MemberPortal 
          isOpen={showMemberPortal} 
          onClose={() => setShowMemberPortal(false)} 
          onLaunchAi={handleLaunchAi}
        />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-[#060505] text-white overflow-x-hidden font-sans relative selection:bg-[#f4cf8a]/30 selection:text-[#f4cf8a]">
      
      {/* Interactive Node Hologram & Grid Mesh */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <TechMeshEffect />
      </div>

      {/* Background Ambience Layers */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_88%_18%,rgba(255,210,126,0.22),transparent_35%),radial-gradient(circle_at_20%_65%,rgba(255,255,255,0.02),transparent_30%),linear-gradient(to_bottom,#050505,#0b0708_48%,#050505)]" />
        <div className="absolute right-[-14%] top-[-3%] h-[580px] w-[580px] rounded-full bg-[#f4cf8a]/15 blur-[120px]" />
        <div className="absolute right-0 top-0 h-[620px] w-[190px] bg-[#ffe5b0]/20 blur-[90px]" />
        <div className="absolute left-1/2 top-48 h-[380px] w-[820px] -translate-x-1/2 rounded-full border border-white/[0.02]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:100%_120px] opacity-10" />
      </div>



      {/* Header element */}
      <header className="relative z-20 border-b border-white/[0.04] bg-black/10 backdrop-blur-md text-xs tracking-[0.28em] text-white/45">
        <div className="flex items-center justify-between px-8 py-5">
          <div className="flex items-center gap-9">
            <div 
              className="flex items-center gap-2.5 cursor-pointer group select-none" 
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setIsMobileMenuOpen(false);
              }}
            >
              <XenithLogo size={30} className="opacity-90 group-hover:opacity-100 transition duration-300" />
              <span className="text-sm font-semibold tracking-[0.4em] text-white group-hover:text-[#f4cf8a] transition duration-300 font-display">Xenith</span>
            </div>
            <nav className="hidden items-center gap-7 lg:flex">
              <a className={`${currentPage === "product" ? "text-white border-b border-[#f4cf8a]/60 pb-1 font-medium" : "hover:text-white transition"} cursor-pointer`} onClick={handleScrollToProducts}>Product</a>
              <a className={`${currentPage === "technology" ? "text-white border-b border-[#f4cf8a]/60 pb-1 font-medium" : "hover:text-white transition"} cursor-pointer`} onClick={handleScrollToTech}>Technology</a>
              <a className={`${currentPage === "pricing" ? "text-white border-b border-[#f4cf8a]/60 pb-1 font-medium" : "hover:text-white transition"} cursor-pointer`} onClick={handleScrollToPricing}>Pricing</a>
              <a className={`${currentPage === "company" ? "text-white border-b border-[#f4cf8a]/60 pb-1 font-medium" : "hover:text-white transition"} cursor-pointer`} onClick={handleScrollToCompany}>Company</a>
              <a className={`${currentPage === "news" ? "text-white border-b border-[#f4cf8a]/60 pb-1 font-medium" : "hover:text-white transition"} cursor-pointer`} onClick={handleScrollToNews}>News</a>
            </nav>
          </div>
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setShowMemberPortal(true)}
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
                  className={`${currentPage === "product" ? "text-white border-l-2 border-[#f4cf8a] pl-3 font-medium" : "text-white/60 hover:text-white pl-3"} py-2.5 cursor-pointer transition`} 
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    handleScrollToProducts();
                  }}
                >
                  Product
                </a>
                <a 
                  className={`${currentPage === "technology" ? "text-white border-l-2 border-[#f4cf8a] pl-3 font-medium" : "text-white/60 hover:text-white pl-3"} py-2.5 cursor-pointer transition`} 
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    handleScrollToTech();
                  }}
                >
                  Technology
                </a>
                <a 
                  className={`${currentPage === "pricing" ? "text-white border-l-2 border-[#f4cf8a] pl-3 font-medium" : "text-white/60 hover:text-white pl-3"} py-2.5 cursor-pointer transition`} 
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    handleScrollToPricing();
                  }}
                >
                  Pricing
                </a>
                <a 
                  className={`${currentPage === "company" ? "text-white border-l-2 border-[#f4cf8a] pl-3 font-medium" : "text-white/60 hover:text-white pl-3"} py-2.5 cursor-pointer transition`} 
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    handleScrollToCompany();
                  }}
                >
                  Company
                </a>
                <a 
                  className={`${currentPage === "news" ? "text-white border-l-2 border-[#f4cf8a] pl-3 font-medium" : "text-white/60 hover:text-white pl-3"} py-2.5 cursor-pointer transition`} 
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    handleScrollToNews();
                  }}
                >
                  News
                </a>
                <div className="pt-4 border-t border-white/[0.05] sm:hidden">
                  <button 
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setShowMemberPortal(true);
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
      <main className="relative z-10">
        
        {/* Hero Section */}
        <section className="relative min-h-[750px] px-6 py-16 text-center flex flex-col items-center justify-center">

          <div className="mx-auto max-w-5xl relative z-10 flex flex-col items-center">
            {/* Majestic Xenith Logo Integration */}
            <div className="mb-12 transform hover:scale-[1.03] transition-all duration-500">
              <XenithLogo size={250} showText={false} textSize="text-xl sm:text-2xl" />
            </div>

            {/* Title & Description above the Search Bar */}
            <div className="mb-4 max-w-2xl text-[9px] sm:text-[9.5px] tracking-[0.28em] text-[#f4cf8a]/90  text-center leading-relaxed">
              Unchain Your Exchange Capital. AI Executes Arbitrage Across<br />Global Liquidity Pools.
            </div>

            <h1 className="mb-7 text-[40px] font-display font-light tracking-[-0.035em] text-white text-center max-w-4xl leading-[1.05]">
              Xenith AI: Sovereign Liquidity Harvester
            </h1>

            {/* Dynamic AI workspace and bar */}
            <div className="mx-auto max-w-3xl flex flex-col items-center">
              <AnimatePresence mode="wait">
                {!activeWorkspace ? (
                  <motion.div
                     key="search-bar"
                     initial={{ opacity: 0, y: 15 }}
                     animate={{ opacity: 1, y: 0 }}
                     exit={{ opacity: 0, y: -15 }}
                     className="rounded-2xl border border-white/10 bg-[#090707]/80 p-2.5 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.9)] backdrop-blur-2xl w-[320px] sm:w-[500px] md:w-[600px] max-w-full transition-all duration-300"
                  >
                    <form onSubmit={handleSearchSubmit} className="flex items-center gap-2.5 sm:gap-4 rounded-xl border border-white/5 bg-black/40 pl-3.5 sm:pl-5 pr-2.5 sm:pr-3 py-2.5 sm:py-3">
                      <input
                        value={searchVal}
                        onChange={(e) => setSearchVal(e.target.value)}
                        className="w-full min-w-0 bg-transparent text-xs sm:text-sm md:text-[15px] text-white outline-none placeholder:text-white/30 font-sans tracking-wide"
                        placeholder="Check your Exchange API compatibility..."
                      />
                      <button 
                        type="submit" 
                        title="Query Xenith"
                        className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white text-black hover:bg-[#f2d9a1] transition-all duration-300 hover:scale-105 active:scale-95 shadow-md cursor-pointer"
                      >
                        <ArrowUp size={18} />
                      </button>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="workspace-box"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                  >
                    <ChatWorkspace 
                      initialPrompt={initialAiPrompt} 
                      onClose={() => {
                        setActiveWorkspace(false);
                        setInitialAiPrompt("");
                      }} 
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <p className="mx-auto mt-8 max-w-xl text-sm leading-7 text-white/50">
              Xenith combines simple AI chat, dynamic test wallets, and easy payment layouts so you can practice and learn about digital finance safely.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={handleScrollToPlayground}
                className="w-full sm:w-auto rounded-full border border-white/15 px-6 py-2.5 text-xs tracking-[0.22em] text-white/75 hover:border-white/40 transition hover:bg-white/[0.02] cursor-pointer font-medium"
              >
                Launch Alpha Node
              </button>
              <button 
                onClick={handleScrollToTech}
                className="w-full sm:w-auto rounded-full border border-[#f4cf8a]/30 bg-[#f4cf8a]/5 px-6 py-2.5 text-xs tracking-[0.22em] text-[#f4cf8a] hover:border-[#f4cf8a]/40 transition cursor-pointer font-medium"
              >
                Request Genesis Access
              </button>
            </div>
          </div>

          <div className="absolute bottom-10 left-8 text-white/45 hidden sm:block animate-bounce">
            <ArrowUp className="rotate-180" size={18} />
          </div>
        </section>

        {/* Products section */}
        <section ref={productsRef} id="products" className="border-t border-white/[0.08] px-8 py-16 relative bg-black/10">
          <div className="mx-auto max-w-7xl">
            <div className="mb-3 text-xs tracking-[0.35em] text-[#f4cf8a]/65 ">[ Products ]</div>
            <h2 className="mb-7 max-w-3xl text-3xl sm:text-4xl font-light tracking-[-0.04em] text-white font-display leading-tight">
              Smart, simple financial tools built for everyone.
            </h2>

            <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-none sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:overflow-visible sm:pb-0 sm:snap-none -mx-8 px-8 sm:mx-0 sm:px-0">
              <ProductCard
                title="Instant API Injection"
                text="A direct API injection that cannot withdraw capital."
                icon={<Code2 size={24} className="text-white/80" />}
                button="Use Workspace"
                onClick={() => handleLaunchAi("How do I set up a secure, non-withdrawal API connection with Binance or OKX?")}
              />
              <ProductCard
                title="Millisec Arbitrage"
                text="AI captures spread across global markets."
                icon={<Cpu size={24} className="text-white/80" />}
                button="Launch Sandbox"
                onClick={handleScrollToPlayground}
              />
              <ProductCard
                title="Dark Pool Liquidity"
                text="Access deep institutional order books."
                icon={<Layers size={24} className="text-white/80" />}
                button="Inspect Docs"
                onClick={() => setShowDocsModal(true)}
              />
              <ProductCard
                title="High Yield Composer"
                text="Engineered for non-symmetric returns."
                icon={<Sparkles size={24} className="text-white/80" />}
                button="Try Workspace"
                onClick={() => handleLaunchAi("Tell me about asymmetric high-yield strategies and composers in Xenith.")}
              />
            </div>
          </div>
        </section>

        {/* Intro Tech Section */}
        <section ref={techRef} className="border-t border-white/[0.08] px-8 py-16 relative bg-black/5">
          <div className="mx-auto max-w-7xl">
            <div className="mb-3 text-xs tracking-[0.35em] text-[#f4cf8a]/65 ">[ Core Technology ]</div>
            <h2 className="mb-7 max-w-3xl text-3xl sm:text-4xl font-light tracking-[-0.04em] text-white font-display leading-tight">
              Security without custody
            </h2>
            <TechIntro />
          </div>
        </section>

        {/* Interactive Console Sandbox Section */}
        <section ref={playgroundRef} className="px-8 py-14 border-t border-white/[0.08] relative bg-black/20">
          <div className="mx-auto max-w-7xl">
            <ApiPlayground />
          </div>
        </section>

        {/* Pricing Section */}
        <section ref={pricingRef} className="border-t border-white/[0.08] px-8 py-20 relative bg-[#090707]/30">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 text-center space-y-3">
              <div className="text-xs tracking-[0.35em] text-[#f4cf8a]/65 ">[ Member Pricing ]</div>
              <h2 className="text-3xl font-light tracking-tight text-white md:text-4xl font-display leading-tight">
                Alpha Node Pricing: Unchain Your Capital
              </h2>
              <p className="mx-auto max-w-xl text-xs tracking-wider text-[#f4cf8a] leading-relaxed  font-medium">
                Zero Custody Risk. Pay SAI Gas Fee. Generate Non-Symmetric Returns.
              </p>
            </div>

            <PricingTable onTriggerWorkspace={handleLaunchAi} />
          </div>
        </section>
      </main>

      {/* Footer element */}
      <footer className="border-t border-white/5 py-12 px-8 text-center text-[10px] tracking-[0.3em] text-white/30  relative z-10 bg-[#050505]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>© 2026 Xenith Finance Operating Layer. All rights secured.</div>
          <div className="flex flex-wrap items-center justify-center gap-6 text-[9px] uppercase font-sans font-semibold tracking-[0.2em] text-white/45">
            <a onClick={handleScrollToCompany} className="hover:text-white transition cursor-pointer">Company</a>
            <a onClick={handleScrollToTech} className="hover:text-white transition cursor-pointer">Technology</a>
            <a onClick={handleScrollToPricing} className="hover:text-white transition cursor-pointer">Pricing</a>
            <a onClick={handleScrollToNews} className="hover:text-white transition cursor-pointer">News</a>
            <a onClick={handleScrollToPartner} className="hover:text-white transition cursor-pointer">Partner</a>
          </div>
        </div>
      </footer>

      {/* Premium Developer Docs Modal */}
      <AnimatePresence>
        {showDocsModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-white/10 bg-[#0a0808] p-6 text-white shadow-2xl"
            >
              {/* Background amber flare */}
              <div className="absolute right-[-10%] top-[-10%] h-44 w-44 rounded-full bg-[#f4cf8a]/10 blur-3xl pointer-events-none" />
              
              <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-5">
                <div className="flex items-center gap-2">
                  <Terminal size={14} className="text-[#f2d9a1]" />
                  <span className="text-xs tracking-[0.25em]  text-white">Xenith Integration Blueprint</span>
                </div>
                <button 
                  onClick={() => setShowDocsModal(false)}
                  className="rounded-full border border-white/10 p-1 text-white/40 hover:text-white hover:border-white/25 transition cursor-pointer"
                >
                  <X size={15} />
                </button>
              </div>

              <div className="space-y-4 max-h-[440px] overflow-y-auto pr-2 text-sm leading-6">
                <div>
                  <h4 className="font-semibold text-white mb-1.5 font-display text-base">Installation Specs</h4>
                  <p className="text-white/50 text-xs">Instantiate our standard environment-agnostic library directly into your Node projects:</p>
                  <pre className="mt-2 bg-black/60 border border-white/5 p-3 rounded-lg font-mono text-xs text-white/80 overflow-x-auto">
                    npm install @xenith/sdk
                  </pre>
                </div>

                <div>
                  <h4 className="font-semibold text-white mb-1.5 font-display text-base">Initialize SDK Client</h4>
                  <p className="text-white/50 text-xs">Verify your connection by executing the credential pipeline constructor:</p>
                  
                  <div className="relative mt-2">
                    <button 
                      onClick={handleCopyDocsCode}
                      className="absolute right-3 top-3 bg-white/[0.05] hover:bg-white/[0.1] text-white/40 hover:text-white text-[10px]  px-2 py-1 rounded border border-white/5 transition"
                    >
                      {copiedCode ? "Copied" : "Copy"}
                    </button>
                    <pre className="bg-black/60 border border-white/5 p-4 rounded-lg font-mono text-xs text-white/80 overflow-x-auto">
{`import { XenithClient } from "@xenith/sdk";

const xenith = new XenithClient({
  apiKey: "xk_live_83b3e70d4c92a6b29f0e"
});

// Stream liquidity intelligence
const stream = await xenith.intelligence.streamSentiment({
  asset: "BTC",
  grounding: true
});`}
                    </pre>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-white mb-1.5 font-display text-base">Safe, Isolated Database Connections</h4>
                  <p className="text-white/45 text-xs leading-relaxed">
                    All sandbox tests are fully isolated to ensure your data is secure. When you are ready for larger enterprise workloads, contact us to hook up your own custom secure Google Cloud or AWS database.
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#f4cf8a]/10 text-right">
                <button 
                  onClick={() => setShowDocsModal(false)}
                  className="rounded-xl bg-white text-black px-5 py-2 text-xs font-semibold tracking-[0.15em] hover:bg-[#f2d9a1] transition cursor-pointer"
                >
                  Return to Gateway
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <MemberPortal 
        isOpen={showMemberPortal} 
        onClose={() => setShowMemberPortal(false)} 
        onLaunchAi={handleLaunchAi}
      />

    </div>
  );
}

// Subcomponents matching "Modularity" directives of constraints
interface ProductCardProps {
  title: string;
  text: string;
  icon: React.ReactNode;
  button: string;
  onClick: () => void;
}

function ProductCard({ title, text, icon, button, onClick }: ProductCardProps) {
  return (
    <article className="group relative min-h-[280px] overflow-hidden rounded-3xl border border-white/10 bg-[#0b0909]/80 p-8 backdrop-blur transition hover:border-white/20 hover:bg-white/[0.045] flex flex-col justify-between w-[280px] sm:w-auto shrink-0 sm:shrink snap-center">
      <div className="absolute inset-x-8 bottom-10 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />
      
      <div>
        <div className="mb-8 text-white/40 group-hover:text-[#f4cf8a] transition duration-300">{icon}</div>
        <h3 className="mb-3 text-lg font-medium tracking-[-0.01em] text-white font-display">{title}</h3>
        <p className="mb-8 text-xs leading-relaxed text-white/45 font-sans">{text}</p>
      </div>

      <button 
        onClick={onClick}
        className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-[10px] tracking-[0.2em] text-white/60 transition group-hover:border-white/25 group-hover:text-white cursor-pointer w-fit"
      >
        <span>{button}</span> <ChevronRight size={11} />
      </button>

      <div className="pointer-events-none absolute -bottom-24 -right-16 h-44 w-116 rounded-full border border-white/[0.02]" />
    </article>
  );
}

interface MetricButtonProps {
  label: string;
  value: string;
  isSelected: boolean;
  onClick: () => void;
}

function MetricButton({ label, value, isSelected, onClick }: MetricButtonProps) {
  return (
    <button 
      onClick={onClick} 
      className={`text-left rounded-2xl border p-5 transition-all outline-none cursor-pointer duration-300 ${
        isSelected 
          ? "border-[#f4cf8a]/40 bg-white/[0.04] shadow-lg shadow-black/40" 
          : "border-white/5 bg-black/20 hover:border-white/15"
      }`}
    >
      <div className="mb-2.5 text-[9px] tracking-[0.25em] text-white/40 ">{label}</div>
      <div className="flex items-center justify-between">
        <span className={`text-base font-medium transition ${isSelected ? "text-[#f4cf8a]" : "text-white/80"}`}>
          {value}
        </span>
        <span className={`h-1.5 w-1.5 rounded-full transition ${isSelected ? "bg-emerald-400" : "bg-white/10"}`} />
      </div>
    </button>
  );
}
