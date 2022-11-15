import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  Box,
} from "@chakra-ui/react";

function StatItem({ label, number, percentage, type }) {
  return (
    <Box
      borderRadius="5px"
      shadow="md"
      px="1rem"
      w={["100%", "30%"]}
      textAlign={["center", "start"]}
      py="1rem"
    >
      <Stat>
        <StatLabel>{label}</StatLabel>
        <StatNumber>{number}</StatNumber>
        {type === "increase" ? (
          <StatHelpText>
            <StatArrow type="increase" />
            {percentage}
          </StatHelpText>
        ) : (
          <StatHelpText>
            <StatArrow type="decrease" />
            {percentage}
          </StatHelpText>
        )}
      </Stat>
    </Box>
  );
}

export default StatItem;
