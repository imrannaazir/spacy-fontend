import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Slide } from 'react-reveal';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import DashNav from '../DashNav/DashNav';
import MyItem from '../MyItem/MyItem';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [rockets, setRockets] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {

        (async function () {
            try {
                const { data } = await axios.get(`http://localhost:5000/myrockets?email=${user.email}`, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                setRockets(data);
            }
            catch (error) {
                console.log(error.message);
                if (error.response.status === 401 || error.response.status === 403) {
                    navigate('/');
                    signOut(auth);
                }
            }
        })();
    }, [navigate, user])


    return (
        <div>
            <DashNav />

            <Slide right>
                <div className='pl-[15%] py-4 flex items-end gap-6 bg-gradient-to-bl from-gray-500 rounded-l-3xl mb-10'>
                    <p className='text-5xl  text-transparent bg-clip-text bg-gradient-to-tr  from-white to-gray-500 '>MY ITEMS -</p>
                </div>
            </Slide>

            <Slide left>
                <div className="px-8 py-6 w-[100%]">
                    <div className="grid gap-8 items-start justify-center w-[100%]">
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                            <div


                                className=' flex justify-center items-center flex-col rounded-lg   relative  my-auto bg-black text-white'>

                                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">

                                    {rockets.length === 0 ?
                                        <div className=' p-4'>
                                            <span className='text-gray-400'>Sorry!! You haven't added any rockets yet. </span><Link className='underline hover:text-pink-500  duration-500' to='/add'>Add New</Link></div> :
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