import React from "react";
import { Link } from "react-router-dom";

import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

function Product({ data }) {
  return (
    <Link
      to={`/magazine/${data.id}`}
      className="product"
      key={`${data.id}`}
      id={`${data.id}`}
    >
      <img className="product__image" src={`${data.image}`} />
      <div className="product__detailsLeft">
        <h3 className="product__detailsLeft-title">{data.name}</h3>
        <p className="product__detailsLeft-type">{data.type}</p>
      </div>
      <div className="product__detailsRight">
        <p className="product__detailsRight-price">£{data.price}</p>
        <ShoppingCartIcon />
      </div>
    </Link>
  );
}

export default Product;
