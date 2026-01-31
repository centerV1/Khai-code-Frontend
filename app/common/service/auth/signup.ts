"use server";

import { API_URL } from "@/app/common/constants/api";
import { getErrorMessage } from "@/app/common/util/errors";
import { FormResponse } from "@/app/common/interfaces/form-response.interface";
import Login from "./login";

export default async function Signup(
  _prevState: FormResponse | undefined,
  formData: FormData
) {
  const res = await fetch(`${API_URL}/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(Object.fromEntries(formData)),
  });

  const parsedRes = await res.json();

  if (!res.ok) {
    return { error: getErrorMessage(parsedRes) };
  }

  await Login(null, formData);
  
  return null;
}
