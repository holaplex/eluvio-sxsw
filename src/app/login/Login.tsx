"use client";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

const fqdn = process.env.NEXT_PUBLIC_FQDN as string;

export default function Login() {
  const searchParams = useSearchParams();
  const callbackUrl = `${fqdn}${searchParams.get("return_to")}`;
  return (
    <div className="flex flex-col justify-center items-center min-h-screen w-full gap-4">
      <Link href={callbackUrl} className="fixed top-8 right-8">
        <XMarkIcon
          className="w-14 h-14 cursor-pointer hover:opacity-80"
          color="#BDBDBD"
        />
      </Link>
      <h1 className="text-2xl bold mb-8">Sign in to create your free wallet</h1>
      <button
        className="rounded-full px-10 py-3 bg-[#4c8bf5] text-white hover:opacity-80 transition"
        onClick={() =>
          signIn("google", {
            callbackUrl,
          })
        }
      >
        Login with Google
      </button>
    </div>
  );
}
