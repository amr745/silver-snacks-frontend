import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import CONFIG from "../config/index";
import SignupPage from "../pages/SignupPage"
import LoginPage from "../pages/LoginPage";
import ProtectedRoute from "../components/Protected-Route"
import { getToken } from '../services/tokenService';

const Main = (props) => {

  const [products, setProducts] = useState(null);
  const url = "https://silver-snacks-emporium.herokuapp.com/products/";

  const getProducts = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setProducts(data)
    console.log(data)
  };

  useEffect(() => { getProducts }, []);
  
  return (
    <div className="Main">
      <Routes>
        <Route path="/signup" element={<SignupPage {...props} />} />
        <Route path="/login" element={<LoginPage {...props} />} />
      </Routes>
    </div>
    )
  }
  


export default Main