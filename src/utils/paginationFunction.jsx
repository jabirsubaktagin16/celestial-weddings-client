import { useState } from "react";

export const paginationFunction = ({ list }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;
  const totalPages = Math.ceil(vendor.length / rowsPerPage);

  const renderTablePage = (page) => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    return list.slice(start, end);
  };

  return [
    currentPage,
    setCurrentPage,
    rowsPerPage,
    totalPages,
    renderTablePage,
  ];
};
