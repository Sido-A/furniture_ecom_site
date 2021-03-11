import React from "react";
import { useStateValue } from "../StateProvider";
import Order from "./Order";
function Orders() {
  const [{ cart }, dispatch] = useStateValue();

  const itemOrderedCart = cart.sort((itemA, itemB) => {
    return itemA.itemId - itemB.itemId;
  });

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
    </div>
  );
}

export default Orders;
