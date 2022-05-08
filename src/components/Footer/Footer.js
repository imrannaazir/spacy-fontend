import React from 'react';
import { Slide, Zoom } from 'react-reveal';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png'
const Footer = () => {
    return (
        <Slide right>
            <div className=' w-[100%] px-[10%] border-t-2 border-gray-700 bg-gradient-to-r from-transparent to-purple-600 lg:to-purple-400
         grid lg:grid-cols-3 gap-4 my-20 py-6 '>

                <Zoom cascade>
                    <div className='border-b-[1px] lg:border-b-0 lg:border-r-2 border-gray-600'>
                        <img className='w-[200px] lg:w-[300px]' src={logo} alt="" />
                        <p className='text-gray-300'>© SpaceY 2022|All Right Reserved.</p>
                        <button className='text-gray-500 hover:text-white'>Terms & conditions </button> <button className='text-gray-500 hover:text-white'> Privacy Policy</button>
                    </div>
                </Zoom>

                <Zoom cascade>
                    <div className=' lg:mx-auto '>
                        <p className='text-white text-2xl '>Our Partners</p>
                        <div className='flex gap-4 lg:gap-0 lg:flex-col'>
                            <Link className='text-gray-500 hover:text-gray-300' to=''>Space X</Link>
                            <Link className='text-gray-500 hover:text-gray-300' to=''>Blue Origin</Link>
                            <Link className='text-gray-500 hover:text-gray-300' to=''>ULA</Link>
                            <Link className='text-gray-500 hover:text-gray-300' to=''>XCOR</Link>
                        </div>
                    </div>
                </Zoom>


                <Zoom cascade>
                    <div className='border-t-[1px] lg:border-t-0 lg:border-l-2 border-gray-600 lg:pl-12'>
                        <p className='text-white text-2xl mb-3'>Fly To Space</p>
                        <form action="">
                            <input className='py-1 bg-pink-400' type="email" name="" id="" />
                            <button className='bg-pink-500 py-1 px-2 rounded-r-full text-purple-900 hover:scale-110 font-bold'>Subscribe →</button>
                        </form>
                    </div>
                </Zoom>

            </div>
        </Slide>
    );
};

export default Footer;