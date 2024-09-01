import React from "react";
import { BiDetail } from "react-icons/bi";
import { FaPhoneAlt } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { IoIosMail } from "react-icons/io";
import { MdOutlineHouse } from "react-icons/md";
import { utilFunctions } from "../../utils/utilFunctions";

export const VendorDetailsModal = ({ vendor, setVendor }) => {
  const { getCategoryFullForm } = utilFunctions();

  const categoryFullForm = getCategoryFullForm(vendor?.category);
  return (
    <>
      <input
        type="checkbox"
        id="vendor-details-modal"
        className="modal-toggle"
      />
      <div className="modal" role="dialog">
        <div className="modal-box rounded-none bg-white">
          <div className="modal-action">
            <label
              htmlFor="vendor-details-modal"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              <ImCross />
            </label>
          </div>
          <div className="block rounded-none p-4">
            <img
              alt=""
              src={vendor?.cover}
              className="h-56 w-full rounded-none object-cover"
            />

            <div className="mt-2">
              <dl>
                <div>
                  <dt className="sr-only">Name</dt>
                  <dd className="font-medium">{vendor?.name}</dd>
                </div>
              </dl>
              <div>
                <dt className="sr-only">Category</dt>
                <dd className="text-sm text-gray-500">{categoryFullForm}</dd>
              </div>

              <div className="mt-6 flex flex-wrap items-start gap-8 text-xs">
                <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
                  <MdOutlineHouse className="text-primary text-lg" />
                  <div className="mt-1.5 sm:mt-0">
                    <p className="text-gray-500">Address</p>
                    <p className="font-medium">{vendor?.address}</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
                  <IoIosMail className="text-primary text-lg" />
                  <div className="mt-1.5 sm:mt-0">
                    <p className="text-gray-500">E-Mail</p>
                    <p className="font-medium">{vendor?.email}</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
                  <FaPhoneAlt className="text-lg text-primary" />
                  <div className="mt-1.5 sm:mt-0">
                    <p className="text-gray-500">Contact Number</p>
                    <p className="font-medium">{vendor?.phoneNumber}</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2 w-full">
                  <BiDetail className="text-lg text-primary" />
                  <div className="mt-1.5 sm:mt-0 w-full">
                    <p className="text-gray-500">Description</p>
                    <p className="font-medium break-words whitespace-normal">
                      {vendor?.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
