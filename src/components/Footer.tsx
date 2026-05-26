interface FooterProps {
  brand: string;
  columns?: { title: string; links: string[] }[];
}

const defaultColumns = [
  { title: "Product", links: ["Features", "Pricing", "Integrations", "API"] },
  { title: "Company", links: ["About", "Blog", "Careers", "Contact"] },
  { title: "Resources", links: ["Docs", "Help Center", "Status", "Community"] },
  { title: "Legal", links: ["Privacy", "Terms", "Cookies", "Licenses"] },
];

export function Footer({ brand, columns = defaultColumns }: FooterProps) {
  return (
    <footer className="border-t border-white/5 mt-24">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-[1.5fr_repeat(4,1fr)]">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-300 to-amber-600" />
            <span className="text-lg font-semibold">{brand}</span>
          </div>
          <p className="text-sm text-zinc-400 leading-relaxed max-w-xs">
            Building the next generation of intelligent products. Stay updated
            with our latest releases and announcements.
          </p>
        </div>
        {columns.map((col) => (
          <div key={col.title}>
            <h3 className="text-sm font-semibold text-white mb-4">
              {col.title}
            </h3>
            <ul className="space-y-2.5 text-sm text-zinc-400">
              {col.links.map((l) => (
                <li key={l}>
                  <a href="#" className="hover:text-white transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <span>© 2026 {brand}. All rights reserved.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">
              Twitter
            </a>
            <a href="#" className="hover:text-white">
              GitHub
            </a>
            <a href="#" className="hover:text-white">
              Discord
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
