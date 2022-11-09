import {
  Flex,
  Text,
  Divider,
  Avatar,
  Heading,
  VStack,
  Hide,
} from "@chakra-ui/react";
import {
  FiHome,
  FiCalendar,
  FiUser,
  FiDollarSign,
  FiBriefcase,
  FiSettings,
} from "react-icons/fi";
import { IoMapOutline } from "react-icons/io5";
import SideBarItem from "./SideBarItem";

function SideBarContent({ isOpen }) {
  return (
    <Flex flexDir="column" justifyContent="space-between" h="100%">
      <VStack spacing="0.8rem" w="100%">
        <SideBarItem
          isOpen={isOpen}
          icon={FiHome}
          title="Dashboard"
          href="/dashboard"
        />
        <SideBarItem
          isOpen={isOpen}
          icon={FiCalendar}
          title="BC cities"
          href="/bcCities"
        />
        <SideBarItem
          isOpen={isOpen}
          icon={FiUser}
          title="User Maintenance"
          href="/userMaintenance"
        />
        <SideBarItem
          isOpen={isOpen}
          icon={FiBriefcase}
          title="Reports"
          href="/reports"
        />
        <SideBarItem
          isOpen={isOpen}
          icon={IoMapOutline}
          title="BC Map"
          href="/bcMap"
        />
        {/* <SideBarItem
          isOpen={isOpen}
          icon={FiSettings}
          title="Settings"
          href="/dashboard"
        /> */}
      </VStack>

      <Flex flexDir="column" mb={4}>
        <Divider />
        <Flex mt={4} align="center">
          <Avatar size="sm" src="" />
          <Flex flexDir="column" ml={4}>
            {!isOpen ? (
              <Hide below="md">
                <Heading as="h3" size="sm">
                  Baran Cezayirli
                </Heading>
                <Text color="gray">Admin</Text>
              </Hide>
            ) : (
              <Heading as="h3" size="sm">
                Baran Cezayirli
              </Heading>
            )}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default SideBarContent;
