import React from "react";
import { Link } from "react-router-dom";
import services from "../../public/services.json";

export const VendorCard = ({ singleVendor }) => {
  const categoryTitle = services.find(
    (v) => v.shortForm === singleVendor?.category
  );
  return (
    <div className="rounded overflow-hidden shadow-lg flex flex-col">
      <a href="#"></a>
      <div className="relative h-96 w-full">
        <a href="#">
          <img className=" h-full object-cover" src={singleVendor?.cover} />
          <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
        </a>
        <a href="#!">
          <div className="text-xs absolute top-0 right-0 bg-primary px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-primary transition duration-500 ease-in-out">
            {categoryTitle.title}
          </div>
        </a>
      </div>
      <div className="px-6 py-4 mb-auto">
        <Link
          to={"/"}
          className="font-medium text-lg hover:text-primary transition duration-500 ease-in-out inline-block mb-2"
        >
          <h5>{singleVendor?.name}</h5>
        </Link>
        <p className="text-gray-500 text-sm">{singleVendor?.description}</p>
      </div>
      <div className="px-6 py-3 flex flex-row items-center justify-between bg-gray-100">
        <span
          href="#"
          className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center"
        >
          <span className="ml-1">6 mins ago</span>
        </span>
      </div>
    </div>
  );
};
