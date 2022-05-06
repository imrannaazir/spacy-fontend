import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick/lib/slider';
import axios from 'axios';

const Partners = () => {
    const [logos, setLogos] = useState([]);
    useEffect(() => {
        (async function () {
            const { data } = await axios.get('logo.json');
            setLogos(data);
        })()
    }, [])
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 4000,
        autoplaySpeed: 0,
        cssEase: "linear"
    };
    return (
        <div className=' w-[80%] mx-auto'>
            <p className=' text-5xl text-transparent bg-clip-text bg-gradient-to-t from-white to-gray-700 text-center'>Our Partners</p>

            <div>
                <Slider {...settings} className='flex'>
                    {
                        logos.map(logo => <div className=''><img src={logo} alt="" /></div>)
                    }
                </Slider>
            </div>

        </div>
    );
};

export default Partners;