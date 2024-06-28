import React from "react";

export const PackageCard = () => {
  return (
    <div className="w-80 h-96 p-3 hover:scale-105">
      <div className="w-full bg-white shadow-xl rounded-lg overflow-hidden">
        <header className="text-center leading-tight pt-10 pb-6">
          <h2 className="uppercase tracking-wide text-sm font-bold text-gray-700">
            Private Instruction
          </h2>
          <div className="text-5xl text-gray-900 font-bold tracking-tight">
            $45
          </div>
        </header>
        <div className="flex flex-col p-6 border-t border-gray-300 bg-gray-100">
          <div className="flex-1 inline-flex items-center mb-3">
            <div className="bg-green-300 mr-3 p-1 rounded-full">
              <svg
                className="h-3 w-3 text-green-800 fill-current"
                viewBox="0 0 20 20"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <polygon points="0 11 2 9 7 14 18 3 20 5 7 18"></polygon>
              </svg>
            </div>
            <p className="text-xs">One-on-One Instruction</p>
          </div>
          <div className="flex-1 inline-flex items-center mb-3">
            <div className="bg-green-300 mr-3 p-1 rounded-full">
              <svg
                className="h-3 w-3 text-green-800 fill-current"
                viewBox="0 0 20 20"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <polygon points="0 11 2 9 7 14 18 3 20 5 7 18"></polygon>
              </svg>
            </div>
            <p className="text-xs">Lesson Packages</p>
          </div>
          <div className="flex-1 inline-flex items-center mb-3">
            <div className="bg-green-300 mr-3 p-1 rounded-full">
              <svg
                className="h-3 w-3 text-green-800 fill-current"
                viewBox="0 0 20 20"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <polygon points="0 11 2 9 7 14 18 3 20 5 7 18"></polygon>
              </svg>
            </div>
            <p className="text-xs">Flexible Scheduling</p>
          </div>
          <div className="flex-1 inline-flex items-center mb-3">
            <div className="bg-green-300 mr-3 p-1 rounded-full">
              <svg
                className="h-3 w-3 text-green-800 fill-current"
                viewBox="0 0 20 20"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <polygon points="0 11 2 9 7 14 18 3 20 5 7 18"></polygon>
              </svg>
            </div>
            <p className="text-xs">Dang this much!</p>
          </div>
          <div className="flex-1 inline-flex items-center">
            <div className="bg-green-300 mr-3 p-1 rounded-full">
              <svg
                className="h-3 w-3 text-green-800 fill-current"
                viewBox="0 0 20 20"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <polygon points="0 11 2 9 7 14 18 3 20 5 7 18"></polygon>
              </svg>
            </div>
            <p className="text-xs">Something else cool</p>
          </div>
        </div>
      </div>
    </div>
  );
};
