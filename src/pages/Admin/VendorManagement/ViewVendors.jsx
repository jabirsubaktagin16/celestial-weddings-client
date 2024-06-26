import React, { useState } from "react";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useVendorList from "../../../hooks/useVendorList";

export const ViewVendors = () => {
  const [vendor, , refetch] = useVendorList();
  const axiosSecure = useAxiosSecure();

  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;
  const totalPages = Math.ceil(vendor.length / rowsPerPage);

  const renderTablePage = (page) => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    return vendor.slice(start, end);
  };

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
        const res = await axiosSecure.delete(`/vendors/delete/${item._id}`);
        // console.log(res.data);
        if (res.data?.response?.deletedCount > 0) {
          // refetch to update the ui
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${item.name} has been deleted`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    });
  };

  return (
    <div className="p-4">
      <h5 className="text-center">List of Vendors</h5>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>E-Mail</th>
              <th>Phone Number</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {renderTablePage(currentPage).map((singleVendor) => (
              <tr>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={singleVendor?.cover} />
                    </div>
                  </div>
                </td>
                <td>{singleVendor?.name}</td>
                <td>{singleVendor?.email}</td>
                <td>{singleVendor?.phoneNumber}</td>
                <th className="text-center">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-none mr-2">
                    View
                  </button>
                  <button className="bg-yellow-500 text-white px-4 py-2 rounded-none mr-2">
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteItem(singleVendor)}
                    className="bg-red-700 text-white px-4 py-2 rounded-none"
                  >
                    Delete
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex mx-auto justify-center items-center mt-4">
        <div className="join border border-accent">
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="join-item btn"
          >
            «
          </button>
          <button className="join-item btn">
            Page {currentPage} of {totalPages}
          </button>
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="join-item btn"
          >
            »
          </button>
        </div>
      </div>
    </div>
  );
};
