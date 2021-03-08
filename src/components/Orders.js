import React from "react";
import { useStateValue } from "../StateProvider";

function Orders() {
  const [{ cart }, dispatch] = useStateValue();
  console.log("cart", cart);

  return (
    <div className="orders">
      {cart.length !== 0 ? (
        <div className="container">
          <img className="" src={`${cart[0].image}`} />
          <div className="">
            <h3 className="">{cart[0].name}</h3>
          </div>
          <div className="">
            <p className="">Total: £{cart[0].price * cart[0].quantity}</p>
          </div>
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
