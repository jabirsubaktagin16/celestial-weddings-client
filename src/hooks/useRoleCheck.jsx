import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: isAdmin, isPending: isAdminLoading } = useQuery({
    queryKey: [user?.email, "isAdmin"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/admin/${user.email}`);
      return res.data?.admin;
    },
  });
  return [isAdmin, isAdminLoading];
};

const useVendor = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: isVendor, isPending: isVendorLoading } = useQuery({
    queryKey: [user?.email, "isVendor"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/vendor/${user.email}`);
      return res.data?.vendor;
    },
  });
  return [isVendor, isVendorLoading];
};

const useRoleCheck = { useAdmin, useVendor };

export default useRoleCheck;
