import { Outlet, Link, useLocation } from "react-router";
import Layout from "../components/Layout";

const tabs = [
  { label: "Overview", to: "/clients" },
  { label: "Client Workflows", to: "/clients/workflows" },
];

const ClientManager = () => {
  const location = useLocation();
  return (
    <Layout>
      <div className="text-xl font-semibold mb-2">Client Manager</div>
      <div className="flex border-b mb-4">
        {tabs.map((tab) => (
          <Link
            key={tab.to}
            to={tab.to}
            className={`px-4 py-2 -mb-px border-b-2 transition-colors duration-150 ${location.pathname === tab.to ? "border-foreground text-foreground" : "border-transparent text-muted-foreground hover:text-foreground"}`}
          >
            {tab.label}
          </Link>
        ))}
      </div>
      <Outlet />
    </Layout>
  );
};

export default ClientManager; 