import { useState } from "react";
import Product from "./Product";
import { Link } from "react-router-dom";
import './productlist.css';

export default function ProductList({products, setProducts}) {
  function addProduct() {
    const id = (products[products.length - 1].id ?? 0) + 1;

    const product = {
      id,
      name: `Product ${id}`,
      price: 6.99,
      quantity: 0,
      imageUrl: "https://images.unsplash.com/photo-1541480601022-2308c0f02487?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmFuZG9tJTIwb2JqZWN0c3xlbnwwfHwwfHx8MA%3D%3D"
    };

    setProducts((prevValues) => [...prevValues, product]);
  }

  function increaseQuantity(id) {
    setProducts(prev =>
      prev.map(product =>
        product.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  }

  function decreaseQuantity(id) {
    setProducts(prev =>
      prev.map(product =>
        product.id === id
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    );
  }

  const totalPrice = products.reduce(
    (total, product) => Math.round((total + product.price * product.quantity) * 100)/100,
    0
  );

  return (
    <div className="container">
      <div className="products">
        <h2>Total: ${totalPrice.toFixed(2)}</h2>
        {products.length > 0 &&
          products.map((product) => (
            <Product
              key={product.id}
              product={product}
              onIncrease={increaseQuantity}
              onDecrease={decreaseQuantity}
            />
          ))}
        <Link to="/addProduct">
          <button className="add-button">
            Add new product
          </button>
        </Link>
      </div>
    </div>
  );
}
