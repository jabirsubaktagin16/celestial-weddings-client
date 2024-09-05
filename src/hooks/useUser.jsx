import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import useAxiosSecure from "./useAxiosSecure";

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

const userDetails = (email) => {
  const axiosSecure = useAxiosSecure();
  const {
    data: userInfo,
    isPending: loading,
    refetch: userRefetch,
  } = useQuery({
    queryKey: ["users", email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/${email}`);
      return res.data.response;
    },
  });

  return [userInfo, loading, userRefetch];
};

const reviewList = (userId) => {
  const axiosSecure = useAxiosSecure();
  const {
    data: reviews = [],
    isPending: loading,
    refetch: reviewRefetch,
  } = useQuery({
    queryKey: ["reviews", "user", userId],
    queryFn: async () => {
      const res = await axiosSecure.get(`/reviews/user/${userId}`);
      return res.data.response;
    },
  });

  return [reviews, loading, reviewRefetch];
};

const useUser = { userList, userDetails, reviewList };

export default useUser;
