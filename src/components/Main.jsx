import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import CONFIG from "../config/index";
import SignupPage from "../pages/SignupPage"
import LoginPage from "../pages/LoginPage";
import ProtectedRoute from "../components/Protected-Route"
import { getToken } from '../services/tokenService';
import Home from "../pages/Home";
import Show from "../pages/Show";
import Cart from "../pages/Cart";

const Main = (props) => {

  const [products, setProducts] = useState(null);
  const url = "https://silver-snacks-emporium.herokuapp.com/products/";

  const getProducts = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setProducts(data)
    console.log(data)
  };

  useEffect(() => { getProducts() }, []);

  const updateQuantity = async (product) => {
    await fetch((`${url}/cart`), {
      method: "PUT",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(product)
    })
    getProducts();
  }

  const deleteProduct = async (id) => {
    await fetch((`${url}/cart`), {
      method: "DELETE",
    })
    getProducts();
  }

  return (
    <div className="Main">
      <Routes>
        <Route path="/signup" element={<SignupPage {...props} />} />
        <Route path="/login" element={<LoginPage {...props} />} />
        <Route path="/" element={<Home products={products} />}></Route>
        <Route path="/products/:id" element={<Show products={products} handleClick={props.handleClick} />}></Route>
        <Route path="/cart" element={<Cart cartItem={props.cartItem} handleRemove={props.handleRemove} />}></Route>
      </Routes>

    </div>
  )
}



export default Main