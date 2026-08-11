import ProductList from "../components/ProductList";
import { Link } from "react-router-dom";

export default function ProductsPage({products, setProducts}) {
  return <>
    <h1>Items</h1>
    <Link to="/checkout">
        Checkout
    </Link>
    <ProductList products={products} setProducts={setProducts}/>;
  </>
}