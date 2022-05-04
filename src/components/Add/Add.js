import React from 'react';
import { Slide } from 'react-reveal';
import DashNav from '../DashNav/DashNav';
import logo from '../../assets/images/logo.png'

const Add = () => {
    return (
        <div>
            <DashNav />
            <Slide right cascade>

                <div className='pl-[15%] py-4 flex items-end gap-6 bg-gradient-to-bl from-gray-500 rounded-l-3xl mb-10'>
                    <p className='text-5xl text-transparent bg-clip-text bg-gradient-to-tr  from-white to-gray-500 font-semibold text-white'>Add New Inventory -</p>

                </div>
                <div class="px-8 py-20">
                    <div class="grid gap-8 items-start justify-center">
                        <div class="relative group">
                            <div class="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                            <form className=' flex justify-center items-center flex-col w-[380px] rounded-lg   relative  my-auto bg-black text-white'>
                                <img className=' h-16' src={logo} alt="" />
                                <input className=' bg-transparent border-2 border-white w-[330px]  h-10 pl-4 mb-4 rounded-lg' type="text" name="" placeholder='Name' id="" />
                                <br />
                                <textarea className=' bg-transparent border-2 border-white w-[330px]  pt-4 pl-4 mb-4 rounded-lg' type="text" name="" placeholder='Description' id="" />
                                <br />
                                <input className=' bg-transparent border-2 border-white w-[330px]  h-10 pl-4 mb-4 rounded-lg' type="text" name="" placeholder='Photo URL' id="" />
                                <br />
                                <input className=' bg-transparent border-2 border-white w-[330px]  h-10 pl-4 mb-4 rounded-lg' type="text" name="" placeholder='Supplier Name' id="" />
                                <br />
                                <input className=' bg-transparent border-2 border-white w-[330px]  h-10 pl-4 mb-4 rounded-lg' type="number" min='0' name="" placeholder='Quantity' id="" />
                                <button className=' text-lg font-semibold text-gray-700 hover:text-white font-serif px-4 py-2 rounded-lg mb-4 bg-white w-[330px] transform duration-500 hover:scale-110 hover:bg-gray-400'>Add</button>

                            </form>
                        </div>
                    </div>
                </div>
            </Slide></div>
    );
};

export default Add;