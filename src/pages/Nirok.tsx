import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { Crystal } from "../components/Crystal";

const stats = [
  { value: "99.9%", label: "Success Rate" },
  { value: "9.7K", label: "Clients Join" },
  { value: "24/7", label: "5 Minute Response" },
  { value: "20+", label: "Years Experience" },
];

const partners = ["BookStore", "Zantic", "Cosmo", "Mercury", "Mago"];

export default function Nirok() {
  return (
    <div className="min-h-screen bg-bg text-fg">
      <Nav
        brand="Nirok"
        items={["Home", "AI", "Features", "About us", "Contact"]}
        cta="Try Now"
      />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gold-radial-right pointer-events-none" />
        {/* Huge brand watermark */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-center pointer-events-none select-none">
          <span className="text-[18rem] font-bold text-white/[0.025] tracking-tighter">
            Nirok
          </span>
        </div>
        <div className="relative mx-auto max-w-7xl px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 border border-amber-500/20 px-3 py-1 text-xs text-amber-300 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              Identify Your Defense Security Score
            </span>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-[1.05]">
              Defense Aga<span className="text-gold-gradient">i</span>nst
              <br />
              Digital Threats
            </h1>
            <p className="mt-6 text-zinc-400 leading-relaxed max-w-md">
              Protect your data and systems from threats with smart, reliable
              cybersecurity. Stay ahead of cyber threats with our advanced
              solutions.
            </p>
            <form className="mt-8 flex max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-l-full bg-zinc-900 border border-r-0 border-white/10 px-5 py-3 text-sm placeholder:text-zinc-600 focus:outline-none focus:border-amber-500/50"
              />
              <button className="rounded-r-full bg-gradient-to-br from-amber-400 to-amber-600 px-6 text-sm font-semibold text-black hover:opacity-90 transition-opacity">
                Subscribe
              </button>
            </form>
          </div>
          <div className="relative flex justify-center items-center h-[400px]">
            <div className="absolute inset-0 gold-radial-center" />
            <div className="relative flex gap-4 items-center">
              <Crystal variant="outline" size={140} />
              <Crystal variant="gold" size={180} className="drop-shadow-[0_0_40px_rgba(245,158,11,0.5)]" />
              <Crystal variant="outline" size={140} />
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="border-y border-white/5 bg-black/40">
        <div className="mx-auto max-w-7xl px-6 py-12 text-center">
          <p className="text-xs uppercase tracking-widest text-zinc-500 mb-6">
            Our Partners
          </p>
          <div className="flex flex-wrap justify-center gap-12 items-center">
            {partners.map((p) => (
              <span
                key={p}
                className="text-zinc-400 text-lg font-medium opacity-70 hover:opacity-100 transition-opacity"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Track Record */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Our Proven<br />Track Record
          </h2>
          <p className="text-zinc-400 self-end max-w-md">
            Within hours, our team mitigated the damage and restored operations
            with zero data loss. Trusted by thousands of clients worldwide for
            our reliability and expertise.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 grid sm:grid-cols-2 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="card-surface p-8">
                <div className="text-5xl font-bold mb-2">{s.value}</div>
                <div className="text-zinc-500 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
          <div className="card-surface p-8 flex flex-col">
            <h3 className="text-2xl font-semibold mb-2">Interested in us?</h3>
            <p className="text-sm text-zinc-400 flex-1">
              For new growth find the area you're interested in. Big with new
              connections.
            </p>
            <button className="mt-4 self-start rounded-full bg-gradient-to-br from-amber-400 to-amber-600 px-5 py-2 text-sm font-semibold text-black">
              Get Started
            </button>
            <div className="mt-6 flex justify-center gap-2">
              <Crystal variant="white" size={70} />
              <Crystal variant="gold" size={70} />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-7xl px-6 py-24 text-center">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
          Keeping Your <span className="text-gold-gradient">Data Safe</span>
          <br />
          Day And Night
        </h2>
      </section>

      <Footer brand="Nirok" />
    </div>
  );
}
