import React from "react";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import data from "../../data.json";

const Banner_slider = () => {
  return (
    <>
      <div id="home">
        {/* <!--banner slider start --> */}
        <Swiper
          className="swiper mySwiper"
          modules={[Pagination, Navigation, Autoplay]}
          navigation={true}
          slidesPerView={1}
          // autoplay={{
          //   delay: 3000, // time in ms between slides
          //   disableOnInteraction: false, // continue autoplay after user interacts
          // }}
          pagination={{ clickable: true }}
          loop={true}
        >
          <div className="swiper-wrapper">
            {data.heroSlides.map((slide, index) => (
              <SwiperSlide key={index} className="swiper-slide">
                <div className="hero_banner">
                  <div className="slide-content">
                    <h1 dangerouslySetInnerHTML={{ __html: slide.title }}></h1>
                    <p
                      dangerouslySetInnerHTML={{ __html: slide.description }}
                    ></p>
                    {/* <button className="btn mt-2" type="button">
                      Get Started
                    </button> */}
                    <a
                      href="https://portal.adz10x.com/register"
                      target="_blank"
                      className="btn mt-2"
                    >
                      Get Started
                    </a>
                  </div>
                  <div className="slide-image">
                    <img
                      src={slide.image}
                      alt=""
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>

      {/* <!--banner slider end--> */}
    </>
  );
};

export default Banner_slider;
