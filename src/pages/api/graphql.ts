import { ApolloServer } from "@apollo/server";
import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { gql } from "graphql-tag";
import { readFileSync } from "fs";
import db from "@/modules/db";
import {
  MintDropInput,
  MintEditionPayload,
  MutationResolvers,
  QueryResolvers,
} from "@/graphql.types";
import { Session } from "next-auth";
import { MintNft } from "@/mutations/drop.graphql";
import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { client } from "@/modules/holaplex";

export interface AppContext {
  session: Session | null;
  dataSources: {
    db: PrismaClient;
    holaplex: ApolloClient<NormalizedCacheObject>;
  };
}

const queryResolvers: QueryResolvers<AppContext> = {
  hello: () => "world",
};

interface MintNftData {
  mintEdition: MintEditionPayload;
}

interface MintNftVars {
  input: MintDropInput;
}

const mutationResolvers: MutationResolvers<AppContext> = {
  async forgeKey(_, { key }, { session, dataSources: { db, holaplex } }) {
    const wallet = await db.wallet.findFirst({
      where: {
        user: {
          email: session?.user?.email,
        },
      },
    });

    const { data } = await holaplex.mutate<MintNftData, MintNftVars>({
      mutation: MintNft,
      variables: { input: { drop: key, recipient: wallet?.address as string } },
    });

    return data?.mintEdition.collectionMint.address as string;
  },
};

const typeDefs = readFileSync("./schema.graphql", { encoding: "utf-8" });

console.log(typeDefs);

const server = new ApolloServer<AppContext>({
  resolvers: {
    Query: queryResolvers,
    Mutation: mutationResolvers,
  },
  typeDefs,
});

export default startServerAndCreateNextHandler(server, {
  context: async (req, res) => {
  
    const session = await getServerSession(req, res, authOptions);

    return {
      session,
      dataSources: {
        db,
        holaplex: client,
      },
    };
  },
});
