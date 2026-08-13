import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PRODUCTS } from "./data/products";
import { useState, useReducer, useEffect, createContext } from "react";

import ProductsPage from "./pages/ProductsPage";
import CheckoutPage from "./pages/CheckoutPage";
import AddProductPage from "./pages/AddProductPage";
import Footer from "./components/Footer";
import { CartProvider } from "./context/CartContext";

function App() {
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

  return (
    <>
    <CartProvider>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <ProductsPage/>
        } />
        <Route path="/checkout" element={
          <CheckoutPage/>
        } />
        <Route path="/addProduct" element={
          <AddProductPage/>
        } />
      </Routes>
    </BrowserRouter>
    </CartProvider>
    <Footer
        theme={theme}
        onToggleTheme={toggleTheme}
        />
    </>
  );
}

export default App