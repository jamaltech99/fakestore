import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Hero.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Newarrival from '/src/components/Newarrivalfiles/Newarrival';
import Homeslider from '/src/components/HomeSliderfiles/Homeslider';



function Hero() {
  return (
    <div>
      <Swiper
        spaceBetween={10}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className='slide-1'><h1 className='slide-text'>Jewellry<br/><span>Buy jewellery of all Luxury Brands</span></h1></SwiperSlide>

        <SwiperSlide className='slide-2'><h1 className='slide-text'>Women Clothing<br/><span>Buy shorts ,Tops and leather products </span></h1><h2>Smart<br/>BackPacks</h2></SwiperSlide>

        <SwiperSlide className='slide-3'><h1 className='slide-text'>Electronics & Accesries<br/><span>Buy Home electronics of biggest Brands in the world</span></h1></SwiperSlide>

        <SwiperSlide className='slide-4'><h1 className='slide-text'>Men Clothing<br/><span>Men's T-shirts and Jackets</span></h1></SwiperSlide>
      </Swiper>
<Newarrival/>
<Homeslider/>
</div>

  )
}

export default Hero;



