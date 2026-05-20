import type { Metadata } from "next";
import Nav    from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import { buildMetadata } from "@/lib/seo";
import Divider from "@/components/ui/Divider";
import Lotus   from "@/components/ui/Lotus";
import StarRow from "@/components/ui/StarRow";

export const metadata: Metadata = buildMetadata({
  title: "Harmonia | East-West Life Wisdom | Mind-Body Harmony",
  path:  "/",
});

const PILLARS = [
  { id:1, icon:"◯", en:"Awareness & Stillness",     cn:"觉知与静心", color:"#7B9EC4" },
  { id:2, icon:"✦", en:"Energy & Vitality",          cn:"能量与活力", color:"#C9A84C" },
  { id:3, icon:"⬡", en:"Mind & Emotion",             cn:"心智与情绪", color:"#9B6BAF" },
  { id:4, icon:"❋", en:"Relationships & Connection", cn:"关系与连接", color:"#C97A7A" },
  { id:5, icon:"◈", en:"Meaning & Purpose",          cn:"意义与使命", color:"#4A8C6B" },
];

const TESTIMONIALS = [
  { name:"Sarah K.", loc:"London, UK",    pillar:"Awareness & Stillness", stars:5, quote:"The mindfulness module changed how I wake up every morning. I used to dread the day. Now I begin it with intention." },
  { name:"Marcus T.", loc:"New York, USA", pillar:"Mind & Emotion",       stars:5, quote:"I've done therapy, read every self-help book. Harmonia was the first system that actually explained why I kept repeating patterns." },
  { name:"Yuki M.",  loc:"Singapore",     pillar:"Energy & Vitality",     stars:5, quote:"The TCM energy module, combined with the sleep protocols, gave me my life back in three weeks." },
];

