"use client";

import { useState } from "react";
import type { SiteContent } from "@/lib/content-schema";
import { HeroForm } from "./HeroForm";
import { ServicesForm } from "./ServicesForm";
import { CatalogForm } from "./CatalogForm";
import { LocationForm } from "./LocationForm";
import { MediaForm } from "./MediaForm";

const TABS = [
  { key: "hero", label: "Início" },
  { key: "services", label: "Serviços" },
  { key: "catalog", label: "Catálogo" },
  { key: "location", label: "Localização" },
  { key: "media", label: "Mídia" },
] as const;

type TabKey = (typeof TABS)[number]["key"];

export function AdminDashboard({ content }: { content: SiteContent }) {
  const [tab, setTab] = useState<TabKey>("hero");

  return (
    <div>
      <nav className="mb-6 flex gap-1 border-b border-slate-200">
        {TABS.map((t) => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            className={`px-4 py-2 text-sm font-medium border-b-2 -mb-px ${
              tab === t.key
                ? "border-slate-900 text-slate-900"
                : "border-transparent text-slate-500 hover:text-slate-800"
            }`}
          >
            {t.label}
          </button>
        ))}
      </nav>

      <div className={tab === "hero" ? "" : "hidden"}>
        <HeroForm content={content} />
      </div>
      <div className={tab === "services" ? "" : "hidden"}>
        <ServicesForm content={content} />
      </div>
      <div className={tab === "catalog" ? "" : "hidden"}>
        <CatalogForm content={content} />
      </div>
      <div className={tab === "location" ? "" : "hidden"}>
        <LocationForm content={content} />
      </div>
      <div className={tab === "media" ? "" : "hidden"}>
        <MediaForm content={content} />
      </div>
    </div>
  );
}
