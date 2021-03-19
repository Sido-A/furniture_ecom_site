import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import ClearIcon from "@material-ui/icons/Clear";
import { useStateValue } from "../StateProvider";

function Order({ cartItem }) {
  const [{}, dispatch] = useStateValue();
  const [itemQuantity, setItemQuantity] = useState(cartItem.quantity);

  const addItem = () => {
    dispatch({
      type: "ADD_TO_CART",
      selectedProduct: cartItem,
    });
  };

  const removeItem = () => {
    if (cartItem.quantity !== 0) {
      dispatch({
        type: "SUBTRACT_FROM_CART",
        selectedProduct: cartItem,
      });
    } else {
      setItemQuantity(0);
    }
  };

  const deleteItem = () => {
    dispatch({
      type: "DELETE_FROM_CART",
      selectedProduct: cartItem,
    });
  };
  return (
    <div className="order">
      <div className="order__itemImage">
        <img src={`${cartItem.image}`} />
        <span onClick={deleteItem}>
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
          <button onClick={removeItem} className="remove">
            <RemoveIcon />
          </button>
          <span>{cartItem.quantity}</span>
          <button onClick={addItem} className="add">
            <AddIcon />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Order;
