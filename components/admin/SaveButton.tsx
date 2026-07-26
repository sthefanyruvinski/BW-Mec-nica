export function SaveButton({ status }: { status: "idle" | "saving" | "saved" | "error" }) {
  return (
    <div className="flex items-center gap-3 pt-2">
      <button
        type="submit"
        disabled={status === "saving"}
        className="rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800 disabled:opacity-60"
      >
        {status === "saving" ? "Salvando…" : "Salvar"}
      </button>
      {status === "saved" && <span className="text-sm text-emerald-600">Salvo com sucesso.</span>}
      {status === "error" && <span className="text-sm text-red-600">Erro ao salvar. Tente de novo.</span>}
    </div>
  );
}
