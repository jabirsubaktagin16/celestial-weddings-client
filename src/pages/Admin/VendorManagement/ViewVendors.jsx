import React, { useState } from "react";
import Skeleton from "react-loading-skeleton";
import Swal from "sweetalert2";
import { PageTitle } from "../../../components/Shared/PageTitle";
import { PaginationComponent } from "../../../components/Shared/PaginationComponent";
import { VendorDetailsModal } from "../../../components/Vendor/VendorDetailsModal";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useVendor from "../../../hooks/useVendor";
import { paginationFunction } from "../../../utils/paginationFunction";

export const ViewVendors = () => {
  const [vendor, vendorLoading, refetch] = useVendor.vendorList();
  const axiosSecure = useAxiosSecure();
  const [loadVendor, setLoadVendor] = useState(null);

  const {
    currentPage,
    setCurrentPage,
    rowsPerPage,
    totalPages,
    renderTablePage,
  } = paginationFunction(vendor);

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
    <>
      <PageTitle title={"View All Vendors"} />
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg">
          <h1 className="text-center text-2xl font-bold text-primary sm:text-3xl mb-3">
            View Vendors List
          </h1>
        </div>
        {vendorLoading && (
          <Skeleton
            style={{
              width: "100%",
              height: "5rem",
            }}
          />
        )}
        {!vendorLoading && (
          <>
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
                    <tr key={singleVendor?._id}>
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
                        <label
                          role="button"
                          htmlFor="vendor-details-modal"
                          className="bg-blue-500 text-white px-4 py-2 rounded-none mr-2"
                          onClick={() => setLoadVendor(singleVendor)}
                        >
                          View
                        </label>
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
            <PaginationComponent
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              totalPages={totalPages}
            />
          </>
        )}
      </div>
      <VendorDetailsModal vendor={loadVendor} setVendor={setLoadVendor} />
    </>
  );
};
