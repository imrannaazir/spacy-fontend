import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Slide } from 'react-reveal';
import AllRockets from '../AllRockets/AllRockets';
import DashNav from '../DashNav/DashNav';

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
        <div>
            <DashNav />
            <Slide right>
                <div
                    className='pl-[16%] py-4 flex items-end gap-6 bg-gradient-to-bl from-gray-500 rounded-l-3xl mb-4'>
                    <p
                        className='text-3xl lg:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-tr  from-white to-gray-500 '>
                        MANAGE INVENTORIES -
                    </p>
                </div>
            </Slide>



            <Slide left>
                <div className="lg:px-8 py-6 w-[100%]">
                    <div className="grid lg:gap-8 items-start justify-end pr-4 w-[100%]">
                        <div className="relative group">
                            <div
                                className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt">

                            </div>

                            <div
                                className=' flex justify-center items-center flex-col rounded-lg   relative  my-auto bg-black text-white'>

                                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                                    <table
                                        className=" lg:w-[1200px] text-sm text-left text-gray-500 dark:text-gray-400">
                                        <thead className="text-xs text-white uppercase bg-black ">
                                            <tr>
                                                <th
                                                    scope="col"
                                                    className="lg:px-6 py-3">
                                                    Name :
                                                </th>


                                                <th
                                                    scope="col"
                                                    className="lg:px-6 py-3 ">
                                                    Photo
                                                </th>


                                                <th
                                                    scope="col"
                                                    className="lg:px-6 py-3">
                                                    Supplier
                                                </th>


                                                <th
                                                    scope="col"
                                                    className="lg:px-6 py-3">
                                                    Quantity
                                                </th>


                                                <th
                                                    scope="col"
                                                    className="px-2 lg:px-6 py-3">
                                                    Edit
                                                </th>


                                                <th
                                                    scope="col"
                                                    className="lg:px-6 py-3">
                                                    Delete
                                                </th>

                                            </tr>
                                        </thead>
                                        <tbody>

                                            {
                                                rockets.map(rocket => <AllRockets key={rocket._id} rocket={rocket} rockets={rockets} setRockets={setRockets} />)
                                            }
                                        </tbody>
                                    </table>



                                    <div className='pagination my-3 text-right'>
                                        {
                                            [...Array(pageCount).keys()].map(number =>
                                                <button
                                                    onClick={() => setPage(number)}
                                                    className={`px-2 py-1 m-1 rounded-md bg-white text-black ${page === number && 'bg-purple-600'}`}
                                                    key={number}>{number + 1}
                                                </button>)
                                        }
                                        <select
                                            className='bg-purple-600 p-1 rounded-lg mr-2'
                                            onChange={e => setLimit(e.target.value)}>
                                            <option value="5">5</option>
                                            <option value="10" selected>10</option>
                                            <option value="15">15</option>
                                            <option value="20">20</option>
                                        </select>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </Slide>



        </div>
    );
};

export default ManageInventories;