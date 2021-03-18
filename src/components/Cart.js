import React from "react";
import { Link } from "react-router-dom";
import emptyCartButton from "../Images/emptyCartButton.png";
import { useStateValue } from "../StateProvider";

function Cart() {
  const [{ cart }, dispatch] = useStateValue();

  // update cart with total item quantity
  // no matter same item or not
  let totalCartItems = 0;
  for (let i = 0; i < cart.length; i++) {
    totalCartItems += cart[i].quantity;
  }

  const toOrdersPage = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Link className="cart" to="/orders" onClick={toOrdersPage}>
      <img
        src={`${emptyCartButton}`}
        className="cart__icon"
        alt="Empty Cart Button"
      />
      {cart.length !== 0 ? (
        <span className="cart__itemsNumber">{totalCartItems}</span>
      ) : null}
    </Link>
  );
}

export default Cart;
