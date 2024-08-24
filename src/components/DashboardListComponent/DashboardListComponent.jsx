import React from "react";
import { Link, useLocation } from "react-router-dom";

export const DashboardListComponent = ({ elements, title }) => {
  let location = useLocation();
  let getCurrentLocation = location.pathname.split("/");

  const checkActivePath = (st) =>
    `block rounded-none px-4 py-2 text-sm font-medium ${
      getCurrentLocation[2] === st
        ? "block rounded-none px-4 py-2 text-sm font-medium text-base-100 bg-base-200 "
        : "text-gray-500 hover:bg-base-200 hover:text-base-100"
    }`;
  return (
    <li>
      <details className="group [&_summary::-webkit-details-marker]:hidden">
        <summary className="flex cursor-pointer items-center justify-between rounded-none px-4 py-2 text-gray-500 hover:bg-primary hover:text-base-100">
          <span className="text-sm font-medium"> {title} </span>

          <span className="shrink-0 transition duration-300 group-open:-rotate-180">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </summary>

        <ul className="mt-2 space-y-1 px-4">
          {elements.map((el) => (
            <li key={el?.id}>
              <Link to={el?.path} className={checkActivePath(el?.path)}>
                {el?.title}
              </Link>
            </li>
          ))}
        </ul>
      </details>
    </li>
  );
};
