"use client";

import { Session } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { Wallet } from "@prisma/client";
import { shorten } from "@/modules/wallet";

export default function Basic({
  children,
  session,
  wallet,
}: {
  children: React.ReactNode;
  session: Session | null;
  wallet: Wallet | null;
}) {
  return (
    <>
      <header className="w-full flex justify-end item-center py-6">
        <button
          className="rounded-md px-4 py-1 bg-white border-black text-black border-2 hover:bg-black hover:text-white"
          onClick={() => signOut()}
        >
          Logout
        </button>
      </header>
      {children}
      <footer className="w-80 py-4 px-6 rounded-lg mb-6 mt-6 justify-self-end bg-gray-100 flex flex-col gap-2 items-start">
        {session ? (
          <div className="flex flex-row gap-2 items-center">
            <img
              className="w-10 h-10 rounded-full"
              src={session?.user?.image as string}
            />
            <div className="flex flex-col gap-1">
              <span>{session?.user?.name}</span>
              <span className="text-sm italic">{shorten(wallet?.address as string)}</span>
            </div>
          </div>
        ) : (
          <Link
            href="/login"
            className="rounded-md px-4 py-1 bg-white border-black text-black border-2 hover:bg-black hover:text-white"
          >
            Login in
          </Link>
        )}
      </footer>
    </>
  );
}
