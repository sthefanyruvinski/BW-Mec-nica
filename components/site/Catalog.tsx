import type { SiteContent } from "@/lib/content-schema";
import { CategoryIcon } from "@/lib/icons";

export function Catalog({ content }: { content: SiteContent }) {
  return (
    <section
      id="oficina"
      className="bw-section"
      style={{ padding: "96px 40px", background: "linear-gradient(to bottom, #ffffff 0%, #0d1b3a 140px, #0d1b3a 100%)" }}
    >
      <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 56px" }}>
        <h2 style={{ fontSize: 15, color: "#4a9bdc", fontWeight: 700, letterSpacing: "0.12em", margin: "0 0 12px" }}>
          Catálogo completo
        </h2>
        <h3
          className="bw-section-title"
          style={{ fontSize: 42, color: "#fff", fontWeight: 800, margin: "0 0 16px", textTransform: "none" }}
        >
          Tudo o que fazemos pelo seu carro
        </h3>
        <p style={{ color: "#b7c4dc", fontSize: 16, lineHeight: 1.6, margin: 0 }}>
          Clique em uma categoria para ver os serviços
        </p>
      </div>
      <div className="bw-grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
        {content.catalog.map((category) => (
          <details
            key={category.id}
            name="catalogo"
            className="bw-catalog-card"
            style={{ background: "#132345", borderRadius: 10, padding: "22px 24px", color: "#dce6f5" }}
          >
            <summary
              style={{
                cursor: "pointer",
                fontWeight: 700,
                fontSize: 17,
                color: "#fff",
                fontFamily: "'Barlow Condensed',sans-serif",
                textTransform: "uppercase",
                letterSpacing: "0.02em",
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              <CategoryIcon icon={category.icon} size={20} />
              {category.name}
              <svg
                className="bw-chevron"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#4a9bdc"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ marginLeft: "auto" }}
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </summary>
            <ul style={{ margin: "16px 0 0", padding: 0, listStyle: "none", fontSize: 13.5, color: "#b7c4dc", lineHeight: 1.4 }}>
              {category.items.map((item, i) => (
                <li
                  key={i}
                  style={{ padding: "5px 0", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </details>
        ))}
      </div>
    </section>
  );
}
