import React from "react";
import {useNavigate} from 'react-router-dom'
const About = () => {
  const navigate = useNavigate()
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col-reverse items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img
            className="object-contain object-center rounded w-full"
            alt="hero"
            // src="https://dummyimage.com/720x600"
            src="/images/about.jpg"
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <img src='/images/leaf2.png' className='mb-8'/>
        <h1 className="title-font sm:text-2xl text-1xl mb-4 font-semibold text-gray-900">
          Best Quality Products
          </h1>
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">
          AL-ZAM ZAM EXPORT COMPANY:
            <br className="hidden lg:inline-block" />
            Bringing Nature's Bounty to Your Table
          </h1>
          <p className="mb-8 leading-relaxed text-xl font-semibold">
            Welcome to AL-ZAM ZAM EXPORT COMPANY, your trusted source for premium quality
            vegetables and food products. We deliver farm-fresh produce,
            carefully selected for maximum flavor and nutrition. Experience the
            essence of freshness and indulge in vibrant flavors with our
            hand-picked selection. Join us on this journey towards a healthier,
            more sustainable world.
          </p>
          <div className="flex justify-center mb-8">
            <button onClick={()=>navigate('/about')}  className="inline-flex text-white bg-zamzam_bg border-0 py-2 px-6 focus:outline-none hover:bg-zamzam_bg_hover rounded text-lg">
              More About Us
            </button>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
