import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DashNav from '../DashNav/DashNav';

const Update = () => {
    const { id } = useParams();
    const [rocket, setRocket] = useState({});
    useEffect(() => {
        (async function () {
            const { data } = await axios.get(`http://localhost:5000/rockets/${id}`)
            setRocket(data)
        })()
    }, [])
    console.log(rocket);
    const { name, img, description, quantity, supplier, _id } = rocket;

    return (
        <div>
            <DashNav />
            <div className=' '>
                <div className='pl-[15%] py-4 flex items-end gap-6 bg-gradient-to-bl from-gray-500 rounded-l-3xl'>
                    <p className='text-6xl text-white'>{name}</p>
                    <p className='text-white '>({supplier})</p>
                </div>
                {/* image */}
                <div className=' mx-[15%] my-8 grid grid-cols-2'>
                    <div>
                        <img src={img} alt="" />
                    </div>

                    {/* details */}
                    <div className=' bg-gradient-to-t from-white to-gray-500 flex flex-col justify-center items-start gap-8 px-[5%]'>
                        {/* Quantity */}
                        <div className='flex items-end'>
                            <p className='text-9xl text-transparent bg-clip-text bg-gradient-to-t from-black to-gray-500'>{quantity}</p>
                            <p className='text-4xl pl-2 pb-4'>Available</p>
                        </div>
                        {/* description */}
                        <div className='flex gap-4'>
                            <div className='w-6 bg-gradient-to-t from-pink-600 to-purple-600 h-[100%] '>

                            </div>
                            <p className='   '>{description}</p>
                        </div>
                        {/* button */}
                        <div className='w-full flex justify-around  text-center'>
                            <div>
                                <button className=' px-4 py-2 border-2 border-black'>Delivered</button>
                            </div>
                            <form className='flex'>
                                <input className=' w-24 pl-2' type="number" min='0' name="" placeholder='Quantity' id="" />
                                <button className=' px-4 py-2 border-2 border-black'>Update</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Update;