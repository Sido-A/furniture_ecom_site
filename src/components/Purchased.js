import React from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";

function Purchased() {
  const [{}, dispatch] = useStateValue();

  const emptyCartAfterPurchase = () => {
    dispatch({
      type: "PURCHASED_EMPTY_CART",
    });
  };

  return (
    <div className="purchased">
      <div className="container">
        <div className="purchased__typoGraph">
          <h1>Thank you for your order!</h1>
          <Link to="/" onClick={emptyCartAfterPurchase}>
            Back to top
          </Link>
        </div>

        <div className="purchased__background-wrap">
          <div class="bubble x1"></div>
          <div class="bubble x2"></div>
          <div class="bubble x3"></div>
          <div class="bubble x4"></div>
          <div class="bubble x5"></div>
          <div class="bubble x6"></div>
          <div class="bubble x7"></div>
          <div class="bubble x8"></div>
          <div class="bubble x9"></div>
          <div class="bubble x10"></div>
        </div>
      </div>
    </div>
  );
}

export default Purchased;
