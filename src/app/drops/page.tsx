import { client } from "@/modules/holaplex";
import { GetProjectDrops } from "@/queries/drop.graphql";
import { Project } from "@/graphql.types";
import Drops from "./Drops";
import { Wallet } from "@prisma/client";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import db from "@/modules/db";

interface GetDropsData {
  project: Pick<Project, "drops">;
}

interface GetDropsVars {
  project: string;
}

export default async function DropsPage() {
  const { data } = await client.query<GetDropsData, GetDropsVars>({
    query: GetProjectDrops,
    variables: { project: process.env.HOLAPLEX_PROJECT_ID as string },
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

  return <Drops drops={data.project.drops} wallet={wallet} />;
}
