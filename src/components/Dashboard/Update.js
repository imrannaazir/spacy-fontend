import axios from 'axios';
import React from 'react';
import toast from 'react-hot-toast';
import { Slide, Zoom } from 'react-reveal';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Loading from '../shared/Loading';
import { useQuery } from 'react-query'
import Header from '../shared/Header';

const Update = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { isLoading, error, data, refetch } = useQuery('productData', () =>
        fetch(`https://limitless-beach-86891.herokuapp.com/rockets/${id}`).then(res =>
            res.json()
        )
    )

    if (isLoading) return <Loading />
    if (error) return toast.error(error.message)
    const { name, img, description, quantity, supplier } = data;

    const handleDelivered = () => {
        const { quantity, _id, ...rest } = data;
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
                    const { data } = await axios.put(`https://limitless-beach-86891.herokuapp.com/rockets/${_id}`, updatedRocket)
                    refetch()
                    navigate('/');
                    console.log(data);
                })();
                toast.success('Successfully delivered!')
            }
        }
    }

    const handleUpdate = e => {
        e.preventDefault();
        const addQuantity = e.target.quantity.value;
        const { quantity, _id, ...rest } = data;
        const newQuantity = parseInt(quantity) + parseInt(addQuantity)
        const updatedRocket = {
            quantity: newQuantity, ...rest
        };
        const proceed = window.confirm(`Are you sure you want to update quantity of ${name}?`)
        if (proceed) {
            (async function () {
                console.log(updatedRocket);
                const { data } = await axios.put(`https://limitless-beach-86891.herokuapp.com/rockets/${_id}`, updatedRocket)
            })();
            refetch()
            navigate('/')
            e.target.quantity.value = ''
            toast.success(`Successfully added in stock${' ' + addQuantity + ' ' + '"' + name + '"'}`)
        }
    }

    return (
        <>
            <Header />
            <div className='min-h-screen bg-base-100'>
                <div className="hero min-h-[200px]" style={{ backgroundImage: `url(${img})` }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">{name}</h1>
                        </div>
                    </div>
                </div>
                <div className="card lg:card-side bg-base-100  rounded-none w-[90%] mx-auto py-8">
                    <figure><img className='rounded-xl w-[500px]' src={img} alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{name}</h2>
                        <h2 className="card-title text-primary">Available: {quantity}</h2>
                        <p className='text-gray-500'>{description}</p>
                        <div className='divider' />
                        <h2>Brand: <span className='text-primary'>{supplier}</span></h2>
                        <h2>Availability:<span className='text-primary'> {quantity == 0 ? "stock out" : "in stock"}</span></h2>
                        <h2>SKU: <span className='text-primary'>{id}</span></h2>
                        <div className='divider' />
                        <div className="card-actions flex-col">
                            <form
                                onSubmit={handleUpdate}
                                className='flex gap-4'>
                                <input className='input input-bordered input-primary w-full max-w-xs ' type="number" min='0' name="quantity" placeholder='Quantity' required />
                                <button type='submit' className='btn btn-primary text-white'>Update</button>
                            </form>
                            <button
                                onClick={handleDelivered}
                                className='btn btn-block btn-outline btn-primary'>Delivered</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
        /*  <div>
             <Slide right cascade>
                 <div className=' '>
                     <div className='pl-[16%] py-4 flex items-end gap-6 bg-gradient-to-bl from-gray-500 rounded-l-3xl'>
                         <p className='text-4xl lg:text-6xl text-white'><Slide left cascade>{name}</Slide></p>
                         <p className='text-white '><Slide left cascade>{'(' + supplier + ')'}</Slide></p>
                     </div>
 
                     <div className=' mx-[15%] my-8 grid lg:grid-cols-2'>
                         <div>
                             <img src={img} alt="" />
                         </div>
 
 
                         <Zoom cascade>
                             <div className=' bg-gradient-to-t from-white to-gray-500 flex flex-col justify-center items-start gap-8 px-[5%] pb-4'>
                                 
                                 <div className='flex items-end'>
                                     <p className='text-6xl lg:text-9xl text-transparent bg-clip-text bg-gradient-to-t from-black to-gray-500'>{quantity}</p>
                                     <p className='text-4xl pl-2 pb-4'>Available</p>
                                 </div>
                                 
                                 <div className='flex gap-4'>
                                     <div className='w-6 bg-gradient-to-t from-pink-600 to-purple-600 h-[100%] '>
 
                                     </div>
                                     <p className='   '>{description}</p>
                                 </div>
                                 
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
         </div> */
    );
};

export default Update;