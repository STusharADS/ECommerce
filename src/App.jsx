import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import './App.css'
import Cart from './components/Cart.jsx'
import SignIn from './components/SignIn.jsx'
import ProductPage from './components/ProductPage.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { MovieContext } from './context/ProductContext.jsx'
import Faq from './components/Faq.jsx';

function App() {
  const [cart, setCart] = useState([]);
  const [userName, setUserName] = useState(null); 

  function handleAddToCart(proObj) {
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id === proObj.id) {
        alert("Already in Cart");
        return;
      }
    }
    let updatedCart = [...cart, proObj];
    updatedCart.sort((a, b) => b.price - a.price);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart);
  }

  function handleDeleteFromCart(id) {
    let updatedCart = cart.filter((movObj) => movObj.id !== id);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart);
  }

  useEffect(() => {
    const cartData = localStorage.getItem("cart");
    if (cartData) setCart(JSON.parse(cartData));

    const userInfo = JSON.parse(localStorage.getItem("signininfo")); 
    if (userInfo && userInfo.name) {
      setUserName(userInfo.name);
    }
  }, []);

  return (
    <MovieContext.Provider value={{ handleAddToCart }}>
      <BrowserRouter>
        <Navbar userName={userName} />
        <Routes>
          <Route path="/" element={<ProductPage />} />
          <Route path="/cart" element={<Cart cart={cart} handleDeleteFromCart={handleDeleteFromCart} />} />
          <Route path="/signin" element={<SignIn setUserName={setUserName} />} />
          <Route path="/faq" element={<Faq/>} />
        </Routes>
      </BrowserRouter>
    </MovieContext.Provider>
  );
}

export default App;
