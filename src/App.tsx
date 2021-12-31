import { useQuery } from "@apollo/client";
import { EXCHANGE_RATES } from "./apollo/queries";
import { Box, Divider, Text, useToast } from "@chakra-ui/react";
import { LoadingScreen } from "./components/Loading";
import { Fragment } from "react";

function App() {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);
  const toast = useToast();
  if (loading) return <LoadingScreen />;
  if (error) toast({
    title: "Error!",
    status: "error",
    isClosable: true,
    duration: 9000
  });

  return (
    <Box padding={"5%"}>
      {data &&
        data.rates.map(({ currency, rate }: any) => (
          <Fragment key={currency}>
          <Text fontSize={"2xl"}>
            {currency}: {rate}
          </Text>
          <Divider />
          </Fragment>
        ))}
    </Box>
  );
}

export default App;
