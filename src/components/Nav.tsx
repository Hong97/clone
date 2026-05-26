import { Link } from "react-router-dom";

interface NavProps {
  brand: string;
  items: string[];
  cta: string;
  logoSlot?: React.ReactNode;
}

export function Nav({ brand, items, cta, logoSlot }: NavProps) {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-black/40 border-b border-white/5">
      <nav className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          {logoSlot ?? (
            <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-300 to-amber-600" />
          )}
          <span className="text-lg font-semibold tracking-tight group-hover:text-amber-400 transition-colors">
            {brand}
          </span>
        </Link>
        <ul className="hidden md:flex items-center gap-8 text-sm text-zinc-300">
          {items.map((item) => (
            <li key={item}>
              <a className="hover:text-white transition-colors" href="#">
                {item}
              </a>
            </li>
          ))}
        </ul>
        <button className="rounded-full border border-white/15 px-5 py-2 text-sm font-medium hover:bg-white/5 hover:border-white/30 transition-colors">
          {cta}
        </button>
      </nav>
    </header>
  );
}
