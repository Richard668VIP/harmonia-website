import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";

export default function PillarsPage() {
  const pillars = [
    { id: 1, icon: "O", en: "Awareness & Stillness", cn: "觉知与静心", color: "#7B9EC4", tagline: "Clear the noise. Return to presence." },
    { id: 2, icon: "*", en: "Energy & Vitality", cn: "能量与活力", color: "#C9A84C", tagline: "Your body is a living energy system." },
    { id: 3, icon: "#", en: "Mind & Emotion", cn: "心智与情绪", color: "#9B6BAF", tagline: "Your thoughts are not facts." },
    { id: 4, icon: "+", en: "Relationships & Connection", cn: "关系与连接", color: "#C97A7A", tagline: "Every relationship is an energy exchange." },
    { id: 5, icon: "@", en: "Meaning & Purpose", cn: "意义与使命", color: "#4A8C6B", tagline: "Meaning is not found. It is built." },
  ];

  return (
    <>
      <Nav activePage="/pillars" />

      <section style={{ background: "linear-gradient(160deg,#162B20,#0D1810)", padding: "80px 28px", textAlign: "center" }}>
        <h1 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(40px,5vw,68px)", color: "rgba(244,239,228,0.95)", fontWeight: 400, marginBottom: 16 }}>
          The Five Pillars of Harmonia
        </h1>
        <p style={{ fontSize: 17, color: "rgba(244,239,228,0.55)", maxWidth: 520, margin: "0 auto" }}>
          One integrated framework. Five dimensions of life.
        </p>
      </section>

      <section style={{ padding: "64px 28px", background: "#FAF7F2" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 20 }}>
          {pillars.map((p) => (
            <a key={p.id} href={"/pillars/" + p.id}
              style={{ background: "#FAF7F2", border: "1px solid #D5E2D8", borderRadius: 20, padding: 28, display: "block", textDecoration: "none" }}>
              <div style={{ fontSize: 36, color: p.color, marginBottom: 16 }}>{p.icon}</div>
              <div style={{ fontFamily: "Georgia,serif", fontSize: 20, color: "#181E16", marginBottom: 6 }}>{p.en}</div>
              <div style={{ fontSize: 12, color: "#6A7A6D", marginBottom: 12 }}>{p.cn}</div>
              <div style={{ fontSize: 13, color: "#6A7A6D", lineHeight: 1.7 }}>{p.tagline}</div>
            </a>
          ))}
        </div>
      </section>

      <section style={{ background: "linear-gradient(160deg,#0D1810,#162B20)", padding: "80px 28px", textAlign: "center" }}>
        <h2 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(28px,4vw,50px)", color: "rgba(244,239,228,0.95)", fontWeight: 400, marginBottom: 24 }}>
          Begin All Five Pillars Free
        </h2>
        <a href="/courses/free-starter-pack"
          style={{ background: "linear-gradient(135deg,#C9A84C,#E0C06A)", color: "#0D1810", padding: "14px 32px", borderRadius: 8, fontWeight: 600, fontSize: 15, textDecoration: "none", display: "inline-block" }}>
          Start Free Today
        </a>
      </section>

      <Footer />
    </>
  );
}
