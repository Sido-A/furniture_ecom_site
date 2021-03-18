import React, { useState, useEffect } from "react";
import { useStateValue } from "../StateProvider";
import Order from "./Order";
import Login from "./Login";

function Orders() {
  const [{ cart, user }, dispatch] = useStateValue();
  const [showLoginForm, setShowLoginForm] = useState(false);

  useEffect(() => {
    console.log("user logged in");
    setShowLoginForm(false);
  }, [user]);

  const itemOrderedCart = cart.sort((itemA, itemB) => {
    return itemA.itemId - itemB.itemId;
  });

  const isUserLoggedIn = () => {
    if (!user) {
      setShowLoginForm(true);
    }
  };

  return (
    <div className="orders">
      {cart.length !== 0 ? (
        <div className="orders__container container">
          {itemOrderedCart.map((cartItem) => (
            <Order cartItem={cartItem} />
          ))}
        </div>
      ) : (
        <div className="orders__empty">
          <h1>Cart is empty</h1>
        </div>
      )}
      {cart.length !== 0 ? (
        <div className="orders__purchaseButton">
          <button className="button" onClick={isUserLoggedIn}>
            Purchase
          </button>
        </div>
      ) : null}
      {showLoginForm && (
        <div className="overlayLoginForm">
          <Login />
        </div>
      )}
    </div>
  );
}

export default Orders;
