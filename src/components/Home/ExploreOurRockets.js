import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Bounce } from 'react-reveal';
import Loading from '../shared/Loading';
import Rockets from './Rockets';

const ExploreOurRockets = () => {
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
        <div className='bg-[#0F0E0E]' >
            <Bounce >
                <p
                    id='rockets'
                    className='text-center py-10 text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-t from-white to-gray-900'>
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
    );
};

export default ExploreOurRockets;