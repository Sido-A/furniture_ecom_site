import React from "react";
import Products from "./Products";
import Filter from "./Filter";

function ProductsFilterContainer() {
  return (
    <div className="productsFilterContainer container">
      <Filter />
      <Products />
    </div>
  );
}

export default ProductsFilterContainer;
