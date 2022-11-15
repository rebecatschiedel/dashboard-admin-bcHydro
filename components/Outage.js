import { Tr, Td } from "@chakra-ui/react";

function Outage({ region, outages, customersAffected }) {
  return (
    <Tr>
      <Td fontWeight="semibold">{region}</Td>
      <Td textAlign="center">{outages}</Td>
      <Td textAlign="center">{customersAffected}</Td>
    </Tr>
  );
}

export default Outage;
