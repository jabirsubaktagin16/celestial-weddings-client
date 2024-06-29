import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const usePackages = (vendorId) => {
  const axiosPublic = useAxiosPublic();
  const {
    data: packageList = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["packages", vendorId],
    queryFn: async () => {
      const res = await axiosPublic.get(`/packages/${vendorId}`);
      return res.data.response;
    },
  });

  return [packageList, loading, refetch];
};

export default usePackages;
