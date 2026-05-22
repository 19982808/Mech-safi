import { supabase } from "../../lib/supabase";

export default async function handler(req, res) {
  const { tenant_id } = req.query;

  const { data } = await supabase
    .from("jobs")
    .select("*")
    .eq("tenant_id", tenant_id);

  const total = data?.length || 0;
  const revenue = data?.reduce((a, b) => a + (b.cost || 0), 0);

  res.json({ total_jobs: total, revenue });
}
