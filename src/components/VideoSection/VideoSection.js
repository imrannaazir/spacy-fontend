import React from 'react';

const VideoSection = () => {
    return (
        <div id='videos'>
            <p className=' text-4xl text-transparent bg-clip-text bg-gradient-to-t from-white to-gray-700 text-center my-20 font-semibold'>JOURNEY THAT MAKE HISTORY.</p>
            <div className='w-[80%] mx-auto grid lg:grid-cols-2 gap-6'>
                <iframe className='md:w-[392px] lg:w-[560px] md:h-[220px] lg:h-[315px] hover:scale-125 duration-500' src="https://www.youtube.com/embed/TeVbYCIFVa8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>


                <iframe className='md:w-[392px] lg:w-[560px] md:h-[220px] lg:h-[315px]  hover:scale-125 duration-500' src="https://www.youtube.com/embed/mQxImR01pg8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

            </div>
        </div>
    );
};

export default VideoSection;