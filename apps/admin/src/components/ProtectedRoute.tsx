import React from "react";
import { Navigate, Outlet } from "react-router";
import Cookies from "js-cookie";

const COOKIE_NAME = "accessToken";

const ProtectedRoute: React.FC = () => {
  console.log("Cookies", Cookies.get('accessToken'));
  const hasToken = !!Cookies.get(COOKIE_NAME);
  console.log("hasToken", hasToken);
  // If not authenticated, redirect to login
  if (!hasToken) {
    return <Navigate to="/login" replace />;
  }

  // Otherwise, render the child routes
  return <Outlet />;
};

export default ProtectedRoute;
