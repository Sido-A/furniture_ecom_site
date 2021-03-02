import React from "react";
import Products from "./Products";
import Filters from "./Filters";

function ProductsFilterContainer({ changeDetector }) {
  return (
    <div className="productsFilterContainer container container--prl">
      <Filters changeDetector={changeDetector} />
      <Products />
    </div>
  );
}

export default ProductsFilterContainer;
