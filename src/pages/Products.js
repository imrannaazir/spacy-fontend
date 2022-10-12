import React from 'react';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import Rockets from '../components/Home/Rockets';
import Loading from '../components/shared/Loading';
const Products = () => {
    const { isLoading, error, data, refetch } = useQuery('productsData', () =>
        fetch('https://limitless-beach-86891.herokuapp.com/rockets').then(res =>
            res.json()
        )
    )
    if (isLoading) return <Loading />
    if (error) return toast.error(error.message)
    // refetch()

    return (
        <div className='mt-16 bg-base-100 h-full '>
            <div className='flex items-end justify-center'>
                <div className='w-[50px] h-[1px] bg-primary'></div>
                <p className='text-center mt-10 text-xl font-[Courgette] text-primary '>Explore Our</p><div className='w-[50px] h-[1px] bg-primary'></div>
            </div>
            <p
                id='rockets'
                className='text-center mb-6 text-2xl lg:text-4xl font-semibold text-black uppercase'> Products
            </p>
            <div className='flex flex-wrap gap-10'>
                {
                    data.map(product =>
                        <Rockets
                            key={product._id}
                            product={product}
                        />

                    )
                }
            </div>
        </div>
    );
};

export default Products;