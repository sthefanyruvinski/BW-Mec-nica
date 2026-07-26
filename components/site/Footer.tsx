import type { SiteContent } from "@/lib/content-schema";

export function Footer({ content }: { content: SiteContent }) {
  const year = new Date().getFullYear();

  return (
    <footer
      className="bw-footer"
      style={{
        background: "linear-gradient(to bottom, #0d1b3a 0%, #0a1530 60px, #0a1530 100%)",
        padding: "36px 40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 16,
      }}
    >
      <img src={content.logoUrl} alt="BW Mecânica" style={{ height: 100, width: "auto", opacity: 0.9 }} />
      <div style={{ color: "#7d8bab", fontSize: 13 }}>
        {content.location.addressLine1} · {content.location.addressLine2.split(",")[0]}
      </div>
      <div style={{ color: "#7d8bab", fontSize: 13 }}>© {year} BW Mecânica</div>
    </footer>
  );
}
