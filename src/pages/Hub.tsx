import { Link } from "react-router-dom";

const pages = [
  {
    path: "/nirok",
    brand: "Nirok",
    tagline: "Defense Against Digital Threats",
    description: "Cybersecurity landing — cyber threats, partner network, track record.",
    accent: "from-amber-400 to-orange-600",
    image: "/refs/2429-6_image2.png",
  },
  {
    path: "/grok",
    brand: "Grok",
    tagline: "AI for all humanity",
    description: "xAI Grok-inspired search & products landing.",
    accent: "from-zinc-300 to-zinc-600",
    image: "/refs/2429-9_image3.png",
  },
  {
    path: "/xenith-trading",
    brand: "Xenith",
    tagline: "AI Powered Trading Future",
    description: "AI crypto trading hub — ecosystem, sAI coin, chart preview.",
    accent: "from-amber-300 to-yellow-700",
    image: "/refs/2436-12_image4.png",
  },
  {
    path: "/xenith-ai",
    brand: "XENITH",
    tagline: "AI Trading. Smarter Future.",
    description: "XENITH long-form — market overview, AI bot, mobile app.",
    accent: "from-yellow-300 to-amber-700",
    image: "/refs/2439-15_image5.png",
  },
];

export default function Hub() {
  return (
    <div className="min-h-screen bg-bg text-fg">
      <main className="mx-auto max-w-7xl px-6 py-20">
        <header className="mb-16 text-center">
          <p className="text-sm uppercase tracking-widest text-amber-400 mb-3">
            Figma Clone Showcase
          </p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Four <span className="text-gold-gradient">AI brands</span>,<br />
            one design system.
          </h1>
          <p className="mt-6 text-zinc-400 max-w-2xl mx-auto text-lg">
            Each page cloned from a Figma reference. Built with Vite, React 19,
            Tailwind v4 — ready for Google AI Studio.
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-2">
          {pages.map((p) => (
            <Link
              key={p.path}
              to={p.path}
              className="group relative overflow-hidden card-surface hover:border-white/20 transition-all hover:-translate-y-1 duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden bg-black">
                <img
                  src={p.image}
                  alt={`${p.brand} reference`}
                  className="w-full h-full object-cover object-top opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className={`w-10 h-10 rounded-lg bg-gradient-to-br ${p.accent}`}
                  />
                  <h2 className="text-2xl font-semibold">{p.brand}</h2>
                </div>
                <p className="text-xl text-zinc-200 mb-2">{p.tagline}</p>
                <p className="text-sm text-zinc-500">{p.description}</p>
                <div className="mt-4 inline-flex items-center text-sm text-amber-400 group-hover:translate-x-1 transition-transform">
                  Visit page →
                </div>
              </div>
            </Link>
          ))}
        </div>

        <footer className="mt-20 pt-8 border-t border-white/5 text-center text-xs text-zinc-600">
          Built from Figma file{" "}
          <code className="text-zinc-400">Siongming Chua's team library</code>{" "}
          · 4 reference images · 0 design tokens
        </footer>
      </main>
    </div>
  );
}