export default function HomePage() {
  return (
    <>
      <Nav activePage="/" />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden flex items-center"
        style={{ background:"linear-gradient(160deg,#162B20 0%,#0D1810 55%,#0A1810 100%)", minHeight:"92vh", padding:"80px 28px" }}>
        {/* BG geometry */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.07]">
          <svg className="absolute right-[-4%] top-[5%] animate-spin-slow" width="580" height="580" viewBox="0 0 580 580" fill="none">
            {[268,212,156,100].map(r=><circle key={r} cx="290" cy="290" r={r} stroke="rgba(201,168,76,1)" strokeWidth="1.2"/>)}
            {[0,30,60,90,120,150].map(a=><line key={a} x1="290" y1="22" x2="290" y2="558" stroke="rgba(201,168,76,1)" strokeWidth=".8" transform={`rotate(${a} 290 290)`}/>)}
          </svg>
        </div>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute" style={{ left:"34%",bottom:0,width:320,height:320,borderRadius:"50%",background:"radial-gradient(circle,rgba(45,106,79,0.18),transparent 70%)" }}/>
        </div>

        <div className="max-w-[1280px] mx-auto w-full relative grid grid-cols-2 gap-16 items-center">
          {/* Copy */}
          <div>
            <div className="animate-fade-up inline-flex items-center gap-2 mb-6 px-4 py-[7px] rounded-full"
              style={{ background:"rgba(201,168,76,0.1)", border:"1px solid rgba(201,168,76,0.25)" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-gold block"/>
              <span className="font-label text-[10px] tracking-[.2em] uppercase" style={{ color:"#E0C06A" }}>The Life Wisdom System</span>
            </div>
            <h1 className="animate-fade-up stagger-1 font-display font-normal leading-[1.06] mb-5"
              style={{ fontSize:"clamp(46px,5.2vw,78px)", color:"rgba(244,239,228,0.97)" }}>
              Where Ancient<br/>
              Wisdom Meets<br/>
              <em className="font-light not-italic" style={{ color:"#E0C06A" }}>Modern Science</em>
            </h1>
            <p className="animate-fade-up stagger-2 text-[17px] leading-[1.85] mb-9 max-w-[440px]"
              style={{ color:"rgba(244,239,228,0.55)" }}>
              Harmonia fuses 5,000 years of Eastern wisdom — I Ching, Zen, TCM, Feng Shui — with neuroscience, NLP, and modern psychology into one proven, practice-first system for mind-body harmony.
            </p>
            <div className="animate-fade-up stagger-3 flex gap-3.5 flex-wrap mb-12">
              <a href="/courses/free-starter-pack" className="btn-gold">Begin Free Today →</a>
              <a href="/pillars" className="btn-ghost">Explore the Five Pillars</a>
            </div>
            {/* Stats */}
            <div className="animate-fade-up stagger-4 flex gap-10">
              {[["60,000+","Practitioners"],["5","Integrated Pillars"],["4.9★","Average Rating"]].map(([v,l])=>(
                <div key={l}>
                  <div className="font-display text-[28px] font-medium leading-none" style={{ color:"#E0C06A" }}>{v}</div>
                  <div className="text-[12px] mt-1 tracking-[.04em]" style={{ color:"rgba(244,239,228,0.45)" }}>{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="flex justify-center items-center">
            <div className="relative" style={{ width:420,height:480 }}>
              <div className="absolute inset-0 rounded-[24px] flex flex-col items-center justify-center gap-5"
                style={{ background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.08)" }}>
                <div className="animate-float">
                  <Lotus size={64} color="#C9A84C"/>
                </div>
                <div className="text-center">
                  <div className="font-display text-[32px] font-normal leading-[1.2]" style={{ color:"rgba(244,239,228,0.92)" }}>寰宇心流</div>
                  <div className="text-[12px] tracking-[.18em] uppercase mt-1.5" style={{ color:"rgba(201,168,76,0.7)" }}>Harmonia</div>
                </div>
                <div className="flex gap-4">
                  {PILLARS.map(p=>(
                    <div key={p.id} className="flex flex-col items-center gap-1">
                      <div className="w-9 h-9 rounded-[10px] flex items-center justify-center text-base"
                        style={{ background:`${p.color}22`,border:`1px solid ${p.color}44` }}>{p.icon}</div>
                      <div className="text-[8px]" style={{ color:"rgba(244,239,228,0.4)" }}>0{p.id}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <div className="bg-deep py-4 overflow-hidden" style={{ borderTop:"1px solid rgba(255,255,255,0.04)" }}>
        <div className="flex gap-16 animate-marquee whitespace-nowrap" style={{ width:"max-content" }}>
          {["✦  Rooted in 5,000-Year Eastern Tradition","◯  Validated by Modern Neuroscience","⬡  Practice-First, Results Measurable","❋  Global Community · 60,000+ Practitioners","◈  Ethically Designed. Never Dogmatic."].concat(
           ["✦  Rooted in 5,000-Year Eastern Tradition","◯  Validated by Modern Neuroscience","⬡  Practice-First, Results Measurable","❋  Global Community · 60,000+ Practitioners","◈  Ethically Designed. Never Dogmatic."]).map((t,i)=>(
            <span key={i} className="text-[13px] tracking-[.06em] shrink-0"
              style={{ color:"rgba(240,223,160,0.65)" }}>{t}</span>
          ))}
        </div>
      </div>

      {/* ── FIVE PILLARS ── */}
      <section className="py-24 px-7 bg-cream">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-14">
            <span className="eyebrow text-jade mb-3">The System</span>
            <h2 className="font-display font-normal leading-[1.12] mb-3.5"
              style={{ fontSize:"clamp(34px,4vw,54px)" }}>
              One Framework.<br/>
              <em className="not-italic" style={{ color:"#C9A84C" }}>Five Dimensions.</em> Complete Transformation.
            </h2>
            <Divider color="#C9A84C"/>
          </div>
          <div className="grid grid-cols-5 gap-4">
            {PILLARS.map(p=>(
              <a key={p.id} href={`/pillars/${p.id}`}
                className="bg-cream border border-border rounded-[20px] p-7 transition-all duration-300 cursor-pointer group hover:-translate-y-1.5"
                style={{ borderColor:"var(--border)" }}>
                <div className="text-[32px] mb-4" style={{ color:p.color }}>{p.icon}</div>
                <div className="font-label text-[9.5px] tracking-[.2em] uppercase mb-2" style={{ color:p.color }}>
                  {String(p.id).padStart(2,"0")} · Pillar
                </div>
                <h3 className="font-display text-[19px] font-medium text-ink mb-1.5 leading-[1.25]">{p.en}</h3>
                <div className="text-[12px] text-muted tracking-[.04em] mb-3">{p.cn}</div>
                <div className="text-[13px] font-medium transition-colors group-hover:opacity-90" style={{ color:p.color }}>Explore →</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-24 px-7 bg-parchment">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-14">
            <span className="eyebrow text-sage mb-3">From Our Community</span>
            <h2 className="font-display font-normal text-ink mb-3.5" style={{ fontSize:"clamp(32px,3.5vw,50px)" }}>
              Real Lives. <em className="not-italic text-jade">Real Shifts.</em>
            </h2>
            <Divider color="#74A98B"/>
          </div>
          <div className="grid grid-cols-3 gap-6">
            {TESTIMONIALS.map(t=>(
              <div key={t.name} className="bg-cream border border-border rounded-[20px] p-9 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="flex justify-between items-start mb-5">
                  <StarRow n={t.stars}/>
                  <span className="text-[10.5px] font-semibold text-jade bg-jade/10 border border-jade/25 px-2.5 py-1 rounded-full tracking-[.04em]">
                    {t.pillar}
                  </span>
                </div>
                <p className="font-display text-[18px] text-brown italic leading-[1.7] mb-6">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-[17px] font-display font-semibold"
                    style={{ background:"linear-gradient(135deg,#2D6A4F,#74A98B)" }}>
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="text-[14px] font-semibold text-ink">{t.name}</div>
                    <div className="text-[12px] text-muted">{t.loc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 px-7 text-center"
        style={{ background:"linear-gradient(160deg,#0D1810,#162B20,#0B1C14)" }}>
        <div className="max-w-[640px] mx-auto">
          <Lotus size={48} color="#C9A84C"/>
          <h2 className="font-display font-normal leading-[1.12] mt-5 mb-3.5"
            style={{ fontSize:"clamp(32px,4vw,52px)", color:"rgba(244,239,228,0.95)" }}>
            Begin Your Path to<br/>
            <em className="font-light not-italic" style={{ color:"#E0C06A" }}>Mind-Body Harmony</em>
          </h2>
          <p className="text-[16px] leading-[1.85] mb-10 max-w-[480px] mx-auto"
            style={{ color:"rgba(244,239,228,0.5)" }}>
            7 days. 5 practices. One from each pillar. Free — no card required.
          </p>
          <div className="flex gap-3.5 justify-center">
            <a href="/courses/free-starter-pack" className="btn-gold text-[15px]">Claim Free Access →</a>
            <a href="/pillars" className="btn-ghost text-[15px]">Explore the Five Pillars</a>
          </div>
        </div>
      </section>

      <Footer/>
    </>
  );
}
