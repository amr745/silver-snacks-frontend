import { useParams } from "react-router";
import { useState } from "react"
import "../App.css"
const Show = ({ products, handleClick }) => {
  const { id } = useParams();
  const product = products.find((product) => product._id === id);
  // const navigate = useNavigate();

  return (
    <div className="Show">
      <h3>{product.name}</h3>
      <img id="product-image" src={product.img} alt={product.name} />
      <h4>{product.price}</h4>
      <h4>{product.quantity}</h4>
      <h5>{product.description}</h5>
      <button onClick={() => handleClick(product)}>Buy Now</button>
    </div>
  )
}

export default Show