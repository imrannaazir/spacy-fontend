import React, { useState } from 'react';
import { Slide, Zoom } from 'react-reveal';
import { useNavigate } from 'react-router-dom';
import '../../components/Header/Header.css'

const Rockets = ({ rocket: { name, img, description, quantity, supplier, _id } }) => {
    const navigate = useNavigate()
    const [details, setDetails] = useState(false)
    const navigateToUpdate = id => {
        navigate(`/update/${id}`)
    }

    return (
        <Zoom>
            <div

                className=' w-[80%] mx-auto border-2 border-white relative'>
                <img

                    onMouseEnter={() => setDetails(true)}

                    className='w-[98%] mx-auto my-auto mt-[1%] h-[98%]  z-10' src={img} alt="" />
                <Slide bottom cascade>
                    <div
                        onMouseLeave={() => setDetails(false)}
                        className={`absolute top-0 bg-black bg-opacity-70 inset-0 ${details ? 'flex' : 'hidden'} flex-col justify-center items-center p-20 text-white gap-6`}>
                        <p className=' text-4xl font-bold text-transparent  bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500'>{name}</p>

                        <p className=' border-l-2 pl-2 border-purple-400'>{description}</p>
                        <p className=' text-2xl font-bold border-b-2 text-transparent  bg-clip-text bg-gradient-to-r from-gray-700 to-gray-300'>Supplier Name: {supplier}</p>
                        <div>
                            <span className=' text-xl font-bold'>Quantity:{quantity}</span>
                            <button
                                onClick={() => navigateToUpdate(_id)}
                                className='btn-hover border-2 px-4 py-1 ml-8'>Update</button>
                        </div>
                    </div>
                </Slide>
            </div>
        </Zoom>
    );
};

export default Rockets;