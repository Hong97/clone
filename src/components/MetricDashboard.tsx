import React, { useState } from "react";
import { Terminal, Shield, Zap, Receipt, Search, ArrowRight, UserCheck, Cpu, HardDrive } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface MetricDashboardProps {
  activeKey: string;
  onClose: () => void;
}

interface Transaction {
  id: string;
  amount: string;
  asset: string;
  destination: string;
  status: "Completed" | "Processing";
  time: string;
}

export default function MetricDashboard({ activeKey, onClose }: MetricDashboardProps) {
  // Prime access waitlist state
  const [email, setEmail] = useState("");
  const [submittedEmail, setSubmittedEmail] = useState(false);
  const [passNumber, setPassNumber] = useState("");

  // Payment simulator states
  const [payments, setPayments] = useState<Transaction[]>([
    { id: "XN_SETTLE_3902", amount: "5,400.00", asset: "USDC", destination: "0x39a0...32bf", status: "Completed", time: "12 mins ago" },
    { id: "XN_SETTLE_1084", amount: "12,980.50", asset: "USDT", destination: "0xf2f0...ff10", status: "Completed", time: "1 hr ago" }
  ]);
  const [payAmount, setPayAmount] = useState("1000");
  const [payAsset, setPayAsset] = useState("USDC");
  const [payDest, setPayDest] = useState("0x742d...f44e");

  const handleSettle = (e: React.FormEvent) => {
    e.preventDefault();
    if (!payAmount.trim()) return;

    const newTx: Transaction = {
      id: "XN_SETTLE_" + Math.floor(Math.random() * 9000 + 1000),
      amount: parseFloat(payAmount).toLocaleString('en-US', { minimumFractionDigits: 2 }),
      asset: payAsset,
      destination: payDest,
      status: "Processing",
      time: "Just now"
    };

    setPayments(prev => [newTx, ...prev]);
    setPayAmount("");

    setTimeout(() => {
      setPayments(curr => 
        curr.map(tx => tx.id === newTx.id ? { ...tx, status: "Completed" } : tx)
      );
    }, 1500);
  };

  const handleJoinWhitelist = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes("@")) return;

    const code = "XNP-" + Math.floor(100000 + Math.random() * 900000);
    setPassNumber(code);
    setSubmittedEmail(true);
  };

  const renderContent = () => {
    switch (activeKey) {
      case "ai":
        return (
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Cpu size={20} className="text-[#f2d9a1]" />
              <h4 className="text-lg font-medium text-white font-display">Private AI Cluster Diagnostics</h4>
            </div>
            
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-white/5 bg-black/40 p-4 ">
                <div className="text-[10px] tracking-[0.2em] text-white/40 mb-1">Global Query Response</div>
                <div className="text-2xl font-semibold text-emerald-400">99.85%</div>
                <div className="text-[9px] text-white/30 mt-1">Uptime benchmark active</div>
              </div>
              <div className="rounded-xl border border-white/5 bg-black/40 p-4 ">
                <div className="text-[10px] tracking-[0.2em] text-white/40 mb-1">Inference Latency</div>
                <div className="text-2xl font-semibold text-emerald-400">142ms</div>
                <div className="text-[9px] text-white/30 mt-1">Grounding integration cycle</div>
              </div>
              <div className="rounded-xl border border-white/5 bg-black/40 p-4 ">
                <div className="text-[10px] tracking-[0.2em] text-white/40 mb-1">Secured Node Allocations</div>
                <div className="text-2xl font-semibold text-white">128 / 128</div>
                <div className="text-[9px] text-[#f4cf8a]/60 mt-1">Multi-region clustering</div>
              </div>
            </div>

            {/* Futuristic Interactive Grounding Grid */}
            <NeuralGroundingNetwork />

            <div className="rounded-xl border border-white/5 bg-black/30 p-4">
              <div className="flex items-center gap-2 mb-3 text-xs tracking-[0.2em] text-white/50 ">
                <Terminal size={12} /> Model Grounding Stream Log
              </div>
              <div className="space-y-2  text-[11px] text-white/45 h-[100px] overflow-y-auto bg-black/40 p-3 rounded-lg border border-white/5">
                <div>[06:01:10] CONNECTED: Bound with Gemini Model (gemini-3.5-flash)</div>
                <div>[06:01:12] SYSTEM: Initialized systemInstruction parameters with 0 flags</div>
                <div>[06:01:15] PIPELINE: Hydrated dynamic Google Search grounding cache</div>
                <div>[06:01:32] TELEMETRY: API query resolved successfully (latency: 154ms)</div>
                <div>[06:02:01] SECURE: Enforced payload validation boundaries matching sanitization filters</div>
              </div>
            </div>
          </div>
        );

      case "payments":
        return (
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Receipt size={20} className="text-[#f2d9a1]" />
              <h4 className="text-lg font-medium text-white font-display">Settlement Instruction Simulator</h4>
            </div>

            <div className="grid gap-6 md:grid-cols-12">
              {/* Trigger Settle form */}
              <form onSubmit={handleSettle} className="md:col-span-5 space-y-4 rounded-xl border border-white/5 bg-black/30 p-4">
                <span className="text-[10px] tracking-[0.25em] text-white/35  block">Queue Instruction</span>
                
                <div>
                  <label className="text-[10px] tracking-[0.2em] text-white/40 mb-1 block ">Value Amount</label>
                  <div className="flex rounded-lg border border-white/5 bg-black/40 px-3 py-1.5 focus-within:border-white/15">
                    <span className="text-xs  text-white/40 mr-2">$</span>
                    <input 
                      type="number" 
                      value={payAmount} 
                      onChange={(e) => setPayAmount(e.target.value)} 
                      className="bg-transparent text-xs text-white outline-none w-full " 
                      placeholder="Amount"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-[10px] tracking-[0.2em] text-white/40 mb-1 block ">Settlement Token</label>
                    <select 
                      value={payAsset} 
                      onChange={(e) => setPayAsset(e.target.value)}
                      className="w-full bg-black/40 border border-white/5 rounded-lg text-xs text-white  p-2 focus:border-white/15 outline-none"
                    >
                      <option value="USDC">USDC (USD)</option>
                      <option value="USDT">USDT (Tether)</option>
                      <option value="EURC">EURC (Euro)</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[10px] tracking-[0.2em] text-white/40 mb-1 block ">Gas Matrix Mode</label>
                    <div className="w-full bg-black/20 border border-white/5 rounded-lg text-xs text-white/50  p-2 text-center font-semibold">
                      Auto (Ultra Low)
                    </div>
                  </div>
                </div>

                <div>
                  <label className="text-[10px] tracking-[0.2em] text-white/40 mb-1 block ">Destination Address</label>
                  <input 
                    type="text" 
                    value={payDest} 
                    onChange={(e) => setPayDest(e.target.value)} 
                    className="w-full bg-black/40 border border-white/5 rounded-lg text-xs text-white  p-2 focus:border-white/15 outline-none" 
                    placeholder="Address 0x..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-white text-black font-medium text-xs tracking-[0.2em] py-2.5 hover:bg-[#f2d9a1] transition cursor-pointer"
                >
                  Post Settle Queue
                </button>
              </form>

              {/* Ledger ledger events */}
              <div className="md:col-span-7 rounded-xl border border-white/5 bg-black/30 p-4">
                <span className="text-[10px] tracking-[0.25em] text-white/35  block mb-3">Live Ledger Settlement Feed</span>
                <div className="space-y-3 max-h-[220px] overflow-y-auto pr-1">
                  {payments.map(tx => (
                    <div key={tx.id} className="flex items-center justify-between rounded-lg bg-black/40 border border-white/5 p-3 text-xs ">
                      <div>
                        <div className="font-semibold text-white">{tx.id}</div>
                        <div className="text-[10px] text-white/35">to {tx.destination}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-white">{tx.amount} {tx.asset}</div>
                        <span className={`inline-block text-[9px] tracking-[0.1em] px-1.5 py-0.5 rounded ${
                          tx.status === "Completed" ? "bg-emerald-500/10 text-emerald-400" : "bg-yellow-500/10 text-yellow-500 animate-pulse"
                        }`}>
                          {tx.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case "prime":
        return (
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Zap size={20} className="text-[#f2d9a1]" />
              <h4 className="text-lg font-medium text-white font-display">Prime Access Reservation Node</h4>
            </div>

            <div className="mx-auto max-w-lg text-center py-4 space-y-5">
              {!submittedEmail ? (
                <>
                  <p className="text-sm leading-6 text-white/50">
                    Xenith Prime provides ultra-high liquidity routing, priority GPU cycles on the Private AI nodes, and zero-fee ledger transactions. Request access coordinates below.
                  </p>
                  <form onSubmit={handleJoinWhitelist} className="flex items-center gap-2 rounded-xl border border-white/10 bg-black/40 p-2">
                    <input 
                      type="email" 
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-transparent px-3 py-1.5 text-xs text-white outline-none placeholder:text-white/35"
                      placeholder="Enter organizational email"
                    />
                    <button 
                      type="submit"
                      className="rounded-lg bg-white text-black px-4 py-1.5 text-xs font-semibold tracking-[0.15em] flex items-center gap-1 hover:bg-[#f2d9a1] transition cursor-pointer"
                    >
                      <span>Lock</span> <ArrowRight size={11} />
                    </button>
                  </form>
                  <div className="text-[9px] tracking-[0.15em] text-white/30 ">Institutional invitations processed daily</div>
                </>
              ) : (
                <motion.div 
                  initial={{ scale: 0.95 }}
                  animate={{ scale: 1 }}
                  className="rounded-xl border border-white/10 bg-white/[0.02] p-6 text-center space-y-4"
                >
                  <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400">
                    <UserCheck size={18} />
                  </div>
                  <div>
                    <h5 className="font-semibold text-white font-display">Reservation Verified</h5>
                    <p className="text-xs text-white/45 mt-1 ">Encrypted Access Pass coordinates generated</p>
                  </div>
                  <div className="inline-block bg-black border border-white/5 px-6 py-2.5 rounded-lg  text-[#f2d9a1] font-semibold text-lg tracking-[0.25em]">
                    {passNumber}
                  </div>
                  <p className="text-[11px] text-white/30 ">
                    A confirmation telemetry token was dispatched to <span className="text-white/50">{email}</span>. Use this card at the beta gateway portal.
                  </p>
                </motion.div>
              )}
            </div>
          </div>
        );

      case "security":
        return (
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Shield size={20} className="text-[#f2d9a1]" />
              <h4 className="text-lg font-medium text-white font-display">Cryptographic Standards & Security Compliance</h4>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-white/5 bg-black/40 p-4 space-y-2">
                <div className="text-[10px] tracking-[0.2em] text-white/40 ">Standard Encryption</div>
                <h5 className="font-semibold text-white text-sm pb-1 border-b border-white/[0.03] font-display">Triple AES-256-GCM Envelope</h5>
                <p className="text-xs leading-relaxed text-white/45">
                  All active payload data, wallet keys, and telemetry streams are encrypted at rest and in transit utilizing envelope cryptographic models backed by HSM (Hardware Security Modules).
                </p>
              </div>

              <div className="rounded-xl border border-white/5 bg-black/40 p-4 space-y-2">
                <div className="text-[10px] tracking-[0.2em] text-white/40 ">Compliance Matrices</div>
                <h5 className="font-semibold text-white text-sm pb-1 border-b border-white/[0.03] font-display">SOC-2 Type II Certified</h5>
                <p className="text-xs leading-relaxed text-white/45">
                  Xenith workflows operates under audited SOC-2 Security Trust principles, enforcing absolute node isolation, non-custodial wallets, and mandatory private AI sanitization checks.
                </p>
              </div>
            </div>

            {/* ZK Prover Interactive Widget */}
            <ZkProofSimulator />

            <div className="rounded-xl border border-white/5 bg-black/30 p-4  text-[11px] space-y-3">
              <div className="text-xs tracking-[0.2em] text-[#f2d9a1] font-semibold">Active Encryption Telemetry Node</div>
              <div className="grid gap-2 sm:grid-cols-2 text-white/50">
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>Key Rotation: 12h Cycle (Active)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>Envelope Encryption: ISO 27001</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>Zero-Knowledge Proofs: Active</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>Private VPC Sandbox Node: Active</span>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0a0808]/95 p-6 shadow-2xl backdrop-blur-xl"
    >
      {/* Background glow styling */}
      <div className="absolute right-0 top-0 -z-10 h-32 w-32 rounded-full bg-[#f4cf8a]/10 blur-2xl" />
      
      {/* Header close */}
      <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-5">
        <div className="text-[10px] tracking-[0.3em] text-white/40 ">
          Interactive Operational Telemetry Node
        </div>
        <button 
          onClick={onClose}
          className="text-white/45 hover:text-white text-xs  border border-white/10 hover:border-white/35 rounded-full px-3 py-1 cursor-pointer transition"
        >
          Close Diagnostics
        </button>
      </div>

      {renderContent()}
    </motion.div>
  );
}

// Subcomponent HUD interactive widgets

function NeuralGroundingNetwork() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const nodes = [
    { id: "gateway", x: 20, y: 50, label: "API Ingress Portal", status: "Nominal", latency: "14ms" },
    { id: "grounding", x: 50, y: 20, label: "Google Grounding Sandbox", status: "Dynamic Cache Synced", latency: "128ms" },
    { id: "sanitizer", x: 50, y: 80, label: "HSM Secure Envelope Guard", status: "Full Compliance", latency: "8ms" },
    { id: "resolver", x: 80, y: 50, label: "Gemini AI Synthesis Engine", status: "Live Pipeline Streaming", latency: "45ms" }
  ];

  return (
    <div className="rounded-xl border border-white/5 bg-black/40 p-4  text-[11px] space-y-4">
      <div className="flex items-center justify-between">
        <span className="text-[#f4cf8a] font-semibold tracking-wider">[ Distributed AI Grounding Map ]</span>
        <span className="text-white/30 text-[9px]">Node link verification</span>
      </div>
      <div className="grid md:grid-cols-12 gap-4 items-center">
        <div className="md:col-span-7 bg-black/60 rounded-xl p-3 h-[160px] relative border border-white/5 flex items-center justify-center">
          <svg className="w-full h-full max-w-[280px]" viewBox="0 0 100 100">
            {/* Connection lines */}
            <line x1="20" y1="50" x2="50" y2="20" stroke="rgba(244, 207, 138, 0.4)" strokeWidth="0.75" />
            <line x1="20" y1="50" x2="50" y2="80" stroke="rgba(244, 207, 138, 0.4)" strokeWidth="0.75" />
            <line x1="50" y1="20" x2="80" y2="50" stroke="rgba(244, 207, 138, 0.4)" strokeWidth="0.75" />
            <line x1="50" y1="80" x2="80" y2="50" stroke="rgba(244, 207, 138, 0.4)" strokeWidth="0.75" />
            <line x1="50" y1="20" x2="50" y2="80" stroke="rgba(244, 207, 138, 0.15)" strokeWidth="0.75" />

            {/* Glowing signal ripple */}
            {hoveredNode && (() => {
              const nd = nodes.find(n => n.id === hoveredNode)!;
              return (
                <circle
                  cx={nd.x}
                  cy={nd.y}
                  r="10"
                  fill="transparent"
                  stroke="#f4cf8a"
                  strokeWidth="0.5"
                  className="animate-ping"
                />
              );
            })()}

            {/* Interactive Nodes anchor */}
            {nodes.map(node => (
              <g 
                key={node.id}
                onMouseEnter={() => setHoveredNode(node.id)}
                onMouseLeave={() => setHoveredNode(null)}
                className="cursor-pointer"
              >
                <circle
                  cx={node.x}
                  cy={node.y}
                  r="5"
                  fill={hoveredNode === node.id ? "#f4cf8a" : "#070505"}
                  stroke="#f4cf8a"
                  strokeWidth="1.2"
                />
                <circle
                  cx={node.x}
                  cy={node.y}
                  r="8"
                  fill="transparent"
                  stroke={hoveredNode === node.id ? "rgba(244, 207, 138, 0.4)" : "transparent"}
                  strokeWidth="0.5"
                />
              </g>
            ))}
          </svg>
        </div>

        <div className="md:col-span-5 h-[160px] flex flex-col justify-center">
          {hoveredNode ? (
            (() => {
              const nd = nodes.find(n => n.id === hoveredNode)!;
              return (
                <motion.div 
                  initial={{ opacity: 0, x: 5 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-white/[0.02] border border-[#f4cf8a]/15 p-4 rounded-xl space-y-2"
                >
                  <div className="text-[#f4cf8a] font-bold text-xs">{nd.label}</div>
                  <div className="flex justify-between text-[10px] border-b border-white/5 pb-1">
                    <span className="text-white/45">STATUS:</span>
                    <span className="text-emerald-400 font-semibold">{nd.status}</span>
                  </div>
                  <div className="flex justify-between text-[10px]">
                    <span className="text-white/45">PING LATENCY:</span>
                    <span className="text-white font-semibold">{nd.latency}</span>
                  </div>
                </motion.div>
              );
            })()
          ) : (
            <div className="bg-white/[0.01] border border-white/5 rounded-xl p-4 text-white/35 text-center min-h-[120px] flex flex-col justify-center text-[10px] tracking-wider">
              Hover system nodes on the grid to verify cluster connection routes.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function ZkProofSimulator() {
  const [inputVal, setInputVal] = useState("TX_INDEX_HASH_0xFA1288");
  const [resolving, setResolving] = useState(false);
  const [resolvedOutput, setResolvedOutput] = useState<string | null>(null);

  const handleResolve = (e: React.MouseEvent) => {
    e.preventDefault();
    setResolving(true);
    setResolvedOutput(null);
    setTimeout(() => {
      setResolvedOutput(`✓ ZK-SNARK Verified. Proof Hash: 0x${Math.random().toString(16).substring(2, 10).toUpperCase()} - Zero state leaked.`);
      setResolving(false);
    }, 1400);
  };

  return (
    <div className="rounded-xl border border-white/5 bg-black/40 p-4 space-y-3.5  text-[11px]">
      <div className="flex items-center justify-between">
        <span className="text-[#f4cf8a] font-bold tracking-wider">[ Non-Custodial Security Cryptography ]</span>
        <span className="text-white/40 text-[9px]">zk-SNARK proof generator</span>
      </div>
      
      <p className="text-white/50 text-[11px] leading-relaxed">
        Verify high-volume corporate transactions securely using cryptographic proof-of-knowledge computations.
      </p>

      <div className="flex flex-col sm:flex-row gap-2">
        <input
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          className="bg-black/60 border border-white/5 px-3 py-2 text-xs text-white outline-none rounded-lg flex-1  focus:border-white/15"
          placeholder="Value transaction hash to prove"
        />
        <button
          onClick={handleResolve}
          disabled={resolving}
          className="bg-white hover:bg-[#f2d9a1] text-black text-[11px] font-semibold tracking-wider px-4 py-2 rounded-lg transition disabled:opacity-40 cursor-pointer"
        >
          {resolving ? "Computing..." : "Generate Proof"}
        </button>
      </div>

      {resolving && (
        <div className="text-[10px] text-emerald-400 font-bold tracking-widest leading-none py-2 border border-[#emerald-500]/10 bg-black/40 px-3 rounded-lg flex flex-wrap gap-1">
          {Array.from({ length: 42 }).map((_, i) => (
            <span key={i} className="animate-pulse">{(Math.random() > 0.5 ? "1" : "0")}</span>
          ))}
        </div>
      )}

      {resolvedOutput && (
        <motion.div 
          initial={{ opacity: 0, y: 3 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/15 p-3 rounded-lg text-[10px] font-bold"
        >
          {resolvedOutput}
        </motion.div>
      )}
    </div>
  );
}
