import { useState } from 'react';
import './App.css';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from "./store/CartProvider";

function App() {

  const [showCart, setShowCart] = useState(false);

  const showCartHandler = ()=>{
    setShowCart(true);
  }

  const hiddenCartHandler = ()=>{
    setShowCart(false);
  }
  return (
    <CartProvider>
      {showCart && <Cart onHideCart={hiddenCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <Meals />
    </CartProvider>
  )
}

export default App;
