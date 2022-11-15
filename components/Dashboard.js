import dynamic from "next/dynamic";
import { Box, Flex, StatGroup } from "@chakra-ui/react";
import MiniCalendar from "./MiniCalendar";
import StatItem from "./StatItem";

const LineChart = dynamic(() => import("../components/LineChart"), {
  ssr: false,
});
const DonutChart = dynamic(() => import("../components/DonutChart"), {
  ssr: false,
});

function Dashboard() {
  return (
    <Flex>
      <Flex flexDir="column" gap="3rem" pt="1.7rem" w="100%">
        <StatGroup w="100%" gap="1rem">
          <StatItem
            label="Eletricity Generated"
            number="6.262.316 MWh"
            type="increase"
            percentage="23.36%"
          />
          <StatItem
            label="Non-emitting sources"
            number="93%"
            type="decrease"
            percentage="9.05%"
          />
          <StatItem
            label="Domestic use"
            number="514.020 m³"
            type="increase"
            percentage="16.84%"
          />
        </StatGroup>
        <Box w={["100%", null, "70%"]} margin="0 auto">
          <LineChart />
        </Box>
        <Flex
          flexDir={["column", null, " null", "row"]}
          justifyContent={["center", null, "space-around"]}
          gap="2rem"
          alignItems="center"
          mb="2rem"
        >
          <Box w={["100%", "70%", null, "50%"]}>
            <DonutChart />
          </Box>
          <MiniCalendar />
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Dashboard;
