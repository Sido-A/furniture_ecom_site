import React from "react";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import ClearIcon from "@material-ui/icons/Clear";

function Order({ cartItem }) {
  return (
    <div className="order">
      <div className="order__itemImage">
        <img src={`${cartItem.image}`} />
        <span>
          <ClearIcon />
        </span>
      </div>

      <div className="order__itemName">
        <h3>{cartItem.name}</h3>
      </div>

      <div className="order__priceQuantityWrapper">
        <div className="order__priceQuantityWrapper-price">
          <p>Total: £{cartItem.price * cartItem.quantity}</p>
        </div>
        <div className="order__priceQuantityWrapper-quantity">
          <button className="remove">
            <RemoveIcon />
          </button>
          <span>{cartItem.quantity}</span>
          <button className="add">
            <AddIcon />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Order;
