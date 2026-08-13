import { Link } from "react-router-dom";
import "../styles/navbar.css"

export default function Navbar(){
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
        <li>
            <Link to="/checkout">
                Checkout
            </Link>
        </li>
      </ul>
    </nav>
    )
}