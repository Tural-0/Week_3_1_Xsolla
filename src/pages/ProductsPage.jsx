import ProductList from "../components/ProductList";
import Navbar from "../components/Navbar"

export default function ProductsPage({products, setProducts}) {
  return <>
    <Navbar/>
    <ProductList products={products} setProducts={setProducts}/>;
  </>
}