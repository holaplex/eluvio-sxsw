"use client";

import { signIn } from "next-auth/react";

export default function Login() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen w-full gap-4">
      <h1>Sign into Holaplex Hub Starter</h1>
      <button
        className="rounded-md px-4 py-2 bg-white border-black text-black border-2 hover:bg-black hover:text-white"
        onClick={() =>
          signIn("google", { callbackUrl: "http://localhost:3000/drops" })
        }
      >
        Login with Google
      </button>
    </div>
  );
}
