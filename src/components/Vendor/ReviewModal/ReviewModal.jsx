import { Rating } from "@smastrom/react-rating";
import React, { useState } from "react";
import { ImCross } from "react-icons/im";

export const ReviewModal = ({ vendor, refetch }) => {
  const [rating, setRating] = useState(0);
  return (
    <>
      <input type="checkbox" id="review-modal" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box rounded-none">
          <div className="modal-action">
            <label
              htmlFor="review-modal"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              <ImCross />
            </label>
          </div>
          <h3 className="text-lg font-bold text-center">
            Write a review on {vendor?.name}
          </h3>
          <form action="#" className="mt-8 grid grid-cols-6 gap-6">
            <div className="col-span-6">
              <label
                htmlFor="Email"
                className="block text-sm font-medium text-gray-700 text-center"
              >
                Rate {vendor?.name}
              </label>

              <Rating
                style={{
                  maxWidth: 180,
                  marginTop: "0.25rem",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
                value={rating}
                onChange={setRating}
              />
            </div>
            <div className="col-span-6">
              <label
                htmlFor="Email"
                className="block text-sm font-medium text-gray-700"
              >
                Description
              </label>

              <textarea
                id="description"
                className="textarea textarea-primary resize-none mt-1 w-full rounded-none text-sm text-gray-700"
                placeholder="Write Down Your Review"
                rows={5}
              ></textarea>
            </div>

            <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
              <input
                type="submit"
                role="button"
                className="inline-block w-full shrink-0 rounded-none bg-primary border border-primary px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-primary focus:outline-none focus:ring active:text-primary"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
