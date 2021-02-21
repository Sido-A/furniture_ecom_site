import React from "react";
import Product from "./Product";
import Page from "./Page";

function Products() {
  const pagesArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="products">
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />

      <div className="products__pages">
        {pagesArr.map((page) => (
          <Page pageNumber={page} />
        ))}
      </div>
    </div>
  );
}

export default Products;
