"use client";

import { useState } from "react";
import type { SiteContent } from "@/lib/content-schema";
import { saveLocation } from "@/lib/actions";
import { SaveButton } from "./SaveButton";
import { Field } from "./HeroForm";

export function LocationForm({ content }: { content: SiteContent }) {
  const [addressLine1, setAddressLine1] = useState(content.location.addressLine1);
  const [addressLine2, setAddressLine2] = useState(content.location.addressLine2);
  const [hoursWeekday, setHoursWeekday] = useState(content.location.hoursWeekday);
  const [hoursSaturday, setHoursSaturday] = useState(content.location.hoursSaturday);
  const [ctaTitle, setCtaTitle] = useState(content.cta.title);
  const [status, setStatus] = useState<"idle" | "saving" | "saved" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("saving");
    try {
      await saveLocation({
        location: { addressLine1, addressLine2, hoursWeekday, hoursSaturday },
        cta: { title: ctaTitle },
      });
      setStatus("saved");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <Field label="Endereço — linha 1" value={addressLine1} onChange={setAddressLine1} />
      <Field label="Endereço — linha 2 (cidade, UF, CEP)" value={addressLine2} onChange={setAddressLine2} />
      <div className="grid grid-cols-2 gap-4">
        <Field label="Horário — semana" value={hoursWeekday} onChange={setHoursWeekday} />
        <Field label="Horário — sábado" value={hoursSaturday} onChange={setHoursSaturday} />
      </div>
      <Field label="Título da faixa de chamada final (CTA)" value={ctaTitle} onChange={setCtaTitle} />

      <SaveButton status={status} />
    </form>
  );
}
