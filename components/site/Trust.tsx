import type { SiteContent } from "@/lib/content-schema";

export function Trust({ content }: { content: SiteContent }) {
  return (
    <section
      className="bw-trust"
      style={{
        padding: "28px 40px",
        background: "#0d1b3a",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        display: "flex",
        justifyContent: "center",
        gap: 56,
        flexWrap: "wrap",
      }}
    >
      {content.trustBullets.map((bullet, i) => (
        <div
          key={i}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            color: "#dce6f5",
            fontSize: 14,
            fontWeight: 600,
          }}
        >
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#4a9bdc" }} />
          {bullet}
        </div>
      ))}
    </section>
  );
}
