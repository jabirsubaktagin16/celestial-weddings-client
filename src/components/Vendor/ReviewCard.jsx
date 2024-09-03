import React from "react";
import avatar from "../../assets/user_avatar.png";

export const ReviewCard = ({ review }) => {
  return (
    <div className="lg:col-span-2 xl:col-auto">
      <div className="flex flex-col justify-between w-full h-full px-6 py-6 bg-secondary md:px-14 rounded-2xl md:py-14 dark:bg-trueGray-800">
        <p className="text-2xl leading-normal ">{review?.reviewDescription}</p>

        <div className="flex items-center mt-8 space-x-3">
          <div className="avatar">
            <div className="ring-primary ring-offset-base-100 w-12 rounded-full ring ring-offset-2">
              <img src={review?.userId?.image || avatar} />
            </div>
          </div>
          <div>
            <div className="text-lg font-medium text-primary">
              {review?.userId?.name}
            </div>
            <div className="text-gray-600 ">
              {review?.userId?.occupation || "From one of our Customers"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
