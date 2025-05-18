import { createBrowserRouter } from "react-router";
import Dashboard from "./views/Dashboard";
import NewClient from "./views/NewClient";
import ClientManager from "./views/ClientManager";
import ClientOverview from "./views/clients/ClientOverview";
import ClientWorkflows from "./views/clients/ClientWorkflows";
import PlanManager from "./views/PlanManager";
import NewPlan from "./views/NewPlan";
import Credentials from "./views/Credentials";
import Exceptions from "./views/Exceptions";
import Billing from "./views/Billing";
import PlanManagerTab from "./views/billing/PlanManagerTab";
import InvoiceManagerTab from "./views/billing/InvoiceManagerTab";
import ApplyCreditsTab from "./views/billing/ApplyCreditsTab";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
    },
    {
      path: "/clients/new",
      element: <NewClient />,
    },
    {
      path: "/clients",
      element: <ClientManager />,
      children: [
        {
          element: <ClientOverview />,
          index: true,
        },
        {
          path: "workflows",
          element: <ClientWorkflows />,
        },
      ],
    },
    {
      path: "/billing",
      element: <Billing />,
      children: [
        {
          path: "plan",
          element: <PlanManagerTab />,
        },
        {
          path: "invoices",
          element: <InvoiceManagerTab />,
        },
        {
          path: "credits",
          element: <ApplyCreditsTab />,
        },
      ],
    },
    {
      path: "/subscriptions",
      element: <PlanManager />,
    },
    {
      path: "/subscriptions/new",
      element: <NewPlan />,
    },
    {
      path: "/credentials",
      element: <Credentials />,
    },
    {
      path: "/exceptions",
      element: <Exceptions />,
    },
  ]);

  
export default router;