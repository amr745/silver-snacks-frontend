import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import CONFIG from "../config/index";
import SignupPage from "../pages/SignupPage"
import LoginPage from "../pages/LoginPage";
import ProtectedRoute from "../components/Protected-Route"
import { getToken } from '../services/tokenService';

const Main = (props) => {

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