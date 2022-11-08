import { Tr, Td } from "@chakra-ui/react";

function City({ city }) {
  return (
    <Tr>
      <Td maxW={["15ch", "auto"]} pl={["0.5rem", "1rem", "1.5rem"]}>
        {city.name}
      </Td>
      <Td maxW={["15ch", "auto"]} pl={["0.5rem", "1rem", "1.5rem"]}>
        {city.population}
      </Td>
      <Td maxW={["15ch", "auto"]} pl={["0.5rem", "1rem", "1.5rem"]}>
        {city.monthlyAverageUse}
      </Td>
    </Tr>
  );
}

export default City;
