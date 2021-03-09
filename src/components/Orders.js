import React from "react";
import { useStateValue } from "../StateProvider";
import Order from "./Order";
function Orders() {
  const [{ cart }, dispatch] = useStateValue();
  console.log("cart", cart);

  return (
    <div className="orders">
      {cart.length !== 0 ? (
        <div className="orders__container container">
          {cart.map((cartItem) => (
            <Order cartItem={cartItem} />
          ))}
        </div>
      ) : (
        <div className="orders__empty">
          <h1>Cart is empty</h1>
        </div>
      )}
    </div>
  );
}

export default Orders;
