import type { Metadata } from "next""use client";
import Nav    from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import { buildMetadata } from "@/lib/seo";
import Lotus   from "@/components/ui/Lotus";
import Divider from "@/components/ui/Divider";

export const metadata: Metadata = buildMetadata({
  title: "About Richard | Our Story & Mission | Harmonia",
  description: "20+ years bridging Eastern wisdom and Western science. Richard founded Harmonia to make the deepest human wisdom accessible to everyone.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <Nav activePage="/about"/>
      <section className="relative overflow-hidden py-24 px-7" style={{ background:"linear-gradient(160deg,#162B20,#0D1810)", minHeight:"90vh", display:"flex", alignItems:"center" }}>
        <div className="max-w-[1280px] mx-auto w-full grid grid-cols-2 gap-18 items-center">
          <div>
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-[7px] rounded-full"
              style={{ background:"rgba(201,168,76,0.1)", border:"1px solid rgba(201,168,76,0.25)" }}>
              <span className="font-label text-[10px] tracking-[.2em] uppercase" style={{ color:"#E0C06A" }}>Founder · Harmonia</span>
            </div>
            <h1 className="font-display font-normal leading-[1.06] mb-2.5"
              style={{ fontSize:"clamp(46px,5vw,76px)", color:"rgba(244,239,228,0.97)" }}>Richard</h1>
            <div className="font-display font-light italic text-[28px] leading-[1.3] mb-7" style={{ color:"#E0C06A" }}>
              A Bridge Between Two Worlds
            </div>
            <div className="mb-7"><Divider color="#C9A84C" width={110} center={false}/></div>
            <blockquote className="border-l-[3px] pl-6 mb-8" style={{ borderColor:"#C9A84C" }}>
              <p className="font-display text-[22px] leading-[1.65] italic" style={{ color:"rgba(244,239,228,0.8)" }}>
                "I spent 20 years studying on two sides of the world — ancient temples in China and psychology labs in the West. The wisdom was never in conflict. It was always waiting to be unified."
              </p>
            </blockquote>
            <p className="text-[16px] leading-[1.85] mb-9" style={{ color:"rgba(244,239,228,0.55)", maxWidth:480 }}>
              20+ years across both traditions. 60,000+ practitioners reached. One mission: to make the deepest human wisdom accessible to everyone.
            </p>
            <div className="flex gap-3.5">
              <a href="/courses/free-starter-pack" className="btn-gold">Begin Richard's Free Course →</a>
              <a href="#story" className="btn-ghost">Read the Full Story</a>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative" style={{ width:360,height:432 }}>
              <div className="w-full h-full rounded-[24px] flex flex-col items-center justify-center gap-5"
                style={{ background:"linear-gradient(160deg,#1C3028,#0D1810)" }}>
                <div className="animate-float"><Lotus size={56} color="#C9A84C"/></div>
                <div className="font-display text-[22px]" style={{ color:"rgba(244,239,228,.9)" }}>Richard</div>
                <div className="text-[11px] tracking-[.18em] uppercase" style={{ color:"rgba(244,239,228,.4)" }}>Founder · Harmonia 寰宇心流</div>
                <div className="grid grid-cols-4 gap-4 mt-4">
                  {[["◯","Chan"],["✦","TCM"],["⬡","NLP"],["❋","Psych"]].map(([ic,l])=>(
                    <div key={l} className="text-center">
                      <div className="text-[22px] mb-1" style={{ color:"#C9A84C" }}>{ic}</div>
                      <div className="text-[10px]" style={{ color:"rgba(244,239,228,.4)" }}>{l}</div>
                    </div>
                  ))}
                </div>
              </div>
              {[
                { bottom:"-5%", right:"-12%", title:"20+ Years", sub:"Dual Tradition" },
                { top:"8%", left:"-16%", title:"60,000+", sub:"Practitioners" },
              ].map(b=>(
                <div key={b.title} className="absolute rounded-[14px] px-4 py-3"
                  style={{ ...b, background:"rgba(22,43,32,0.9)",border:"1px solid rgba(255,255,255,0.1)",backdropFilter:"blur(10px)" }}>
                  <div className="font-display text-[20px]" style={{ color:"#E0C06A" }}>{b.title}</div>
                  <div className="text-[11px]" style={{ color:"rgba(244,239,228,.5)" }}>{b.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="story" className="py-24 px-7 bg-parchment">
        <div className="max-w-[800px] mx-auto text-center">
          <Lotus size={44} color="#2D6A4F"/>
          <span className="font-label text-[11px] tracking-[.2em] uppercase text-jade block mt-4 mb-3">The Mission</span>
          <h2 className="font-display font-normal text-ink mb-4" style={{ fontSize:"clamp(32px,4vw,50px)" }}>
            Make the Deepest Human Wisdom<br/><em className="not-italic text-jade">Accessible to Everyone.</em>
          </h2>
          <Divider color="#2D6A4F"/>
          <p className="text-[16px] text-muted leading-[1.85] mt-5 mb-10 max-w-[560px] mx-auto">
            Not just to practitioners who can afford expensive retreats. Not just to people who speak Mandarin or have time to study ancient texts. To everyone who is ready — and honest enough to look inward.
          </p>
          <a href="/courses/free-starter-pack" className="btn-gold">Begin Free Today →</a>
        </div>
      </section>
      <Footer/>
    </>
  );
}
