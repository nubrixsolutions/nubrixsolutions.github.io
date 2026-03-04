import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function HeroSlider() {
  return (
    <Swiper autoplay={{ delay: 3000 }} loop={true}>
      <SwiperSlide>
        <div className="hero-slide">
          <h1>Build the Future with AI</h1>
          <p>Where smart technology meets limitless ambition</p>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="hero-slide">
          <h1>Unleash the Power of Python</h1>
          <p>Transforming ideas into intelligent solutions</p>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="hero-slide">
          <h1>Think Mobile App</h1>
          <p>Build the future in your pocket</p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default HeroSlider;
