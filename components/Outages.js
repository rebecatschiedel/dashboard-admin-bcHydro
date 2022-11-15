import {
  Flex,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TableContainer,
} from "@chakra-ui/react";
import Outage from "./Outage";

function Outages({ outages, size }) {
  return (
    <Flex flexDir="column" gap="3rem">
      <TableContainer maxH="450px" overflowY="auto">
        <Table variant="simple">
          <Thead bg="bcPrimary.sea">
            {size == "sm" ? (
              <Tr>
                <Th fontSize="smaller" px="0" pl="0.5rem" color="bcPrimary.ice">
                  Region
                </Th>
                <Th fontSize="smaller" px="0.5rem" color="bcPrimary.ice">
                  Outages
                </Th>
                <Th fontSize="smaller" px="0.5rem" color="bcPrimary.ice">
                  Cust. Aff.
                </Th>
              </Tr>
            ) : (
              <Tr>
                <Th color="bcPrimary.ice">Region</Th>
                <Th color="bcPrimary.ice">Outages</Th>
                <Th color="bcPrimary.ice">Customers Affected</Th>
              </Tr>
            )}
          </Thead>
          <Tbody>
            {outages.map((outage, i) => {
              return (
                <Outage
                  size={size}
                  key={i}
                  region={outage.region}
                  outages={outage.outages}
                  customersAffected={outage.customersAffected}
                />
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </Flex>
  );
}

export default Outages;
