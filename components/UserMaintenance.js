import {
  Flex,
  HStack,
  InputGroup,
  InputLeftElement,
  Input,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TableContainer,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { users } from "../config";
import User from "./User";

function UserMaintenance() {
  return (
    <Flex flexDir="column" gap="3rem" pt="1.7rem">
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Icon</Th>
              <Th>Id</Th>
              <Th>Name</Th>
              <Th>Sector</Th>
              <Th>Position</Th>
              <Th>Permission</Th>
              <Th>Messages</Th>
            </Tr>
          </Thead>
          <Tbody>
            {users.map((user, i) => {
              return (
                <User
                  key={i}
                  id={i + 1}
                  name={user.name}
                  position={user.position}
                  sector={user.sector}
                  permissionLevel={user.permissionLevel}
                  messages={user.messages}
                />
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </Flex>
  );
}

export default UserMaintenance;
