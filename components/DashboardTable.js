import {
  Tr,
  Td,
  Flex,
  Table,
  Thead,
  Tbody,
  Th,
  TableContainer,
} from "@chakra-ui/react";

function ProgressTable({ progressData, size }) {
  return (
    <Flex flexDir="column" gap="3rem">
      <TableContainer maxH="450px" overflowY="auto">
        <Table variant="simple">
          <Thead bg="bcPrimary.sea">
            {size == "sm" ? (
              <Tr>
                <Th fontSize="smaller" px="0" pl="0.5rem" color="bcPrimary.ice">
                  Name
                </Th>
                <Th fontSize="smaller" px="0.5rem" color="bcPrimary.ice">
                  Prog.
                </Th>
                <Th fontSize="smaller" px="0.5rem" color="bcPrimary.ice">
                  D.D.
                </Th>
              </Tr>
            ) : (
              <Tr>
                <Th color="bcPrimary.ice">Name</Th>
                <Th color="bcPrimary.ice">Progrees</Th>
                <Th color="bcPrimary.ice">Due Date</Th>
              </Tr>
            )}
          </Thead>
          <Tbody>
            {progressData.map((data, i) => {
              return (
                <Tr key={i}>
                  {size == "sm" ? (
                    <>
                      <Td
                        fontSize="sm"
                        px="0"
                        pl="0.5rem"
                        fontWeight="semibold"
                      >
                        {data.name}
                      </Td>
                      <Td fontSize="sm" px="0" textAlign="center">
                        {data.progress}
                      </Td>
                      <Td fontSize="sm" px="0" textAlign="center">
                        {data.dueDate}
                      </Td>
                    </>
                  ) : (
                    <>
                      <Td fontWeight="semibold">{data.name}</Td>
                      <Td textAlign="center">{data.progress}</Td>
                      <Td textAlign="center">{data.dueDate}</Td>
                    </>
                  )}
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </Flex>
  );
}

export default ProgressTable;
