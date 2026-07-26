import type { SiteContent } from "@/lib/content-schema";

export function Cta({ content }: { content: SiteContent }) {
  const waLink = `https://wa.me/${content.whatsappNumber}`;

  return (
    <section
      className="bw-cta"
      style={{
        background: "linear-gradient(to bottom, #ffffff 0%, #0d1b3a 140px, #0d1b3a 100%)",
        padding: "70px 40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 24,
      }}
    >
      <h3
        className="bw-cta-title"
        style={{ color: "#fff", fontSize: 34, fontWeight: 800, margin: 0, textTransform: "none", maxWidth: 520 }}
      >
        {content.cta.title}
      </h3>
      <a
        href={waLink}
        className="bw-btn"
        style={{ background: "#2f7fc0", color: "#fff", fontWeight: 700, fontSize: 17, padding: "16px 32px", borderRadius: 6 }}
      >
        Agende pelo WhatsApp
      </a>
    </section>
  );
}
