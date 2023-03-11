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
  const [isPolling, setIsPolling] = useState(false);
  const [_, { stopPolling, startPolling }] =
    useLazyQuery<GetMeData>(GetMe, {
      onCompleted: (data) => {
        if (!data.me.wallet) {
          return;
        }

        console.log('onComplete of find me', data);
        setMe(data.me);
        stopPolling();
      },
    });

  useEffect(() => {
    if (!me || me?.wallet || isPolling) {
      return;
    }

    console.log('start polling', me);

    startPolling(250);
    setIsPolling(true);
  }, [me, startPolling, isPolling]);

  return <MeContext.Provider value={{ me }}>{children}</MeContext.Provider>;
}
