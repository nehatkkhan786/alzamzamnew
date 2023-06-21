import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Header from './components/Navbar'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import Homepage from './pages/Homepage'
import Shop from './pages/Shop'
const App = () => {
  return (
   <BrowserRouter>
     <Header/>
      <Routes>
        <Route path='/' exact element={<Homepage/>}/>
        <Route path='/about' exact element={<AboutUs/>}/>
        <Route path='/shop' exact element={<Shop/>}/>
        <Route path='/contact' exact element={<ContactUs/>}/>
      </Routes>
   </BrowserRouter>
  )
}

export default App