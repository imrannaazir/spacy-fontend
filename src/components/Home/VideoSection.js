import React from 'react';
import image from "../../assets/images/join-us.jpg"
const VideoSection = () => {
    return (
        <div style={{ backgroundImage: `url(${image})` }}
            class=" bg-cover h-screen gap-10 bg-fixed flex flex-col justify-center items-center">
            <p className=' text-4xl text-white text-center my-20 font-semibold'>Journey That Make History</p>
            <div className='w-[80%] mx-auto grid lg:grid-cols-2 gap-6'>
                <iframe className='md:w-[392px] lg:w-[560px] md:h-[220px] lg:h-[315px] hover:scale-125 duration-500' src="https://www.youtube.com/embed/TeVbYCIFVa8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>


                <iframe className='md:w-[392px] lg:w-[560px] md:h-[220px] lg:h-[315px]  hover:scale-125 duration-500' src="https://www.youtube.com/embed/mQxImR01pg8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

            </div>
        </div>
    );
};

export default VideoSection;