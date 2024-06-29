import React from "react";

export const PackageCard = ({ availablePackage }) => {
  return (
    <div className="w-80 h-full p-3 transition-transform duration-500 hover:scale-105">
      <div className="w-full h-full bg-white shadow-xl rounded-lg overflow-hidden flex flex-col justify-between">
        <header className="text-center leading-tight pt-10 pb-6">
          <h2 className="uppercase tracking-wide text-sm font-bold text-gray-700">
            {availablePackage?.name}
          </h2>
          <div className="text-5xl text-gray-900 font-bold tracking-tight">
            ${availablePackage?.price}
          </div>
        </header>
        <div className="flex flex-col p-6 border-t border-gray-300 bg-gray-100 flex-grow">
          {availablePackage?.servicesOffered &&
            availablePackage?.servicesOffered.map((service) => (
              <div
                className="flex-1 inline-flex items-center mb-3"
                key={service}
              >
                <div className="bg-green-300 mr-3 p-1 rounded-full">
                  <svg
                    className="h-3 w-3 text-green-800 fill-current"
                    viewBox="0 0 20 20"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <polygon points="0 11 2 9 7 14 18 3 20 5 7 18"></polygon>
                  </svg>
                </div>
                <p className="text-xs">{service}</p>
              </div>
            ))}
        </div>
        <div className="p-6 border-t border-gray-300 bg-white text-center">
          <button className="bg-primary text-white px-4 py-2 rounded">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};
