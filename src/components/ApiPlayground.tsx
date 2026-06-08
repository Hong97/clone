import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ShieldCheck, LineChart, Sparkles, Lock, ArrowRight, CornerDownRight } from "lucide-react";

interface SandboxState {
  key: string;
  category: string;
  title: string;
  method: string;
  path: string;
  payload: Record<string, string>;
  response: {
    status: string;
    details: Record<string, string>;
  };
}

const SANDBOX_STATES: SandboxState[] = [
  // 0: AUTH
  {
    key: "auth",
    category: "AUTH",
    title: "API Keys",
    method: "POST",
    path: "/v1/xenith/auth",
    payload: {
      client_id: "usr_9422a",
      scope: "read_write",
      grant_type: "api_key"
    },
    response: {
      status: "authenticated",
      details: {
        token: "xk_live_83b3e70d4c92a6b29f0e...",
        scope: "read_write",
        expires_in: "3600 seconds"
      }
    }
  },
  // 1: DATA
  {
    key: "data",
    category: "DATA",
    title: "Wallet + Market",
    method: "GET",
    path: "/v1/xenith/market",
    payload: {
      asset: "BTC",
      quote: "USD",
      include_history: "true"
    },
    response: {
      status: "success",
      details: {
        price: "$68,450.00",
        change_24h: "+4.2%",
        volume_24h: "$28.4B"
      }
    }
  },
  // 2: AI (Active by default, matching the exact picture!)
  {
    key: "ai",
    category: "AI",
    title: "Signals + Summaries",
    method: "POST",
    path: "/v1/xenith/intelligence",
    payload: {
      asset: "USDT",
      module: "market_summary",
      access: "prime",
      risk_mode: "controlled"
    },
    response: {
      status: "authorized",
      details: {
        latency: "42ms",
        confidence: "high"
      }
    }
  },
  // 3: SECURITY (Rate Limit)
  {
    key: "security_limit",
    category: "SECURITY",
    title: "Rate-Limited",
    method: "POST",
    path: "/v1/xenith/security/verify",
    payload: {
      endpoint: "/v1/xenith/*",
      rate_limit: "60_req_min",
      ip_whitelisted: "true"
    },
    response: {
      status: "secure",
      details: {
        policy: "active",
        violation_count: "0",
        threat_level: "none"
      }
    }
  },
  // 4: PRIVATE AI LAYER
  {
    key: "private_ai",
    category: "PRIVATE AI LAYER",
    title: "Active",
    method: "POST",
    path: "/v1/xenith/ai/active",
    payload: {
      model: "gemini-2-flash",
      sandbox_mode: "true",
      sanitize_pii: "true"
    },
    response: {
      status: "active",
      details: {
        model_loaded: "true",
        privacy_filter: "enabled",
        active_instances: "4"
      }
    }
  },
  // 5: PAYMENTS
  {
    key: "payments",
    category: "PAYMENTS",
    title: "Ready",
    method: "POST",
    path: "/v1/xenith/payments/route",
    payload: {
      source_wallet: "0x742d...",
      amount: "48,500.00",
      destination: "transfer_routing"
    },
    response: {
      status: "routed",
      details: {
        tx_hash: "0x98f4cd3a12b...",
        routing_fee_usd: "1.25",
        status: "complete"
      }
    }
  },
  // 6: PRIME ACCESS
  {
    key: "prime_access",
    category: "PRIME ACCESS",
    title: "Coming Soon",
    method: "GET",
    path: "/v1/xenith/prime/status",
    payload: {
      userId: "usr_9422a",
      check_referrals: "true"
    },
    response: {
      status: "pending",
      details: {
        prime_eligible: "false",
        join_queue: "active",
        launch_date: "Q3 2026"
      }
    }
  },
  // 7: SECURITY (Bank-grade)
  {
    key: "security_grade",
    category: "SECURITY",
    title: "Bank-grade",
    method: "GET",
    path: "/v1/xenith/security/audit",
    payload: {
      encryption: "AES-256-GCM",
      compliance: "SOC-2 Type II",
      hsm_seal: "true"
    },
    response: {
      status: "verified",
      details: {
        audit_date: "May 2026",
        pci_compliant: "true",
        encryption_level: "high"
      }
    }
  }
];

