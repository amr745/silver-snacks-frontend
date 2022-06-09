import { useParams } from "react-router";

const Show = ({ products }) => {
  const { id } = useParams();
  const product = products.find((product) => product._id === id);
  // const navigate = useNavigate();

  return (
    <div className="Show">
      <h1>{product.name}</h1>
      <img src={product.img} alt={product.name} />
      <h4>{product.price}</h4>
      <h4>{product.quantity}</h4>
      <h5>{product.description}</h5>
    </div>
  )
}
export default Show