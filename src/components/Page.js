import React from "react";

function Page({ currentPage, pageNumber, handlePageClick }) {
  return (
    <a
      className={`page ${currentPage === pageNumber ? "current" : ""}`}
      data-page-number={pageNumber}
      key={pageNumber}
      onClick={handlePageClick}
    >
      {pageNumber}
    </a>
  );
}

export default Page;
