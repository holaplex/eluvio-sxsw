import { client } from "@/modules/holaplex";
import { GetDrop } from "@/queries/drop.graphql";
import { Project } from "@/graphql.types";
import Drop from "./Drop";
import { Wallet } from "@prisma/client";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import db from "@/modules/db";

interface GetDropData {
  project: Pick<Project, "drop">;
}

interface GetDropVars {
  project: string;
  drop: string;
}

export default async function DropPage({
  params: { drop },
}: {
  params: { drop: string };
}) {
  const { data } = await client.query<GetDropData, GetDropVars>({
    query: GetDrop,
    variables: { project: process.env.HOLAPLEX_PROJECT_ID as string, drop },
  });

  const session = await getServerSession(authOptions);

  let wallet: Wallet | null = null;

  if (session) {
    wallet = await db.wallet.findFirst({
      where: {
        user: {
          email: session.user?.email,
        },
      },
    });
  }

  return <Drop drop={data?.project.drop} wallet={wallet} />;
}
