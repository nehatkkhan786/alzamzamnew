import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import ContactFooter from './components/ContactFooter'
import Footer from './components/Footer'
import Header from './components/Navbar'
import Whatsapp from './components/whatsapp'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import Homepage from './pages/Homepage'
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
      </Routes>

      <ContactFooter/>
      <Footer/>
      <Whatsapp/>
   </BrowserRouter>
  )
}

export default App