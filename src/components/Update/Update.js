import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Slide, Zoom } from 'react-reveal';
import { useNavigate, useParams } from 'react-router-dom';
import DashNav from '../DashNav/DashNav';

const Update = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [rocket, setRocket] = useState({});
    useEffect(() => {
        (async function () {
            const { data } = await axios.get(`https://nameless-beach-41067.herokuapp.com/rockets/${id}`)
            setRocket(data)
        })()
    }, [])

    const { name, img, description, quantity, supplier, _id } = rocket;

    const handleDelivered = () => {
        const { quantity, _id, ...rest } = rocket;
        const updatedRocket = {
            quantity: quantity - 1, ...rest
        }
        if (updatedRocket.quantity < 0) {
            return toast.error('Stock out!')
        }
        else {
            const proceed = window.confirm(`Please confirm to deliver a ${name} rocket`)
            if (proceed) {
                (async function () {
                    console.log(updatedRocket);
                    const { data } = await axios.put(`https://nameless-beach-41067.herokuapp.com/rockets/${_id}`, updatedRocket)
                    navigate('/');
                    console.log(data);
                })();
                setRocket(updatedRocket)
                toast.success('Successfully delivered!')
            }
        }
    }

    const handleUpdate = e => {
        e.preventDefault();
        const addQuantity = e.target.quantity.value;
        const { quantity, _id, ...rest } = rocket;
        const newQuantity = parseInt(quantity) + parseInt(addQuantity)
        const updatedRocket = {
            quantity: newQuantity, ...rest
        };
        const proceed = window.confirm(`Are you sure you want to update quantity of ${name}?`)
        if (proceed) {
            (async function () {
                console.log(updatedRocket);
                const { data } = await axios.put(`https://nameless-beach-41067.herokuapp.com/rockets/${_id}`, updatedRocket)
            })();
            setRocket(updatedRocket);
            navigate('/')
            e.target.quantity.value = ''
            toast.success(`Successfully added in stock${' ' + addQuantity + ' ' + '"' + name + '"'}`)
        }
    }

    return (
        <div>
            <DashNav />
            <Slide right cascade>
                <div className=' '>
                    <div className='pl-[16%] py-4 flex items-end gap-6 bg-gradient-to-bl from-gray-500 rounded-l-3xl'>
                        <p className='text-4xl lg:text-6xl text-white'><Slide left cascade>{name}</Slide></p>
                        <p className='text-white '><Slide left cascade>{'(' + supplier + ')'}</Slide></p>
                    </div>
                    {/* image */}
                    <div className=' mx-[15%] my-8 grid lg:grid-cols-2'>
                        <div>
                            <img src={img} alt="" />
                        </div>

                        {/* details */}
                        <Zoom cascade>
                            <div className=' bg-gradient-to-t from-white to-gray-500 flex flex-col justify-center items-start gap-8 px-[5%] pb-4'>
                                {/* Quantity */}
                                <div className='flex items-end'>
                                    <p className='text-6xl lg:text-9xl text-transparent bg-clip-text bg-gradient-to-t from-black to-gray-500'>{quantity}</p>
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
                                        <button
                                            onClick={handleDelivered}
                                            className=' px-4 py-2 border-2 border-black hover:scale-110 duration-500 hover:font-bold'>Delivered</button>
                                    </div>
                                    <form
                                        onSubmit={handleUpdate}
                                        className='flex'>
                                        <input className=' w-24 pl-2' type="number" min='0' name="quantity" placeholder='Quantity' required />
                                        <button type='submit' className=' px-4 py-2 border-2 border-black hover:scale-110 duration-500 hover:font-bold'>Update</button>
                                    </form>
                                </div>
                            </div>
                        </Zoom>
                    </div>
                </div>
            </Slide>
        </div>
    );
};

export default Update;