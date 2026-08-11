import { useState } from "react";
import Product from "./Product";
import './productlist.css';

import { PRODUCTS } from "../data/products";

export default function ProductList() {
  const [products, setProducts] = useState(PRODUCTS);
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [adress, setAdress] = useState("")

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

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents page reload

    const orderDetails = {
      name, email, adress, totalPrice
    }

    console.log('Form Submitted Data:', orderDetails);
  };

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
        {products.length > 0 &&
          products.map((product) => (
            <Product
              key={product.id}
              product={product}
              onIncrease={increaseQuantity}
              onDecrease={decreaseQuantity}
            />
          ))}
        <button className="add-button" onClick={addProduct}>
          Add new product
        </button>
      </div>

      <div className="create">
        <h3>Total: ${totalPrice}</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              />
          </div>

          <div>
            <label>Email:</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              />
          </div>

          <div>
            <label>Adress:</label>
            <input
              type="text"
              required
              value={adress}
              onChange={(e) => setAdress(e.target.value)}
              />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
