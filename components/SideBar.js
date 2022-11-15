import { useState } from "react";
import { Flex, IconButton, Image, Show, Hide } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import SideBarContent from "./SideBarContent";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick(e) {
    e.preventDefault();
    setIsOpen(!isOpen);
  }

  return (
    <Flex
      left="5"
      minH={["7rem", "100vh"]}
      margin={["0 auto", "0"]}
      boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
      w={["100%", "60px", "200px"]}
      flexDir="column"
      gap="2rem"
      as="nav"
      px={["2rem", "0.5rem", "1rem"]}
      pt="2rem"
    >
      <Flex justifyContent={["space-between", "center"]} alignItems="center">
        <Show above="md">
          <Image
            src="./images/logo.svg"
            className="logo"
            alt="BC Hydro Logo"
            minW="6rem"
            w="10rem"
          />
        </Show>
        <Hide above="md">
          <Image
            src="./images/symbol.svg"
            className="logo"
            alt="BC Hydro Logo"
            minW="3rem"
            w="3.5rem"
          />
          <IconButton
            display={["flex", "none"]}
            background="bcPrimary.sea"
            color="bcPrimary.ice"
            _hover={{ background: "bcPrimary.ice", color: "bcPrimary.sea" }}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            onClick={handleClick}
          />
        </Hide>
      </Flex>
      {!isOpen ? (
        <Hide below="sm">
          <SideBarContent isOpen={isOpen} />
        </Hide>
      ) : (
        <SideBarContent isOpen={isOpen} />
      )}
    </Flex>
  );
}
