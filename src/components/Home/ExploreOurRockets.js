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
        <div className='' >
            <Bounce >
                <p
                    id='rockets'
                    className='text-center py-10 text-4xl font-semibold text-primary'>Explore Our Rockets Universe
                </p>
            </Bounce >

            <div
                id='rockets'
                className=' w-[80%] mx-auto py-12 grid lg:grid-cols-3 gap-6'>


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