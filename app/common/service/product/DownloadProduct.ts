"use server";

import { cookies } from "next/headers";
import { API_URL } from "@/app/common/constants/api";

export const getDownloadUrl = async (productId: number) => {
  const cookieStore = await cookies();
  const response = await fetch(`${API_URL}/products/purchases/file/${productId}`, {
    method: 'GET',
    headers: {
      Cookie: cookieStore.toString()
    },
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || 'Failed to Download');
  }

  return response.json();
};