import type { Metadata } from "next""use client";
import Nav    from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Courses & Programs | East-West Life Wisdom | Harmonia",
  description: "From the free 7-day Starter Pack to the complete 12-week Integration System — structured programs bridging Eastern wisdom and modern science.",
  path: "/courses",
});

const COURSES = [
  { slug:"free-starter-pack",        name:"Free Starter Pack",              price:"Free",  badge:"FREE",    color:"#2D6A4F", desc:"7 days · All 5 Pillars · No card required" },
  { slug:"awareness-foundations",     name:"Awareness & Stillness Foundations",price:"$49",  badge:"PILLAR 1",color:"#7B9EC4", desc:"6 weeks · Zen + Neuroscience system" },
  { slug:"energy-vitality-system",    name:"The Energy & Vitality System",   price:"$79",  badge:"PILLAR 2",color:"#C9A84C", desc:"5 weeks · TCM + Circadian science" },
  { slug:"nlp-mind-emotions",         name:"NLP + Eastern Emotional Mastery",price:"$97",  badge:"PILLAR 3",color:"#9B6BAF", desc:"8 weeks · NLP + CBT + ACT synthesis" },
  { slug:"the-integration-system",    name:"The Integration System",         price:"$297", badge:"FLAGSHIP",color:"#C9A84C", desc:"12 weeks · All pillars · Live sessions · 1:1 call" },
  { slug:"coaching",                  name:"1:1 Coaching",                   price:"$180", badge:"1:1",     color:"#C97A7A", desc:"Per session · Fully personalised" },
];

export default function CoursesPage() {
  return (
    <>
      <Nav activePage="/courses"/>
      <section className="relative overflow-hidden py-24 px-7"
        style={{ background:"linear-gradient(160deg,#162B20,#0D1810)", minHeight:420 }}>
        <div className="max-w-[1280px] mx-auto grid grid-cols-2 gap-16 items-center">
          <div>
            <span className="font-label text-[10px] tracking-[.2em] uppercase mb-5 block" style={{ color:"#E0C06A" }}>Courses & Programs</span>
            <h1 className="font-display font-normal leading-[1.08] mb-5"
              style={{ fontSize:"clamp(44px,5vw,68px)", color:"rgba(244,239,228,0.96)" }}>
              Learn, Practice,<br/><em className="font-light not-italic" style={{ color:"#E0C06A" }}>Transform.</em>
            </h1>
            <p className="text-[17px] leading-[1.85] mb-9" style={{ color:"rgba(244,239,228,0.55)", maxWidth:440 }}>
              Structured programs that meet you wherever you are and take you where you want to go.
            </p>
            <a href="/courses/free-starter-pack" className="btn-gold">Begin Free Today →</a>
          </div>
          <div className="grid grid-cols-2 gap-3.5">
            {[["60K+","Practitioners"],["7","Programs"],["4.9★","Avg Rating"],["12wk","Flagship"]].map(([v,l])=>(
              <div key={l} className="rounded-[16px] p-5" style={{ background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.09)" }}>
                <div className="font-display text-[32px] leading-none mb-1.5" style={{ color:"#E0C06A" }}>{v}</div>
                <div className="text-[13px]" style={{ color:"rgba(244,239,228,0.65)" }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-7 bg-cream">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-3 gap-6">
            {COURSES.map(c=>(
              <a key={c.slug} href={`/courses/${c.slug}`}
                className="bg-cream border border-border rounded-[18px] overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl cursor-pointer block">
                <div className="p-7 border-b border-border" style={{ background:`${c.color}10` }}>
                  <span className="text-[10px] font-bold tracking-[.1em] text-white px-2.5 py-1 rounded mb-4 inline-block"
                    style={{ background:c.badge==="FLAGSHIP"?`linear-gradient(135deg,#C9A84C,#2D6A4F)`:c.color }}>{c.badge}</span>
                  <h2 className="font-display text-[21px] font-medium text-ink mt-2 leading-[1.25]">{c.name}</h2>
                  <div className="text-[12px] text-muted mt-1">{c.desc}</div>
                </div>
                <div className="p-5 flex justify-between items-center">
                  <span className="font-display text-[24px] font-medium text-ink">{c.price}</span>
                  <span className="text-[13px] font-semibold" style={{ color:c.color }}>Enroll →</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}
