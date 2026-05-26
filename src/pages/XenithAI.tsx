import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { Crystal } from "../components/Crystal";
import { Link } from "react-router-dom";

const whyChoose = [
  { title: "Smart AI Automation", body: "ML-powered trading bots that adapt to the market." },
  { title: "Liquidity Utility", body: "Deep liquidity across major pairs and 150+ assets." },
  { title: "Fast & Secure", body: "Sub-5s execution with bank-grade security." },
  { title: "User-Verified Platform", body: "KYC-compliant and audited by independent firms." },
];

const stats = [
  { value: "99.9%", label: "Asset Safety" },
  { value: "24/7", label: "AI Trading" },
  { value: "5M+", label: "Total Users" },
  { value: "20+", label: "Years Experience" },
];

const ecosystem = [
  { title: "AI Trading", body: "Smart automated portfolios" },
  { title: "AI Trade Bot", body: "Pre-built strategies, 24/7" },
  { title: "AI Live Stream", body: "Live insights from analysts" },
  { title: "AI Search", body: "Cross-chain market search" },
  { title: "AI Payments", body: "Stable, instant settlement" },
];

const markets = [
  { rank: 1, name: "Bitcoin", symbol: "BTC", price: "$67,234.50", change: "+2.4%", up: true, vol: "$28.4B" },
  { rank: 2, name: "Ethereum", symbol: "ETH", price: "$3,892.10", change: "+1.8%", up: true, vol: "$14.2B" },
  { rank: 3, name: "Solana", symbol: "SOL", price: "$172.45", change: "-0.6%", up: false, vol: "$3.8B" },
  { rank: 4, name: "BNB", symbol: "BNB", price: "$615.20", change: "+3.1%", up: true, vol: "$1.9B" },
  { rank: 5, name: "XRP", symbol: "XRP", price: "$0.6240", change: "-1.2%", up: false, vol: "$2.1B" },
];

const trustedBy = ["Support Funds", "a16z", "Polychain", "BinanceLabs", "Ribbit Capital", "Polychain", "Coinbase", "FinO"];

