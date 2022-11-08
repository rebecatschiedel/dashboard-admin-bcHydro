import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
  Box,
} from "@chakra-ui/react";

function Stats() {
  return (
    <StatGroup w="100%" gap="1rem">
      <Box
        borderRadius="5px"
        shadow="md"
        px="1rem"
        w={["100%", "30%"]}
        textAlign={["center", "start"]}
        py="1rem"
      >
        <Stat>
          <StatLabel>Eletricity Generated</StatLabel>
          <StatNumber>6.262.316 MWh</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            23.36%
          </StatHelpText>
        </Stat>
      </Box>
      <Box
        borderRadius="5px"
        shadow="md"
        px="1rem"
        w={["100%", "30%"]}
        textAlign={["center", "start"]}
        py="1rem"
      >
        <Stat>
          <StatLabel>Non-emitting sources</StatLabel>
          <StatNumber>93%</StatNumber>
          <StatHelpText>
            <StatArrow type="decrease" />
            9.05%
          </StatHelpText>
        </Stat>
      </Box>
      <Box
        borderRadius="5px"
        shadow="md"
        px="1rem"
        w={["100%", "30%"]}
        textAlign={["center", "start"]}
        py="1rem"
      >
        <Stat>
          <StatLabel>Domestic use</StatLabel>
          <StatNumber>514.020 m³</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            16.84%
          </StatHelpText>
        </Stat>
      </Box>
    </StatGroup>
  );
}

export default Stats;
