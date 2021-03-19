import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import db, { auth } from "../firebase";

import Order from "./Order";
import Login from "./Login";

function Orders() {
  const [{ cart, user }, dispatch] = useStateValue();
  const history = useHistory();
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    setShowLoginForm(false);
  }, [user]);

  useEffect(() => {
    if (cart.length === 0) {
      setCartTotal(0);
    } else if (cart.length === 1) {
      const totalPriceForOneCartLength = parseInt(
        cart[0].price * cart[0].quantity
      );
      setCartTotal(totalPriceForOneCartLength);
    } else {
      const itemsTotalPrice = cart.reduce((acc, current) => {
        return (
          parseInt(acc.price * acc.quantity) +
          parseInt(current.price * current.quantity)
        );
      });

      setCartTotal(itemsTotalPrice);
    }
  }, [cart]);

  const itemOrderedCart = cart.sort((itemA, itemB) => {
    return itemA.itemId - itemB.itemId;
  });

  const isUserLoggedIn = () => {
    if (!user) {
      setShowLoginForm(true);
    } else {
      console.log("thanks", auth.currentUser.uid);
      const userId = auth.currentUser.uid;
      db.collection("users")
        .doc(userId)
        .set({
          id: userId,
          displayName: user.displayName,
          email: user.email,
          purchased: cart,
        })
        .then(() => {
          console.log("Document successfully written!");
        })
        .catch((error) => {
          console.error("Error writing document: ", error);
        });
      history.push("/purchased");
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
        <div className="orders__purchaseButton container">
          <p className="allSum">Total:£ {cartTotal}</p>

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
