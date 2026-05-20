"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { PILLARS } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "The Five Pillars", href: "/pillars",
    sub: PILLARS.map(p => ({ label: p.en, href: `/pillars/${p.slug}` })) },
  { label: "Courses", href: "/courses",
    sub: [
      { label: "All Courses",           href: "/courses" },
      { label: "Free Starter Pack",     href: "/courses/free-starter-pack" },
      { label: "The Integration System",href: "/courses/the-integration-system" },
      { label: "1:1 Coaching",          href: "/courses/coaching" },
    ] },
  { label: "Shop",    href: "/shop"    },
  { label: "Learn",   href: "/blog"    },
  { label: "About",   href: "/about"   },
];

export default function Nav({ activePage }: { activePage?: string }) {
  const [scrolled, setScrolled]   = useState(false);
  const [openMenu, setOpenMenu]   = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      {/* Announcement bar */}
      <div className="bg-deep text-center py-[11px] px-5 text-[13px] tracking-[.04em]"
           style={{ color: "#F0DFA0" }}>
        ✦ &nbsp; New: Free 7-Day Starter Pack — Begin Your Journey Today &nbsp;
        <Link href="/courses/free-starter-pack" className="underline cursor-pointer">
          Claim Free Access →
        </Link>
      </div>

      <nav className={`sticky top-0 z-50 border-b border-border backdrop-blur-md transition-all duration-300 ${
        scrolled ? "bg-cream/96" : "bg-cream"
      }`}>
        <div className="max-w-[1280px] mx-auto px-7 flex items-center justify-between h-[68px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <svg width="26" height="26" viewBox="0 0 34 34" fill="none">
              {[[-68,.5],[-36,.75],[0,.92],[36,.75],[68,.5]].map(([a,op]) => (
                <ellipse key={a} cx={17} cy={21-8*.28} rx={4.5} ry={8}
                  fill="#2D6A4F" opacity={op} transform={`rotate(${a} 17 21)`}/>
              ))}
              <circle cx={17} cy={21-8*.14} r={8*.22} fill="#2D6A4F" opacity={.92}/>
            </svg>
            <div>
              <div className="font-display text-[21px] font-semibold text-ink leading-none">Harmonia</div>
              <div className="text-[9px] tracking-[.18em] text-muted uppercase">寰宇心流</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex gap-8 items-center">
            {NAV_ITEMS.map(item => (
              <div key={item.href} className="relative"
                onMouseEnter={() => item.sub && setOpenMenu(item.label)}
                onMouseLeave={() => setOpenMenu(null)}>
                <Link href={item.href}
                  className={`text-[13.5px] font-medium tracking-[.02em] transition-colors hover:text-jade pb-0.5 border-b border-transparent hover:border-gold ${
                    activePage === item.href ? "text-jade border-gold" : "text-ink"
                  }`}>
                  {item.label}
                  {item.sub && <span className="text-[9px] ml-0.5 opacity-50">▾</span>}
                </Link>
                {item.sub && openMenu === item.label && (
                  <div className="absolute top-[calc(100%+10px)] left-1/2 -translate-x-1/2 bg-cream border border-border rounded-xl py-2 min-w-[210px] shadow-lg z-[200]">
                    {item.sub.map(s => (
                      <Link key={s.href} href={s.href}
                        className="block px-5 py-2.5 text-[13.5px] text-brown hover:bg-parchment transition-colors">
                        {s.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right */}
          <div className="flex gap-3.5 items-center">
            <span className="text-muted text-base cursor-pointer hidden sm:block">⌕</span>
            <span className="text-[11.5px] text-muted border border-border px-3 py-1 rounded-full cursor-pointer hidden sm:block">
              EN / 中文
            </span>
            <Link href="/courses/free-starter-pack"
              className="btn-gold !py-[10px] !px-[22px] !text-[13.5px]">
              Begin Free →
            </Link>
            {/* Mobile hamburger */}
            <button className="lg:hidden text-ink text-xl"
              onClick={() => setMobileOpen(v => !v)}>☰</button>
          </div>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="lg:hidden bg-cream border-t border-border px-7 py-4">
            {NAV_ITEMS.map(item => (
              <Link key={item.href} href={item.href}
                className="block py-3 text-[15px] text-brown border-b border-border last:border-0"
                onClick={() => setMobileOpen(false)}>
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </>
  );
}
