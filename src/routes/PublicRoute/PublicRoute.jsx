/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";

export const PublicRoute = ({ children }) => {
  const token = localStorage.getItem("access-token");

  if (token) {
    return <Navigate to="/" replace />;
  }

  return children;
};
