// "use client"

import { cookies } from "next/headers";
import { AUTHENTICATION_COOKIE } from "../common/service/auth/auth-cookie";

export default async function Page() {

  const cookieStore = await cookies();

  const token = cookieStore.get(AUTHENTICATION_COOKIE)?.value;

  return (
    <div className="pt-10">
      <h1 className="text-xl font-bold mb-4">Page Content</h1>
      <div className="bg-zinc-100 p-4 rounded border dark:bg-zinc-800">
        <p className="text-sm font-semibold mb-2">Your Token:</p>
        <code className="break-all text-xs text-blue-600 dark:text-blue-400">
          {token ? token : "No token found / Not logged in"}
        </code>
      </div>
    </div>
  );
}
