import { getContent } from "@/lib/content";
import { AdminDashboard } from "@/components/admin/AdminDashboard";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const content = await getContent();
  return <AdminDashboard content={content} />;
}
