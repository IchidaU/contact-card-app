import type { User } from "../types/types";
import { supabase } from "../utils/supabase";

export async function GetUsers(): Promise<User[]> {
  const response = await supabase.from("users").select("*");
  if (response.error) {
    throw new Error(response.error.message);
  }

  const usersData = response.data.map((user) => {
    return {
      user_id: user.user_id,
      name: user.name,
      description: user.description,
      github_id: user.github_id,
      qiita_id: user.qiita_id,
      x_id: user.x_id,
    };
  });

  return usersData;
}
