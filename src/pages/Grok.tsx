import { Link } from "react-router-dom";

const products = [
  {
    title: "Grok",
    body:
      "Grok is your cosmic guide, now accessible on grok.com, iOS, and Android. Explore the universe with AI.",
    cta: "USE NOW",
    illustration: (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <defs>
          <radialGradient id="orbit" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(255,191,36,0.4)" />
            <stop offset="100%" stopColor="rgba(255,191,36,0)" />
          </radialGradient>
        </defs>
        <circle cx="100" cy="100" r="80" fill="url(#orbit)" />
        <circle
          cx="100"
          cy="100"
          r="60"
          fill="none"
          stroke="rgba(255,255,255,0.15)"
          strokeWidth="0.5"
        />
        <ellipse
          cx="100"
          cy="100"
          rx="80"
          ry="25"
          fill="none"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="0.5"
          transform="rotate(-25 100 100)"
        />
        <circle cx="100" cy="100" r="8" fill="#fbbf24" />
        <circle cx="155" cy="80" r="3" fill="#fff" />
        <circle cx="50" cy="130" r="2" fill="#fff" opacity="0.6" />
      </svg>
    ),
  },
  {
    title: "API",
    body: "Supercharge your applications with Grok's advanced speed, precision, and multilingual capabilities.",
    cta: "BUILD NOW",
    illustration: (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <rect
          x="40"
          y="60"
          width="120"
          height="80"
          rx="6"
          fill="rgba(255,255,255,0.04)"
          stroke="rgba(255,255,255,0.15)"
        />
        <rect x="50" y="70" width="40" height="4" fill="#fbbf24" />
        <rect x="50" y="80" width="80" height="3" fill="rgba(255,255,255,0.2)" />
        <rect x="50" y="88" width="60" height="3" fill="rgba(255,255,255,0.15)" />
        <rect x="50" y="96" width="70" height="3" fill="rgba(255,255,255,0.15)" />
        <rect x="50" y="110" width="100" height="20" rx="3" fill="rgba(251,191,36,0.15)" stroke="rgba(251,191,36,0.4)" />
      </svg>
    ),
  },
  {
    title: "Developer Docs",
    body: "Learn how to quickly install Grok at the heart of your applications and explore guides covering common use cases.",
    cta: "LEARN MORE",
    illustration: (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <rect x="35" y="50" width="110" height="100" rx="4" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.15)" />
        <rect x="45" y="55" width="110" height="100" rx="4" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.2)" />
        <rect x="55" y="60" width="110" height="100" rx="4" fill="rgba(0,0,0,0.6)" stroke="rgba(255,255,255,0.25)" />
        <line x1="65" y1="80" x2="155" y2="80" stroke="rgba(255,255,255,0.3)" />
        <line x1="65" y1="95" x2="140" y2="95" stroke="rgba(255,255,255,0.2)" />
        <line x1="65" y1="110" x2="150" y2="110" stroke="rgba(255,255,255,0.2)" />
        <line x1="65" y1="125" x2="125" y2="125" stroke="rgba(255,255,255,0.2)" />
      </svg>
    ),
  },
];

export default function Grok() {
  return (
    <div className="min-h-screen bg-black text-fg">
      {/* Header */}
      <header className="border-b border-white/5">
        <nav className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-12">
            <Link to="/" className="flex items-center gap-2">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path
                  d="M14 4 L24 14 L14 24 L4 14 Z M14 9 L19 14 L14 19 L9 14 Z"
                  fill="white"
                />
              </svg>
            </Link>
            <ul className="hidden md:flex items-center gap-8 text-xs tracking-widest text-zinc-400">
              {["GROK", "API", "COMPANY", "COLOSSUS", "CAREERS", "NEWS"].map(
                (item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>
          <button className="rounded-full border border-white/20 px-5 py-2 text-xs tracking-widest hover:bg-white/5 transition-colors">
            TRY GROK
          </button>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gold-radial-right pointer-events-none opacity-60" />
        <div className="relative mx-auto max-w-6xl px-6 pt-32 pb-20">
          {/* Huge Grok wordmark */}
          <h1 className="text-center text-[14rem] md:text-[20rem] font-bold tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-b from-zinc-300/30 to-zinc-700/10 select-none">
            Grok
          </h1>

          {/* Search input */}
          <div className="mt-12 max-w-2xl mx-auto">
            <div className="flex items-center gap-3 rounded-2xl bg-zinc-900/80 border border-white/10 px-5 py-4 backdrop-blur-sm">
              <input
                placeholder="What you want to know?"
                className="flex-1 bg-transparent outline-none text-zinc-200 placeholder:text-zinc-500"
              />
              <button className="rounded-full bg-white text-black w-9 h-9 flex items-center justify-center hover:bg-zinc-200 transition-colors">
                →
              </button>
            </div>
          </div>

          {/* Caption */}
          <div className="mt-20 grid md:grid-cols-[1fr_auto_auto] items-center gap-6 max-w-4xl mx-auto">
            <p className="text-sm text-zinc-400">↓</p>
            <p className="text-sm text-zinc-300 text-center">
              We are thrilled to unveil Grok 3, our most advanced model yet,
              <br />
              blending superior reasoning with extensive pretraining knowledge.
            </p>
            <div className="flex gap-3">
              <button className="rounded-md border border-white/20 px-4 py-2 text-xs tracking-widest hover:bg-white/5">
                BUILD WITH GROK ↗
              </button>
              <button className="rounded-md border border-white/20 px-4 py-2 text-xs tracking-widest hover:bg-white/5">
                LEARN MORE ↗
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Products section */}
      <section className="mx-auto max-w-7xl px-6 py-32">
        <p className="text-xs tracking-widest text-zinc-500 mb-4">
          [ PRODUCTS ]
        </p>
        <h2 className="text-5xl md:text-6xl font-semibold tracking-tight mb-16">
          AI for all humanity
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {products.map((p) => (
            <div
              key={p.title}
              className="card-surface bg-zinc-950 p-6 flex flex-col"
            >
              <div className="aspect-square mb-6 rounded-lg overflow-hidden">
                {p.illustration}
              </div>
              <h3 className="text-2xl font-semibold mb-3">{p.title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed flex-1 mb-6">
                {p.body}
              </p>
              <button className="self-start rounded-md border border-white/20 px-4 py-2 text-xs tracking-widest hover:bg-white/5 transition-colors">
                {p.cta} ↗
              </button>
            </div>
          ))}
        </div>
      </section>

      <Link
        to="/"
        className="fixed bottom-6 right-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 text-xs hover:bg-white/20"
      >
        ← Hub
      </Link>
    </div>
  );
}
