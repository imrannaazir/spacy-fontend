import React from 'react';
import image from "../../assets/images/join-us.jpg"
const VideoSection = () => {
    return (
        <div className='mb-10'>

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
            <div className='w-[80%] mx-auto grid lg:grid-cols-2 gap-6'>
                <iframe className='md:w-[392px] lg:w-[560px] md:h-[220px] lg:h-[315px] hover:scale-105 duration-200' src="https://www.youtube.com/embed/TeVbYCIFVa8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>


                <iframe className='md:w-[392px] lg:w-[560px] md:h-[220px] lg:h-[315px]  hover:scale-105 duration-200' src="https://www.youtube.com/embed/mQxImR01pg8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

            </div>
        </div>
    );
};

export default VideoSection;