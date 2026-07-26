import "dotenv/config";
import { db } from "../lib/db";
import { siteContent } from "../lib/schema";
import { DEFAULT_CONTENT } from "../lib/content-schema";
import { eq } from "drizzle-orm";

async function main() {
  if (!db) {
    throw new Error("DATABASE_URL não configurado. Crie um .env.local com a connection string do banco.");
  }
  const existing = await db.select().from(siteContent).where(eq(siteContent.id, 1)).limit(1);
  if (existing.length > 0) {
    console.log("site_content já tem uma linha — nada a fazer.");
    return;
  }
  await db.insert(siteContent).values({ id: 1, data: DEFAULT_CONTENT });
  console.log("site_content semeado com o conteúdo atual do site.");
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
