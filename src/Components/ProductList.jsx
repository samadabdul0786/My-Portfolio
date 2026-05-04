import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Phone", price: 20000 },
  { id: 3, name: "Headphones", price: 2000 }
];

const ProductList = () => {
  const { dispatch } = useContext(CartContext);

  return (
    <div>
      <h2>Products</h2>
      {products.map(product => (
        <div key={product.id}>
          <h4>{product.name} - ₹{product.price}</h4>
          <button
            onClick={() =>
              dispatch({ type: "ADD_ITEM", payload: product })
            }
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;