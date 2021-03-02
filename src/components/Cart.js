import React from "react";
import { Link } from "react-router-dom";
import emptyCartButton from "../Images/emptyCartButton.png";
import { useStateValue } from "../StateProvider";

function Cart() {
  const [{ cart }, dispatch] = useStateValue();
  return (
    <Link className="cart" to="#">
      <img
        src={`${emptyCartButton}`}
        className="cart__icon"
        alt="Empty Cart Button"
      />
      {cart.length !== 0 ? (
        <span className="cart__itemsNumber">{cart.length}</span>
      ) : null}
    </Link>
  );
}

export default Cart;
