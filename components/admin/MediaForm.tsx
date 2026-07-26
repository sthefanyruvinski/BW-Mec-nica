"use client";

import { useState } from "react";
import type { SiteContent } from "@/lib/content-schema";
import { saveMedia } from "@/lib/actions";
import { SaveButton } from "./SaveButton";

async function uploadFile(file: File): Promise<string> {
  const form = new FormData();
  form.append("file", file);
  const res = await fetch("/api/admin/upload", { method: "POST", body: form });
  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(body.error ?? "Falha no upload.");
  }
  const { url } = await res.json();
  return url as string;
}

export function MediaForm({ content }: { content: SiteContent }) {
  const [logoUrl, setLogoUrl] = useState(content.logoUrl);
  const [heroVideoUrl, setHeroVideoUrl] = useState(content.heroVideoUrl);
  const [uploading, setUploading] = useState<"logo" | "video" | null>(null);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "saving" | "saved" | "error">("idle");

  async function handleLogoUpload(file: File) {
    setUploading("logo");
    setUploadError(null);
    try {
      setLogoUrl(await uploadFile(file));
    } catch (err) {
      setUploadError(err instanceof Error ? err.message : "Falha no upload.");
    } finally {
      setUploading(null);
    }
  }

  async function handleVideoUpload(file: File) {
    setUploading("video");
    setUploadError(null);
    try {
      setHeroVideoUrl(await uploadFile(file));
    } catch (err) {
      setUploadError(err instanceof Error ? err.message : "Falha no upload.");
    } finally {
      setUploading(null);
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("saving");
    try {
      await saveMedia({ logoUrl, heroVideoUrl });
      setStatus("saved");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="rounded-lg border border-slate-200 bg-white p-5 space-y-3">
        <h3 className="font-semibold text-slate-800">Logo</h3>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoUrl} alt="Logo atual" className="h-16 w-auto" />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => e.target.files?.[0] && handleLogoUpload(e.target.files[0])}
          className="block text-sm"
        />
        {uploading === "logo" && <p className="text-sm text-slate-500">Enviando…</p>}
      </div>

      <div className="rounded-lg border border-slate-200 bg-white p-5 space-y-3">
        <h3 className="font-semibold text-slate-800">Vídeo do topo (herói)</h3>
        <video src={heroVideoUrl} className="h-32 w-auto rounded" muted controls />
        <input
          type="file"
          accept="video/*"
          onChange={(e) => e.target.files?.[0] && handleVideoUpload(e.target.files[0])}
          className="block text-sm"
        />
        {uploading === "video" && <p className="text-sm text-slate-500">Enviando…</p>}
      </div>

      {uploadError && <p className="text-sm text-red-600">{uploadError}</p>}

      <SaveButton status={status} />
    </form>
  );
}
