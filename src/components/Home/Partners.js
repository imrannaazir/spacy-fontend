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
        })();
    }, []);


    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 5000,
        cssEase: "linear"
    };
    return (
        <div >
            <div className=' w-[80%] mx-auto mt-20'>

                <div>
                    <div className='flex items-end justify-center'>
                        <div className='w-[50px] h-[1px] bg-primary'></div>
                        <p className='text-center mt-10 text-xl font-[Courgette] text-primary '>We Love</p><div className='w-[50px] h-[1px] bg-primary'></div>
                    </div>
                    <p
                        id='rockets'
                        className='text-center mb-6 text-4xl font-semibold text-black uppercase'>Our Partners </p>
                </div>

                <div>
                    <Slider {...settings} className='flex'>
                        {
                            logos.map(logo =>
                                <div
                                    key={logo}
                                    className=''>
                                    <img src={logo} alt="" />
                                </div>)
                        }
                    </Slider>
                </div>

            </div></div>
    );
};

export default Partners;