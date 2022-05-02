import React from 'react';
import Header from '../Header/Header';
import bg from '../../assets/videos/bg.mp4'
import rocket from '../../assets/videos/rocket .mp4'
const Home = () => {
    return (
        <div>
            <video
                autoPlay
                loop
                muted
                className=' w-[100%] h-[100vh] object-cover fixed -z-30'

                src={bg}></video>


            <div className=' absolute top-0 w-[100%] h-[100%]'>
                <video
                    autoPlay
                    loop
                    muted
                    className='static top-0 h-screen w-[100%] object-cover -z-10' src={rocket}></video>
                <div className=' absolute top-0 w-[100%] h-[100%]'>
                    <Header />
                    <div className='z-50 w-[45%] h-full flex flex-col justify-center items-start  ml-auto'>
                        <p className=' text-3xl'>Welcome to</p>
                        <p className='font-bold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-gray-500 to-white uppercase '>world's biggest Rocket skock hub</p>
                    </div>

                </div>


                <p className='text-5xl text-white'>hello</p>
                <p className='text-5xl text-white'>hello</p>
                <p className='text-5xl text-white'>hello</p>
            </div>

        </div>
    );
};

export default Home;