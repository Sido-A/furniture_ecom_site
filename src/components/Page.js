import React from "react";

function Page({ pageNumber, handlePageClick }) {
  return (
    <a
      className="page"
      data-page-number={pageNumber}
      key={pageNumber}
      onClick={handlePageClick}
    >
      {pageNumber}
    </a>
  );
}

export default Page;
