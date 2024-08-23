import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useRatings = (id) => {
  const axiosSecure = useAxiosSecure();
  const {
    data: ratingsInfo,
    isPending: loading,
    refetch: ratingsRefetch,
  } = useQuery({
    queryKey: ["reviews", "ratings", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/reviews/ratings/${id}`);
      return res.data.response;
    },
  });

  return [ratingsInfo, loading, ratingsRefetch];
};

export default useRatings;
