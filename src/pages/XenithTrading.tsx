import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";

const ecosystem = [
  {
    title: "AI Trade Bot",
    body: "Smart automated trading powered by ML.",
  },
  {
    title: "AI Chat",
    body: "Conversational AI for trading insights 24/7.",
  },
  {
    title: "AI Search",
    body: "Search market trends, news, and on-chain data.",
  },
  {
    title: "AI Website",
    body: "Custom-built AI websites tailored to you.",
  },
];

const whySai = [
  { value: "99.9%", label: "Trade Accuracy" },
  { value: "24/7", label: "AI trading" },
  { value: "5s", label: "Trade Time", subtitle: "execution" },
  { value: "150+", label: "Coins & strategies" },
];

const saiFeatures = [
  { title: "Trading Utility", body: "Use sAI to access reduced trading fees and exclusive features." },
  { title: "Payment Utility", body: "Pay across partner stores instantly with low fees." },
  { title: "Staking Rewards", body: "Stake sAI and earn passive yield from the protocol." },
  { title: "Ecosystem Access", body: "Token holders get early access and governance rights." },
];

function GoldCoin({ size = 280 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 280 280" className="drop-shadow-[0_0_60px_rgba(245,158,11,0.4)]">
      <defs>
        <radialGradient id="coin-face" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#fef3c7" />
          <stop offset="40%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#78350f" />
        </radialGradient>
        <radialGradient id="coin-side" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#d97706" />
          <stop offset="100%" stopColor="#451a03" />
        </radialGradient>
      </defs>
      <ellipse cx="140" cy="170" rx="115" ry="20" fill="url(#coin-side)" />
      <circle cx="140" cy="140" r="115" fill="url(#coin-face)" />
      <circle cx="140" cy="140" r="100" fill="none" stroke="rgba(0,0,0,0.2)" strokeWidth="1" />
      <text
        x="140"
        y="155"
        textAnchor="middle"
        fontSize="56"
        fontWeight="bold"
        fill="rgba(0,0,0,0.4)"
        fontFamily="serif"
        fontStyle="italic"
      >
        sAI
      </text>
    </svg>
  );
}

function ChartPreview() {
  return (
    <svg viewBox="0 0 400 200" className="w-full h-full">
      <defs>
        <linearGradient id="chart-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#fbbf24" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M0 150 L40 130 L80 145 L120 110 L160 120 L200 80 L240 95 L280 60 L320 70 L360 40 L400 50 L400 200 L0 200 Z"
        fill="url(#chart-grad)"
      />
      <path
        d="M0 150 L40 130 L80 145 L120 110 L160 120 L200 80 L240 95 L280 60 L320 70 L360 40 L400 50"
        fill="none"
        stroke="#fbbf24"
        strokeWidth="2"
      />
      {/* Y-axis labels */}
      <text x="10" y="40" fill="#71717a" fontSize="10">$30k</text>
      <text x="10" y="100" fill="#71717a" fontSize="10">$20k</text>
      <text x="10" y="160" fill="#71717a" fontSize="10">$10k</text>
    </svg>
  );
}

