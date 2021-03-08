import React from "react";
import { Link, useHistory } from "react-router-dom";
import cartButton from "../Images/cartButton.png";
import { useStateValue } from "../StateProvider";

function Product({ data }) {
  const [{}, dispatch] = useStateValue();
  const history = useHistory();

  const toProductDetailOrAddToCart = (e) => {
    if (e.target.name === "cart") {
      dispatch({
        type: "ADD_TO_CART",
        selectedProduct: { ...data, quantity: 1 },
      });
    } else {
      dispatch({
        type: "PRODUCT_DETAIL",
        selectedProduct: data,
      });
      history.push(`/magazine/${data.id}`);
    }
  };

  return (
    <Link
      className="product"
      key={`${data.id}`}
      id={`${data.id}`}
      onClick={toProductDetailOrAddToCart}
    >
      <img className="product__image" src={`${data.image}`} />
      <div className="product__detailsLeft">
        <h3 className="product__detailsLeft-title">{data.name}</h3>
        <p className="product__detailsLeft-type">{data.type}</p>
      </div>
      <div className="product__detailsRight">
        <p className="product__detailsRight-price">£{data.price}</p>
        <img src={`${cartButton}`} alt="Add to cart button" name="cart" />
      </div>
    </Link>
  );
}

export default Product;
