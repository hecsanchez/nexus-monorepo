import { Outlet, Link, useLocation } from "react-router";
import Layout from "@/components/Layout";

const tabs = [
  { label: "Plan Manager", to: "/billing/plan" },
  { label: "Invoice Manager", to: "/billing/invoices" },
  { label: "Apply Credits", to: "/billing/credits" },
];

const Billing = () => {
  const location = useLocation();
  return (
    <Layout>
      <div className="text-xl font-semibold mb-2">Billing Center</div>
     
    </Layout>
  );
};

export default Billing; 