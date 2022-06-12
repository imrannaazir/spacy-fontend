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
        speed: 4000,
        autoplaySpeed: 0,
        cssEase: "linear"
    };
    return (
        <div style={{ backgroundImage: `url(https://www.spacex.com/static/images/backgrounds-2022/crew-3-return/pre-undocking/Homepage_Desktop.webp)`, backgroundAttachment: "fixed" }}
            class=" bg-cover h-screen gap-10 bg-fixed flex justify-center items-center">
            <div className=' w-[80%] mx-auto mt-20'>
                <p className=' text-4xl text-white to-gray-700 text-center font-semibold'>Our Partners</p>

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