import toast from "react-hot-toast"
import React from 'react';
import Loading from '../shared/Loading';
import Rockets from './Rockets';
import { useQuery } from 'react-query'
const ExploreOurRockets = ({ api }) => {
    const { isLoading, error, data } = useQuery('productsData', () =>
        fetch(`https://limitless-beach-86891.herokuapp.com/${api}`).then(res =>
            res.json()
        )
    )

    if (isLoading) return <Loading />
    if (error) return toast.error(error.message)
    const products = data.slice(0, 6)
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
                    products.map(product =>
                        <Rockets
                            key={product._id}
                            product={product}
                        />

                    )
                };
            </div>
        </div>
    );
};

export default ExploreOurRockets;