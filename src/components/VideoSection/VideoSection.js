import React from 'react';

const VideoSection = () => {
    return (
        <div>
            <p className=' text-5xl text-transparent bg-clip-text bg-gradient-to-t from-white to-gray-700 text-center mb-8'>Journey That Makes History</p>
            <div className='w-[80%] mx-auto grid lg:grid-cols-2 gap-6'>
                <iframe className='w-[560px] h-[315px]' src="https://www.youtube.com/embed/TeVbYCIFVa8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/mQxImR01pg8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            </div>
        </div>
    );
};

export default VideoSection;