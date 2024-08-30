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
  const axiosPublic = useAxiosPublic();
  const {
    data: ratingsInfo,
    isPending: loading,
    refetch: ratingsRefetch,
  } = useQuery({
    queryKey: ["reviews", "ratings", id],
    queryFn: async () => {
      const res = await axiosPublic.get(`/reviews/ratings/${id}`);
      return res.data.response;
    },
  });

  return [ratingsInfo, loading, ratingsRefetch];
};

const reviews = (vendorId) => {
  const axiosPublic = useAxiosPublic();
  const {
    data: reviewList = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["reviews", vendorId],
    queryFn: async () => {
      const res = await axiosPublic.get(`/reviews/${vendorId}`);
      return res.data.response;
    },
  });

  return [reviewList, loading, refetch];
};

const bookings = (vendorId) => {
  const axiosPublic = useAxiosPublic();
  const {
    data: bookingList = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["bookings", "vendor", vendorId],
    queryFn: async () => {
      const res = await axiosPublic.get(`/bookings/vendor/${vendorId}`);
      return res.data.response;
    },
  });

  return [bookingList, loading, refetch];
};

const useVendor = {
  vendorDetails,
  vendorList,
  vendorUserDetails,
  packages,
  ratings,
  reviews,
  bookings,
};

export default useVendor;
