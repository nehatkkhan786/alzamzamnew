import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination,Autoplay  } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";




const HeroCarousal = () => {
  return (
    <Swiper
    spaceBetween={30}
    effect={"creative"}
    navigation={true}
    pagination={{
      clickable: true,
    }}
    autoplay={{
      delay: 2000,
      disableOnInteraction: false,
    }}
    modules={[EffectFade, Navigation, Pagination, Autoplay]}
    
    className="mySwiper"
  >
    <SwiperSlide className='cstm'>
      <img src="/images/slider/olive.PNG"  />
    </SwiperSlide>

    <SwiperSlide className='cstm'>
    <img src="/images/slider/onion.PNG" />
  </SwiperSlide>
    <SwiperSlide className='cstm'>
      <img src="/images/slider/rice1.PNG" />
    </SwiperSlide>

    <SwiperSlide className='cstm'>
      <img src="/images/slider/rice2.PNG"  />
    </SwiperSlide>

    <SwiperSlide className='cstm'>
      <img src="/images/slider/spices.PNG"/>
    </SwiperSlide>

    <SwiperSlide className='cstm'>
      <img src="/images/slider/vegies.PNG"/>
    </SwiperSlide>
  </Swiper>
  )
}

export default HeroCarousal