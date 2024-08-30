import React from "react";
import { ImCross } from "react-icons/im";

export const BookingDetailsModal = ({ _event, setEvent }) => {
  return (
    <>
      <input
        type="checkbox"
        id="booking-details-modal"
        className="modal-toggle"
      />
      <div className="modal" role="dialog">
        <div className="modal-box rounded-none bg-white">
          <div className="modal-action">
            <label
              htmlFor="booking-details-modal"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              <ImCross />
            </label>
          </div>
          <div className="flow-root">
            <dl className="-my-3 divide-y divide-gray-100 text-sm">
              <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Bride Name</dt>
                <dd className="text-gray-700 sm:col-span-2">
                  {_event?.brideName}
                </dd>
              </div>

              <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Groom Name</dt>
                <dd className="text-gray-700 sm:col-span-2">
                  {_event?.groomName}
                </dd>
              </div>

              <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Contact Number</dt>
                <dd className="text-gray-700 sm:col-span-2">
                  {_event?.contactNumber}
                </dd>
              </div>

              <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">E-Mail</dt>
                <dd className="text-gray-700 sm:col-span-2">{_event?.email}</dd>
              </div>

              <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Venue Name</dt>
                <dd className="text-gray-700 sm:col-span-2">
                  {_event?.venueName}
                </dd>
              </div>
              <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Event Date</dt>
                <dd className="text-gray-700 sm:col-span-2">
                  {new Date(_event?.eventDate).toLocaleString()}
                </dd>
              </div>
              <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Selected Package</dt>
                <dd className="text-gray-700 sm:col-span-2">
                  {_event?.packageName}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </>
  );
};
