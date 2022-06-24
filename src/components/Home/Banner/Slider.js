import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";
import Banner from './Banner';
const Slider = () => {
    const banners = [
        {
            img: "https://i.ibb.co/wcHN9Zs/rocket.jpg",
            subtitle: "The World’s Smallest Quadcopter",
            title: "Elomus F18 Drone 3 Auto",
            description: "Ideal For Indoor Usage & Ultra Portable. 3 User Modes, Junior, Intermediate & Healess."
        },
        {
            img: "https://cdn.shopify.com/s/files/1/0016/5412/8710/files/slider2-elomus1-1920x900_1920x900.progressive.jpg?v=1533173106",
            subtitle: "The World’s Smallest Quadcopter",
            title: "Elomus F18 Drone 3 Auto",
            description: "Ideal For Indoor Usage & Ultra Portable. 3 User Modes, Junior, Intermediate & Healess."
        }
    ]
    return (
        <>
            <Swiper
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
        /*  <div
             style={{ backgroundImage: `url("https://i.ibb.co/HH2NDjg/banner.jpg")` }}
             class="hero bg-cover h-screen gap-10 bg-fixed"
         >
             <div class="hero-overlay "></div>
             <div class="hero-content text-center text-neutral-content  lg:flex-row-reverse">
                 <div class="text-center lg:text-left hidden lg:block">
                     <h1 class="text-5xl font-bold">Contact Us!</h1>
                     <p class="py-6">
                         Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
                         excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
                         a id nisi.
                     </p>
                 </div>
                 <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                     <div class="card-body">
                         <div class="form-control">
                             <label class="label">
                                 <span class="label-text">Email</span>
                             </label>
                             <input
                                 type="text"
                                 placeholder="email"
                                 class="input input-bordered"
                             />
                         </div>
                         <div class="form-control">
                             <label class="label">
                                 <span class="label-text">Message</span>
                             </label>
                             <textarea
                                 type="text"
                                 placeholder="message"
                                 class="input input-bordered h-[100px]"
                             />
                         </div>
                         <div class="form-control mt-6">
                             <button class="btn btn-primary">Send</button>
                         </div>
                     </div>
                 </div>
             </div>
         </div> */
    );
};

export default Slider;