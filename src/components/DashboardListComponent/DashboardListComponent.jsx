import React from "react";
import { Link } from "react-router-dom";

export const DashboardListComponent = ({ path, icon, title }) => {
  return (
    <li>
      <Link
        to={path}
        className="text-sm rounded-none flex flex-row items-center h-11 focus:outline-none hover:bg-secondary text-white hover:text-primary border-l-4 border-transparent hover:border-accent pr-6"
      >
        <span className="inline-flex justify-center items-center ml-4">
          {icon}
        </span>
        <span className="ml-2 tracking-wide truncate">{title}</span>
      </Link>
    </li>
  );
};
