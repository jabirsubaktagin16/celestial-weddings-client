import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useRoleCheck from "../hooks/useRoleCheck";

const VendorRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [isVendor, isVendorLoading] = useRoleCheck.useVendor();
  const location = useLocation();

  if (loading || isVendorLoading) {
    return <progress className="progress w-56"></progress>;
  }

  if (user && isVendor) {
    return children;
  }

  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default VendorRoute;
