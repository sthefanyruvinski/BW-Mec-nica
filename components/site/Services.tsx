import type { SiteContent } from "@/lib/content-schema";
import { CategoryIcon } from "@/lib/icons";

export function Services({ content }: { content: SiteContent }) {
  const waLink = `https://wa.me/${content.whatsappNumber}`;

  return (
    <section
      id="servicos"
      className="bw-section"
      style={{ padding: "96px 40px", background: "linear-gradient(to bottom, #0d1b3a 0%, #ffffff 140px, #ffffff 100%)" }}
    >
      <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 56px" }}>
        <h2 style={{ fontSize: 15, color: "#2f7fc0", fontWeight: 700, letterSpacing: "0.12em", margin: "0 0 12px" }}>
          O que fazemos
        </h2>
        <h3
          className="bw-section-title"
          style={{ fontSize: 42, color: "#0d1b3a", fontWeight: 800, margin: 0, textTransform: "none" }}
        >
          Resolvemos o que está incomodando seu carro
        </h3>
      </div>
      <div className="bw-grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 28 }}>
        {content.services.map((service, i) => (
          <div
            key={i}
            className="bw-card"
            style={{ border: "1px solid #e6eaf1", borderRadius: 10, padding: "36px 34px", background: "#fbfcfe" }}
          >
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: 10,
                background: "#0d1b3a",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 18,
              }}
            >
              <CategoryIcon icon={service.icon} size={24} />
            </div>
            <h4
              style={{
                fontSize: 24,
                color: "#0d1b3a",
                fontWeight: 800,
                margin: "0 0 12px",
                textTransform: "none",
              }}
            >
              {service.title}
            </h4>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: "#5a6479", margin: "0 0 20px" }}>
              {service.description}
            </p>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: "0 0 22px",
                display: "flex",
                flexDirection: "column",
                gap: 9,
              }}
            >
              {service.bullets.map((bullet, j) => (
                <li
                  key={j}
                  style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14.5, color: "#14213d" }}
                >
                  <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#2f7fc0", flex: "none" }} />
                  {bullet}
                </li>
              ))}
            </ul>
            <a href={waLink} className="bw-link-arrow" style={{ color: "#2f7fc0", fontWeight: 700, fontSize: 14.5 }}>
              {service.ctaLabel} <span className="bw-arrow">→</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
