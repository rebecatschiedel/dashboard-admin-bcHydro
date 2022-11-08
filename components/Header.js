import { Flex, Box } from "@chakra-ui/react";

import HeaderInfo from "./HeaderInfo";
import HeaderTitle from "./HeaderTitle";

function Header({ breadcrumbs, children }) {
  return (
    <Box
      w="100%"
      color="bcSecondary.granite"
      px={["1rem", "2rem"]}
      py={["1rem", "1.5rem"]}
      bg="bcPrimary.ice"
    >
      <Flex
        flexDir={["column-reverse", "row"]}
        justifyContent="space-between"
        gap="1rem"
        mb={["1rem", "1rem", "2rem"]}
      >
        <HeaderTitle breadcrumbs={breadcrumbs} />
        <HeaderInfo />
      </Flex>
      {children}
    </Box>
  );
}

export default Header;
