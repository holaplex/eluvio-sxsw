import { createContext, useEffect, useState } from "react";
import { User } from "@/graphql.types";
import { GetMe } from "@/queries/me.graphql";
import { useLazyQuery } from "@apollo/client";

interface MeContext {
  me: User | undefined;
}

interface GetMeData {
  me: User;
}

export const MeContext = createContext<MeContext>({ me: undefined });

export default function MeProvider({
  hydrate,
  children,
}: {
  hydrate: User | undefined;
  children: React.ReactNode;
}) {
  const [me, setMe] = useState(hydrate);
  const [_, { loading, data, stopPolling, startPolling }] =
    useLazyQuery<GetMeData>(GetMe, {
      onCompleted: (data) => {
        setMe(data.me);
        stopPolling();
      },
    });

  useEffect(() => {
    if (!me || me?.wallet) {
      return;
    }

    startPolling(25);
  }, [me, startPolling]);

  return <MeContext.Provider value={{ me }}>{children}</MeContext.Provider>;
}
