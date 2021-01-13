import React from "react";

export default function Cart({ cart, removeFromCart }) {
  return (
    <div>
      <h1 className="orderHead">Cart</h1>
      <div className="products">
        {cart.map((product, idx) => (
          <div className="product" key={idx}>
            <h3>{product.name}</h3>
            <h4>{product.cost}</h4>
            <img src={product.image} alt={product.name}></img>
            <button
              className="btn-prod"
              onClick={() => removeFromCart(product)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
