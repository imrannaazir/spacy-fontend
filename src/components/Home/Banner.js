import React from 'react';
import rocket from '../../assets/videos/rocket .mp4'
import { Zoom } from 'react-reveal';

const Banner = () => {
    return (
        <div>
            <video
                autoPlay
                loop
                muted
                className='static top-0 h-screen w-[100%] object-cover -z-10 blur-sm lg:blur-none'
                src={rocket}>
            </video>

            <div className=' absolute top-0 w-[100%] h-[100%]'>
                <Zoom right cascade>
                    <div className='z-50 w-[60%] lg:w-[47%] h-full flex flex-col justify-center items-start  ml-auto gap-6'>
                        <p
                            className='text-xl lg:text-3xl text-white'>
                            Welcome to
                        </p>
                        <p
                            className='font-bold text-transparent text-3xl  lg:text-5xl bg-clip-text bg-gradient-to-r from-gray-700 to-white uppercase '>
                            world's biggest Rocket stocking hub
                        </p>

                        <a
                            href="/#rockets">
                            <button
                                className=' hover:scale-110 hover:bg-black duration-500 hover:font-bold border-2 px-4 py-1 text-white'>
                                Explore
                            </button>
                        </a>
                    </div></Zoom>
            </div>
            <div className='absolute -bottom-1 w-full'>
                <svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" class="wave text fill-[#0F0E0E] rotate-180" viewBox="0 0 1920 81.717"><path d="M1920 0s-109.246 46.107-316.333 67.334C1343.5 94 1137.095 77.238 999.167 67.5 854 57.25 637.662 24.697 541.709 18.834 375.334 8.666 147 11 0 37.875V0h1920z"></path></svg>
            </div>

        </div>
    );
};

export default Banner;