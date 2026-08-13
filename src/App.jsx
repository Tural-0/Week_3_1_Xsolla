import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PRODUCTS } from "./data/products";
import { useState, useReducer, useEffect } from "react";

import ProductsPage from "./pages/ProductsPage";
import CheckoutPage from "./pages/CheckoutPage";
import AddProductPage from "./pages/AddProductPage";
import Footer from "./components/Footer";

function App() {
  const [items, setProducts] = useState(PRODUCTS);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  function toggleTheme() {
    setTheme(prevTheme => {
      const newTheme = prevTheme === "light" ? "dark" : "light";

      localStorage.setItem("theme", newTheme);

      return newTheme;
    });
  }

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  function itemsReducer(products, action) {
    switch (action.type) {
      case 'ADD':
        const id = (products[products.length - 1].id ?? 0) + 1;

        const product = {
          id,
          name: action.name,
          price: parseInt(action.price),
          quantity: 0,
          imageUrl: action.img
        };

        return [...products, product];
      case 'INCREASE':
        return products.map(product =>
          product.id === action.id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        )
      case 'DECREASE':
        return products.map(product =>
          product.id === action.id
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
    }
  }

  const [products, dispatch] = useReducer(
    itemsReducer,
    PRODUCTS
  );

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <ProductsPage
            products = {products}
            dispatch = {dispatch}/>
          } />
        <Route path="/checkout" element={
          <CheckoutPage
            products = {products}
            dispatch = {dispatch}/>
          } />
        <Route path="/addProduct" element={
          <AddProductPage
            products = {products}
            dispatch = {dispatch}/>
          } />
      </Routes>
    </BrowserRouter>
    <Footer
        theme={theme}
        onToggleTheme={toggleTheme}
    />
    </>
  );
}

export default App