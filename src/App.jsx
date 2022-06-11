import Header from "./components/Header";
import Main from "./components/Main";
import { useState, useEffect } from "react";
import { getUser, logout } from "./services/signup";
import Footer from "./components/Footer";
import Cart from "./pages/Cart";
import cartFunction from "./services/cartFunction";

function App() {
  const [userState, setUserState] = useState({ user: getUser() });

  function handleSignupOrLogin() {
    setUserState({ user: getUser() });
  }

  function handleLogout() {
    logout();
    setUserState({ user: null });
  }

  const [cartItem, setCartItem] = useState([])

  const handleClick = (product) => {
    
    setCartItem((prevState) => {       
      return [
      ...prevState,
      product 
    ]})
  }

  useEffect(() => {
    const cartObject = {
      userId: userState.user ? userState.user.email : "",
      _id: userState.user ? userState.user.email : "",
      products: cartItem,
    }
    cartFunction(cartObject)
    console.log("UseEffect", cartItem)
  }, [cartItem, userState])

  return (
    <div className="App">
      <Header
        user={userState.user}
        handleLogout={handleLogout}
      />
      <Main
        user={userState.user} handleSignupOrLogin={handleSignupOrLogin}
        handleClick={handleClick}
        cartItem={cartItem}
      />
      <Footer />
    </div>
  );
}

export default App;

