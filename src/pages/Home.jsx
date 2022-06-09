import { useState, useEffect } from "react";


const Home = () => {
  
  const [products, setProducts] = useState(null);
  const url = "https://silver-snacks-emporium.herokuapp.com/products/";

  const getProducts = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setProducts(data)
    console.log(data)
  };

  // useEffect(() => { getProducts }, []);
  return (
    <div>Home</div>
  )
}
export default Home