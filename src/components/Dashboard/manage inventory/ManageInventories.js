import ManageTableHead from './ManageTableHead';
import ManageTableRow from './ManageTableRow';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

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



                    <tr className='w-full'>
                        <th className='pagination my-3 text-right flex items-center justify-start w-full'>

                            {
                                [...Array(pageCount).keys()].map(number =>
                                    <button
                                        onClick={() => setPage(number)}
                                        className={`px-2 py-1 m-1 rounded-md bg-base-100 text-black ${page === number && 'bg-primary'}`}
                                        key={number}>{number + 1}
                                    </button>)
                            }
                            <select
                                className='bg-primary p-1 rounded-lg mr-2'
                                onChange={e => setLimit(e.target.value)}>
                                <option value="5">5</option>
                                <option value="10" selected>10</option>
                                <option value="15">15</option>
                                <option value="20">20</option>
                            </select>
                        </th>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default ManageInventories;