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
          id: doc.uid,
          ...doc.data(),
        }));
        console.log(data);
        setFurnitureData(data);
      });
  }, []);

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
