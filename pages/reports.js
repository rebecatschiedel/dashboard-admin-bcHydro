import Reports from "../components/Reports";
import Header from "../components/Header";
import Layout from "../components/Layout";

function reports() {
  return (
    <Layout>
      <Header breadcrumbs={["Pages", "Reports"]}>
        <Reports />
      </Header>
    </Layout>
  );
}

export default reports;
