"use client";

import { useState } from "react";
import type { CatalogCategory, SiteContent } from "@/lib/content-schema";
import { saveCatalog } from "@/lib/actions";
import { SaveButton } from "./SaveButton";
import { IconSelect } from "./IconSelect";
import { Field, TextAreaField } from "./HeroForm";

function slugify(name: string): string {
  const withoutDiacritics = name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");
  return withoutDiacritics.replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") || `categoria-${Date.now()}`;
}

export function CatalogForm({ content }: { content: SiteContent }) {
  const [catalog, setCatalog] = useState<CatalogCategory[]>(content.catalog);
  const [status, setStatus] = useState<"idle" | "saving" | "saved" | "error">("idle");

  function updateCategory(i: number, patch: Partial<CatalogCategory>) {
    setCatalog((prev) => prev.map((c, idx) => (idx === i ? { ...c, ...patch } : c)));
  }

  function addCategory() {
    setCatalog((prev) => [
      ...prev,
      { id: `categoria-${Date.now()}`, icon: "geral", name: "Nova categoria", items: ["Novo item"] },
    ]);
  }

  function removeCategory(i: number) {
    setCatalog((prev) => prev.filter((_, idx) => idx !== i));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("saving");
    try {
      await saveCatalog(catalog);
      setStatus("saved");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {catalog.map((category, i) => (
        <div key={category.id} className="rounded-lg border border-slate-200 bg-white p-5 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-slate-800">{category.name || `Categoria ${i + 1}`}</h3>
            <button
              type="button"
              onClick={() => removeCategory(i)}
              className="text-sm text-red-600 hover:underline"
            >
              Remover
            </button>
          </div>
          <IconSelect value={category.icon} onChange={(icon) => updateCategory(i, { icon })} />
          <Field
            label="Nome da categoria"
            value={category.name}
            onChange={(name) => updateCategory(i, { name, id: category.id || slugify(name) })}
          />
          <TextAreaField
            label="Serviços (um por linha)"
            value={category.items.join("\n")}
            onChange={(v) =>
              updateCategory(i, { items: v.split("\n").map((s) => s.trim()).filter(Boolean) })
            }
            rows={8}
          />
        </div>
      ))}

      <button
        type="button"
        onClick={addCategory}
        className="rounded-md border border-dashed border-slate-300 px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50"
      >
        + Adicionar categoria
      </button>

      <SaveButton status={status} />
    </form>
  );
}
