import React from 'react';
import { useQuery } from 'react-query';
import Rockets from '../components/Home/Rockets';
import Loading from '../components/shared/Loading';

const Products = () => {
    const { isLoading, error, data, refetch } = useQuery('productsData', () =>
        fetch('https://limitless-beach-86891.herokuapp.com/drones').then(res =>
            res.json()
        )
    )
    if (isLoading) return <Loading />
    // if (error) return toast.error(error.message)
    // refetch()

    return (
        <div>

            {
                data.map(product =>
                    <Rockets
                        key={product._id}
                        product={product}
                    />

                )
            }
        </div>
    );
};

export default Products;