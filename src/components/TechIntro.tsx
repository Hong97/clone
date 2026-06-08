import React, { useState } from "react";
import { 
  Cpu, 
  ShieldCheck, 
  Network, 
  Layers, 
  Workflow, 
  Zap,
  Lock,
  ChevronRight
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface TechFeature {
  id: string;
  tag: string;
  title: string;
  description: string;
  metricLabel: string;
  metricValue: string;
  flowSteps: string[];
  icon: React.ReactNode;
}

export default function TechIntro() {
  const [activeTechId, setActiveTechId] = useState("custody");

  const techFeatures: TechFeature[] = [
    {
      id: "custody",
      tag: "Zero-Custody",
      title: "Zero-Custody Architecture",
      description: "Funds never leave your Binance/OKX wallets. Our Alpha API cannot withdraw capital.",
      metricLabel: "Withdrawal Permit",
      metricValue: "Strictly Blocked",
      flowSteps: ["Setup API Connection", "Untick Withdrawal Permit", "Secure Alpha Trading"],
      icon: <Cpu size={20} className="text-[#f4cf8a]" />
    },
    {
      id: "hsm",
      tag: "API Protection",
      title: "Encrypted Protection Shield",
      description: "Keep your API keys secret and secure.",
      metricLabel: "Encryption Cipher",
      metricValue: "AES-256 Symmetric",
      flowSteps: ["Input Keys", "In-Flight Envelope Lock", "Sandbox Execution"],
      icon: <ShieldCheck size={20} className="text-[#f4cf8a]" />
    },
    {
      id: "audit",
      tag: "Transparency",
      title: "Real-Time Audit Logs",
      description: "Watch the XENITH AI execute millimeter-level spread capture.",
      metricLabel: "Average Latency",
      metricValue: "< 1 Millisecond",
      flowSteps: ["Market Ingress Scan", "Spread Variance Identified", "Instant Arbitrage Capture"],
      icon: <Layers size={20} className="text-[#f4cf8a]" />
    }
  ];

  const currentTech = techFeatures.find(t => t.id === activeTechId) || techFeatures[0];

  return (
    <div className="rounded-3xl border border-white/[0.07] bg-[#090707]/75 p-6 md:p-10 backdrop-blur-xl relative overflow-hidden">
      {/* Visual lighting flare inside the tech portal container */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-[#f4cf8a]/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="grid lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Side: interactive lists/triggers */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
          <div className="space-y-4">
            <div className="text-[10px] tracking-[0.32em] text-[#f4cf8a]  font-semibold flex items-center gap-2">
              <Zap size={10} className="text-[#f4cf8a]" />
              <span>Core System Architecture</span>
            </div>
            
            <h3 className="text-2xl font-light text-white tracking-tight font-display leading-[1.15]">
              Liquidity Harvest Design
            </h3>
            
            <p className="text-xs text-white/50 leading-relaxed max-w-sm">
              The Xenith AI infrastructure operates a delta-neutral, high-frequency execution protocol. By capturing micro-deviations across major exchange books, we harvest yield instantly without asset holding risks.
            </p>
          </div>

          <div className="space-y-2.5 pt-4">
            {techFeatures.map(tech => {
              const isSelected = tech.id === activeTechId;
              return (
                <button
                  key={tech.id}
                  onClick={() => setActiveTechId(tech.id)}
                  className={`w-full text-left p-4 rounded-2xl border transition duration-300 flex items-center justify-between cursor-pointer outline-none ${
                    isSelected 
                      ? "border-[#f4cf8a]/35 bg-white/[0.045] shadow-md shadow-black/40" 
                      : "border-white/[0.03] bg-black/35 hover:border-white/10 hover:bg-white/[0.015]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-xl transition duration-300 ${isSelected ? "bg-[#f4cf8a]/10" : "bg-white/[0.02]"}`}>
                      {tech.icon}
                    </div>
                    <div>
                      <div className="text-[9px] tracking-wide text-[#f4cf8a]/60 ">{tech.tag}</div>
                      <div className="text-xs font-semibold text-white/90 mt-0.5">{tech.title}</div>
                    </div>
                  </div>
                  <ChevronRight size={14} className={`transition duration-300 ${isSelected ? "text-[#f4cf8a]" : "text-white/20"}`} />
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Side: detailed visual preview panel */}
        <div className="lg:col-span-7 flex flex-col justify-between rounded-2xl border border-white/[0.05] bg-black/50 p-6 min-h-[380px] relative">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTech.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
              className="space-y-6 flex-1 flex flex-col justify-between"
            >
              {/* Feature info */}
              <div className="space-y-3.5">
                <span className="text-[9px] tracking-wide text-[#f4cf8a]/60 ">
                  {currentTech.tag}
                </span>
                
                <h4 className="text-xl font-medium text-white font-display">
                  {currentTech.title}
                </h4>
                
                <p className="text-xs leading-relaxed text-white/60">
                  {currentTech.description}
                </p>
              </div>

              {/* Dynamic Metric HUD strip */}
              <div className="grid grid-cols-2 gap-4 bg-white/[0.02] border border-white/5 rounded-xl p-4 ">
                <div>
                  <div className="text-[8px] tracking-wider text-white/30">Metric Designate</div>
                  <div className="text-[10px] text-[#f4cf8a] font-semibold mt-0.5">{currentTech.metricLabel}</div>
                </div>
                <div>
                  <div className="text-[8px] tracking-wider text-white/30">Measured Value</div>
                  <div className="text-[10px] text-white font-bold mt-0.5">{currentTech.metricValue}</div>
                </div>
              </div>

              {/* Process Flow Interactive diagram */}
              <div className="space-y-2.5">
                <div className="text-[8px] tracking-wide text-white/35 ">
                  Active Ingress Sequence Flow
                </div>
                
                <div className="grid grid-cols-3 gap-2 overflow-hidden text-center text-[9px]  text-white/60">
                  {currentTech.flowSteps.map((step, idx) => (
                    <div 
                      key={idx} 
                      className="relative bg-black/60 border border-white/5 rounded-lg py-2.5 px-1.5 flex flex-col justify-center items-center min-h-[44px]"
                    >
                      <div className="absolute top-1 left-1.5 text-[8px] text-white/30 font-bold">0{idx + 1}</div>
                      <span className="text-white/80 leading-snug px-0.5">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

            </motion.div>
          </AnimatePresence>

          {/* Secure watermark block */}
          <div className="mt-6 pt-4 border-t border-white/[0.04] flex items-center justify-between text-[9px]  text-white/30">
            <span className="flex items-center gap-1.5">
              <Lock size={9} className="text-[#f4cf8a]" />
              Secured with Standard High-Grade Encryption
            </span>
            <span>Xenith Secure Session</span>
          </div>

        </div>

      </div>
    </div>
  );
}
