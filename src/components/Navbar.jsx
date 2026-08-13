import { Link } from "react-router-dom";
import "../styles/navbar.css"
import { useEffect, useState } from "react";
import Popup from "./Popup";
import CheckoutPage from "../pages/CheckoutPage";
import cartImage from "../assets/cart.png"

export default function Navbar({products, dispatch}){

    const [cartCount, setCartCount] = useState(0)
    const [isPopupOpen, setIsPopupOpen] = useState(false); // State tracking

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
                <CheckoutPage products={products} dispatch={dispatch}/>
            </Popup>
        </li>
      </ul>
    </nav>
    )
}