import Link from "next/link";

const COLS = [
  { title: "Explore",  links: [["The Five Pillars","/pillars"],["Courses","/courses"],["Crystal Shop","/shop"],["Community","/community"],["Blog & Library","/blog"]] },
  { title: "Pillars",  links: [["Awareness & Stillness","/pillars/awareness-stillness"],["Energy & Vitality","/pillars/energy-vitality"],["Mind & Emotion","/pillars/mind-emotion"],["Relationships","/pillars/relationships-connection"],["Meaning & Purpose","/pillars/meaning-purpose"]] },
  { title: "Company",  links: [["About Richard","/about"],["Our Mission","/about#mission"],["Press","/about/press"],["Careers","/about/careers"],["Contact","/contact"]] },
  { title: "Legal",    links: [["Privacy Policy","/legal/privacy"],["Terms of Service","/legal/terms"],["Cookie Policy","/legal/cookies"],["GDPR","/legal/gdpr"]] },
];

export default function Footer() {
  return (
    <footer className="bg-deep text-parchment pt-[72px] pb-8 px-7">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-12 pb-12 border-b border-white/10 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <svg width="24" height="24" viewBox="0 0 34 34" fill="none">
                {[[-68,.5],[-36,.75],[0,.92],[36,.75],[68,.5]].map(([a,op]) => (
                  <ellipse key={a} cx={17} cy={21-8*.28} rx={4.5} ry={8} fill="#C9A84C" opacity={op} transform={`rotate(${a} 17 21)`}/>
                ))}
                <circle cx={17} cy={21-8*.14} r={8*.22} fill="#C9A84C" opacity={.92}/>
              </svg>
              <div className="font-display text-[20px]" style={{ color: "rgba(244,239,228,0.95)" }}>
                Harmonia <span className="text-[9px] tracking-[.14em] uppercase" style={{ color: "rgba(201,168,76,0.55)", verticalAlign: "middle" }}>寰宇心流</span>
              </div>
            </div>
            <p className="text-[13px] leading-[1.8] mb-5 max-w-[240px]" style={{ color: "rgba(244,239,228,0.4)" }}>
              Where ancient wisdom meets modern science. A practice-first system for total life alignment.
            </p>
            <div className="flex gap-3.5 flex-wrap">
              {["Instagram","YouTube","Podcast","TikTok","LinkedIn"].map(s => (
                <span key={s} className="text-[12px] cursor-pointer transition-colors hover:text-gold-light"
                  style={{ color: "rgba(244,239,228,0.3)" }}>{s}</span>
              ))}
            </div>
          </div>
          {/* Columns */}
          {COLS.map(col => (
            <div key={col.title}>
              <div className="font-label text-[10px] tracking-[.18em] uppercase mb-4"
                style={{ color: "rgba(201,168,76,0.65)" }}>{col.title}</div>
              {col.links.map(([l, href]) => (
                <Link key={l} href={href}
                  className="block text-[13px] mb-2.5 transition-colors hover:text-parchment"
                  style={{ color: "rgba(244,239,228,0.4)" }}>{l}</Link>
              ))}
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center flex-wrap gap-2.5">
          <span className="text-[12px]" style={{ color: "rgba(244,239,228,0.22)" }}>
            © 2025 Harmonia 寰宇心流 · All Rights Reserved
          </span>
          <div className="text-[12px]" style={{ color: "rgba(244,239,228,0.22)" }}>
            harmoniawisdom.com
          </div>
        </div>
      </div>
    </footer>
  );
}
