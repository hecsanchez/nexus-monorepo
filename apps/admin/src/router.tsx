import { createBrowserRouter } from "react-router";
import Dashboard from "./views/Dashboard";
import NewClient from "./views/NewClient";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
    },
    {
      path: "/clients/new",
      element: <NewClient />,
    },
  ]);


export default router;