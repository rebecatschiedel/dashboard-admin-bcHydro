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
      <Box borderRadius="5px" shadow="md" px="1rem" w="12rem">
        <Stat>
          <StatLabel>Total Cost</StatLabel>
          <StatNumber>15.08M</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            23.36%
          </StatHelpText>
        </Stat>
      </Box>
      <Box borderRadius="5px" shadow="md" px="1rem" w="12rem">
        <Stat>
          <StatLabel>Consumption</StatLabel>
          <StatNumber>267</StatNumber>
          <StatHelpText>
            <StatArrow type="decrease" />
            9.05%
          </StatHelpText>
        </Stat>
      </Box>
      <Box borderRadius="5px" shadow="md" px="1rem" w="12rem">
        <Stat>
          <StatLabel>Production</StatLabel>
          <StatNumber>345,670</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            16.84%
          </StatHelpText>
        </Stat>
      </Box>
      <Box borderRadius="5px" shadow="md" px="1rem" w="12rem">
        <Stat>
          <StatLabel>Unit Consumed</StatLabel>
          <StatNumber>180M</StatNumber>
          <StatHelpText>
            <StatArrow type="decrease" />
            10.05%
          </StatHelpText>
        </Stat>
      </Box>
    </StatGroup>
  );
}

export default Stats;
