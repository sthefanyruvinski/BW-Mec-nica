"use client";

import { useEffect, useState } from "react";
import type { SiteContent } from "@/lib/content-schema";

export function Header({ content }: { content: SiteContent }) {
  const waLink = `https://wa.me/${content.whatsappNumber}`;
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 80);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: scrolled ? "#0d1b3a" : "transparent",
        padding: "14px 24px",
        boxShadow: scrolled ? "0 2px 12px rgba(0,0,0,0.25)" : "none",
        transition: "background 0.3s ease, box-shadow 0.3s ease",
      }}
    >
      <div
        style={{
          maxWidth: 1440,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <img
          src={content.logoUrl}
          alt="BW Mecânica"
          style={{ height: 60, width: "auto", display: "block" }}
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
      </div>
    </header>
  );
}
