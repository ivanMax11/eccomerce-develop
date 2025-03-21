"use client"; // Esto es necesario porque Swiper usa hooks y efectos de React

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css"; // Estilos base de Swiper
import "swiper/css/navigation"; // Estilos para la navegación
import "swiper/css/autoplay"; // Estilos para autoplay

const ClientCarousel = () => {
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      loop={true}
      slidesPerView={3}
      spaceBetween={30}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 4,
        },
      }}
    >
      {/* Logo 1 */}
      <SwiperSlide>
        <img
          src="/images/1.jpeg" // Ruta del logo
          alt="Cliente 1"
          className="w-32 h-32 object-contain"
        />
      </SwiperSlide>

      {/* Logo 2 */}
      <SwiperSlide>
        <img
          src="/images/2.jpeg" // Ruta del logo
          alt="Cliente 2"
          className="w-32 h-32 object-contain"
        />
      </SwiperSlide>

      {/* Logo 3 */}
      <SwiperSlide>
        <img
          src="/images/3.jpeg" // Ruta del logo
          alt="Cliente 3"
          className="w-32 h-32 object-contain"
        />
      </SwiperSlide>

      {/* Logo 4 */}
      <SwiperSlide>
        <img
          src="/images/4.jpeg" // Ruta del logo
          alt="Cliente 4"
          className="w-32 h-32 object-contain"
        />
      </SwiperSlide>

      {/* Logo 5 */}
      <SwiperSlide>
        <img
          src="/images/5.jpeg" // Ruta del logo
          alt="Cliente 5"
          className="w-32 h-32 object-contain"
        />
      </SwiperSlide>

      

      {/* Flechas de navegación */}
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
    </Swiper>
  );
};

export default ClientCarousel;