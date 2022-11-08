import { Hide, Show } from "@chakra-ui/react";
import Header from "../components/Header";
import Layout from "../components/Layout";
import UserMaintenance from "../components/UserMaintenance";
import UserMaintenanceResponsive from "../components/UserMaintenanceResponsive";

function UserMaintenancePage() {
  return (
    <Layout>
      <Header breadcrumbs={["Pages", "User Maintenance"]}>
        <Show above="md">
          <UserMaintenance />
        </Show>
        <Hide above="md">
          <UserMaintenanceResponsive />
        </Hide>
      </Header>
    </Layout>
  );
}

export default UserMaintenancePage;
