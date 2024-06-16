import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

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

export default useVendor;
