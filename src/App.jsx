import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PRODUCTS } from "./data/products";
import { useState } from "react";

import ProductsPage from "./pages/ProductsPage";
import CheckoutPage from "./pages/CheckoutPage";
import AddProductPage from "./pages/AddProductPage";

function App() {
  const [products, setProducts] = useState(PRODUCTS);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <ProductsPage
            products = {products}
            setProducts = {setProducts}/>
          } />
        <Route path="/checkout" element={
          <CheckoutPage
            products = {products}
            setProducts = {setProducts}/>
          } />
        <Route path="/addProduct" element={
          <AddProductPage
            products = {products}
            setProducts = {setProducts}/>
          } />
      </Routes>
    </BrowserRouter>
  );
}

export default App