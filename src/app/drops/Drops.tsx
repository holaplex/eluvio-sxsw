"use client";

import { Drop, Maybe } from "@/graphql.types";
import Link from "next/link";
import { Wallet } from "@prisma/client";
import { CheckIcon } from "@heroicons/react/24/outline";
import { useQuery } from "@apollo/client";
import { SayHello } from "@/queries/hello.graphql";

interface HomeProps {
  wallet: Wallet | null;
  drops: Maybe<Drop[]> | undefined;
}

export default function Home({ wallet, drops }: HomeProps) {
  useQuery(SayHello);

  return (
    <main className="flex-row grid flex-grow grid-cols-5 gap-4 justify-between mt-20">
      {drops?.map((drop) => {
        const metadataJson = drop.collection.metadataJson;
        const owns = drop.collection?.holders?.find(
          (holder) => holder.address === wallet?.address
        );

        return (
          <Link className="relative" href={`/drops/${drop.id}`} key={drop.id}>
            <div className="absolute left-2 top-2 px-2 py-1 text-xs text-white bg-gray-100 bg-opacity-40 flex flex-row justify-center items-center rounded-full z-10">
              {drop.collection?.totalMints} / {drop.collection.supply}
            </div>
            <img
              className="aspect-square rounded-lg hover:opacity-80 transition"
              src={metadataJson?.image}
              alt={`nft ${metadataJson?.name}`}
            />
            {owns && (
              <div className="w-6 aspect-square z-10 flex bg-opacity-40 justify-center items-center bg-gray-100 rounded-full absolute top-2 right-2">
                <CheckIcon className="w-4 text-white" />
              </div>
            )}
          </Link>
        );
      })}
    </main>
  );
}
