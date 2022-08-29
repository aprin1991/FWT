import React from "react";

const Pagination = ({ pageCount, changePage, currentPage }) => {
  const handleChange = (page: number) => {
    if (page === currentPage) return;
    changePage(page);
  };
  return (
    <ul className="pagination">
      {Array.from(Array(pageCount), (e, i) => {
        return (
          <li
            className={`${currentPage === i ? "current" : ""}`}
            key={i}
            onClick={() => handleChange(i)}
          >
            {i + 1}
          </li>
        );
      })}
    </ul>
  );
};

export default Pagination;
