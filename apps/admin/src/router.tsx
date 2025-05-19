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
import Users from "./views/Users";
import Login from "./views/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Clients from "./views/Clients";
import Messaging from "./views/Messaging";
import Reporting from "./views/Reporting";
import UserForm from "./views/UserForm";
const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/",
      element: <ProtectedRoute />,
      children: [
        {
          element: <Dashboard />,
          index: true,
        },
        {
          path: "/clients",
          element: <Clients />,
        },
        {
          path: "/clients/new",
          element: <NewClient />,
        },
        {
          path: "/clients/:id",
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
        {
          path: "/users",
          element: <Users />,
        },
        {
          path: "/users/new",
          element: <UserForm />,
        },
        {
          path: "/users/:id/edit",
          element: <UserForm />,
        },
        {
          path: "/messaging",
          element: <Messaging />,
        },
        {
          path: "/reporting",
          element: <Reporting />,
        },
      ],
    },
  ]);

  
export default router;