import toast from "react-hot-toast";
import Swal from "sweetalert2";
import useAxiosSecure from "../hooks/useAxiosSecure";

export const handleDeleteItem = ({
  endPoint,
  item,

  toastSuccessMessage,
}) => {
  const axiosSecure = useAxiosSecure();
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Confirm",
  }).then(async (result) => {
    if (result.isConfirmed) {
      const res = await axiosSecure.delete(`/${endPoint}/delete/${item._id}`);
      // console.log(res.data);
      if (res.data?.response?.deletedCount > 0) {
        // refetch to update the ui
        // refetch();
        toast.success(toastSuccessMessage);
      }
    }
  });
};
