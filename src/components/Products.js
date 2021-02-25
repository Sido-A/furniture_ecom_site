import React, { useState, useEffect } from "react";
import Product from "./Product";
import Page from "./Page";
import db from "../firebase";

function Products() {
  const [furnitureData, setFurnitureData] = useState([]);

  useEffect(() => {
    db.collection("furnitures")
      .get()
      .then((snap) => {
        const data = snap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log(data);
        setFurnitureData(data);
      });
  }, []);
  //show products according to the filters
  // use input:checked

  //show product when search field is typed

  //pagination limiting the view to per page


  const pagesArr = [1, 2, 3, 4, ">"];
  return (
    <div className="products">
      <div className="products__container">
        {furnitureData.map((data) => (
          <Product data={data} />
        ))}
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
