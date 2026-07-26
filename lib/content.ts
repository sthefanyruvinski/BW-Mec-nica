import { eq } from "drizzle-orm";
import { db } from "./db";
import { siteContent } from "./schema";
import { DEFAULT_CONTENT, siteContentSchema, type SiteContent } from "./content-schema";

export async function getContent(): Promise<SiteContent> {
  if (!db) {
    console.warn("DATABASE_URL não configurado — usando conteúdo padrão.");
    return DEFAULT_CONTENT;
  }
  try {
    const rows = await db.select().from(siteContent).where(eq(siteContent.id, 1)).limit(1);
    if (rows.length === 0) {
      return DEFAULT_CONTENT;
    }
    const parsed = siteContentSchema.safeParse(rows[0].data);
    return parsed.success ? parsed.data : DEFAULT_CONTENT;
  } catch (err) {
    console.error("Falha ao ler site_content do banco:", err);
    return DEFAULT_CONTENT;
  }
}

export async function updateContent(data: SiteContent): Promise<void> {
  if (!db) {
    throw new Error("DATABASE_URL não configurado — não é possível salvar.");
  }
  const validated = siteContentSchema.parse(data);
  await db
    .insert(siteContent)
    .values({ id: 1, data: validated })
    .onConflictDoUpdate({
      target: siteContent.id,
      set: { data: validated, updatedAt: new Date() },
    });
}

export async function updateContentSection<K extends keyof SiteContent>(
  key: K,
  value: SiteContent[K]
): Promise<void> {
  const current = await getContent();
  await updateContent({ ...current, [key]: value });
}
