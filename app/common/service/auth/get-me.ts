"use server";

import { cookies } from "next/headers";
import { API_URL } from "@/app/common/constants/api";

export default async function getme() {
    const cookieStore = await cookies()
  const me = await fetch(`${API_URL}/users/me`,{
    headers: { Cookie: cookieStore.toString()},
  });
  return me.json()
}
