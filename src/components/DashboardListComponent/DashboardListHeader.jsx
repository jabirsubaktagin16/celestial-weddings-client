import React from "react";

export const DashboardListHeader = ({ title }) => {
  return (
    <li className="px-5">
      <div className="flex flex-row items-center h-8">
        <div className="text-sm font-light tracking-wide text-secondary">
          {title}
        </div>
      </div>
    </li>
  );
};
