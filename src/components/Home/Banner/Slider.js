import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./banner.css"

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";
import Banner from './Banner';
const Slider = () => {
    const banners = [
        {
            category: "rockets",
            img: "https://i.ibb.co/tHV2SfT/rocket.webp",
            subtitle: "The World’s Smallest Quadcopter",
            title: "Elomus F18 Drone 3 Auto",
            description: "Ideal For Indoor Usage & Ultra Portable. 3 User Modes, Junior, Intermediate & Healess."
        },
        {
            category: "drones",
            img: "https://i.ibb.co/dc2r026/drone.webp",
            subtitle: "The World’s Smallest Quadcopter",
            title: "Elomus F18 Drone 3 Auto",
            description: "Ideal For Indoor Usage & Ultra Portable. 3 User Modes, Junior, Intermediate & Healess."
        }
    ]
    return (
        <>
            <Swiper id='home'
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {banners.map((banner, i) => <SwiperSlide> <Banner key={i} banner={banner} /></SwiperSlide>)}

            </Swiper>
        </>

    );
};

export default Slider;