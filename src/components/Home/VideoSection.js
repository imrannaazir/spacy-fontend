import React from 'react';
const VideoSection = () => {
    return (
        <div class="bg-base-200 pb-16">
            <div>
                <div className='flex items-end justify-center'>
                    <div className='w-[50px] h-[1px] bg-primary'></div>
                    <p className='text-center mt-10 text-xl font-[Courgette] text-primary '>Meet Our Partners</p><div className='w-[50px] h-[1px] bg-primary'></div>
                </div>
                <p
                    id='rockets'
                    className='text-center mb-6 text-2xl lg:text-4xl font-semibold text-black uppercase'> WHAT OUR PARTNERS SAY
                </p>
            </div>
            <div class="grid lg:grid-cols-2 gap-6 mt-16 mb-24">
                <iframe
                    className='w-[80%] h-[200px] lg:h-[300px] mx-auto '
                    src="https://www.youtube.com/embed/TeVbYCIFVa8" title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <iframe
                    className='w-[80%] h-[200px]  lg:h-[300px] mx-auto '
                    src="https://www.youtube.com/embed/mQxImR01pg8" title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>


            </div>
        </div>

    );
};

export default VideoSection;