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
    <SwiperSlide>
      <img src="/images/onions.jpeg"  />
    </SwiperSlide>
    <SwiperSlide>
    <img src="/images/mix-vegies.jpg" />
  </SwiperSlide>
    <SwiperSlide>
      <img src="https://images.pexels.com/photos/164504/pexels-photo-164504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
    </SwiperSlide>
    <SwiperSlide>
      <img src="https://images.pexels.com/photos/678414/pexels-photo-678414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  />
    </SwiperSlide>
    <SwiperSlide>
      <img src="https://images.pexels.com/photos/4109912/pexels-photo-4109912.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
    </SwiperSlide>
    <SwiperSlide>
      <img src="https://wallpaperaccess.com/full/1463528.jpg"/>
    </SwiperSlide>
  </Swiper>
  )
}

export default HeroCarousal