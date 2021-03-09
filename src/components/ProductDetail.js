import React, { useState } from "react";
import { useStateValue } from "../StateProvider";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

function ProductDetail({ productDetail }) {
  const [{}, dispatch] = useStateValue();
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  const detailToggler = () => {
    setIsDetailOpen(!isDetailOpen);
  };

  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      selectedProduct: { ...productDetail, quantity: 1 },
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
                style={{ background: color, border: `${color} 1px solid` }}
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
              - dimensions: <span> W: {productDetail.dimensions.width}cm</span>,
              <span> D: {productDetail.dimensions.depth}cm</span>,
              <span> H: {productDetail.dimensions.height}cm</span>
            </p>
            <p>
              - seat dimensions:
              <span> W: {productDetail["seat_dimensions"].width}cm</span>,
              <span> D: {productDetail["seat_dimensions"].depth}cm</span>,
              <span> H: {productDetail["seat_dimensions"].height}cm</span>
            </p>

            <p>- weight: {productDetail.weight} kg</p>
            <p>- materials: {productDetail.materials.join(" , ")}</p>
            <p>
              - filing materials:{" "}
              {productDetail["filling_materials"].join(" , ")}
            </p>
            <p>- comfort level: {productDetail["comfort_level"]}</p>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default ProductDetail;
