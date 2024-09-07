import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { Loading } from "../../../components/Shared/Loading";
import { PageTitle } from "../../../components/Shared/PageTitle";
import { PaginationComponent } from "../../../components/Shared/PaginationComponent";
import { OrderDetailsModal } from "../../../components/User/OrderDetailsModal";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useUser from "../../../hooks/useUser";
import { AuthContext } from "../../../providers/AuthProvider";
import { paginationFunction } from "../../../utils/paginationFunction";
import { utilFunctions } from "../../../utils/utilFunctions";

export const PreviousOrders = () => {
  const { user } = useContext(AuthContext);
  const [orders, orderLoading, orderRefetch] = useUser.orderList(user?.email);
  const { getCategoryFullForm } = utilFunctions();
  const [currentOrder, setCurrentOrder] = useState(null);
  const {
    currentPage,
    setCurrentPage,
    rowsPerPage,
    totalPages,
    renderTablePage,
  } = paginationFunction(orders);

  const axiosSecure = useAxiosSecure();

  if (orderLoading) return <Loading />;

  const cancelModal = (order) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirm",
      allowOutsideClick: false,
    }).then(async (result) => {
      if (result.isConfirmed) {
        const bookingStatusInfo = {
          bookingStatus: "Cancelled",
        };

        const bookingRes = await axiosSecure.patch(
          `/bookings/update-user/${order?._id}`,
          bookingStatusInfo
        );

        if (bookingRes?.data?.response.modifiedCount > 0) {
          orderRefetch();
          toast.success(`Your order has been cancelled`);
        }
      }
    });
  };

  return (
    <>
      <PageTitle title={"Previous Orders"} />
      <section>
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-lg text-center">
            <h2 className="text-2xl font-bold text-primary md:text-3xl">
              My Previous Orders
            </h2>
          </div>

          <div className="overflow-x-auto sm:mt-4">
            <table className="min-w-full divide-y-2 divide-gray-200 bg-transparent text-sm">
              <thead className="bg-accent text-white">
                <tr>
                  <th className="whitespace-nowrap px-4 py-2 font-medium"></th>
                  <th className="text-left whitespace-nowrap px-4 py-2 font-bold">
                    Vendor Info
                  </th>
                  <th className="text-left whitespace-nowrap px-4 py-2 font-bold">
                    Selected Package
                  </th>
                  <th className="text-center whitespace-nowrap px-4 py-2 font-bold">
                    Package Price
                  </th>
                  <th className="text-center whitespace-nowrap px-4 py-2 font-bold">
                    Status
                  </th>
                  <th className="px-4 py-2"></th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200">
                {!orderLoading && orders.length === 0 && (
                  <tr>
                    <td className="py-2 px-4 border-b text-center" colSpan={5}>
                      No Data Available
                    </td>
                  </tr>
                )}
                {!orderLoading &&
                  orders.length > 0 &&
                  renderTablePage(currentPage).map((order) => (
                    <tr key={order?._id}>
                      <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                        <div className="avatar">
                          <div className="mask mask-square w-12 h-12">
                            <img src={order?.packageId?.vendorId?.cover} />
                          </div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-4 py-2">
                        <span className="font-medium text-gray-900">
                          {order?.packageId?.vendorId?.name}
                        </span>
                        <br />
                        <span className="font-medium text-gray-600 text-sm">
                          {getCategoryFullForm(
                            order?.packageId?.vendorId?.category
                          )}
                        </span>
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                        {order?.packageId?.name}
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
                        ${order?.packageId?.price}
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
                        {order?.bookingStatus}
                      </td>
                      <td className="py-2 px-4 text-center flex flex-col gap-2">
                        <label
                          htmlFor="order-details-modal"
                          role="button"
                          className="bg-blue-500 text-white px-4 py-2 rounded-none mr-2"
                          onClick={() => setCurrentOrder(order)}
                        >
                          View
                        </label>
                        <div
                          className="tooltip tooltip-secondary"
                          data-tip={
                            order?.bookingStatus !== "Pending" &&
                            "Not allowed for Cancellation"
                          }
                        >
                          <button
                            className="bg-red-700 text-white px-4 py-2 w-full rounded-none mr-2 disabled:bg-opacity-60"
                            onClick={() => cancelModal(order)}
                            disabled={order?.bookingStatus !== "Pending"}
                          >
                            Cancel Booking
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
            <PaginationComponent
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              totalPages={totalPages}
            />
          </div>
        </div>
      </section>
      <OrderDetailsModal order={currentOrder} />
    </>
  );
};
