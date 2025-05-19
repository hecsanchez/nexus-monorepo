import { createBrowserRouter } from "react-router";
import Dashboard from "./views/Dashboard";
import Credentials from "./views/Credentials";
import Exceptions from "./views/Exceptions";
import Users from "./views/Users";
import Login from "./views/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Messaging from "./views/Messaging";
import Reporting from "./views/Reporting";
import Workflows from "./views/Workflows";
import Billing from "./views/Billing";

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
          path: "/workflows",
          element: <Workflows />,
        },
        {
          path: "/reporting",
          element: <Reporting />,
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
          path: "/billing",
          element: <Billing />,
        },
        {
          path: "/messaging",
          element: <Messaging />,
        },

      ],
    },
  ]);

  
export default router;