import type { Metadata } from "next";
import Nav    from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "The Five Pillars of Harmonia | East-West Life Wisdom System",
  description: "Five integrated practice pillars — Awareness, Energy, Mind, Relationships, Purpose — bridging Eastern wisdom and Western science into one complete system.",
  path: "/pillars",
});

const PILLARS = [
  { id:1, icon:"◯", en:"Awareness & Stillness",     cn:"觉知与静心", color:"#7B9EC4", slug:"awareness-stillness",
    tagline:"Clear the noise. Return to presence.",
    essence:"The practice of returning to the present moment — clearing the mental noise so you can finally hear your own wisdom.",
    eastern:"Chan Buddhism · Zen · Taoism · Vipassana",
    western:"Neuroscience · Neuroplasticity · Default Mode Network research",
    science:"8 weeks of practice measurably rewires the prefrontal cortex." },
  { id:2, icon:"✦", en:"Energy & Vitality",          cn:"能量与活力", color:"#C9A84C", slug:"energy-vitality",
    tagline:"Your body is a living energy system.",
    essence:"How you eat, sleep, move, and inhabit your space either supports or drains your system.",
    eastern:"TCM · Feng Shui · Five Elements · Taoist Wellness",
    western:"Circadian Biology · Sleep Science · Environmental Psychology",
    science:"The TCM organ clock maps precisely to circadian rhythm research." },
  { id:3, icon:"⬡", en:"Mind & Emotion",             cn:"心智与情绪", color:"#9B6BAF", slug:"mind-emotion",
    tagline:"Your thoughts aren't facts. Your emotions aren't enemies.",
    essence:"Both are messengers. Learn their language and your inner life transforms permanently.",
    eastern:"Buddhist Lojong · Taoist Alchemy · Confucian Cultivation",
    western:"NLP · CBT · ACT · Polyvagal Theory",
    science:"NLP reframing activates the same neural pathways as CBT restructuring." },
  { id:4, icon:"❋", en:"Relationships & Connection", cn:"关系与连接", color:"#C97A7A", slug:"relationships-connection",
    tagline:"Every relationship is an energy exchange.",
    essence:"The I Ching mapped human dynamics 3,000 years before psychology named them.",
    eastern:"I Ching · Five Elements Communication · Buddhist Metta",
    western:"Attachment Theory · NVC · Interpersonal Neurobiology",
    science:"Five-element communication styles align with modern attachment research." },
  { id:5, icon:"◈", en:"Meaning & Purpose",          cn:"意义与使命", color:"#4A8C6B", slug:"meaning-purpose",
    tagline:"Meaning isn't found. It's built.",
    essence:"Through the alignment of your deepest values, daily actions, and contribution to the world.",
    eastern:"Confucianism · Taoism · Buddhist Dharma",
    western:"Logotherapy · Positive Psychology · PERMA · Ikigai",
    science:"Purpose measurably extends healthspan by up to 7 years (NIH, 2019)." },
];

export default function PillarsPage() {
  return (
    <>
      <Nav activePage="/pillars"/>

      {/* Hero */}
      <section className="relative overflow-hidden py-24 px-7 text-center"
        style={{ background:"linear-gradient(160deg,#162B20 0%,#0D1810 60%,#0A1810 100%)", minHeight:480 }}>
        <div className="max-w-[1280px] mx-auto relative">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-[7px] rounded-full"
            style={{ background:"rgba(201,168,76,0.1)", border:"1px solid rgba(201,168,76,0.25)" }}>
            <span className="font-label text-[10px] tracking-[.2em] uppercase" style={{ color:"#E0C06A" }}>The System</span>
          </div>
          <h1 className="font-display font-normal leading-[1.08] mb-4"
            style={{ fontSize:"clamp(44px,5vw,72px)", color:"rgba(244,239,228,0.96)" }}>
            The Five Pillars<br/>
            <em className="font-light not-italic" style={{ color:"#E0C06A" }}>of Harmonia</em>
          </h1>
          <p className="text-[17px] leading-[1.85] max-w-[520px] mx-auto"
            style={{ color:"rgba(244,239,228,0.55)" }}>
            One integrated framework. Five dimensions of life. A complete path from inner noise to mind-body harmony.
          </p>
          {/* Pillar tabs */}
          <div className="flex justify-center mt-12 border-b" style={{ borderColor:"rgba(255,255,255,0.1)" }}>
            {PILLARS.map(p=>(
              <a key={p.id} href={`/pillars/${p.slug}`}
                className="px-5 py-3.5 text-[13.5px] font-medium transition-colors hover:text-parchment"
                style={{ color:"rgba(244,239,228,0.45)", borderBottom:`2px solid transparent` }}>
                <span className="mr-1.5 text-[15px]">{p.icon}</span>{p.en}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Pillar cards grid */}
      <section className="py-16 px-7 bg-cream">
        <div className="max-w-[1280px] mx-auto grid grid-cols-5 gap-4">
          {PILLARS.map(p=>(
            <a key={p.id} href={`/pillars/${p.slug}`}
              className="bg-cream border border-border rounded-[20px] p-7 transition-all duration-300 hover:-translate-y-1.5 cursor-pointer group"
              style={{ borderTop:`3px solid transparent` }}
              <div className="text-[36px] mb-4" style={{ color:p.color }}>{p.icon}</div>
              <div className="font-label text-[9.5px] tracking-[.2em] uppercase mb-2" style={{ color:p.color }}>
                {String(p.id).padStart(2,"0")} · Pillar
              </div>
              <h2 className="font-display text-[20px] font-medium text-ink mb-1 leading-[1.25]">{p.en}</h2>
              <div className="text-[12px] text-muted mb-3">{p.cn}</div>
              <p className="text-[13px] text-muted leading-[1.7] mb-4">{p.tagline}</p>
              <div className="text-xs leading-[1.6] mb-4" style={{ color:`${p.color}bb` }}>{p.eastern}</div>
              <div className="text-[11.5px] text-dim italic leading-[1.6] border-t border-border pt-3">{p.science}</div>
              <div className="mt-4 text-[13px] font-medium transition-colors" style={{ color:p.color }}>Explore Pillar →</div>
            </a>
          ))}
        </div>
      </section>

      {/* Integration section */}
      <section className="py-24 px-7 text-center"
        style={{ background:"linear-gradient(160deg,#0D1810,#162B20)" }}>
        <div className="max-w-[700px] mx-auto">
          <h2 className="font-display font-normal leading-[1.12] mb-4"
            style={{ fontSize:"clamp(32px,4vw,54px)", color:"rgba(244,239,228,0.95)" }}>
            The Pillars Are Not Separate.<br/>
            <em className="font-light not-italic" style={{ color:"#E0C06A" }}>They Are One System.</em>
          </h2>
          <p className="text-[16px] leading-[1.8] mb-10" style={{ color:"rgba(244,239,228,0.5)" }}>
            Stillness feeds Energy. Clarity of Mind enables better Relationships. Purpose gives meaning to all of it.
          </p>
          <a href="/courses/free-starter-pack" className="btn-gold text-[15px]">
            Begin All Five Pillars — Free →
          </a>
        </div>
      </section>

      <Footer/>
    </>
  );
}
