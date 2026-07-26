import type { SiteContent } from "@/lib/content-schema";

export function Location({ content }: { content: SiteContent }) {
  const waLink = `https://wa.me/${content.whatsappNumber}`;
  const telLink = `tel:+${content.whatsappNumber}`;
  const query = encodeURIComponent(`${content.location.addressLine1}, ${content.location.addressLine2}`);
  const mapSrc = `https://maps.google.com/maps?q=${query}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

  return (
    <section
      id="local"
      className="bw-local-grid bw-section"
      style={{
        padding: "96px 40px",
        background: "linear-gradient(to bottom, #0d1b3a 0%, #ffffff 90px, #ffffff 100%)",
        display: "grid",
        gridTemplateColumns: "0.9fr 1.1fr",
        gap: 48,
        alignItems: "center",
      }}
    >
      <div>
        <h2 style={{ fontSize: 15, color: "#2f7fc0", fontWeight: 700, letterSpacing: "0.12em", margin: "0 0 12px" }}>
          Onde estamos
        </h2>
        <h3
          className="bw-section-title"
          style={{ fontSize: 38, color: "#0d1b3a", fontWeight: 800, margin: "0 0 26px", textTransform: "none" }}
        >
          Localização e horários
        </h3>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div>
            <div style={{ fontWeight: 700, color: "#0d1b3a", fontSize: 15, marginBottom: 4 }}>Endereço</div>
            <div style={{ color: "#5a6479", fontSize: 16, lineHeight: 1.5 }}>
              {content.location.addressLine1}
              <br />
              {content.location.addressLine2}
            </div>
          </div>
          <div>
            <div style={{ fontWeight: 700, color: "#0d1b3a", fontSize: 15, marginBottom: 4 }}>Horário</div>
            <div style={{ color: "#5a6479", fontSize: 16, lineHeight: 1.5 }}>
              {content.location.hoursWeekday}
              <br />
              {content.location.hoursSaturday}
            </div>
          </div>
          <div>
            <div style={{ fontWeight: 700, color: "#0d1b3a", fontSize: 15, marginBottom: 4 }}>Contato</div>
            <div style={{ color: "#5a6479", fontSize: 16, lineHeight: 1.5 }}>
              <a href={telLink}>{content.phoneDisplay}</a>
            </div>
          </div>
          <a
            href={waLink}
            className="bw-btn"
            style={{
              marginTop: 8,
              background: "#2f7fc0",
              color: "#fff",
              fontWeight: 700,
              fontSize: 16,
              padding: "14px 26px",
              borderRadius: 6,
              display: "inline-flex",
              width: "fit-content",
            }}
          >
            Chamar no WhatsApp
          </a>
        </div>
      </div>
      <div style={{ width: "100%", height: 380, borderRadius: 10, overflow: "hidden", border: "1px solid #e6eaf1" }}>
        <iframe
          title="Mapa BW Mecânica"
          width="100%"
          height="100%"
          style={{ border: 0, display: "block" }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src={mapSrc}
        />
      </div>
    </section>
  );
}
