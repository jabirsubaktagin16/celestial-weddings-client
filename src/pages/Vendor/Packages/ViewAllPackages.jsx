import React, { useContext } from "react";
import { Loading } from "../../../components/Shared/Loading";
import { PageTitle } from "../../../components/Shared/PageTitle";

import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useUser from "../../../hooks/useUser";
import useVendor from "../../../hooks/useVendor";
import { AuthContext } from "../../../providers/AuthProvider";

export const ViewAllPackages = () => {
  const { user } = useContext(AuthContext);
  const [userInfo, userLoading, userRefetch] = useUser.userDetails(user?.email);
  const [packageList, loading, refetch] = useVendor.packages(
    userInfo?.vendorCompany
  );
  const axiosSecure = useAxiosSecure();

  if (userLoading || loading) return <Loading />;

  const handleDeleteItem = (item) => {
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
        const res = await axiosSecure.delete(`/packages/delete/${item._id}`);
        // console.log(res.data);
        if (res.data?.response?.deletedCount > 0) {
          // refetch to update the ui
          refetch();
          toast.success("Package Deleted Successfully");
        }
      }
    });
  };

  return (
    <>
      <PageTitle title={"View All Packages"} />
      <div className="container mx-auto px-4 py-8">
        <h3 className="text-center font-bold mb-8">View All Packages</h3>
        <table className="min-w-full rounded-none">
          <thead>
            <tr>
              <th className="py-2 px-4 bg-accent text-white">Package Name</th>

              <th className="py-2 px-4 bg-accent text-white">Base Price</th>
              <th className="py-2 px-4 bg-accent text-white">
                Discount Status
              </th>
              <th className="py-2 px-4 bg-accent text-white">
                Discount Percentage
              </th>
              <th className="py-2 px-4 bg-accent text-white">Actions</th>
            </tr>
          </thead>
          <tbody>
            {packageList &&
              packageList.map((singlePackage) => (
                <tr key={singlePackage?._id}>
                  <td className="py-2 px-4 border-b text-center">
                    {singlePackage?.name}
                  </td>

                  <td className="py-2 px-4 border-b text-center">
                    ${singlePackage?.price}
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    {singlePackage?.discountStatus
                      ? "Available"
                      : "Not Available"}
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    {singlePackage?.discountPercentage
                      ? singlePackage?.discountPercentage
                      : "0"}
                  </td>

                  <td className="py-2 px-4 border-b text-center">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-none mr-2">
                      View
                    </button>
                    <Link
                      to={`/dashboard/package/update/${singlePackage?._id}`}
                      className="bg-yellow-500 text-white px-4 py-2 rounded-none mr-2"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDeleteItem(singlePackage)}
                      className="bg-red-700 text-white px-4 py-2 rounded-none"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
