

const Show = ({ products }) => {
  const { id } = useParams();
  const product = products.find((product) => product._id === id);
  const navigate = useNavigate();

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.img} alt={product.name} />
    
    </div>
  )
}
export default Show