import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useUserDetails = (email) => {
  const axiosSecure = useAxiosSecure();
  const {
    data: userInfo,
    isPending: loading,
    refetch: userRefetch,
  } = useQuery({
    queryKey: ["vendors", "user", email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/vendors/user/${email}`);
      return res.data.response;
    },
  });

  return [userInfo, loading, userRefetch];
};

export default useUserDetails;
