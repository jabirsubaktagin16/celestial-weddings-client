import axios from "axios";

const axiosPublic = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_APIENDPOINT,
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
