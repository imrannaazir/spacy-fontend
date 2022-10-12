import React from 'react';
import { useNavigate } from 'react-router-dom';

const AboutUs = () => {
    const navigate = useNavigate()
    return (
        <div className='bg-white'>
            <div className='my-16 '
                style={{ backgroundImage: `url('https://i.ibb.co/WWhjsys/store-your-product.webp')` }}
                className="hero bg-cover min-h-[300px] gap-10 "
            >
                <div className="hero-overlay bg-opacity-75"></div>
                <div className="hero-content text-center text-base-100  lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">About Us</h1>

                    </div>

                </div>
            </div>
            <div className='p-10 lg:w-3/4 space-y-5'>
                <h3 className='font-[Courgette] text-[1.5vw] text-primary'>Welcome to Space Y - Warehouse Management  Site</h3>
                <h1 className='text-[3vw] font-bold'>WE PROVIDE SERVICES & PRODUCTS TO A BROAD RANGE OF CLIENTS</h1>
                <p className=' font-serif md:w-1/2'>Rentiger solves the material handling requirements of clients around the world through an experienced professional staff and a network of highly trained specialists. Utilizing our technical knowledge and expertise, Rentiger maximizes the use of vertical space and square footage within your existing and new facilities.</p>

                <button onClick={() => navigate('/all-products')} className='btn btn-primary text-white'>Explore Products</button>

            </div>
        </div>
    );
};

export default AboutUs;