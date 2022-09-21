import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const FeaturedDrone = () => {
    //aos
    useEffect(() => {
        AOS.init({
            duration: 3000
        })
    }, [])
    return (
        <div >
            <img data-aos="fade-up" className='w-full lg:w-[80%] mx-auto' src="https://i.ibb.co/cFqWrcV/featured-drone.webp" alt="" />
        </div>
    );
};

export default FeaturedDrone;