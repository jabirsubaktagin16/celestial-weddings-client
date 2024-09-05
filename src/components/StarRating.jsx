import React from "react";
import { FaStar } from "react-icons/fa";

export const StarRating = ({ rating }) => {
  const totalStars = 5;
  return (
    <p className="mt-2 text-xs font-medium sm:mt-0 flex gap-1">
      {/* Map through the stars and apply color conditionally based on rating */}
      {[...Array(totalStars)].map((_, index) => (
        <FaStar
          key={index}
          className={index < rating ? "text-yellow-500" : "text-gray-400"}
        />
      ))}
    </p>
  );
};
