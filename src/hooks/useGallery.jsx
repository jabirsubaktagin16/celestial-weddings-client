import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useGallery = () => {
  const axiosPublic = useAxiosPublic();
  const {
    data: gallery = [],
    isPending: loading,
    refetch: galleryRefetch,
  } = useQuery({
    queryKey: ["galleries"],
    queryFn: async () => {
      const res = await axiosPublic.get("/galleries");
      return res.data.response;
    },
  });

  return [gallery, loading, galleryRefetch];
};

export default useGallery;
