import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartItem = ({ item }) => {
  const { dispatch } = useContext(CartContext);

  return (
    <div>
      <h4>
        {item.name} - ₹{item.price} x {item.quantity}
      </h4>

      <button
        onClick={() =>
          dispatch({
            type: "UPDATE_QUANTITY",
            payload: { id: item.id, quantity: item.quantity + 1 }
          })
        }
      >
        +
      </button>

      <button
        onClick={() =>
          dispatch({
            type: "UPDATE_QUANTITY",
            payload: { id: item.id, quantity: item.quantity - 1 }
          })
        }
        disabled={item.quantity === 1}
      >
        -
      </button>

      <button
        onClick={() =>
          dispatch({ type: "REMOVE_ITEM", payload: item.id })
        }
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;