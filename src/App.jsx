import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Login from './components/Login';
import Register from './components/Register';
import Index from './pages/Index';

const App = () => {

  return (
    <div className="App">
      <Header />
      <Main />
      <Index />
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
