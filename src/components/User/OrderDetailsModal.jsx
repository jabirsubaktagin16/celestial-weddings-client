import React from "react";
import { ImCross } from "react-icons/im";
import { utilFunctions } from "../../utils/utilFunctions";

export const OrderDetailsModal = ({ order }) => {
  const { getCategoryFullForm } = utilFunctions();
  return (
    <>
      <input
        type="checkbox"
        id="order-details-modal"
        className="modal-toggle"
      />
      <div className="modal" role="dialog">
        <div className="modal-box rounded-none bg-white">
          <div className="modal-action">
            <label
              htmlFor="order-details-modal"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              <ImCross />
            </label>
          </div>
          <div className="flow-root">
            <dl className="-my-3 divide-y divide-gray-100 text-sm">
              <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-bold text-gray-900">Vendor Name</dt>
                <dd className="text-gray-700 sm:col-span-2">
                  {order?.packageId?.vendorId?.name}
                </dd>
              </div>

              <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-bold text-gray-900">Category</dt>
                <dd className="text-gray-700 sm:col-span-2">
                  {getCategoryFullForm(order?.packageId?.vendorId?.category)}
                </dd>
              </div>

              <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-bold text-gray-900">Bride Name</dt>
                <dd className="text-gray-700 sm:col-span-2">
                  {order?.brideName}
                </dd>
              </div>

              <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-bold text-gray-900">Groom Name</dt>
                <dd className="text-gray-700 sm:col-span-2">
                  {order?.groomName}
                </dd>
              </div>

              <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-bold text-gray-900">Contact Number</dt>
                <dd className="text-gray-700 sm:col-span-2">
                  {order?.contactNumber}
                </dd>
              </div>
              <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-bold text-gray-900">Selected Package</dt>
                <dd className="text-gray-700 sm:col-span-2">
                  {order?.packageId?.name}
                </dd>
              </div>
              <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-bold text-gray-900">Venue Name</dt>
                <dd className="text-gray-700 sm:col-span-2">
                  {order?.venueName}
                </dd>
              </div>
              <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-bold text-gray-900">Event Date</dt>
                <dd className="text-gray-700 sm:col-span-2">
                  {new Date(order?.eventDate).toLocaleString()}
                </dd>
              </div>
              <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-bold text-gray-900">Offered Services</dt>
                <dd className="text-gray-700 sm:col-span-2">
                  <ol className="space-y-2 list-decimal list-inside">
                    {order?.packageId?.servicesOffered.map((sp, index) => (
                      <li key={index}>{sp}</li>
                    ))}
                  </ol>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </>
  );
};
