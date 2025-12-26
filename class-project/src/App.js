import './App.css';
import { Routes,Route } from 'react-router';
import Header from './components/Header';
import DashBoard from './components/DashBoard';
import Footer from './components/Footer';
import { useState } from 'react';
import Cart from './components/Cart';


function App() {
  const [cart,setCart]=useState([]);
  const handelAddToCart= (product)=>{
    console.log("Adding to Cart ", product);
    setCart((prevCart) =>
      prevCart.some((item)=> item.id === product.id) ? prevCart : [...prevCart,product]);
    console.log(cart);
  }
  return (
    <>
    <Header />
    <Routes>
      <Route index element={<DashBoard onAddToCart={handelAddToCart}/>}></Route>
      <Route path='/cart' element={<Cart items={cart}/>} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;
