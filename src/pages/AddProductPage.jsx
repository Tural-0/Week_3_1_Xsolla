import '../styles/checkout.css'
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from '../components/Navbar';

export default function AddProductPage({products, setProducts}) {
  const [name, setName] = useState("")
  const [price, setPrice] = useState(0)
  const [img, setImg] = useState("")
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents page reload

    if (price <= 0){
        alert("Price cannot be equal or lower than 0")
        return
    }

    addProduct()
    navigate("/") // back to items
  };

  function addProduct() {
    const id = (products[products.length - 1].id ?? 0) + 1;

    const product = {
      id,
      name: name,
      price: parseInt(price),
      quantity: 0,
      imageUrl: img
    };

    setProducts((prevValues) => [...prevValues, product]);
  }

  return (
    <>
    <Navbar/>
    <div className="container">
      <div className="create">
        <h3>Product details</h3>
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
            <label>Price:</label>
            <input
              type="number"
              required
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              />
          </div>

          <div>
            <label>Image URL:</label>
            <input
              type="text"
              value={img}
              onChange={(e) => setImg(e.target.value)}
              />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
    </>
  );
}