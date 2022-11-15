import { Tr, Td } from "@chakra-ui/react";

function Outage({ region, outages, customersAffected, size }) {
  return (
    <Tr>
      {size == "sm" ? (
        <>
          <Td fontSize="sm" px="0" pl="0.5rem" fontWeight="semibold">
            {region}
          </Td>
          <Td fontSize="sm" px="0" textAlign="center">
            {outages}
          </Td>
          <Td fontSize="sm" px="0" textAlign="center">
            {customersAffected}
          </Td>
        </>
      ) : (
        <>
          <Td fontWeight="semibold">{region}</Td>
          <Td textAlign="center">{outages}</Td>
          <Td textAlign="center">{customersAffected}</Td>
        </>
      )}
    </Tr>
  );
}

export default Outage;
