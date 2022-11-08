import dynamic from "next/dynamic";
import { Box, Flex } from "@chakra-ui/react";
import Stats from "../components/Stats";
import Header from "../components/Header";

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
      <Flex flexDir="column" gap="3rem" w="50%" pt="1.7rem">
        <Stats w="100%" />
        <Box>
          <LineChart />
        </Box>
        {/* <Box bg="white">
          <HStack>
            <LineChart />
            <BarChart />
          </HStack>
        </Box>
        <Box bg="white">
          <DonutChart />
        </Box> */}
      </Flex>
      <Flex flexDir="column" gap="3rem" w="50%">
        <Box>
          <BarChart />
        </Box>
        <Flex shadow="base" alignItems="stretch"></Flex>
        {/* <Box bg="white">
          <HStack>
            <LineChart />
            <BarChart />
          </HStack>
        </Box>
        <Box bg="white">
          <DonutChart />
        </Box> */}
      </Flex>
    </Flex>
  );
}

export default Dashboard;
