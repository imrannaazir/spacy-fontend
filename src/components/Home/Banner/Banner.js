import React from 'react';

const Banner = ({ banner }) => {
    return (
        <div
            style={{ backgroundImage: `url(${banner?.img})` }}
            class="hero bg-cover h-screen gap-10 bg-fixed"
        >
            <div className='w-full'>
                <div className='flex flex-col justify-center items-start text-base-100 pl-24 w-[50%] text-left'>
                    <div className='flex items-center'>
                        <div className='w-[100px] h-[1px] bg-base-100'></div>
                        <p className='text-lg'>{banner?.subtitle}</p>
                    </div>
                    <h1 className='text-[5em] font-bold leading-[1em]'>{banner?.title}</h1>
                    <p className='text-sm'>{banner?.description}

                    </p>
                </div>
            </div>
        </div>
    );
};

export default Banner;