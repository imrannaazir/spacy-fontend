import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Loading from '../shared/Loading';
import Rockets from './Rockets';

const ExploreOurRockets = ({ api }) => {
    const [rockets, setRockets] = useState([])
    useEffect(() => {
        (async function () {
            const { data } = await axios.get(`https://limitless-beach-86891.herokuapp.com/${api}`)
            const rockets = data.slice(0, 6)
            setRockets(rockets);
        })()
    }, [api])
    if (rockets.length === 0) return <Loading />
    return (
        <div data-aos="fade-up" className='' >

            <div className='flex items-end justify-center'>
                <div className='w-[50px] h-[1px] bg-primary'></div>
                <p className='text-center mt-10 text-xl font-[Courgette] text-primary '>Featured products</p><div className='w-[50px] h-[1px] bg-primary'></div>
            </div>
            <p
                id='rockets'
                className='text-center mb-6 text-2xl lg:text-4xl font-semibold text-black uppercase'>{api} Products
            </p>
            <div
                className=' md:w-[90%] lg:w-[80%] mx-auto  grid md:grid-cols-2 md:py-4 lg:grid-cols-3 gap-6'>


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