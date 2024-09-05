import React from "react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { Link } from "react-router-dom";
import { StarRating } from "./StarRating";

export const MyReviewCard = ({ review }) => {
  return (
    <article className="relative rounded-xl bg-white p-4 ring ring-indigo-50 sm:p-6 lg:p-8 sm:mt-4">
      {/* Button in the top-right corner */}
      <div className=" absolute top-4 right-4 p-2 dropdown dropdown-bottom dropdown-end">
        <div tabIndex={0} className="cursor-pointer">
          <HiOutlineDotsHorizontal />
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-none w-52 p-2 shadow"
        >
          <li>
            <a>Edit</a>
          </li>
          <li>
            <a>Delete</a>
          </li>
          <li>
            <Link to={`/vendors/${review?.vendorId?._id}`}>
              View Vendor Profile
            </Link>
          </li>
        </ul>
      </div>

      <div className="flex items-start sm:gap-8">
        <div className="w-full">
          <h3 className="text-lg font-medium sm:text-xl text-accent">
            {review?.vendorId?.name}
          </h3>

          <p className="mt-1 text-sm text-gray-700">
            {review?.reviewDescription}
          </p>

          <div className="mt-4 sm:flex sm:items-center sm:gap-2">
            <div className="flex items-center gap-1 text-gray-500">
              <p className="text-sm font-bold">Your Rating:</p>
            </div>

            <StarRating rating={review?.rating} />
          </div>
        </div>
      </div>
    </article>
  );
};
