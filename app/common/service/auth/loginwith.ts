import { redirect } from "next/navigation";

export async function loginWithSocial(provider: "google" | "facebook") {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const targetUrl = `${API_URL}/auth/${provider}/login`;
  
  redirect(targetUrl);
}