import { createBrowserRouter } from "react-router";
import Dashboard from "./views/Dashboard";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
    },
  ]);


export default router;