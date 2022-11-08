import { IconButton, Avatar, Tr, Td } from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";

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
      <Td textAlign="center">{permissionLevel}</Td>
      <Td textAlign="center">
        {messages.length && messages.length}
        <IconButton
          variant="Ghost"
          color="bcPrimary.sea"
          aria-label="Messages"
          fontSize="2xl"
          icon={<EmailIcon />}
        />
      </Td>
    </Tr>
  );
}

export default User;
