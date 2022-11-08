import dynamic from "next/dynamic";
import { Box, Flex } from "@chakra-ui/react";
import Stats from "../components/Stats";
import MiniCalendar from "./MiniCalendar";

const BarChart = dynamic(() => import("../components/BarChart"), {
  ssr: false,
});
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
        <Stats w="100%" />
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
