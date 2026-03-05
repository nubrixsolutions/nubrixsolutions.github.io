import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import ai from "../asset/images/hero/ai.jpg";
import cloud from "../asset/images/hero/cloud.jpg";
import mobile from "../asset/images/hero/mobile.jpg";
// import data from "../asset/images/hero/data.jpg";
// import security from "../asset/images/hero/security.jpg";

function HeroSlider() {
  const slides = [
    {
      title: "Build the Future with AI",
      desc: "Transform your business with intelligent AI powered solutions.",
      image: ai,
    },

    {
      title: "Cloud Technology",
      desc: "Secure and scalable cloud infrastructure for modern enterprises.",
      image: cloud,
    },

    {
      title: "Think Mobile First",
      desc: "Powerful mobile experiences for the next generation.",
      image: mobile,
    },

    // {
    //   title: "Data Driven Innovation",
    //   desc: "Unlock insights with advanced analytics and data platforms.",
    //   image: data,
    // },

    // {
    //   title: "Enterprise Security",
    //   desc: "Protect your digital assets with next-generation security solutions.",
    //   image: security,
    // },
  ];

  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      loop={true}
      autoplay={{ delay: 4000 }}
      pagination={{ clickable: true }}
      navigation={true}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div
            className="hero-slide"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="hero-overlay">
              <h1>{slide.title}</h1>

              <p>{slide.desc}</p>

              <button
                className="hero-btn"
                onClick={() => (window.location.href = "#services")}
              >
                Explore More
              </button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default HeroSlider;
