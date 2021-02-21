import React from "react";
import Product from "./Product";
import Page from "./Page";

function Products() {
  const pagesArr = [1, 2, 3, 4, ">"];
  return (
    <div className="products">
      <div className="products__container">
        <Product />
        <Product />
      </div>

      <div className="products__pages">
        {pagesArr.map((page) => (
          <Page pageNumber={page} />
        ))}
      </div>
    </div>
  );
}

export default Products;
