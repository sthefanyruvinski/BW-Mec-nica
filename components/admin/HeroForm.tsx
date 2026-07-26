"use client";

import { useState } from "react";
import type { SiteContent } from "@/lib/content-schema";
import { saveHero, saveTrustBullets } from "@/lib/actions";
import { SaveButton } from "./SaveButton";

export function HeroForm({ content }: { content: SiteContent }) {
  const [siteTitle, setSiteTitle] = useState(content.siteTitle);
  const [whatsappNumber, setWhatsappNumber] = useState(content.whatsappNumber);
  const [phoneDisplay, setPhoneDisplay] = useState(content.phoneDisplay);
  const [badge, setBadge] = useState(content.hero.badge);
  const [titleMain, setTitleMain] = useState(content.hero.titleMain);
  const [titleHighlight, setTitleHighlight] = useState(content.hero.titleHighlight);
  const [subtitle, setSubtitle] = useState(content.hero.subtitle);
  const [trustBullets, setTrustBullets] = useState(content.trustBullets.join("\n"));

  const [status, setStatus] = useState<"idle" | "saving" | "saved" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("saving");
    try {
      await saveHero({
        siteTitle,
        whatsappNumber,
        phoneDisplay,
        hero: { badge, titleMain, titleHighlight, subtitle },
      });
      await saveTrustBullets(
        trustBullets
          .split("\n")
          .map((s) => s.trim())
          .filter(Boolean)
      );
      setStatus("saved");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <Field label="Título da aba do navegador" value={siteTitle} onChange={setSiteTitle} />
      <div className="grid grid-cols-2 gap-4">
        <Field
          label="Número do WhatsApp (só dígitos, com DDI 55)"
          value={whatsappNumber}
          onChange={setWhatsappNumber}
        />
        <Field label="Telefone exibido no site" value={phoneDisplay} onChange={setPhoneDisplay} />
      </div>
      <Field label="Selo acima do título (ex: Terra Roxa · PR)" value={badge} onChange={setBadge} />
      <div className="grid grid-cols-2 gap-4">
        <Field label="Título principal" value={titleMain} onChange={setTitleMain} />
        <Field label="Título em destaque (azul)" value={titleHighlight} onChange={setTitleHighlight} />
      </div>
      <TextAreaField label="Subtítulo" value={subtitle} onChange={setSubtitle} rows={3} />
      <TextAreaField
        label="Selos de confiança (um por linha)"
        value={trustBullets}
        onChange={setTrustBullets}
        rows={3}
      />

      <SaveButton status={status} />
    </form>
  );
}

export function Field({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <label className="block">
      <span className="mb-1 block text-sm font-medium text-slate-700">{label}</span>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
      />
    </label>
  );
}

export function TextAreaField({
  label,
  value,
  onChange,
  rows = 4,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  rows?: number;
}) {
  return (
    <label className="block">
      <span className="mb-1 block text-sm font-medium text-slate-700">{label}</span>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={rows}
        className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
      />
    </label>
  );
}
