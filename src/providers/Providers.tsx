import { FC } from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://48p1r2roz4.sse.codesandbox.io",
  cache: new InMemoryCache(),
});

export const Providers: FC = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
