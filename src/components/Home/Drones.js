import React from 'react';
import ExploreOurRockets from './ExploreOurRockets';
// import { useQuery } from 'react-query'
// import toast from "react-hot-toast"
import Loading from '../shared/Loading';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';


const Drones = () => {
    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState([])
    useEffect(() => {
        (async function () {
            setLoading(true)
            const { data } = await axios.get(`https://limitless-beach-86891.herokuapp.com/drones`)
            setProducts(data.slice(0, 6))
            setLoading(false)

        })()
    }, [])
    //is loading 
    if (loading) return <Loading />
    return (
        <div
            id='drones'>
            <ExploreOurRockets products={products} category="drones" />
        </div>
    );
};

export default Drones;