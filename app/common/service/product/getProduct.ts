"use server";

import { cookies } from "next/headers";
import { API_URL } from "../../constants/api";


export async function getProducts(status?: string) {
  const cookieStore = await cookies();
  const token = cookieStore.get("access_token")?.value;

  const res = await fetch(`${API_URL}/products`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    cache: "no-store", 
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}
