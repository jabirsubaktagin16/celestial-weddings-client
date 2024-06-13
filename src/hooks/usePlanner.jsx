import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const usePlanner = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: isPlanner, isPending: isPlannerLoading } = useQuery({
    queryKey: [user?.email, "isPlanner"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/planner/${user.email}`);
      return res.data?.planner;
    },
  });
  return [isPlanner, isPlannerLoading];
};

export default usePlanner;
