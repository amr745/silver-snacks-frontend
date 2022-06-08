import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

const App = () => {

  return (
    <div className="App">
      <Header />
      <Main />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
