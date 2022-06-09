import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Show from "./Show";
const Home = ({ products }) => {
  

const loaded = () => {
  return (
   <div className="Home">{products.map((product) => (
     <div className="product-data" key={product._id}>
       <h1>{product.name}</h1>
       <Link to={`/products/${product._id}`}>
         <img src={product.img} alt={product.name} />
       </Link>
        <h2>{product.price}</h2>
     </div>
   ))}
    </div>
  )
  }
  const loading = () => {
    return <h1>Loading...</h1>
  }
  return products ? loaded() : loading();
}
export default Home