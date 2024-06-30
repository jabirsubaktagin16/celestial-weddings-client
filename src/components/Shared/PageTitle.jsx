import React from "react";
import { Helmet } from "react-helmet-async";

export const PageTitle = ({ title }) => {
  return (
    <Helmet>
      <title>
        {title.length === 0
          ? "Celestial Weddings"
          : `${title} | Celestial Weddings`}
      </title>
    </Helmet>
  );
};
