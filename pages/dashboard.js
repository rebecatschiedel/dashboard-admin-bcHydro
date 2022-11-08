import Dashboard from "../components/Dashboard";
import Header from "../components/Header";
import Layout from "../components/Layout";

function dashboardPage() {
  return (
    <Layout>
      <Header breadcrumbs={["Pages", "Dashboard"]}>
        <Dashboard />;
      </Header>
    </Layout>
  );
}

export default dashboardPage;
