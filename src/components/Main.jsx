import { Routes, Route} from "react-router-dom";
import { useEffect, useState } from "react";


const Main = () => {

  const [products, setProducts] = useState(null);
  const url = "https://silver-snacks-emporium.herokuapp.com/products";

  const getProducts = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setProducts(data)
    console.log(data)
  };

  useEffect(() => {getProducts}, []);
  return (
      <div className="Main">
        Main
      </div>
  )
}

export default Main