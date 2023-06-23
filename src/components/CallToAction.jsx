import React from 'react'
import {useNavigate} from 'react-router-dom'


const CallToAction = () => {
  const navigate = useNavigate()
  return (
    <>
    <section class="text-gray-600 body-font bg-gray-800 ">
    <div class="container px-5 py-24 mx-auto flex flex-col md:flex-row   justify-between items-center  gap-5 ">
        <h2 className='text-white font-medium text-2xl text-center sm:text-3xl'>Unlock Incredible Value at Unbeatable Prices</h2>
        <button  onClick={()=>navigate('/shop')} class="inline-flex text-white bg-secondary border-0 py-2 px-6 focus:outline-none hover:bg-zamzam_bg_hover rounded text-lg">
            Shop NOW
        </button>
    </div>   
   
  </section>
</>

  )
}

export default CallToAction