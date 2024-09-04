import React from "react";
import { ImCross } from "react-icons/im";

export const PackageDetailsModal = ({ _package }) => {
  return (
    <>
      <input
        type="checkbox"
        id="package-details-modal"
        className="modal-toggle"
      />
      <div className="modal" role="dialog">
        <div className="modal-box rounded-none bg-white">
          <div className="modal-action">
            <label
              htmlFor="package-details-modal"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              <ImCross />
            </label>
          </div>
          <div className="flow-root">
            <dl className="-my-3 divide-y divide-gray-100 text-sm">
              <div className="grid grid-cols-1 gap-1 py-3 even:bg-base-100 sm:grid-cols-3 sm:gap-4">
                <dt className="font-bold text-gray-900">Name</dt>
                <dd className="text-gray-700 sm:col-span-2">
                  {_package?.name}
                </dd>
              </div>

              <div className="grid grid-cols-1 gap-1 py-3 even:bg-base-100 sm:grid-cols-3 sm:gap-4">
                <dt className="font-bold text-gray-900">Base Price</dt>
                <dd className="text-gray-700 sm:col-span-2">
                  ${_package?.price}
                </dd>
              </div>

              <div className="grid grid-cols-1 gap-1 py-3 even:bg-base-100 sm:grid-cols-3 sm:gap-4">
                <dt className="font-bold text-gray-900">Discount Status</dt>
                <dd className="text-gray-700 sm:col-span-2">
                  {_package?.discountStatus ? "Available" : "Not Available"}
                </dd>
              </div>

              {_package?.discountStatus && (
                <div className="grid grid-cols-1 gap-1 py-3 even:bg-base-100 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-bold text-gray-900">
                    Discount Percentage
                  </dt>
                  <dd className="text-gray-700 sm:col-span-2">
                    {_package?.discountPercentage}
                  </dd>
                </div>
              )}

              <div className="grid grid-cols-1 gap-1 py-3 even:bg-base-100 sm:grid-cols-3 sm:gap-4">
                <dt className="font-bold text-gray-900">Offered Services</dt>
                <dd className="text-gray-700 sm:col-span-2">
                  <ol className="space-y-2 list-decimal list-inside">
                    {_package?.servicesOffered.map((sp, index) => (
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
