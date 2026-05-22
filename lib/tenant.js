import { supabase } from "./supabase";

export async function getTenant(userId) {
  const { data } = await supabase
    .from("tenants")
    .select("*")
    .eq("owner_id", userId)
    .single();

  return data;
}
