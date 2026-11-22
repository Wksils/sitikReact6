import { useState } from 'react'
import './App.scss'
import Header from './components/header/header'
import Section1 from './components/section1/section1'
import Section2 from './components/section2/section2'
import Section3 from './components/section3/section3'
import Section4 from './components/section4/section4'
import Section5 from './components/section5/section5'
import Footer from './components/footer/footer'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cube';
import { EffectCube, Pagination } from 'swiper/modules';
import 'swiper/css/pagination';


export default function App() {

  return (
    <>
     <Swiper
        direction={'vertical'}
        effect={'cube'}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={false}
        modules={[EffectCube, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Header/>
          <Section1/>
        </SwiperSlide>
        <SwiperSlide>
          <Section2/>
        </SwiperSlide>
        <SwiperSlide>
          <Section3/>
        </SwiperSlide>
        <SwiperSlide>
          <Section4/>
        </SwiperSlide>
        <SwiperSlide>
          <Section5/>
        </SwiperSlide>
        <SwiperSlide>
          <Footer/>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

