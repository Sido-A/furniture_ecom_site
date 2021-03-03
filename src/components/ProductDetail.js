import React, { useState } from "react";
import { useStateValue } from "../StateProvider";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

function ProductDetail({ productDetail }) {
  console.log("productDetail", productDetail);
  const [{}, dispatch] = useStateValue();
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  const detailToggler = () => {
    setIsDetailOpen(!isDetailOpen);
  };

  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      selectedProduct: productDetail,
    });
  };
  return (
    <div className="productDetail container">
      <div className="productDetail__left">
        <img
          className="detailTopImg"
          src={productDetail.image}
          alt="product photo"
        />
        <div className="productDetail__left-desktopImgSlider">
          <span>
            <ChevronLeftIcon />
          </span>
          <img src={productDetail.image} alt="more" />
          <img src={productDetail.image} alt="more" />
          <img src={productDetail.image} alt="more" />
          <img src={productDetail.image} alt="more" />
          <span>
            <ChevronRightIcon />
          </span>
        </div>
      </div>
      <div className="productDetail__right">
        <div className="productDetail__right-typoGraph">
          <h1>{productDetail.name}</h1>
          <p className="description">{productDetail.description}</p>
          <p className="price">£{productDetail.price}</p>
          <p className="dispatchWithin">dispatch in 2-3 weeks</p>
        </div>
        <div className="productDetail__right-colors">
          <ul>
            {productDetail.colors.map((color) => (
              <li
                className={`colorCircle ${color}`}
                style={{ background: color }}
              ></li>
            ))}
          </ul>
        </div>
        <button className="button" onClick={addToCart} value="add to basket">
          add to basket
        </button>
        <button className="button detailToggler" onClick={detailToggler}>
          details <span>{isDetailOpen ? "-" : "+"}</span>
        </button>
        {isDetailOpen ? (
          <div className="productDetail__right-details">
            <p>
              - seat dimensions:
              <span> W: 267cm</span>,<span> D: 267cm</span>,
              <span> H: 67cm</span>
            </p>
            <p>- seat dimensions:</p>
            <p>- seat dimensions:</p>
            <p>- seat dimensions:</p>
            <p>- seat dimensions:</p>
            <p>- seat dimensions:</p>
            <p>- seat dimensions:</p>
            <p>- seat dimensions:</p>
            <p>- seat dimensions:</p>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default ProductDetail;
