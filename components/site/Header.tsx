import type { SiteContent } from "@/lib/content-schema";

export function Header({ content }: { content: SiteContent }) {
  const waLink = `https://wa.me/${content.whatsappNumber}`;

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "#0d1b3a",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "14px 24px",
        boxShadow: "0 2px 12px rgba(0,0,0,0.25)",
      }}
    >
      <img
        src={content.logoUrl}
        alt="BW Mecânica"
        style={{ height: 64, width: "auto", display: "block" }}
      />
      <nav style={{ display: "flex", alignItems: "center", gap: 32 }}>
        <a
          href="#servicos"
          className="bw-nav-links"
          style={{ color: "#dce6f5", fontWeight: 600, fontSize: 15 }}
        >
          Serviços
        </a>
        <a
          href="#oficina"
          className="bw-nav-links"
          style={{ color: "#dce6f5", fontWeight: 600, fontSize: 15 }}
        >
          Todos os serviços
        </a>
        <a
          href="#local"
          className="bw-nav-links"
          style={{ color: "#dce6f5", fontWeight: 600, fontSize: 15 }}
        >
          Localização
        </a>
        <a
          href={waLink}
          className="bw-btn"
          style={{
            background: "#2f7fc0",
            color: "#fff",
            fontWeight: 700,
            fontSize: 15,
            padding: "10px 22px",
            borderRadius: 4,
            whiteSpace: "nowrap",
          }}
        >
          WhatsApp
        </a>
      </nav>
    </header>
  );
}
