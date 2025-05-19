import { Outlet, Link, useLocation, useParams } from "react-router";
import Layout from "../components/Layout";



const ClientManager = () => {
  const location = useLocation();
  const { id } = useParams();

  const tabs = [
    { label: "Overview", to: `/clients/${id}` },
    { label: "Client Workflows", to: `/clients/${id}/workflows` },
  ];

  return (
    <Layout title="Client Manager">
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