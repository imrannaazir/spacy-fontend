import { faShuttleSpace } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Bounce, Slide, Zoom } from 'react-reveal';
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

                className=' lg:w-[80%] mx-auto border-2 border-white rounded-lg relative'>
                <img

                    onMouseEnter={() => setDetails(true)}

                    className='w-[98%] rounded-lg mx-auto my-auto mt-[1%] h-[98%]  z-10' src={img} alt="" />
                <Bounce clear cascade>
                    <div
                        onMouseLeave={() => setDetails(false)}
                        className={`absolute top-0 bg-black bg-opacity-70 inset-0 ${details ? 'flex' : 'hidden'} flex-col justify-center items-center p-4 lg:p-20 text-white gap-6`}>
                        <p className=' text-4xl font-bold text-transparent  bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500'>{name}</p>

                        <p className=' border-l-2 pl-2 border-purple-400'>{description}</p>
                        <p className=' text-2xl font-bold border-b-2 text-transparent  bg-clip-text bg-gradient-to-r from-gray-700 to-gray-300'>Supplier Name: {supplier}</p>
                        <div>
                            <span className=' text-4xl font-bold text-transparent  bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500'>{quantity} <FontAwesomeIcon className=' text-pink-500' icon={faShuttleSpace} /></span>
                            <button
                                onClick={() => navigateToUpdate(_id)}
                                className='border-2 px-4 py-1 ml-8 hover:scale-105 duration-500 hover:bg-black'>Update</button>
                        </div>
                    </div>
                </Bounce>
            </div>
        </Zoom>
    );
};

export default Rockets;