import type { Metadata } from "next";
import { getContent } from "@/lib/content";
import { HomePage } from "@/components/site/HomePage";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const content = await getContent();
  return { title: content.siteTitle };
}

export default async function Page() {
  const content = await getContent();
  return <HomePage content={content} />;
}
