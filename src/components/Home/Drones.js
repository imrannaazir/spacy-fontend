import React from 'react';
import ExploreOurRockets from './ExploreOurRockets';
// import { useQuery } from 'react-query'
// import toast from "react-hot-toast"
import Loading from '../shared/Loading';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useQuery } from 'react-query'


const Drones = () => {
    const { isLoading, error, data, refetch } = useQuery('productsData', () =>
        fetch('https://inventory-management-bk1x.onrender.com/drones').then(res =>
            res.json()
        )
    )
    if (isLoading) return <Loading />
    // if (error) return toast.error(error.message)
    // refetch()
    const products = data.slice(0, 6)
    return (
        <div
            id='drones'>
            <ExploreOurRockets products={products} category="drones" />
        </div>
    );
};

export default Drones;