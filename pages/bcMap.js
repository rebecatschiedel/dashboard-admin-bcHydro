import { Box } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import Header from "../components/Header";
import Layout from "../components/Layout";

const Map = dynamic(() => import("../components/Map"), {
  ssr: false,
});

function bcMap() {
  return (
    <Layout>
      <Header breadcrumbs={["Pages", "BC Map"]}>
        <Box h="600px" pt="1.7rem" px={["0.5rem", "1rem", "1rem", "1.5rem"]}>
          <Map />
        </Box>
      </Header>
    </Layout>
  );
}

export default bcMap;
