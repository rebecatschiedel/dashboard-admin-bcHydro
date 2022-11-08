import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TableContainer,
  Box,
  Show,
  Hide,
} from "@chakra-ui/react";

import Layout from "../components/Layout";
import Header from "../components/Header";
import City from "../components/City";
import { cities } from "../config";

function bcCities() {
  return (
    <Layout>
      <Header breadcrumbs={["Pages", "BC Cities"]}>
        <TableContainer shadow="base" pt="1.7rem">
          <Table variant="simple">
            <Show above="md">
              <Thead bg="bcPrimary.sea">
                <Tr>
                  <Th color="bcPrimary.ice">Name</Th>
                  <Th color="bcPrimary.ice">Population</Th>
                  <Th color="bcPrimary.ice">Monthly Average Use</Th>
                </Tr>
              </Thead>
            </Show>
            <Hide above="md">
              <Thead bg="bcPrimary.sea">
                <Tr>
                  <Th color="bcPrimary.ice" pl="0.5rem">
                    Name
                  </Th>
                  <Th color="bcPrimary.ice" pl="0.5rem">
                    Pop.
                  </Th>
                  <Th color="bcPrimary.ice" pl="0.5rem">
                    M.A.U.
                  </Th>
                </Tr>
              </Thead>
            </Hide>
            <Tbody>
              {cities.map((city, i) => {
                return <City key={i + 1} city={city} />;
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </Header>
    </Layout>
  );
}

export default bcCities;
