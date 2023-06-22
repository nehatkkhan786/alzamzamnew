import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

const Slider = () => {
    const slides = [
        '/images/spices.jpg',
        'https://images.pexels.com/photos/5966431/pexels-photo-5966431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/1838596/pexels-photo-1838596.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      ];
      const [currentSlide, setCurrentSlide] = useState(0);
      const [touchStartX, setTouchStartX] = useState(0);


      const handleTouchStart = (event) => {
        setTouchStartX(event.touches[0].clientX);
      };

      const handleTouchEnd = (event) => {
        const touchEndX = event.changedTouches[0].clientX;
        const touchDiff = touchEndX - touchStartX;
        const sensitivity = 50; // Adjust this value to control the swipe sensitivity
    
        if (touchDiff > sensitivity) {
          handlePreviousSlide();
        } else if (touchDiff < -sensitivity) {
          handleNextSlide();
        }
      };
      const handlePreviousSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
      };
    
      const handleNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
      };
    




      useEffect(() => {
        const interval = setInterval(handleNextSlide, 3000);

    return () => clearInterval(interval);
      }, []);
  return (
   
        <div 
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            style={{backgroundImage:`url(${slides[currentSlide]})`}}
            className='w-full h-full rounded-md bg-center bg-cover  duration-500'>    
        </div>
   
  )
}

export default Slider