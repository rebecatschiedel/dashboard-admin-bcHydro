import dynamic from "next/dynamic";
import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
  Box,
  VStack,
  Flex,
  Heading,
  Text,
  Divider,
} from "@chakra-ui/react";
import { NotAllowedIcon, WarningIcon } from "@chakra-ui/icons";

const BarChart = dynamic(() => import("../components/BarChart"), {
  ssr: false,
});

function Reports() {
  return (
    <Box pt="1.7rem">
      <Flex
        gap={["1rem", "2rem", null, "5rem"]}
        flexDir={["column", null, null, "row"]}
      >
        <VStack spacing="3rem">
          <StatGroup w="100%" gap="1rem">
            <Box
              borderRadius="5px"
              shadow="md"
              px="1rem"
              w={["100%", "45%"]}
              textAlign={["center", "start"]}
              py="1rem"
            >
              <Stat>
                <StatLabel>Outages</StatLabel>
                <StatNumber>12</StatNumber>
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
              w={["100%", "45%"]}
              textAlign={["center", "start"]}
              py="1rem"
            >
              <Stat>
                <StatLabel>Reports</StatLabel>
                <StatNumber>250</StatNumber>
                <StatHelpText>
                  <StatArrow type="decrease" />
                  9.05%
                </StatHelpText>
              </Stat>
            </Box>
          </StatGroup>
          <BarChart />
        </VStack>
        <Flex flexDir="column" borderRadius="5px" shadow="md">
          <Box
            bg="bcPrimary.sea"
            color="bcPrimary.ice"
            w="100%"
            p={["0.5rem", "1rem"]}
            borderRadius="5px"
          >
            <Heading as="h4" fontSize="1.725rem" fontWeight="semibold">
              Reports
            </Heading>
          </Box>
          <VStack h="100%" p={["0.5rem", "1rem"]}>
            <Flex flexDir="column" mb={4} w="100%">
              <Flex my={2} align="center">
                <NotAllowedIcon w={6} h={6} />
                <Flex flexDir="column" ml={4}>
                  <Heading as="h3" fontWeight="semibold" fontSize="1.25rem">
                    Outage
                  </Heading>
                  <Text maxW="40ch">
                    North Vancouver outage caused by a tree...
                  </Text>
                </Flex>
              </Flex>
              <Divider />
            </Flex>
            <Flex flexDir="column" mb={4} w="100%">
              <Flex my={2} align="center">
                <WarningIcon w={6} h={6} />
                <Flex flexDir="column" ml={4}>
                  <Heading as="h3" fontWeight="semibold" fontSize="1.25rem">
                    Alert
                  </Heading>
                  <Text maxW="40ch">New Westminster windstorm alert!</Text>
                </Flex>
              </Flex>
              <Divider />
            </Flex>
          </VStack>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Reports;
