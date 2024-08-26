import React from "react";
import Skeleton from "react-loading-skeleton";

export const PackageCardSkeleton = () => {
  return (
    <div>
      <Skeleton
        style={{
          width: "20rem",
          height: "25rem",
        }}
      />
    </div>
  );
};
