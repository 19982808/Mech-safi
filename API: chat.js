import { askAI } from "../../lib/ai";
import { supabase } from "../../lib/supabase";

export default async function handler(req, res) {
  const { message, tenant_id } = req.body;

  const reply = await askAI(message);

  await supabase.from("leads").insert([
    {
      tenant_id,
      message,
      reply,
      status: "new"
    }
  ]);

  res.json({ reply });
}
