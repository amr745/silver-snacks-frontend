import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Show from "./Show";
const Home = ({ products }) => {
  

const loaded = () => {
  return (
   <div className="Home">{products.map((product) => (
     <div className="product-data" key={product._id}>
      <Link style={{textDecoration:"none"}} to={`/products/${product._id}`}> <h3>{product.name}</h3></Link>
       <Link to={`/products/${product._id}`}>
         <img id="product-data" src={product.img} alt={product.name} />
       </Link>
        <h2>${product.price.toFixed(2)}</h2>
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