import { Avatar, Tr, Td, Link } from "@chakra-ui/react";

function User({ id, name, position, sector, permissionLevel, messages }) {
  return (
    <Tr>
      <Td>
        <Avatar size="sm" src="" />
      </Td>
      <Td fontWeight="semibold">{id}</Td>
      <Td fontWeight="semibold">{name}</Td>
      <Td>{sector}</Td>
      <Td>{position}</Td>
      <Td>{permissionLevel}</Td>
      <Td>
        <Link color="bcPrimary.sea">Edit User</Link>
      </Td>
    </Tr>
  );
}

export default User;
