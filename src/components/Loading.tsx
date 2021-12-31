import { Box, CircularProgress } from "@chakra-ui/react";
import { FC } from "react";

export const LoadingScreen: FC = () => {
  return (
    <Box display="grid" placeItems={"center"} marginTop={"25%"}>
      <CircularProgress isIndeterminate color='green.300' />
    </Box>
  )
}