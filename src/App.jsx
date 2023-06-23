import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import ContactFooter from './components/ContactFooter'
import Footer from './components/Footer'
import Header from './components/Navbar'
import Whatsapp from './components/whatsapp'
import AboutUs from './pages/AboutUs'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import ContactUs from './pages/ContactUs'
import Homepage from './pages/Homepage'
import OrderSuccess from './pages/OrderSuccess'
import Product from './pages/Product'
import Shop from './pages/Shop'
const App = () => {
  return (
   <BrowserRouter>
     <Header/>
      <Routes>
        <Route path='/' exact element={<Homepage/>}/>
        <Route path='/about'  element={<AboutUs/>}/>
        <Route path='/shop'  element={<Shop/>}/>
        <Route path='/shop/product/:id' element={<Product/>} />
        <Route path='/contact'  element={<ContactUs/>}/>
        <Route path='/cart'  element={<Cart/>}/>
        <Route path='/checkout'  element={<Checkout/>}/>
        <Route path='/order_success'  element={<OrderSuccess/>}/>

      </Routes>

      <ContactFooter/>
      <Footer/>
      <Whatsapp/>
   </BrowserRouter>
  )
}

export default App