import { Flex, Box, Image } from "@chakra-ui/react";

import HeaderInfo from "./HeaderInfo";
import HeaderTitle from "./HeaderTitle";

function Header({ breadcrumbs, children }) {
  return (
    <Box
      w="100%"
      color="bcSecondary.granite"
      px={["1rem", "2rem"]}
      py={["1rem", "5rem"]}
      bgImg={["", "url('./images/wave-ice-blue-header.svg')"]}
      bgPos="top"
      bgRepeat="no-repeat"
    >
      <Flex
        flexDir={["column-reverse", "row"]}
        justifyContent="space-between"
        gap="1rem"
      >
        <HeaderTitle breadcrumbs={breadcrumbs} />
        <HeaderInfo />
      </Flex>
      {children}
    </Box>
  );
}

export default Header;
