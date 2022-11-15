import { Flex, Text, Heading, Avatar, Link } from "@chakra-ui/react";
import { users } from "../config";

function UserMaintenanceResponsive() {
  return (
    <Flex flexDir="column" gap={["1rem", "3rem"]} pt={[null, "1.7rem"]}>
      {users.map((user, i) => {
        return (
          <Flex
            shadow="base"
            key={i}
            flexDir={["column", "row"]}
            gap={["1rem", "3rem"]}
            p="1rem"
          >
            <Flex
              flexDir={["row", "column"]}
              alignItems="center"
              justifyContent={["flex-start", "center"]}
              gap={["1rem", "0.5rem"]}
            >
              <Avatar size="sm" src="" />
              <Text>{i + 1}</Text>
            </Flex>
            <Flex justifyContent={["space-between"]} w="100%">
              <Flex flexDir="column">
                <Heading as="h4" fontSize="md">
                  {user.name}
                </Heading>
                <Text fontSize="sm">{user.sector}</Text>
                <Text fontSize="sm">{user.position}</Text>
              </Flex>
              <Flex flexDir="column">
                <Text>{user.permissionLevel}</Text>
                <Flex alignItems="center">
                  <Link color="bcPrimary.sea">Edit User</Link>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        );
      })}
    </Flex>
  );
}

export default UserMaintenanceResponsive;