export default function XenithTrading() {
  return (
    <div className="min-h-screen bg-bg text-fg">
      <Nav
        brand="Xenith"
        items={["Home", "AI Trading", "Ecosystem", "sAI Coin", "Resources", "Docs"]}
        cta="Launch app ↗"
      />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gold-radial-right pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05]">
              AI Powered
              <br />
              Trading <span className="text-gold-gradient">Future</span>
            </h1>
            <p className="mt-6 text-zinc-400 leading-relaxed max-w-md">
              XENITH delivers AI Trading, AI Chat, AI Search and Web AI products
              into one platform that powers the next financial paradigm.
            </p>
            <div className="mt-8 flex gap-3">
              <button className="rounded-full bg-gradient-to-br from-amber-400 to-amber-600 px-6 py-3 text-sm font-semibold text-black hover:opacity-90">
                Start Trading
              </button>
              <button className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold hover:bg-white/5">
                Buy sAI
              </button>
            </div>
            <p className="mt-8 text-xs text-zinc-500">Trusted by</p>
            <div className="mt-3 flex flex-wrap gap-6 items-center text-zinc-400 text-sm">
              {["BINANCE", "Coinbase", "Coinmarket", "FxPro"].map((p) => (
                <span key={p} className="opacity-70">{p}</span>
              ))}
            </div>
          </div>
          <div className="flex justify-center items-center">
            <GoldCoin size={360} />
          </div>
        </div>
      </section>

      {/* AI Ecosystem */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
          AI Ecosystem
        </h2>
        <p className="mt-2 text-zinc-500 text-sm max-w-md">
          Powered by intelligent automation across every layer of the product.
        </p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {ecosystem.map((e) => (
            <div key={e.title} className="card-surface p-6 hover:border-amber-500/30 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 mb-4 flex items-center justify-center text-amber-400">
                ✦
              </div>
              <h3 className="font-semibold mb-1">{e.title}</h3>
              <p className="text-sm text-zinc-500 mb-4">{e.body}</p>
              <a href="#" className="text-xs text-amber-400 hover:underline">
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Why sAI? */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Why sAI?</h2>
        <p className="mt-2 text-zinc-500 text-sm max-w-md">
          Built for top-of-the-stack outcomes — speed, precision, reach.
        </p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {whySai.map((s) => (
            <div key={s.label} className="card-surface p-6">
              <div className="text-3xl font-bold mb-1">{s.value}</div>
              <div className="text-sm text-zinc-400">{s.label}</div>
              {s.subtitle && (
                <div className="text-xs text-zinc-600 mt-1">{s.subtitle}</div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Chart + text */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="card-surface p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-xs text-zinc-500">XENITH</p>
                <p className="text-2xl font-semibold">$28,430.50</p>
              </div>
              <div className="flex gap-1 text-xs">
                {["1H", "4H", "1D", "1W", "1M"].map((t) => (
                  <button
                    key={t}
                    className="px-2 py-1 rounded hover:bg-white/5 text-zinc-500 hover:text-white"
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
            <div className="h-48"><ChartPreview /></div>
            <div className="mt-4 flex justify-between text-xs text-zinc-500">
              <span>7d% <span className="text-emerald-400">+1.3%</span></span>
              <span>2.34</span>
              <span>1.94</span>
            </div>
          </div>
          <div className="card-surface p-8 flex flex-col justify-center">
            <h3 className="text-3xl font-semibold mb-3">
              Next Generation
              <br />
              AI Trading
            </h3>
            <p className="text-sm text-zinc-400 mb-6 leading-relaxed">
              Automate workflow at every stage of trading, from analysis to
              execution. Build, deploy and monitor AI strategies in a single
              platform.
            </p>
            <ul className="space-y-2.5 text-sm text-zinc-300">
              <li className="flex gap-3"><span className="text-amber-400">✦</span> Real-time market insights</li>
              <li className="flex gap-3"><span className="text-amber-400">✦</span> AI-powered trading signals</li>
              <li className="flex gap-3"><span className="text-amber-400">✦</span> Automated portfolio management</li>
              <li className="flex gap-3"><span className="text-amber-400">✦</span> Smart risk management</li>
            </ul>
            <button className="mt-6 self-start rounded-full bg-gradient-to-br from-amber-400 to-amber-600 px-5 py-2 text-sm font-semibold text-black">
              Explore AI Trading
            </button>
          </div>
        </div>
      </section>

      {/* sAI Coin */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 items-start">
          <div>
            <h2 className="text-4xl font-semibold tracking-tight">
              sAI Coin
              <br />
              <span className="text-gold-gradient">Powering the Future</span>
            </h2>
            <p className="mt-4 text-sm text-zinc-400 leading-relaxed">
              sAI is the native token enabling the entire XENITH ecosystem and
              its members across DeFi.
            </p>
            <button className="mt-6 rounded-full border border-white/20 px-5 py-2 text-sm font-semibold hover:bg-white/5">
              Explore sAI Coin
            </button>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {saiFeatures.map((f) => (
              <div key={f.title} className="card-surface p-6">
                <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/20 mb-3 flex items-center justify-center text-amber-400 text-sm">
                  ◈
                </div>
                <h3 className="font-semibold mb-1">{f.title}</h3>
                <p className="text-sm text-zinc-500">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="card-surface p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold">
              Start Growing With AI
            </h3>
            <p className="text-sm text-zinc-500 mt-2">
              Get full access to XENITH's AI tools and ecosystem features.
            </p>
          </div>
          <div className="flex gap-3">
            <button className="rounded-full bg-gradient-to-br from-amber-400 to-amber-600 px-6 py-3 text-sm font-semibold text-black">
              Launch App ↗
            </button>
            <button className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold">
              Buy sAI Coin
            </button>
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
