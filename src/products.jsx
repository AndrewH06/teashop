import React, { useState } from "react";

export default function Products({ addToCart }) {
  const [products] = useState([
    {
      name: "Thai Milk Tea",
      cost: "$5.99",
      image:
        "https://www.1992sharetea.com/wp-content/uploads/2019/07/2019NewPP_MilkTea_ThaiPearlMilkTea-3-200x380.png",
    },
    {
      name: "Classic Milk Tea",
      cost: "$4.99",
      image:
        "https://share-tea-v1602019638.websitepro-cdn.com/wp-content/uploads/2019/05/2019NewPP_MilkTea_ClassicMilkTeaBlack-2-1-500x944.png",
    },
    {
      name: "Taro Milk Tea",
      cost: "$5.99",
      image:
        "https://share-tea-v1602019638.websitepro-cdn.com/wp-content/uploads/2019/07/2019NewPP_MilkTea_TaroPearlMilkTea-3.png",
    },
  ]);

  return (
    <div>
      <h1 className="orderHead">Products</h1>
      <div className="products">
        {products.map((product, idx) => (
          <div className="product" key={idx}>
            <h3>{product.name}</h3>
            <h4>{product.cost}</h4>
            <img src={product.image} alt={product.name}></img>
            <button className="btn-prod" onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
