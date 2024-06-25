import React from "react";
import services from "../../public/services.json";

export const VendorCard = ({ singleVendor, loading }) => {
  const categoryTitle = services.find(
    (v) => v.shortForm === singleVendor?.category
  );
  return (
    <div className="max-w-xs cursor-pointer rounded-none bg-white p-2 shadow duration-150 hover:scale-105 hover:shadow-md">
      <img
        className="w-full rounded-lg object-cover object-center"
        src={singleVendor?.cover}
        alt="product"
      />
      <p className="my-4 pl-4 font-bold text-gray-500">{categoryTitle.title}</p>
      <h5 className="mb-4 ml-4 text-xl font-semibold text-text">
        {singleVendor?.name}
      </h5>
    </div>
  );
};
