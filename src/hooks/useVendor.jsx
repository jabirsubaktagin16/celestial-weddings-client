import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import useAxiosSecure from "./useAxiosSecure";

const vendorDetails = (id) => {
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

const vendorList = () => {
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

const vendorUserDetails = (email) => {
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

const packages = (vendorId) => {
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

const ratings = (id) => {
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

const useVendor = {
  vendorDetails,
  vendorList,
  vendorUserDetails,
  packages,
  ratings,
};

export default useVendor;
