import type { SiteContent } from "@/lib/content-schema";

export function WhatsAppFab({ content }: { content: SiteContent }) {
  const waLink = `https://wa.me/${content.whatsappNumber}`;

  return (
    <a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="bw-btn"
      style={{
        position: "fixed",
        right: 24,
        bottom: 24,
        zIndex: 60,
        width: 60,
        height: 60,
        borderRadius: "50%",
        background: "#25D366",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 6px 20px rgba(0,0,0,0.3)",
      }}
    >
      <svg width="30" height="30" viewBox="0 0 34 34" fill="none">
        <circle cx="17" cy="15" r="11.5" stroke="#fff" strokeWidth="2.2" />
        <path d="M9 25 L6.5 30 L13.5 26.5 Z" fill="#fff" />
        <path
          transform="translate(8.2,6.2) scale(0.85)"
          d="M2.003 5.884L2 5.882v-.002c0-.995.806-1.8 1.8-1.8h2.153a1.8 1.8 0 011.79 1.593l.353 2.94a1.8 1.8 0 01-.5 1.549l-1.226 1.226a13.5 13.5 0 006.153 6.153l1.226-1.226a1.8 1.8 0 011.549-.5l2.94.353a1.8 1.8 0 011.593 1.79v2.153a1.8 1.8 0 01-1.8 1.8h-.002C9.61 21.997 2.003 14.39 2.003 5.884z"
          fill="#fff"
        />
      </svg>
    </a>
  );
}