export default function XenithAI() {
  return (
    <div className="min-h-screen bg-bg text-fg">
      <Nav
        brand="XENITH"
        items={["Home", "AI Trading", "Ecosystem", "sAI Coin", "Blog", "Vendor"]}
        cta="Launch app ↗"
      />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gold-radial-right pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.0]">
              AI Trading.
              <br />
              Smarter <span className="text-gold-gradient">Future.</span>
            </h1>
            <p className="mt-6 text-zinc-400 leading-relaxed max-w-md">
              XENITH unifies AI Trading, AI Chat, AI Search and Web AI into one
              platform that powers the next financial era.
            </p>
            <div className="mt-8 flex gap-3">
              <button className="rounded-full bg-gradient-to-br from-amber-400 to-amber-600 px-6 py-3 text-sm font-semibold text-black hover:opacity-90">
                Start Trading
              </button>
              <button className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold hover:bg-white/5">
                Learn More
              </button>
            </div>
            <p className="mt-8 text-xs text-zinc-500">Powered by xAI · Built for everyone</p>
          </div>
          <div className="relative flex justify-center items-center h-[420px]">
            <div className="absolute inset-0 gold-radial-center" />
            <div className="relative flex gap-4 items-center">
              <Crystal variant="white" size={140} />
              <Crystal variant="gold" size={200} className="drop-shadow-[0_0_60px_rgba(245,158,11,0.6)]" />
              <Crystal variant="outline" size={140} />
            </div>
          </div>
        </div>
      </section>

      {/* Why choose XENITH */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Why Choose <span className="text-gold-gradient">XENITH</span>
          </h2>
          <p className="mt-2 text-zinc-500 text-sm max-w-xl mx-auto">
            We bring institutional-grade trading and AI tooling to everyone.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {whyChoose.map((w) => (
            <div key={w.title} className="card-surface p-6 hover:border-amber-500/30 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 mb-4 flex items-center justify-center text-amber-400">
                ◇
              </div>
              <h3 className="font-semibold mb-1">{w.title}</h3>
              <p className="text-sm text-zinc-500">{w.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats strip */}
      <section className="mx-auto max-w-7xl px-6 py-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="card-surface p-6 text-center">
              <div className="text-4xl font-bold mb-1">{s.value}</div>
              <div className="text-xs text-zinc-500">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Ecosystem */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Explore the <span className="text-gold-gradient">XENITH Ecosystem</span>
          </h2>
          <p className="mt-2 text-zinc-500 text-sm">
            A modular suite of products across the AI x DeFi stack.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {ecosystem.map((e) => (
            <div key={e.title} className="card-surface p-5">
              <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/20 mb-3 flex items-center justify-center text-amber-400 text-sm">
                ✦
              </div>
              <h3 className="text-sm font-semibold mb-1">{e.title}</h3>
              <p className="text-xs text-zinc-500">{e.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Market Overview */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">
              Market Overview
            </h2>
            <p className="text-sm text-zinc-500 mt-1">Live spot pricing across major assets.</p>
          </div>
          <button className="rounded-full border border-white/20 px-4 py-2 text-xs hover:bg-white/5">
            See all assets →
          </button>
        </div>
        <div className="card-surface overflow-hidden">
          <table className="w-full text-sm">
            <thead className="border-b border-white/5 text-xs text-zinc-500">
              <tr>
                <th className="text-left px-6 py-3 font-medium">#</th>
                <th className="text-left px-6 py-3 font-medium">Asset</th>
                <th className="text-right px-6 py-3 font-medium">Price</th>
                <th className="text-right px-6 py-3 font-medium">24h Change</th>
                <th className="text-right px-6 py-3 font-medium">Volume</th>
                <th className="text-right px-6 py-3 font-medium">Trade</th>
              </tr>
            </thead>
            <tbody>
              {markets.map((m) => (
                <tr key={m.symbol} className="border-b border-white/5 last:border-none hover:bg-white/[0.02]">
                  <td className="px-6 py-4 text-zinc-500">{m.rank}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-full bg-gradient-to-br from-amber-300 to-amber-700 flex items-center justify-center text-[10px] font-bold text-black">
                        {m.symbol.slice(0, 1)}
                      </span>
                      <div>
                        <div className="font-medium">{m.name}</div>
                        <div className="text-xs text-zinc-500">{m.symbol}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right font-medium">{m.price}</td>
                  <td className={`px-6 py-4 text-right ${m.up ? "text-emerald-400" : "text-red-400"}`}>
                    {m.change}
                  </td>
                  <td className="px-6 py-4 text-right text-zinc-400">{m.vol}</td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-xs text-amber-400 hover:underline">Trade →</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* AI Bot + Chart */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="card-surface p-6 relative overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-xs text-zinc-500">BTC/USDT</p>
                <p className="text-2xl font-semibold">$67,234.50</p>
                <p className="text-xs text-emerald-400">+2.4% today</p>
              </div>
            </div>
            <svg viewBox="0 0 400 200" className="w-full h-48">
              <defs>
                <linearGradient id="ai-chart" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#fbbf24" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M0 160 L40 140 L80 145 L120 100 L160 115 L200 80 L240 90 L280 50 L320 65 L360 30 L400 40 L400 200 L0 200 Z"
                fill="url(#ai-chart)"
              />
              <path
                d="M0 160 L40 140 L80 145 L120 100 L160 115 L200 80 L240 90 L280 50 L320 65 L360 30 L400 40"
                fill="none"
                stroke="#fbbf24"
                strokeWidth="2"
              />
            </svg>
          </div>
          <div className="card-surface p-8 flex flex-col justify-center">
            <p className="text-xs uppercase tracking-widest text-amber-400 mb-3">
              Next gen AI
            </p>
            <h3 className="text-3xl font-semibold mb-3">
              XENITH AI Bot:
              <br />
              The Future of Trading
            </h3>
            <p className="text-sm text-zinc-400 mb-6 leading-relaxed">
              An AI-native trading engine. Built for performance, transparency
              and reliability across volatile markets.
            </p>
            <ul className="space-y-2.5 text-sm text-zinc-300 mb-4">
              <li className="flex gap-3"><span className="text-amber-400">◇</span> Real-time market analysis</li>
              <li className="flex gap-3"><span className="text-amber-400">◇</span> AI-powered trading signals</li>
              <li className="flex gap-3"><span className="text-amber-400">◇</span> Automated portfolio rebalancing</li>
              <li className="flex gap-3"><span className="text-amber-400">◇</span> Smart risk management</li>
            </ul>
            <div className="flex gap-4 mt-2">
              <div>
                <div className="text-2xl font-bold text-amber-400">+170%</div>
                <div className="text-xs text-zinc-500">avg APY</div>
              </div>
              <div>
                <div className="text-2xl font-bold">98%</div>
                <div className="text-xs text-zinc-500">accuracy</div>
              </div>
              <div>
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-xs text-zinc-500">uptime</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted by */}
      <section className="mx-auto max-w-7xl px-6 py-16 text-center">
        <p className="text-xs uppercase tracking-widest text-zinc-500 mb-6">
          Trusted by Industry Leaders
        </p>
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 text-zinc-400 text-sm">
          {trustedBy.map((t, i) => (
            <span key={`${t}-${i}`} className="opacity-70 hover:opacity-100 transition-opacity">
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* Mobile App */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="card-surface p-10 grid md:grid-cols-2 gap-12 items-center overflow-hidden relative">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-3 tracking-tight">
              Trade Anytime, Anywhere
              <br />
              with the <span className="text-gold-gradient">XENITH App</span>
            </h2>
            <p className="text-sm text-zinc-400 mb-6 leading-relaxed">
              Available on iOS, Android, and desktop. One unified portfolio
              across every device — secure, fast, AI-native.
            </p>
            <div className="flex gap-3">
              <button className="rounded-lg border border-white/20 px-4 py-2 text-sm hover:bg-white/5">
                📱 App Store
              </button>
              <button className="rounded-lg border border-white/20 px-4 py-2 text-sm hover:bg-white/5">
                ▶ Google Play
              </button>
            </div>
            <div className="mt-6 inline-flex items-center gap-3 rounded-lg bg-black/40 border border-white/10 p-3">
              <div className="w-16 h-16 rounded bg-white p-1.5">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <rect x="0" y="0" width="100" height="100" fill="white" />
                  <rect x="5" y="5" width="20" height="20" fill="black" />
                  <rect x="75" y="5" width="20" height="20" fill="black" />
                  <rect x="5" y="75" width="20" height="20" fill="black" />
                  <rect x="35" y="35" width="10" height="10" fill="black" />
                  <rect x="55" y="40" width="8" height="8" fill="black" />
                  <rect x="40" y="60" width="10" height="10" fill="black" />
                </svg>
              </div>
              <div className="text-xs text-zinc-400">
                Scan to download
                <br />
                <span className="text-zinc-300 font-medium">XENITH Mobile</span>
              </div>
            </div>
          </div>
          <div className="relative flex justify-center items-center">
            <div className="absolute inset-0 gold-radial-center opacity-50" />
            {/* Phone mockup */}
            <div className="relative w-56 h-[420px] rounded-[2.5rem] bg-gradient-to-b from-zinc-800 to-zinc-900 border-4 border-zinc-700 p-2 rotate-[-6deg] shadow-2xl">
              <div className="w-full h-full rounded-[2rem] bg-black overflow-hidden p-3 text-[10px]">
                <div className="text-zinc-500 mb-2">XENITH</div>
                <div className="text-amber-400 font-bold text-lg">$28,430</div>
                <div className="text-emerald-400 text-[9px]">+2.4% today</div>
                <svg viewBox="0 0 200 80" className="w-full mt-2">
                  <path
                    d="M0 60 L40 50 L80 55 L120 30 L160 35 L200 15"
                    fill="none"
                    stroke="#fbbf24"
                    strokeWidth="1.5"
                  />
                </svg>
                <div className="mt-3 space-y-1.5">
                  {["BTC", "ETH", "SOL"].map((s) => (
                    <div key={s} className="flex justify-between border-b border-white/5 pb-1">
                      <span className="text-zinc-300">{s}</span>
                      <span className="text-zinc-400">$xx,xxx</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer brand="XENITH" />

      <Link
        to="/"
        className="fixed bottom-6 right-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 text-xs hover:bg-white/20"
      >
        ← Hub
      </Link>
    </div>
  );
}
