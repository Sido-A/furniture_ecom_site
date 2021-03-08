import React from "react";
import { useStateValue } from "../StateProvider";

function Orders() {
  const [{ cart }, dispatch] = useStateValue();
  console.log("cart", cart);
  return (
    <div className="orders container">
      {cart.length !== 0 ? (
        <h1>Orders</h1>
      ) : (
        <div className="orders__empty">
          <h1>Cart is empty</h1>
        </div>
      )}
    </div>
  );
}

export default Orders;
