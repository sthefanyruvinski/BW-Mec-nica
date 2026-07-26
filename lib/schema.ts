import { pgTable, integer, jsonb, timestamp } from "drizzle-orm/pg-core";
import type { SiteContent } from "./content-schema";

export const siteContent = pgTable("site_content", {
  id: integer("id").primaryKey().default(1),
  data: jsonb("data").$type<SiteContent>().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
});
