import React, { useState } from "react";
import "./order.css";
import Products from "./products";
import Cart from "./cart";

const PAGE_PRODUCTS = "products";
const PAGE_CART = "cart";

function Order() {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState(PAGE_PRODUCTS);

  const addToCart = (product) => {
    setCart([...cart, { ...product }]);
  };

  const removeFromCart = (productToRemove) => {
    setCart(cart.filter((product) => product !== productToRemove));
  };

  const navigateTo = (renderPage) => {
    setPage(renderPage);
  };

  return (
    <div className="App">
      <header>
        <button onClick={() => navigateTo(PAGE_PRODUCTS)}>Products</button>
        <button onClick={() => navigateTo(PAGE_CART)}>
          Cart ({cart.length})
        </button>
      </header>
      {page === PAGE_PRODUCTS && <Products addToCart={addToCart} />}
      {page === PAGE_CART && (
        <Cart cart={cart} removeFromCart={removeFromCart} />
      )}
    </div>
  );
}

export default Order;
