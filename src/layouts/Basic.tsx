"use client";

import { Session } from "next-auth";
import Link from "next/link";
import { Wallet } from "@prisma/client";
import { shorten } from "@/modules/wallet";
import useMe from "@/hooks/useMe";
import { usePathname } from "next/navigation";

export default function Basic({
  children,
  session,
  wallet,
}: {
  children: React.ReactNode;
  session: Session | null;
  wallet: Wallet | null;
}) {
  const me = useMe();
  const pathname = usePathname();
  return (
    <>
      {children}
      <footer className="w-full max-w-md py-4 px-6 rounded-lg mb-6 mt-6 justify-self-end bg-white bg-opacity-10 flex flex-col gap-2 items-start">
        {session ? (
          <div className="flex flex-row gap-2 items-center">
            <img
              className="w-14 h-14 rounded-full"
              src={session?.user?.image as string}
            />
            <div className="flex flex-col gap-1">
              {me?.wallet ? (
                <>
                  <span className="text-xs text-gray-300">
                    Wallet connected
                  </span>
                  <span>{shorten(me?.wallet?.address as string)}</span>
                </>
              ) : (
                <>
                  <div className="h-4 w-24 rounded-md bg-gray-800 animate-pulse" />
                  <div className="h-6 w-16 rounded-md bg-gray-800 animate-pulse" />
                </>
              )}
            </div>
          </div>
        ) : (
          <Link
            href={`/login?return_to=${pathname}`}
            className="rounded-full px-6 py-3 bg-yellow-300 hover:bg-opacity-80 transition text-black"
          >
            Login in
          </Link>
        )}
      </footer>
    </>
  );
}
