import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import rocket from '../../assets/videos/rocket .mp4'
import Footer from '../Footer/Footer';
import { Bounce, Slide, Zoom } from 'react-reveal';
import axios from 'axios';
import Rockets from '../Rockets/Rockets';
import Partners from '../Partners/Partners';
import VideoSection from '../VideoSection/VideoSection';
import Loading from '../Loading/Loading';
const Home = () => {
    const [rockets, setRockets] = useState([])
    useEffect(() => {
        (async function () {
            const { data } = await axios.get('https://nameless-beach-41067.herokuapp.com/rockets')
            const rockets = data.slice(0, 6)
            setRockets(rockets);
        })()
    }, [])
    if (rockets.length === 0) return <Loading />
    return (
        <div id='home'>
            <div className='fixed top-0 z-50 w-[100%]'>
                <Header />
            </div>
            <div className=' absolute top-0 w-[100%] h-[100%]'>
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

                <div  >
                    <Bounce >
                        <p
                            id='rockets'
                            className='text-center my-10 text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-t from-white to-gray-900'>
                            EXPLORE OUR ROCKETS UNIVERSE
                        </p>
                    </Bounce >

                    <div
                        id='rockets'
                        className=' w-[97%] mx-auto py-12 grid lg:grid-cols-2 gap-y-20'>


                        {
                            rockets.map(rocket =>
                                <Rockets
                                    key={rocket._id}
                                    rocket={rocket}
                                />

                            )
                        };
                    </div>
                </div>

                {/* join section */}
                <Slide left>
                    <div
                        className='w-[95%] lg:w-[80%] mx-auto bg-gradient-to-r from-purple-600 to-transparent rounded-md p-6 flex items-center justify-between my-20 font'>
                        <div>
                            <p>Wanna be part of us?</p>
                            <p
                                className=' lg:text-3xl  text-pink-600 font-mono font-bold'>
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

                <Slide right>
                    <VideoSection />
                </Slide>

                <Slide left>
                    <Partners />
                </Slide>

                <Footer />
            </div>
        </div>
    );
};

export default Home;