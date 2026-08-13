import { Link } from "react-router-dom";
import "../styles/navbar.css"
import { useContext, useEffect, useState } from "react";
import Popup from "./Popup";
import CheckoutPage from "../pages/CheckoutPage";
import cartImage from "../assets/cart.png"
import { CartCtx } from "../context/CartContext";

export default function Navbar(){

    const [cartCount, setCartCount] = useState(0)
    const [isPopupOpen, setIsPopupOpen] = useState(false); // State tracking

    const [order, setOrder] = useLocalStorage("order",null)

    const {products, dispatch} = useContext(CartCtx)

    function useLocalStorage(key, init) {
        const [value, setValue] =
            useState(() => {
                const stored =
                localStorage.getItem(key);
            return stored
                ? JSON.parse(stored)
                : init;
            });

        useEffect(() => {
            localStorage.setItem(
            key, JSON.stringify(value)
            );
        }, [key, value]);

        return [value, setValue];
    }
  
    useEffect(() => {
        products.map(product =>{
            if (order.items[product.id-1] != null){
                if (product.id === order.items[product.id-1].itemId){
                    product.quantity = order.items[product.id-1].quantity
                }
            }
        })
    }, [order]);

    useEffect(() => {
        setCartCount(prev => products.filter(
            p => p.quantity >= 1
        ).length)
    }, [products]);

    return(
    <nav>
      <ul>
        <li>
            <Link to="/">
                GameStore
            </Link>
        </li>
        <li>
            <Link to="/addProduct">
                Add Product
            </Link>
        </li>
        <li className="cart">
            <div className="cart-container">
                <div className="cart-icon-wrapper">
                <button className="cart-button" onClick={() => setIsPopupOpen(true)}>
                    <img src={cartImage} alt="cart" className="cart-svg"/>
                </button>
                {cartCount > 0 && (
                    <span className="cart-badge">{cartCount}</span>
                )}
                </div>
            </div>
            
            <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)}>
                <CheckoutPage/>
            </Popup>
        </li>
      </ul>
    </nav>
    )
}