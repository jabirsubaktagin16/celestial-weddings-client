import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const userList = () => {
  const axiosPublic = useAxiosPublic();
  const {
    data: users = [],
    isPending: loading,
    refetch: userRefetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosPublic.get("/users");
      return res.data.response;
    },
  });

  return [users, loading, userRefetch];
};

const useUser = { userList };

export default useUser;
