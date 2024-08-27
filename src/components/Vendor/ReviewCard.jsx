import React from "react";

export const ReviewCard = ({ review }) => {
  return (
    <div className="lg:col-span-2 xl:col-auto">
      <div className="flex flex-col justify-between w-full h-full px-6 py-6 bg-secondary md:px-14 rounded-2xl md:py-14 dark:bg-trueGray-800">
        <p className="text-2xl leading-normal ">{review?.reviewDescription}</p>

        <div className="flex items-center mt-8 space-x-3">
          <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
            <img
              alt="Avatar"
              src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?crop=faces&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjIwMTQ5ODEx&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=100&amp;h=100"
              loading="lazy"
            />
          </div>
          <div>
            <div className="text-lg font-medium text-primary">
              Sarah Steiner
            </div>
            <div className="text-gray-600 ">VP Sales at Google</div>
          </div>
        </div>
      </div>
    </div>
  );
};
