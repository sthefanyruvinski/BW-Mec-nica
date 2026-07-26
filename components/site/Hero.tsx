import type { SiteContent } from "@/lib/content-schema";

export function Hero({ content }: { content: SiteContent }) {
  const waLink = `https://wa.me/${content.whatsappNumber}`;
  const telLink = `tel:+${content.whatsappNumber}`;

  return (
    <section className="bw-hero" style={{ position: "relative", height: 640, overflow: "hidden" }}>
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
        src={content.heroVideoUrl}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(90deg,rgba(9,18,45,0.92) 0%,rgba(9,18,45,0.72) 45%,rgba(9,18,45,0.35) 100%)",
        }}
      />
      <div
        className="bw-hero-inner"
        style={{
          position: "relative",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 40px",
          maxWidth: 640,
          animation: "bwFadeInUp 0.8s ease both",
        }}
      >
        <div
          style={{
            display: "inline-block",
            background: "rgba(47,127,192,0.18)",
            border: "1px solid rgba(47,127,192,0.5)",
            color: "#7fb8e6",
            fontWeight: 600,
            fontSize: 13,
            letterSpacing: "0.08em",
            padding: "6px 14px",
            borderRadius: 100,
            textTransform: "uppercase",
            marginBottom: 24,
            width: "fit-content",
          }}
        >
          {content.hero.badge}
        </div>
        <h1
          className="bw-hero-h1"
          style={{ color: "#fff", fontSize: 64, lineHeight: 1, fontWeight: 800, margin: "0 0 22px" }}
        >
          {content.hero.titleMain} <span style={{ color: "#4a9bdc" }}>{content.hero.titleHighlight}</span>
        </h1>
        <p
          className="bw-hero-p"
          style={{ color: "#b7c4dc", fontSize: 19, lineHeight: 1.6, maxWidth: 520, margin: "0 0 36px" }}
        >
          {content.hero.subtitle}
        </p>
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          <a
            href={waLink}
            className="bw-btn"
            style={{
              background: "#2f7fc0",
              color: "#fff",
              fontWeight: 700,
              fontSize: 17,
              padding: "16px 30px",
              borderRadius: 6,
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            Agende pelo WhatsApp
          </a>
          <a
            href={telLink}
            className="bw-btn"
            style={{
              border: "1px solid rgba(255,255,255,0.3)",
              color: "#fff",
              fontWeight: 700,
              fontSize: 17,
              padding: "16px 30px",
              borderRadius: 6,
            }}
          >
            {content.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
