import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./partner.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
// import required modules
import { EffectCoverflow, Autoplay } from "swiper";
import OurPartner from './OurPartner';


const OurPartners = () => {
    const partners = [
        {
            name: "Elon Musk",
            company: "Space X",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/1200px-Elon_Musk_Royal_Society_%28crop2%29.jpg"
        },
        {
            name: "Jeff Bezos",
            company: "Blue Origin",
            img: "https://assets.change.org/photos/3/rh/bh/VWrhBhlKyGVOeyG-400x400-noPad.jpg?1528862483"
        },
    ]
    //aos
    useEffect(() => {
        AOS.init({
            duration: 3000
        })
    }, [])
    return (
        <div id='partners' data-aos="fade-up" className='lg:px-16 py-16'>

            <div>
                <div className='flex items-end justify-center'>
                    <div className='w-[50px] h-[1px] bg-primary'></div>
                    <p className='text-center mt-10 text-xl font-[Courgette] text-primary '>Meet Our Partners</p><div className='w-[50px] h-[1px] bg-primary'></div>
                </div>
                <p
                    id='rockets'
                    className='text-center mb-6 text-2xl lg:text-4xl font-semibold text-black uppercase'> WHAT OUR PARTNERS SAY
                </p>
            </div>
            <Swiper data-aos="zoom-in-up"
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
                {
                    partners.map((partner, i) =>
                        <SwiperSlide>
                            <OurPartner key={i} partner={partner} />
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </div>
    );
};

export default OurPartners;