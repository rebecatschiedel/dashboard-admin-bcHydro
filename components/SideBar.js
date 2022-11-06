// import {
//   Flex,
//   Img,
//   IconButton,
//   InputGroup,
//   InputLeftElement,
//   Input,
//   HStack,
//   Box,
// } from "@chakra-ui/react";
// import { useState } from "react";
// import {
//   HamburguerIcon,
//   CloseIcon,
//   SearchIcon,
//   EmailIcon,
//   BellIcon,
// } from "@chakra-ui/icons";
// import NextLink from "next/link";
// import CustomLink from "./CustomLink";

// // Change the background to the current navbar bg from bchydro website
// function NavBar() {
//   return (
//     <Box
//       as="nav"
//       w="100vw"
//       bg="bcPrimary.ice"
//       color="bcPrimary.ice"
//       bgImg="url(./images/wave-long-blue-ice.svg)"
//       bgPosition="center"
//     >
//       <Flex
//         m="0 auto"
//         maxW="1280px"
//         justifyContent="space-between"
//         h="11rem"
//         alignItems="flex-start"
//         pt="1rem"
//       >
//         <Img
//           src="./images/logo.svg"
//           className="logo"
//           alt="BC Hydro Logo"
//           minW="6rem"
//           w="10rem"
//         />
//         <HStack>
//           <CustomLink
//             href="/"
//             ChakraComponent={IconButton}
//             variant="ghost"
//             icon={<EmailIcon color="bcPrimary.spruce" h="1.5rem" w="1.5rem" />}
//           >
//             Messages
//           </CustomLink>
//           <CustomLink
//             href="/"
//             ChakraComponent={IconButton}
//             variant="ghost"
//             icon={<BellIcon color="bcPrimary.spruce" h="1.5rem" w="1.5rem" />}
//           >
//             Messages
//           </CustomLink>
//           <Flex alignContent="center">
//             <InputGroup>
//               <InputLeftElement
//                 pointerEvents="none"
//                 children={<SearchIcon color="bcPrimary.spruce" />}
//               />
//               <Input placeholder="Search" bg="bcPrimary.ice" />
//             </InputGroup>
//           </Flex>
//         </HStack>
//       </Flex>
//     </Box>
//   );
// }

// export default NavBar;

// Add bcHydro logo
//         <Img
//           src="./images/logo.svg"
//           className="logo"
//           alt="BC Hydro Logo"
//           minW="6rem"
//           w="10rem"
//         />
// hide name on tablet, keep icons
// hide the menu until it is mobile - Drawer
// open mobile

import { useState } from "react";
import {
  Flex,
  Text,
  IconButton,
  Divider,
  Avatar,
  Heading,
  Img,
} from "@chakra-ui/react";
import {
  FiMenu,
  FiHome,
  FiCalendar,
  FiUser,
  FiDollarSign,
  FiBriefcase,
  FiSettings,
} from "react-icons/fi";
import { IoPawOutline } from "react-icons/io5";
import NavItem from "./NavItem";

export default function Sidebar() {
  const [navSize, changeNavSize] = useState("large");

  return (
    <Flex
      pos="sticky"
      left="5"
      h="95vh"
      marginTop="2.5vh"
      boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
      borderRadius={navSize == "small" ? "15px" : "30px"}
      w={navSize == "small" ? "75px" : "200px"}
      flexDir="column"
      justifyContent="space-between"
    >
      <Flex
        p="5%"
        flexDir="column"
        w="100%"
        alignItems={navSize == "small" ? "center" : "flex-start"}
        as="nav"
      >
        <IconButton
          background="none"
          mt={5}
          _hover={{ background: "none" }}
          icon={<FiMenu />}
          onClick={() => {
            if (navSize == "small") changeNavSize("large");
            else changeNavSize("small");
          }}
        />
        <NavItem navSize={navSize} icon={FiHome} title="Dashboard" active />
        <NavItem navSize={navSize} icon={FiCalendar} title="Calendar" />
        <NavItem navSize={navSize} icon={FiUser} title="Clients" />
        <NavItem navSize={navSize} icon={IoPawOutline} title="Animals" />
        <NavItem navSize={navSize} icon={FiDollarSign} title="Stocks" />
        <NavItem navSize={navSize} icon={FiBriefcase} title="Reports" />
        <NavItem navSize={navSize} icon={FiSettings} title="Settings" />
      </Flex>

      <Flex
        p="5%"
        flexDir="column"
        w="100%"
        alignItems={navSize == "small" ? "center" : "flex-start"}
        mb={4}
      >
        <Divider display={navSize == "small" ? "none" : "flex"} />
        <Flex mt={4} align="center">
          <Avatar size="sm" src="avatar-1.jpg" />
          <Flex
            flexDir="column"
            ml={4}
            display={navSize == "small" ? "none" : "flex"}
          >
            <Heading as="h3" size="sm">
              Sylwia Weller
            </Heading>
            <Text color="gray">Admin</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
