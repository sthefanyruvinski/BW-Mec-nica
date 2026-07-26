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
      <svg width="30" height="30" viewBox="0 0 32 32" fill="none">
        <path
          d="M16.004 4C9.377 4 4 9.373 4 15.998c0 2.114.555 4.176 1.61 6.002L4 28l6.15-1.578a12.02 12.02 0 0 0 5.854 1.51h.004c6.627 0 12.003-5.373 12.003-11.998C28 9.373 22.63 4 16.004 4Z"
          fill="#25D366"
        />
        <path
          d="M22.16 18.63c-.32-.16-1.9-.94-2.2-1.045-.296-.108-.51-.16-.727.16-.216.32-.833 1.044-1.02 1.26-.188.216-.376.24-.696.08-.32-.16-1.352-.498-2.575-1.588-.952-.85-1.594-1.9-1.782-2.22-.188-.32-.02-.494.14-.654.144-.144.32-.376.48-.564.16-.188.213-.32.32-.535.107-.216.053-.404-.027-.564-.08-.16-.727-1.752-.996-2.4-.263-.63-.53-.545-.727-.556-.188-.01-.404-.012-.62-.012-.216 0-.564.08-.86.404-.296.32-1.13 1.104-1.13 2.693 0 1.588 1.157 3.123 1.317 3.34.16.216 2.28 3.482 5.526 4.884.772.334 1.374.533 1.844.682.775.246 1.48.212 2.037.129.622-.093 1.9-.777 2.168-1.527.268-.75.268-1.393.188-1.527-.08-.134-.293-.214-.613-.374Z"
          fill="#fff"
        />
      </svg>
    </a>
  );
}
