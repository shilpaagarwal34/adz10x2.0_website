import React from 'react';



import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

import data from "../../data.json"

const Company_logo = () => {

    return (
        <>

            {/* <!-- Swiper --> */}
            <section className="footer_upper_swiper">
                <div className="container">

                    <Swiper modules={[Autoplay]} autoplay={{ delay: 2500, disableOnInteraction: false }} spaceBetween={30} slidesPerView={5} loop={true} breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 40,
                        },
                    }} className="swiper company_logo">

                        {data.company_logo.map((logo) => (
                            <SwiperSlide key={logo.id} className="swiper-slide">
                                <img src={logo.image} alt={logo.alt} />
                            </SwiperSlide>
                        ))}



                    </Swiper>

                </div>
            </section>
            {/* <!-- Swiper --> */}

        </>
    )
}

export default Company_logo