import React, { useState } from "react";
import Product from "./Product";
import Page from "./Page";
import { useStateValue } from "../StateProvider";

function Products() {
  const [{ products }, dispatch] = useStateValue();
  const [currentPage, setCurrentPage] = useState(1);
  const [contentPerPage, setContentPerPage] = useState(6);
  const indexOfLastContent = currentPage * contentPerPage;
  const indexOfFirstContent = indexOfLastContent - contentPerPage;
  const currentPageContents = products.slice(
    indexOfFirstContent,
    indexOfLastContent
  );

  const handlePageClick = (e) => {
    const selectedPageNumber = parseInt(
      e.target.getAttribute("data-page-number")
    );
    setCurrentPage(selectedPageNumber);
  };

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(products.length / contentPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="products">
      <div className="products__container">
        {currentPageContents.map((data) => (
          <Product data={data} />
        ))}
      </div>

      <div className="products__pages">
        {pageNumbers.map((page) => (
          <Page
            currentPage={currentPage}
            pageNumber={page}
            handlePageClick={handlePageClick}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
