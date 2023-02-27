import ManageTableHead from './ManageTableHead';
import ManageTableRow from './ManageTableRow';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Pagination from './Pagination';
import Loading from '../../shared/Loading';

const ManageInventories = () => {
    const [rockets, setRockets] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(0);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        (async function () {
            setLoading(true)
            const { data } = await axios.get(`https://inventory-management-bk1x.onrender.com/rockets?page=${page}&limit=${limit}`)
            setRockets(data);
            setLoading(false)
        })();
    }, [limit, page]);

    useEffect(() => {
        (async function () {
            setLoading(true)
            const { data } = await axios.get('https://inventory-management-bk1x.onrender.com/rocketsCount')
            const count = data.count;
            const pages = Math.ceil(count / limit);
            setPageCount(pages);
            setLoading(false)
        })();
    }, [limit]);
    //is loading
    if (loading) return <Loading />
    return (
        <div className="overflow-x-auto w-full min-h-screen bg-base-300">
            <p className='bg-primary h-16 text-2xl font-semibold text-base-100 pl-20 flex items-center sticky top-0 left-0 z-50'>Manage Inventory</p>
            <table className="table w-[90%] mx-auto mt-6 bg">
                {/* <!-- head --> */}
                <ManageTableHead />
                <tbody>
                    {/* <!-- row 1 --> */}
                    {rockets.map((rocket, i) => <ManageTableRow rocket={rocket} key={i} i={i} />)}



                    {/* pagination */}
                    <Pagination pageCount={pageCount} setPage={setPage} page={page} setLimit={setLimit} />
                </tbody>
            </table>
        </div>
    );
};

export default ManageInventories;