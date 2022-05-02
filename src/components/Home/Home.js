import React from 'react';
import Header from '../Header/Header';
import rocket from '../../assets/videos/rocket .mp4'
import Footer from '../Footer/Footer';
import { Slide } from 'react-reveal';
import '../../components/Header/Header.css'
const Home = () => {
    return (

        <div className=' absolute top-0 w-[100%] h-[100%]'>
            <video
                autoPlay
                loop
                muted
                className='static top-0 h-screen w-[100%] object-cover -z-10' src={rocket}></video>
            <div className=' absolute top-0 w-[100%] h-[100%]'>
                <Header />
                <Slide right cascade>
                    <div className='z-50 w-[47%] h-full flex flex-col justify-center items-start  ml-auto gap-6'>
                        <p className=' text-3xl text-white'>Welcome to</p>
                        <p className='font-bold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-gray-700 to-white uppercase '>world's biggest Rocket stocking hub</p>
                        <button className='btn-hover border-2 px-4 py-1 text-white'>Explore</button>
                    </div></Slide>

            </div>


            <p className='text-5xl text-white'>hello</p>
            <p className='text-5xl text-white'>hello</p>
            <p className='text-5xl text-white'>hello</p>
            <Footer />
        </div>

    );
};

export default Home;