"use client";

import { ApolloProvider, InMemoryCache } from "@apollo/client";
import { ApolloClient } from "@apollo/client";

const client = new ApolloClient({
  uri: "/api/graphql",
  cache: new InMemoryCache({}),
});

export default function App({ children }: { children: React.ReactNode }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
