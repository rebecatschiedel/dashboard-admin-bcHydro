import { Stack, Box, VStack } from "@chakra-ui/react";
import SideBar from "./SideBar";

function Layout({ children }) {
  return (
    <Box>
      <Stack flexDirection={["column", "row"]}>
        <SideBar />
        <VStack w="100%">{children}</VStack>
      </Stack>
    </Box>
  );
}

export default Layout;
