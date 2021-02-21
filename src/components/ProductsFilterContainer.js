import React from "react";
import Products from "./Products";
import Filters from "./Filters";

function ProductsFilterContainer() {
  return (
    <div className="productsFilterContainer container">
      <Filters />
      <Products />
    </div>
  );
}

export default ProductsFilterContainer;
