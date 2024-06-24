import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useVendorList = () => {
  const axiosPublic = useAxiosPublic();
  const {
    data: vendor = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["vendors"],
    queryFn: async () => {
      const res = await axiosPublic.get("/vendors");
      return res.data.response;
    },
  });

  return [vendor, loading, refetch];
};

export default useVendorList;
