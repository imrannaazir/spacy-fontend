import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Slide } from 'react-reveal';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import DashNav from './DashNav';
import MyItem from './MyItem';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [rockets, setRockets] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {

        (async function () {
            try {
                const { data } = await axios.get(`https://nameless-beach-41067.herokuapp.com/myrockets?email=${user.email}`, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                setRockets(data);
            }
            catch (error) {
                console.log(error.message);
                if (error.response.status === 401 || error.response.status === 403) {
                    navigate('/');
                    signOut(auth);
                };
            };
        })();
    }, [navigate, user]);


    return (
        <div>
            <DashNav />

            <Slide right>
                <div
                    className='pl-[40px] md:ml-[75px] py-4 flex items-end gap-6 bg-gradient-to-bl from-gray-500 rounded-l-3xl mb-10'>
                    <p
                        className='text-3xl lg:text-5xl  text-white font-semibold ml-4'>
                        My Items -
                    </p>
                </div>
            </Slide>

            <Slide left>
                <div className="px-6 py-6 w-[100%]">
                    <div
                        className="grid gap-8 items-start justify-end lg:justify-center w-[100%]">
                        <div className="relative group">
                            <div
                                className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt">

                            </div>

                            <div
                                className=' flex justify-center items-end flex-col rounded-lg   relative  my-auto bg-black text-white'>

                                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">

                                    {rockets.length === 0 ?
                                        <div className='pl-8 pr-4 py-4 w-full mx-auto'>
                                            <span
                                                className='text-gray-400'>
                                                Sorry!! You haven't added any rockets yet.
                                            </span>
                                            <Link
                                                className='underline hover:text-pink-500  duration-500'
                                                to='/add'>
                                                Add New
                                            </Link>
                                        </div>
                                        :
                                        <table
                                            className="lg:w-[1200px] text-sm lg:text-left text-gray-500 dark:text-gray-400">
                                            <thead
                                                className="text-xs text-white uppercase bg-black">
                                                <tr>
                                                    <th
                                                        scope="col"
                                                        className="px-1 lg:px-6 py-3">
                                                        Name :
                                                    </th>


                                                    <th
                                                        scope="col"
                                                        className="px-1 lg:px-6 py-3">
                                                        Photo
                                                    </th>


                                                    <th
                                                        scope="col"
                                                        className="px-1 lg:px-6 py-3">
                                                        Supplier
                                                    </th>


                                                    <th
                                                        scope="col"
                                                        className="px-1 lg:px-6 py-3">
                                                        Quan
                                                    </th>


                                                    <th
                                                        scope="col"
                                                        className="px-1 lg:px-6 py-3">
                                                        Edit
                                                    </th>


                                                    <th
                                                        scope="col"
                                                        className="px-1 lg:px-6 py-3">
                                                        Del
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>

                                                {
                                                    rockets.map(rocket => <MyItem key={rocket._id} rocket={rocket} rockets={rockets} setRockets={setRockets} />)
                                                }
                                            </tbody>
                                        </table>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Slide>


        </div>
    );
};

export default MyItems;