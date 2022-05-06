import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import DashNav from '../DashNav/DashNav';
import MyItem from '../MyItem/MyItem';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [rockets, setRockets] = useState([]);
    useEffect(() => {
        (async function () {
            const { data } = await axios.get(`http://localhost:5000/myrockets?email=${user.email}`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            setRockets(data);
        })();
    }, [user.email])
    return (
        <div>
            <DashNav />
            <div className='pl-[15%] py-4 flex items-end gap-6 bg-gradient-to-bl from-gray-500 rounded-l-3xl mb-10'>
                <p className='text-5xl  text-transparent bg-clip-text bg-gradient-to-tr  from-white to-gray-500 '>MY ITEMS -</p>
            </div>
            <div className="px-8 py-6 w-[100%]">
                <div className="grid gap-8 items-start justify-center w-[100%]">
                    <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                        <div


                            className=' flex justify-center items-center flex-col rounded-lg   relative  my-auto bg-black text-white'>

                            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                                <table className="w-[1200px] text-sm text-left text-gray-500 dark:text-gray-400">
                                    <thead className="text-xs text-white uppercase bg-black">
                                        <tr>
                                            <th scope="col" className="px-6 py-3">
                                                Rocket name :
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Photo
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Supplier
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Quantity
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Edit
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Delete
                                            </th>

                                        </tr>
                                    </thead>
                                    <tbody>

                                        {
                                            rockets.map(rocket => <MyItem key={rocket._id} rocket={rocket} />)
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

export default MyItems;