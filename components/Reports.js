import dynamic from "next/dynamic";
import { StatGroup, Box, Heading, Flex } from "@chakra-ui/react";
import StatItem from "./StatItem";
import { outages } from "../config";
import Outages from "./Outages";

const BarChart = dynamic(() => import("../components/BarChart"), {
  ssr: false,
});

function Reports() {
  return (
    <Box pt="1.7rem">
      <StatGroup w="100%">
        <StatItem
          label="Current Outages"
          number="3"
          percentage=" 23.36%"
          type="increase"
        />
        <StatItem
          label="Customers Affected"
          number="3"
          percentage=" 2%"
          type="increase"
        />
        <StatItem
          label="Reports"
          number="148"
          percentage=" 9.05%"
          type="decrease"
        />
      </StatGroup>
      <Flex
        pt="2.5rem"
        justifyContent="space-around"
        gap="2rem"
        alignItems="center"
        flexWrap="wrap"
      >
        <BarChart w={["100%", "40%"]} />
        <Box>
          <Heading
            my="1rem"
            fontSize="3xl"
            color="bcPrimary.sea"
            fontWeight="medium"
          >
            Current Outages
          </Heading>
          <Outages w={["100%", "40%"]} outages={outages.current} />
        </Box>
        <Box>
          <Heading
            my="1rem"
            fontSize="3xl"
            color="bcPrimary.sea"
            fontWeight="medium"
          >
            Restored
          </Heading>
          <Outages w={["100%", "40%"]} outages={outages.restored} />
        </Box>
        <Box>
          <Heading
            my="1rem"
            fontSize="3xl"
            color="bcPrimary.sea"
            fontWeight="medium"
          >
            Planned
          </Heading>
          <Outages w={["100%", "40%"]} outages={outages.planned} />
        </Box>
      </Flex>
    </Box>
  );
}

export default Reports;
