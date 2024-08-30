import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { PageTitle } from "../../../components/Shared/PageTitle";
import { BookingDetailsModal } from "../../../components/Vendor/BookingModal/BookingDetailsModal";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useUser from "../../../hooks/useUser";
import useVendor from "../../../hooks/useVendor";
import { AuthContext } from "../../../providers/AuthProvider";

const BookingSwal = withReactContent(Swal);

export const ViewAllBookings = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const [userInfo, userLoading, userRefetch] = useUser.userDetails(user?.email);
  const [bookingList, bookingLoading, bookingRefetch] = useVendor.bookings(
    userInfo?.vendorCompany
  );

  const [_event, setEvent] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;
  const totalPages = Math.ceil(bookingList.length / rowsPerPage);

  const renderTablePage = (page) => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    return bookingList.slice(start, end);
  };

  const openModal = (_event) => {
    BookingSwal.fire({
      title: "Change the Booking Status",
      html: (
        <div>
          <div className="form-control mb-2">
            <select
              id="statusSelect"
              className="select select-primary rounded-none"
              defaultValue={_event?.bookingStatus}
            >
              <option value="Pending">Pending</option>
              <option value="Approved">Approved</option>
              <option value="Rejected">Rejected</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
        </div>
      ),
      confirmButtonText: "Confirm",
      showCancelButton: true,
      allowOutsideClick: false,
      preConfirm: () => {
        const selectedOption = document.getElementById("statusSelect").value;
        return selectedOption;
      },
    }).then(async (result) => {
      if (result.isConfirmed) {
        const bookingStatusInfo = {
          vendorId: userInfo?.vendorCompany,
          bookingStatus: result.value,
        };

        const bookingRes = await axiosSecure.patch(
          `/bookings/update/${_event?._id}`,
          bookingStatusInfo
        );

        if (bookingRes?.data?.response.modifiedCount > 0) {
          bookingRefetch();
          toast.success(`Booking Status updated`);
        }
      }
    });
  };

  return (
    <>
      <PageTitle title={"View All Bookings"} />
      <div className="container mx-auto px-4 py-8">
        <h3 className="text-center font-bold mb-8">View All Bookings</h3>
        <table className="min-w-full rounded-none">
          <thead>
            <tr>
              <th className="py-2 px-4 bg-accent text-white">Event Date</th>

              <th className="py-2 px-4 bg-accent text-white">Package Name</th>
              <th className="py-2 px-4 bg-accent text-white">Venue Name</th>
              <th className="py-2 px-4 bg-accent text-white">Status</th>
              <th className="py-2 px-4 bg-accent text-white">Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookingList && bookingList.length === 0 && (
              <tr>
                <td className="py-2 px-4 border-b text-center" colSpan={4}>
                  No Data Available
                </td>
              </tr>
            )}
            {renderTablePage(currentPage).map((singleBooking) => (
              <tr key={singleBooking?._id}>
                <td className="py-2 px-4 border-b text-center">
                  {new Date(singleBooking?.eventDate).toLocaleString()}
                </td>

                <td className="py-2 px-4 border-b text-center">
                  {singleBooking?.packageName}
                </td>

                <td className="py-2 px-4 border-b text-center">
                  {singleBooking?.venueName}
                </td>
                <td className="py-2 px-4 border-b text-center">
                  {singleBooking?.bookingStatus}
                </td>

                <td className="py-2 px-4 border-b text-center">
                  <label
                    htmlFor="booking-details-modal"
                    role="button"
                    className="bg-blue-500 text-white px-4 py-2 rounded-none mr-2"
                    onClick={() => setEvent(singleBooking)}
                  >
                    View
                  </label>
                  <button
                    onClick={() => openModal(singleBooking)}
                    className="bg-yellow-500 text-white px-4 py-2 rounded-none mr-2"
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-center items-center mx-auto mt-4">
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
        <BookingDetailsModal _event={_event} setEvent={setEvent} />
      </div>
    </>
  );
};
