import "./product.css";
import { useState } from "react";

//import { PRODUCTS } from "../data/products";

export default function Product({ product, onIncrease, onDecrease }) {
  return (
    <div className="product">
      <div>
        <img src={product.imageUrl} alt="pic"/>
      </div>

      <div>
        <h3>{product.name}</h3>
        <p>Digital product</p>
      </div>

      <span className="price">${product.price}</span>

      <div className="quantity">
          <button
            id="minus"
            onClick={() => onDecrease(product.id)}
            disabled={product.quantity <= 0}
            >-</button>
          <span id="quantity">{product.quantity}</span>
          <button id="plus" onClick={() => onIncrease(product.id)}>+</button>
      </div>

    </div>
  );
}
