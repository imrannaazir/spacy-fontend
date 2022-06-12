import React from 'react';
import { Slide } from 'react-reveal';

const JoinNow = () => {
    return (
        <div>
            <Slide left>
                <div
                    className='w-[95%] lg:w-[80%] mx-auto bg-gradient-to-r from-[#864879] to-[#E9A6A6] rounded-md p-6 flex items-center justify-between my-20 font'>
                    <div>
                        <p>Wanna be part of us?</p>
                        <p
                            className=' lg:text-3xl  text-white font-mono font-bold'>
                            Join to SPACEY as an intern & explore the Universe.
                        </p>
                    </div>

                    <div >
                        <button
                            className='bg-pink-600 text-white px-6 py-2 rounded-full hover:scale-110 duration-500'>
                            Join
                        </button>
                    </div>
                </div>
            </Slide>
        </div>
    );
};

export default JoinNow;