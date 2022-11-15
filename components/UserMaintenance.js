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
  Box,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { users } from "../config";
import User from "./User";

function UserMaintenance() {
  return (
    <Flex flexDir="column" gap="3rem" pt="1.7rem">
      <TableContainer maxH="450px" overflowY="auto">
        <Table variant="simple">
          <Thead bg="bcPrimary.sea">
            <Tr>
              <Th color="bcPrimary.ice">Icon</Th>
              <Th color="bcPrimary.ice">Id</Th>
              <Th color="bcPrimary.ice">Name</Th>
              <Th color="bcPrimary.ice">Sector</Th>
              <Th color="bcPrimary.ice">Position</Th>
              <Th color="bcPrimary.ice">Permission</Th>
              <Th color="bcPrimary.ice">Messages</Th>
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
