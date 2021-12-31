import { FC } from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { ChakraProvider } from "@chakra-ui/react";

export const client = new ApolloClient({
  uri: "https://48p1r2roz4.sse.codesandbox.io",
  cache: new InMemoryCache(),
});

export const Providers: FC = ({ children }) => {
  return (
    <ChakraProvider>
      <ApolloProvider client={client}>{children}</ApolloProvider>
    </ChakraProvider>
  );
};
