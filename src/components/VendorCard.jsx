import React from "react";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";
import { utilFunctions } from "../utils/utilFunctions";

export const VendorCard = ({ singleVendor, loading }) => {
  const { getCategoryFullForm } = utilFunctions();

  const categoryTitle = getCategoryFullForm(singleVendor?.category);

  return (
    <div className="rounded overflow-hidden shadow-lg flex flex-col">
      {loading && (
        <Skeleton
          style={{
            width: "20rem",
            height: "25rem",
          }}
        />
      )}
      {!loading && (
        <>
          <div className="relative h-96 w-full">
            <a href="#">
              <img className=" h-full object-cover" src={singleVendor?.cover} />
              <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
            </a>
            <Link to={`/vendors/${singleVendor?._id}`}>
              <div className="text-xs absolute top-0 right-0 bg-primary px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-primary transition duration-500 ease-in-out">
                {categoryTitle}
              </div>
            </Link>
          </div>
          <div className="px-6 py-4 mb-auto">
            <Link
              to={`/vendors/${singleVendor?._id}`}
              className="font-medium text-lg hover:text-primary transition duration-500 ease-in-out inline-block mb-2"
              preventScrollReset={true}
            >
              <h5>{singleVendor?.name}</h5>
            </Link>
            <p className="text-gray-500 text-sm">{singleVendor?.description}</p>
          </div>
        </>
      )}
    </div>
  );
};
