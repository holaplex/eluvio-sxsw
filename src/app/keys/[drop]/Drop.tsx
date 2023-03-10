"use client";

import { Drop as DropType, Maybe } from "@/graphql.types";
import { CheckIcon } from "@heroicons/react/24/outline";
import { Wallet } from "@prisma/client";
import { ForgeKey } from "@/mutations/key.graphql";
import { useMutation } from "@apollo/client";

interface ForgeKeyData {
  forgeKey: string;
}

interface ForgeKeyVars {
  key: string;
}

export default function Drop({
  drop,
  wallet,
}: {
  drop: Maybe<DropType> | undefined;
  wallet: Wallet | null;
}) {
  const collection = drop?.collection;
  const owns = collection?.holders?.find(
    (holder) => holder.address === wallet?.address
  );
  const [forgeKey, { loading }] = useMutation<ForgeKeyData, ForgeKeyVars>(
    ForgeKey
  );

  const onForge = () => {
    forgeKey({
      variables: { key: drop?.id },
      onCompleted: ({ forgeKey }) => {
      },
    });
  };

  return (
    <main className="m-auto max-w-md">
      <h1 className="text-xl font-bold mb-2">
        {collection?.metadataJson?.name}
      </h1>
      <div className="relative w-full">
        <div className="absolute left-2 top-2 px-2 py-1 text-xs text-white bg-gray-100 bg-opacity-40 flex flex-row justify-center items-center rounded-full z-10">
          {collection?.totalMints} / {collection?.supply}
        </div>
        <img
          className="w-full aspect-square rounded-lg"
          src={collection?.metadataJson?.image}
          alt={`nft ${collection?.metadataJson?.name}`}
        />

        {owns && (
          <div className="w-6 aspect-square z-10 flex bg-opacity-40 justify-center items-center bg-gray-100 rounded-full absolute top-2 right-2">
            <CheckIcon className="w-4 text-white" />
          </div>
        )}
      </div>
      <button
        onClick={onForge}
        className="rounded-md w-full mt-4 px-4 py-2 bg-white border-black text-black border-2 hover:bg-black hover:text-white"
      >
        Mint
      </button>
    </main>
  );
}
