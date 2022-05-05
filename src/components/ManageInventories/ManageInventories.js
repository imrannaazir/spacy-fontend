import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AllRockets from '../AllRockets/AllRockets';
import DashNav from '../DashNav/DashNav';

const ManageInventories = () => {
    const [rockets, setRockets] = useState([]);
    useEffect(() => {
        (async function () {
            const { data } = await axios.get('http://localhost:5000/rockets')
            setRockets(data);
        })();
    }, [])
    console.log(rockets);
    return (
        <div>
            <DashNav />
            <div className='pl-[15%] py-4 flex items-end gap-6 bg-gradient-to-bl from-gray-500 rounded-l-3xl mb-10'>
                <p className='text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-tr  from-white to-gray-500 '>MANAGE INVENTORIES -</p>

            </div>

            <div class="px-8 py-6 w-[100%]">
                <div class="grid gap-8 items-start justify-center w-[100%]">
                    <div class="relative group">
                        <div class="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                        <div


                            className=' flex justify-center items-center flex-col rounded-lg   relative  my-auto bg-black text-white'>

                            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                                <table class="w-[1200px] text-sm text-left text-gray-500 dark:text-gray-400">
                                    <thead class="text-xs text-white uppercase bg-black">
                                        <tr>
                                            <th scope="col" class="px-6 py-3">
                                                Rocket name :
                                            </th>
                                            <th scope="col" class="px-6 py-3">
                                                Photo
                                            </th>
                                            <th scope="col" class="px-6 py-3">
                                                Supplier
                                            </th>
                                            <th scope="col" class="px-6 py-3">
                                                Quantity
                                            </th>
                                            <th scope="col" class="px-6 py-3">
                                                Edit
                                            </th>
                                            <th scope="col" class="px-6 py-3">
                                                Delete
                                            </th>

                                        </tr>
                                    </thead>
                                    <tbody>

                                        {
                                            rockets.map(rocket => <AllRockets key={rocket._id} rocket={rocket} />)
                                        }
                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ManageInventories;