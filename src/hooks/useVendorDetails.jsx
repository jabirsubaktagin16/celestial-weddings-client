import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useVendorDetails = (id) => {
  const axiosPublic = useAxiosPublic();
  const {
    data: vendor,
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["vendors", id],
    queryFn: async () => {
      const res = await axiosPublic.get(`/vendors/${id}`);
      return res.data.response;
    },
  });

  return [vendor, loading, refetch];
};

export default useVendorDetails;
