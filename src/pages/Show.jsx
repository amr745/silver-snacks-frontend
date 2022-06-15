import { useParams } from "react-router";
import { useState } from "react"
import "../App.css"
import { Button } from "react-bootstrap";
const Show = ({ products, handleClick }) => {
  const { id } = useParams();
  const product = products.find((product) => product._id === id);
  // const navigate = useNavigate();

  return (
    <div className="Show">
      <div className="show-image"><img id="product-image" src={product.img} alt={product.name} /></div>
      <div className="show-info">
      <h3 className="show-name">{product.name}</h3>
      <div className="show-price"><h4>${(product.price).toFixed(2)}</h4></div>
      <Button className="show-button" onClick={() => handleClick(product)}>Buy Now</Button>
      <div className="show-qnt"><h4>Only {product.quantity} items in stock!</h4></div>
      <h5 className="show-des">{product.description}</h5>
      </div>
    </div>
  )
}

export default Show