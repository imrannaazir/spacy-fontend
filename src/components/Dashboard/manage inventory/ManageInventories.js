import ManageTableHead from './ManageTableHead';
import ManageTableRow from './ManageTableRow';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Pagination from './Pagination';

const ManageInventories = () => {
    const [rockets, setRockets] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(0);

    useEffect(() => {
        (async function () {
            const { data } = await axios.get(`https://nameless-beach-41067.herokuapp.com/rockets?page=${page}&limit=${limit}`)
            setRockets(data);
        })();
    }, [limit, page]);

    useEffect(() => {
        (async function () {
            const { data } = await axios.get('https://nameless-beach-41067.herokuapp.com/rocketsCount')
            const count = data.count;
            const pages = Math.ceil(count / limit);
            setPageCount(pages);
        })();
    }, [limit]);
    return (
        <div class="overflow-x-auto w-full min-h-screen bg-base-300">
            <p className='bg-primary h-16 text-2xl font-semibold text-base-100 pl-6 flex items-center sticky top-0 left-0 z-50'>Manage Inventory</p>
            <table class="table w-[90%] mx-auto mt-6 bg">
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