import React, { use, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import './App.css'
import Cart from './components/Cart.jsx'
import SignIn from './components/SignIn.jsx'
import ProductPage from './components/ProductPage.jsx'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import { useEffect } from 'react'
import { MovieContext } from './context/ProductContext.jsx'

function App() {
  let [cart, setCart] = useState([])
  function handleAddToCart(proObj) {
    for(let i=0;i<cart.length;i++){
      if(cart[i].id===proObj.id){
        alert("Already in Cart")
        return
      }
    }
    let updatedCart=[...cart, proObj]
    updatedCart.sort((a, b) => {
      return b.price - a.price
    })

    localStorage.setItem("cart",JSON.stringify(updatedCart))
    setCart(updatedCart)
    console.log(updatedCart)
  }
  function handleDeleteFromCart(id){
    let updatedCart=cart.filter((movObj) => movObj.id !== id)
    localStorage.setItem("cart",JSON.stringify(updatedCart))
    setCart(updatedCart)
  }
  useEffect(() => {
    let cartData=localStorage.getItem("cart")
    if(!cartData){
      return
    }
    setCart(JSON.parse(cartData))
  },[])
  return (
    <MovieContext.Provider value={{handleAddToCart}}>
    <>
      <BrowserRouter>  
        <Navbar/>
        <Routes>
          <Route path="/" element={<><ProductPage/></>}></Route>
          <Route path="/cart"  element={<Cart  cart={cart} handleDeleteFromCart={handleDeleteFromCart}/>}></Route>
          <Route path="/signin" element={<SignIn/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
    </MovieContext.Provider>
  )
}

export default App
