import React from 'react';
import Loading from '../shared/Loading';
import ExploreOurRockets from './ExploreOurRockets';
import toast from "react-hot-toast"
import { useQuery } from 'react-query'

const RocketsCategory = () => {
    const { isLoading, error, data, refetch } = useQuery('rocketsData', () =>
        fetch('https://inventory-management-bk1x.onrender.com/rockets').then(res =>
            res.json()
        )
    )
    if (isLoading) return <Loading />
    if (error) return toast.error(error.message)
    refetch()
    const products = data.slice(0, 6)
    return (
        <div
            id='rockets'>
            <ExploreOurRockets products={products} category="Rockets" />
        </div>
    );
};

export default RocketsCategory;