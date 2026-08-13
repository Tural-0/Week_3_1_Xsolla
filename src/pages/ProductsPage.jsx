import ProductList from "../components/ProductList";
import Navbar from "../components/Navbar"

export default function ProductsPage({products, dispatch}) {
  return <>
    <Navbar products={products} dispatch={dispatch}/>
    <ProductList products={products} dispatch={dispatch}/>;
  </>
}