"use client";

import { useState } from "react";
import type { ServiceCard, SiteContent } from "@/lib/content-schema";
import { saveServices } from "@/lib/actions";
import { SaveButton } from "./SaveButton";
import { IconSelect } from "./IconSelect";
import { Field, TextAreaField } from "./HeroForm";

export function ServicesForm({ content }: { content: SiteContent }) {
  const [services, setServices] = useState<ServiceCard[]>(content.services);
  const [status, setStatus] = useState<"idle" | "saving" | "saved" | "error">("idle");

  function updateService(i: number, patch: Partial<ServiceCard>) {
    setServices((prev) => prev.map((s, idx) => (idx === i ? { ...s, ...patch } : s)));
  }

  function addService() {
    setServices((prev) => [
      ...prev,
      { icon: "geral", title: "", description: "", bullets: [""], ctaLabel: "Falar" },
    ]);
  }

  function removeService(i: number) {
    setServices((prev) => prev.filter((_, idx) => idx !== i));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("saving");
    try {
      await saveServices(services);
      setStatus("saved");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {services.map((service, i) => (
        <div key={i} className="rounded-lg border border-slate-200 bg-white p-5 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-slate-800">Card {i + 1}</h3>
            <button
              type="button"
              onClick={() => removeService(i)}
              className="text-sm text-red-600 hover:underline"
            >
              Remover
            </button>
          </div>
          <IconSelect value={service.icon} onChange={(icon) => updateService(i, { icon })} />
          <Field label="Título" value={service.title} onChange={(v) => updateService(i, { title: v })} />
          <TextAreaField
            label="Descrição"
            value={service.description}
            onChange={(v) => updateService(i, { description: v })}
            rows={2}
          />
          <TextAreaField
            label="Itens (um por linha)"
            value={service.bullets.join("\n")}
            onChange={(v) =>
              updateService(i, { bullets: v.split("\n").map((s) => s.trim()).filter(Boolean) })
            }
            rows={3}
          />
          <Field
            label="Texto do link (ex: Falar sobre suspensão)"
            value={service.ctaLabel}
            onChange={(v) => updateService(i, { ctaLabel: v })}
          />
        </div>
      ))}

      <button
        type="button"
        onClick={addService}
        className="rounded-md border border-dashed border-slate-300 px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50"
      >
        + Adicionar card
      </button>

      <SaveButton status={status} />
    </form>
  );
}
