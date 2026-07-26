"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";
import { auth } from "@/lib/auth";
import { updateContentSection } from "@/lib/content";
import { siteContentSchema, serviceCardSchema, catalogCategorySchema } from "@/lib/content-schema";

async function requireAdmin() {
  const session = await auth();
  if (!session) {
    throw new Error("Não autenticado.");
  }
}

const heroSectionSchema = z.object({
  siteTitle: siteContentSchema.shape.siteTitle,
  whatsappNumber: siteContentSchema.shape.whatsappNumber,
  phoneDisplay: siteContentSchema.shape.phoneDisplay,
  hero: siteContentSchema.shape.hero,
});

export async function saveHero(data: z.infer<typeof heroSectionSchema>) {
  await requireAdmin();
  const validated = heroSectionSchema.parse(data);
  await updateContentSection("siteTitle", validated.siteTitle);
  await updateContentSection("whatsappNumber", validated.whatsappNumber);
  await updateContentSection("phoneDisplay", validated.phoneDisplay);
  await updateContentSection("hero", validated.hero);
  revalidatePath("/");
}

export async function saveTrustBullets(data: string[]) {
  await requireAdmin();
  const validated = z.array(z.string().min(1)).min(1).parse(data);
  await updateContentSection("trustBullets", validated);
  revalidatePath("/");
}

export async function saveServices(data: unknown) {
  await requireAdmin();
  const validated = z.array(serviceCardSchema).min(1).parse(data);
  await updateContentSection("services", validated);
  revalidatePath("/");
}

export async function saveCatalog(data: unknown) {
  await requireAdmin();
  const validated = z.array(catalogCategorySchema).min(1).parse(data);
  await updateContentSection("catalog", validated);
  revalidatePath("/");
}

const locationSectionSchema = z.object({
  location: siteContentSchema.shape.location,
  cta: siteContentSchema.shape.cta,
});

export async function saveLocation(data: z.infer<typeof locationSectionSchema>) {
  await requireAdmin();
  const validated = locationSectionSchema.parse(data);
  await updateContentSection("location", validated.location);
  await updateContentSection("cta", validated.cta);
  revalidatePath("/");
}

const mediaSectionSchema = z.object({
  logoUrl: siteContentSchema.shape.logoUrl,
  heroVideoUrl: siteContentSchema.shape.heroVideoUrl,
});

export async function saveMedia(data: z.infer<typeof mediaSectionSchema>) {
  await requireAdmin();
  const validated = mediaSectionSchema.parse(data);
  await updateContentSection("logoUrl", validated.logoUrl);
  await updateContentSection("heroVideoUrl", validated.heroVideoUrl);
  revalidatePath("/");
}
