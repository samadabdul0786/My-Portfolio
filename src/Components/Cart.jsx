import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "./CartItem";

const Cart = () => {
  const { cart } = useContext(CartContext);

  const total = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h2>Cart</h2>

      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <>
          {cart.map(item => (
            <CartItem key={item.id} item={item} />
          ))}
          <h3>Total: ₹{total}</h3>
        </>
      )}
    </div>
  );
};

export default Cart;