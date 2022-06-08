import { Routes, Route} from "react-router-dom";
import { useEffect, useState } from "react";


const Main = () => {
  const [products, setProducts] = useState(null);
  const url = "https://silver-snacks-emporium.herokuapp.com/products/";

  const getProducts = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setProducts(data)
    console.log(data)
  };

  useEffect(() => {getProducts()}, []);

  const loaded = () => {
  return (
    <div>{products.map((product) => (
      <h1>{product.name}</h1>
    ))}
    </div>
  )
  }
  return products ? loaded() : <h1>Loading...</h1>
}


export default Main