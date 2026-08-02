import type { SiteContent } from "@/lib/content-schema";

export function Footer({ content }: { content: SiteContent }) {
  const year = new Date().getFullYear();

  return (
    <footer className="bw-footer" style={{ background: "#0a1530", padding: "36px 40px" }}>
      <div
        className="bw-footer-inner"
        style={{
          maxWidth: 1440,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 16,
        }}
      >
        <img src={content.logoUrl} alt="BW Mecânica" style={{ height: 44, width: "auto", opacity: 0.9 }} />
        <div style={{ color: "#7d8bab", fontSize: 13 }}>
          {content.location.addressLine1} · {content.location.addressLine2.split(",")[0]}
        </div>
        <div style={{ color: "#7d8bab", fontSize: 13 }}>© {year} BW Mecânica</div>
      </div>
    </footer>
  );
}
