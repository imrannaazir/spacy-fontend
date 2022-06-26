import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const VideoSection = () => {
    //aos
    useEffect(() => {
        AOS.init({
            duration: 3000
        })
    }, [])
    return (
        <div data-aos="fade-up" class="bg-base-200 pb-16">
            <div>
                <div className='flex items-end justify-center'>
                    <div className='w-[50px] h-[1px] bg-primary'></div>
                    <p className='text-center mt-10 text-xl font-[Courgette] text-primary '>The Journey</p><div className='w-[50px] h-[1px] bg-primary'></div>
                </div>
                <p
                    id='rockets'
                    className='text-center mb-6 text-2xl lg:text-4xl font-semibold text-black uppercase'>That makes history
                </p>
            </div>
            {<div class="flex flex-col lg:flex-row lg:w-[90%] mx-auto gap-6 mt-16 mb-24 ">
                <iframe data-aos="zoom-in"
                    className='w-[80%] mx-auto h-[200px] md:h-[300px]  lg:h-[400px]  '
                    src="https://www.youtube.com/embed/TeVbYCIFVa8" title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <iframe data-aos="zoom-in"
                    className='w-[80%] mx-auto h-[200px] md:h-[300px]  lg:h-[400px]  '
                    src="https://www.youtube.com/embed/mQxImR01pg8" title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>


            </div>}
        </div>

    );
};

export default VideoSection;