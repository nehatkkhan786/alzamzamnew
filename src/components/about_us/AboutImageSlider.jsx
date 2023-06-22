import React from 'react'
import { ProductVarities } from '../data/ProductList'
import Slider from './Slider'

const AboutImageSlider = () => {
  return (
    <section className="text-gray-600 body-font overflow-hidden w-full">
  <div className="container px-5 py-24">
    <div className="lg:w-4/5 mx-auto flex flex-wrap ">

      {/* Image SLider */}
      <div className="lg:w-1/2 lg:h-auto h-64 flex justify-center items-center w-full">
          <Slider/>
      </div>
      {/* <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400"/> */}

      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">

        <div className='flex items-center flex-wrap justify-center mb-4'>
            <img src='/images/organic.png'/>
            <h2 className="text-lg font-semibold text-gray-500 tracking-widest">Certified Products</h2>
        </div>
        <h1 className="text-gray-900 text-xl font-bold sm:text-2xl sm:text-justify text-center">We Deal With Various Quality Food Products!</h1>
        <div className=" flex justify-center mt-4">
                <img src='/images/leaf2.png'/>
        </div>

        <div className='grid grid-cols-2 gap-2 mt-4'>
            {ProductVarities.map((item)=>{
                return (
                    <div key={item.id} className='flex items-center gap-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none"  viewBox="0 0 24 24" strokeWidth={1.5} stroke="rgb(34 197 94)" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p>{item.name}</p>
                    </div>
                )
            })}         
        </div>


      </div>
    </div>
  </div>
</section>
  )
}

export default AboutImageSlider