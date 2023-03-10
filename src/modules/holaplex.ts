import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: process.env.HOLAPLEX_API_ENDPOINT,
  headers: {
    Authorization: process.env.HOLAPLEX_AUTH_TOKEN as string,
  },
  cache: new InMemoryCache(),
});
