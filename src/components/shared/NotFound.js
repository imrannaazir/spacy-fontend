import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

const NotFound = () => {
    return (
        <div>
            <Header />

            <div className=' h-screen flex justify-center items-center  bg-base-100'>
                <div className='w-[100px] fixed'>
                    <img
                        src="https://physicsgurukul.com/wp-content/uploads/2019/07/db1oiuj-3dd55ff6-89be-4d60-830f-494b026904b5.gif"
                        alt=""
                    />

                    <span
                        className='absolute -top-8 -left-5 w-[200px] text-pink-600 font-bold text-lg'  >
                        Out of the Earth
                    </span>

                    <Link
                        className='absolute -bottom-8 left-4 underline text-green-400'
                        to='/' >
                        Go Earth?
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;