import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Bounce } from 'react-reveal';
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
        <div className='' >
            <Bounce >
                <p className='text-center mt-10 text-xl font-[Courgette] text-primary'>Featured products</p>
                <p
                    id='rockets'
                    className='text-center mb-6 text-4xl font-semibold text-black uppercase'>{api} Products
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