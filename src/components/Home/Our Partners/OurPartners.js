import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./partner.css"

// import required modules
import { EffectCoverflow, Autoplay } from "swiper";
import OurPartner from './OurPartner';


const OurPartners = () => {
    return (
        <div className='lg:px-16 py-16'>

            <div>
                <div className='flex items-end justify-center'>
                    <div className='w-[50px] h-[1px] bg-primary'></div>
                    <p className='text-center mt-10 text-xl font-[Courgette] text-primary '>Meet Our Partners</p><div className='w-[50px] h-[1px] bg-primary'></div>
                </div>
                <p
                    id='rockets'
                    className='text-center mb-6 text-4xl font-semibold text-black uppercase'> WHAT OUR PARTNERS SAY
                </p>
            </div>
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                loop={true}
                modules={[EffectCoverflow, Autoplay]}
                breakpoints={{
                    0: {
                        slidesPerView: 1
                    },
                    768: {
                        slidesPerView: 1.2
                    },
                    1024: {
                        slidesPerView: 3
                    }
                }}
                className="mySwiper"
            >
                <SwiperSlide>
                    <OurPartner />
                </SwiperSlide>
                <SwiperSlide>
                    <OurPartner />
                </SwiperSlide>
                <SwiperSlide>
                    <OurPartner />
                </SwiperSlide>
                <SwiperSlide>
                    <OurPartner />
                </SwiperSlide>
                <SwiperSlide>
                    <OurPartner />
                </SwiperSlide>
                <SwiperSlide>
                    <OurPartner />
                </SwiperSlide>
                <SwiperSlide>
                    <OurPartner />
                </SwiperSlide>
                <SwiperSlide>
                    <OurPartner />
                </SwiperSlide>
                <SwiperSlide>
                    <OurPartner />
                </SwiperSlide>
                <SwiperSlide>
                    <OurPartner />
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default OurPartners;