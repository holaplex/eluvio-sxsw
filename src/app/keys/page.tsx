"use client";

import { Drop } from "@/graphql.types";
import Link from "next/link";
import { useQuery } from "@apollo/client";
import { GetDrops } from "@/queries/drop.graphql";
import { CheckIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import useMe from "@/hooks/useMe";

interface GetDropsData {
  drops: Drop[];
}

export default function DropPage() {
  const me = useMe();
  const dropsQuery = useQuery<GetDropsData>(GetDrops);

  return (
    <>
      <h1 className="text-center font-bold text-2xl mt-14">
        Collect any 2 of the 5 keys to unlock the video
      </h1>
      <p className="text-gray-300 text-center mt-2">
        All attendees have an NFC sticker on their badges, meet some people and
        claim NFTs...
      </p>
      <main className="flex-row grid flex-grow grid-cols-5 gap-4 justify-between mt-6">
        {dropsQuery.loading ? (
          <>
            <div className="w-full aspect-square bg-gray-800 animate-pulse rounded-lg" />
            <div className="w-full aspect-square bg-gray-800 animate-pulse rounded-lg" />
            <div className="w-full aspect-square bg-gray-800 animate-pulse rounded-lg" />
            <div className="w-full aspect-square bg-gray-800 animate-pulse rounded-lg" />
            <div className="w-full aspect-square bg-gray-800 animate-pulse rounded-lg" />
          </>
        ) : (
          dropsQuery.data?.drops.map((drop) => {
            const metadataJson = drop.collection.metadataJson;
            const owns = drop.collection?.holders?.find(
              (holder) => holder.address === me?.wallet?.address
            );

            return (
              <Link
                className="relative aspect-square rounded-lg overflow-hidden flex justify-center items-center"
                href={`/keys/${drop.id}`}
                key={drop.id}
              >
                <div
                  className={clsx(
                    "bg-black absolute top-0 left-0 right-0 bottom-0 z-20",
                    owns ? "bg-opacity-0" : "bg-opacity-50"
                  )}
                />
                <img
                  className="z-10 absolute top-0 left-0 right-0 bottom-0"
                  src={metadataJson?.image}
                  alt={`nft ${metadataJson?.name}`}
                />
                {owns && <CheckIcon className="w-1/3 z-30 text-white" />}
              </Link>
            );
          })
        )}

        <video
          width="600px"
          height="200px"
          controls
          src="https://host-154-14-185-103.contentfabric.io/qlibs/ilib2mn4BjaYiHPipVDr13JT6w9ckc2s/q/iq__2C7ZEPtiUe2CwVdFgyKoYSzkivc5/files/Holaplex%20Demo.mp4?authorization=eyJxc3BhY2VfaWQiOiJpc3BjMlJVb1JlOWVSMnYzM0hBUlFVVlNwMXJZWHp3MSIsImFkZHIiOiIweDhiOTMyNDc3MTI4MzE1NDllOTAxYjgyYjU5M2YzMDdlYmI2NTI3ZGEiLCJxbGliX2lkIjoiaWxpYjJtbjRCamFZaUhQaXBWRHIxM0pUNnc5Y2tjMnMifQ%3D%3D.RVMyNTZLX0FFYVB1REt1V2ZMaTF6ekhFMmRpSGt1VTExb3ZITHlMR1FmNHRDQzY5Z0ppUFNzY01IYTM2c3l1UHR2TjZXdVcyVzlHdzl4eUp1UzlGalc5Nll4cVFRa2JM"
          poster="https://i.vimeocdn.com/video/1628636657-69e75ca7cadeccbfa0a986346b163a8c215941128ebbb003a5063f583238e9bf-d?mw=2200&mh=1239&q=70"
        />
      </main>
    </>
  );
}
