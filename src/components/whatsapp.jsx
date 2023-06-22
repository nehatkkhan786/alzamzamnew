import React from 'react'
import whatsapp from '../assets/what_loti.json'
import Lottie from "lottie-react";

const Whatsapp = () => {
  return (
    <div onClick={()=>window.open('https://wa.link/sqm08d')} className='fixed z-900 bottom-10  right-2 w-24 h-24 cursor-pointer '>
    <Lottie animationData={whatsapp} loop={true} />;
</div>
  )
}

export default Whatsapp