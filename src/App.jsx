import Header from "./components/Header";
import Main from "./components/Main";
import { useState, useEffect } from "react";
import { getUser, logout } from "./services/signup";

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
    const temp = cartItem
    temp.push(product)
    setCartItem([...cartItem, product])
  }
  
  useEffect(() => {
    console.log(cartItem)
  }, [cartItem])

  return (
    <div className="App">
      <Header 
        user={userState.user} 
        handleLogout={handleLogout} 
      />
      <Main 
        user={userState.user} handleSignupOrLogin={handleSignupOrLogin}
        handleClick={handleClick}
      />
    </div>
  );
}

export default App;