export default function ApiPlayground() {
  const [activeIdx, setActiveIdx] = useState(2); // Default to AI (index 2)
  const [isExecuting, setIsExecuting] = useState(false);

  const activeState = SANDBOX_STATES[activeIdx];

  const handleStateChange = (idx: number) => {
    if (idx === activeIdx) return;
    setIsExecuting(true);
    setActiveIdx(idx);
    const timer = setTimeout(() => {
      setIsExecuting(false);
    }, 400);
    return () => clearTimeout(timer);
  };

  return (
    <div className="text-white space-y-3.5">
      {/* Upper Grid Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">
        {/* Left Side: Typography and Info Content */}
        <div className="lg:col-span-5 space-y-4">
          <div className="text-xs uppercase tracking-[0.35em] text-[#f4cf8a]/65 ">
            [ API ]
          </div>
          
          <h2 className="text-3xl md:text-[38px] tracking-[-0.03em] font-light text-white font-display leading-[1.1] text-left">
            Integrate The Xenith Layer
          </h2>

          <p className="text-xs text-white/50 leading-relaxed font-sans max-w-sm">
            Our Alpha API is built for institutional capital. Inject your Exchange API. Hold 100% of your own capital. connect Now.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button className="rounded-full bg-white text-black px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] hover:bg-[#f2d9a1] transition-all duration-300">
              CONNECT YOUR EXCHANGE API
            </button>
            <button className="rounded-full border border-white/10 text-white px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] hover:bg-white/[0.05] transition-all duration-300">
              ALPHA NODE PRICING
            </button>
          </div>
        </div>

        {/* Right Side: Recreated Beautiful Code Sandbox Console */}
        <div className="lg:col-span-7">
          <div className="relative rounded-2xl border border-white/[0.08] bg-[#0c0808]/85 p-5 shadow-2xl backdrop-blur-md min-h-[310px] overflow-hidden flex flex-col justify-between">
            {/* Ambient Background Glow Effect */}
            <div className="absolute top-0 right-0 w-44 h-44 bg-[#f4cf8a]/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-44 h-44 bg-emerald-500/[0.02] rounded-full blur-3xl pointer-events-none" />

            {/* Console Toolbar Header */}
            <div className="flex items-center justify-between border-b border-white/[0.05] pb-2 mb-4">
              <span className="text-[10px] uppercase tracking-[0.15em] text-white/40  font-medium flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Console Preview
              </span>
              <span className="text-[10px] uppercase tracking-[0.15em] text-[#f4cf8a] font-semibold ">
                Live Sandbox
              </span>
            </div>

            {/* Active Code Execution Path & Body */}
            <div className="flex-1 space-y-4 ">
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wide">
                <span className="text-emerald-400 font-bold">{activeState.method}</span>
                <span className="text-white/90">{activeState.path}</span>
              </div>

              {/* Payload block */}
              <div className="bg-black/40 border border-white/5 rounded-xl p-3.5 text-[10.5px] leading-relaxed overflow-x-auto relative group">
                {/* Visual marker inside code container */}
                <div className="absolute right-3 top-3 opacity-0 group-hover:opacity-100 transition duration-300 text-[8px] uppercase tracking-wider text-white/30">
                  Live State Editor
                </div>
                <pre>
                  {`{`}
                  {Object.entries(activeState.payload).map(([k, v], idx, arr) => (
                    <div key={k} className="pl-4">
                      <span className="text-[#f4cf8a]/70">"{k}"</span>: <span className="text-white">"{v}"</span>
                      {idx < arr.length - 1 ? "," : ""}
                    </div>
                  ))}
                  {`}`}
                </pre>
              </div>

              {/* Dividing Rule Line */}
              <div className="border-t border-white/[0.05]" />

              {/* Response Code Output Section */}
              <div className="space-y-1.5">
                <div className="text-[9px] uppercase tracking-wider text-white/40 ">Response</div>
                
                <AnimatePresence mode="wait">
                  {isExecuting ? (
                    <motion.div 
                      key="loading-panel"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="py-0.5 flex items-center gap-2 text-[10.5px] text-white/45"
                    >
                      <span className="w-3 h-3 border border-white/20 border-t-white animate-spin rounded-full" />
                      <span>Resolving encryption handshake on sandbox instance...</span>
                    </motion.div>
                  ) : (
                    <motion.div 
                      key="output-panel"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-[10.5px] text-white/80 space-y-1"
                    >
                      <div className="flex items-center gap-1.5">
                        <span className="text-white/40">status:</span>
                        <span className="text-emerald-400 font-semibold">{activeState.response.status}</span>
                      </div>
                      
                      {Object.entries(activeState.response.details).map(([k, v]) => (
                        <div key={k} className="flex items-center gap-1.5">
                          <span className="text-white/40">{k}:</span>
                          <span>{v}</span>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Hover tooltip hint */}
            <div className="mt-3 pt-2 border-t border-white/[0.04] text-[8.5px] uppercase tracking-widest text-white/25 text-left ">
              Click the cards below to test different routes
            </div>
          </div>
        </div>
      </div>

      {/* Row 1 - Main 4-column Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {SANDBOX_STATES.slice(0, 4).map((state, index) => {
          const isActive = activeIdx === index;
          return (
            <button
              key={state.key}
              onClick={() => handleStateChange(index)}
              className={`group relative text-left rounded-xl border p-3.5 transition-all duration-300 flex flex-col justify-between h-20 overflow-hidden cursor-pointer ${
                isActive 
                  ? "border-[#f4cf8a]/35 bg-[#f4cf8a]/[0.02] shadow-xl shadow-black/40" 
                  : "border-white/5 bg-[#0a0808]/40 hover:border-white/10 hover:bg-white/[0.01]"
              }`}
            >
              {/* Highlight Background Flare */}
              {isActive && (
                <div className="absolute top-0 right-0 w-16 h-16 bg-[#f4cf8a]/5 rounded-full blur-xl pointer-events-none" />
              )}
              
              <div className="text-[8.5px] text-white/40  uppercase tracking-[0.2em] mb-1 group-hover:text-white/60 transition duration-300">
                {state.category}
              </div>
              
              <div className="flex items-center justify-between mt-auto">
                <span className="font-medium text-white text-xs md:text-sm font-display">
                  {state.title}
                </span>
                <span className={`text-[8.5px]  shrink-0 transition-opacity duration-300 ${isActive ? "opacity-100 text-[#f4cf8a]" : "opacity-0 group-hover:opacity-40"}`}>
                  →
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Row 2 - Unified Grand Multi-Column Enclosure */}
      <div className="rounded-xl border border-white/[0.06] bg-[#0c0909]/60 p-3.5 mt-2">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5">
          {SANDBOX_STATES.slice(4).map((state, index) => {
            const actualIdx = index + 4;
            const isActive = activeIdx === actualIdx;
            return (
              <button
                key={state.key}
                onClick={() => handleStateChange(actualIdx)}
                className="group text-left border-none bg-transparent hover:opacity-90 transition p-0 cursor-pointer space-y-0.5 block w-full outline-none focus:outline-none"
              >
                <div className="text-[8.5px] text-white/40  uppercase tracking-[0.2em] transition duration-300 flex items-center gap-1">
                  {state.category}
                  {isActive && <span className="w-1 h-1 rounded-full bg-[#f4cf8a]" />}
                </div>
                
                <div className="flex items-center justify-between pr-2">
                  <span className={`font-medium text-xs md:text-sm font-display transition duration-300 ${isActive ? "text-[#f4cf8a]" : "text-white group-hover:text-white/90"}`}>
                    {state.title}
                  </span>
                  {isActive && (
                    <motion.span 
                      layoutId="activeDot"
                      className="text-[8.5px]  text-[#f4cf8a]"
                    >
                      •
                    </motion.span>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
