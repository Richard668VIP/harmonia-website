"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const NAV_ITEMS = [
  { label: "The Five Pillars", href: "/pillars" },
  { label: "Courses",          href: "/courses" },
  { label: "Shop",             href: "/shop"    },
  { label: "Learn",            href: "/blog"    },
  { label: "About",            href: "/about"   },
];

export default function Nav({ activePage }: { activePage?: string }) {
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <>
      {/* Announcement bar */}
      <div style={{ background:"#0D1810", color:"#F0DFA0", textAlign:"center", padding:"11px 20px", fontSize:13, letterSpacing:".04em" }}>
        ✦ &nbsp; New: Free 7-Day Starter Pack — Begin Your Journey Today &nbsp;
        <Link href="/courses/free-starter-pack" style={{ color:"#F0DFA0", textDecoration:"underline" }}>
          Claim Free Access →
        </Link>
      </div>

      {/* Nav */}
      <nav style={{ background: scrolled ? "rgba(250,247,242,0.96)" : "#FAF7F2", borderBottom:"1px solid #D5E2D8", position:"sticky", top:0, zIndex:100, backdropFilter:"blur(12px)", transition:"background .3s" }}>
        <div style={{ maxWidth:1280, margin:"0 auto", padding:"0 28px", display:"flex", alignItems:"center", justifyContent:"space-between", height:68 }}>

          {/* Logo */}
          <Link href="/" style={{ display:"flex", alignItems:"center", gap:10, textDecoration:"none" }}>
            <svg width="26" height="26" viewBox="0 0 34 34" fill="none">
              {([[-68,.5],[-36,.75],[0,.92],[36,.75],[68,.5]] as [number,number][]).map(([a,op]) => (
                <ellipse key={a} cx={17} cy={17} rx={4.5} ry={8} fill="#2D6A4F" opacity={op} transform={`rotate(${a} 17 21)`}/>
              ))}
              <circle cx={17} cy={19} r={3.5} fill="#2D6A4F" opacity={.92}/>
            </svg>
            <div>
              <div style={{ fontFamily:"Georgia,serif", fontSize:20, fontWeight:600, color:"#181E16", lineHeight:1 }}>Harmonia</div>
              <div style={{ fontSize:9, letterSpacing:".18em", color:"#6A7A6D", textTransform:"uppercase" }}>寰宇心流</div>
            </div>
          </Link>

          {/* Desktop nav — hidden on mobile */}
          <div style={{ display:"flex", gap:28, alignItems:"center" }}
               className="hidden-mobile">
            {NAV_ITEMS.map(item => (
              <Link key={item.href} href={item.href}
                style={{ fontSize:14, fontWeight:500, color: activePage===item.href ? "#2D6A4F" : "#181E16", textDecoration:"none", letterSpacing:".02em" }}>
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div style={{ display:"flex", gap:12, alignItems:"center" }}>
            <Link href="/courses/free-starter-pack"
              style={{ background:"linear-gradient(135deg,#C9A84C,#E0C06A)", color:"#0D1810", border:"none", cursor:"pointer", padding:"10px 22px", borderRadius:8, fontWeight:600, fontSize:14, textDecoration:"none", display:"inline-flex", alignItems:"center", gap:6 }}>
              Begin Free →
            </Link>
            <button onClick={() => setMobileOpen(v => !v)}
              style={{ background:"none", border:"none", cursor:"pointer", fontSize:22, color:"#181E16", display:"none" }}
              className="mobile-menu-btn">
              ☰
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div style={{ background:"#FAF7F2", borderTop:"1px solid #D5E2D8", padding:"8px 28px 16px" }}>
            {NAV_ITEMS.map(item => (
              <Link key={item.href} href={item.href}
                style={{ display:"block", padding:"12px 0", fontSize:15, color:"#3C2D18", textDecoration:"none", borderBottom:"1px solid #D5E2D8" }}
                onClick={() => setMobileOpen(false)}>
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </nav>

      <style>{`
        @media (max-width: 1024px) {
          .hidden-mobile { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </>
  );
}
