import { supabase } from "../../lib/supabase";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const { data } = await supabase.from("jobs").select("*");
    return res.json(data);
  }

  if (req.method === "POST") {
    const job = req.body;

    const { data } = await supabase.from("jobs").insert([job]);
    return res.json(data);
  }

  res.status(405).end();
}
