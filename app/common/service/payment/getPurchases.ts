"use server";
import { cookies } from "next/headers";
import { API_URL } from "../../constants/api";

export default async function getPurchases() {
    const cookieStore = await cookies()
    const product = await fetch(`${API_URL}/users/purchases`,{
    headers: { Cookie: cookieStore.toString()},
  });
    return await product.json()
}