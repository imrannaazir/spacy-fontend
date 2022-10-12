import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import ManageTableHead from '../manage inventory/ManageTableHead';
import ManageTableRow from '../manage inventory/ManageTableRow';
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../../shared/Loading';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [rockets, setRockets] = useState([]);
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();
    useEffect(() => {

        (async function () {
            try {
                setLoading(true)
                const { data } = await axios.get(`https://limitless-beach-86891.herokuapp.com/myrockets?email=${user.email}`, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                setRockets(data);
                setLoading(false)
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
    //is loading
    if (loading) return <Loading />
    return (
        <div className="overflow-x-auto w-full min-h-screen bg-base-300">
            <p className='bg-primary h-16 text-2xl font-semibold text-base-100 pl-20 flex items-center sticky top-0 left-0 z-50'>My Items</p>

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
                <table className="table w-[90%] mx-auto mt-6 bg">
                    {/* <!-- head --> */}
                    <ManageTableHead />
                    <tbody>

                        {/* <!-- row 1 --> */}
                        {rockets.map((rocket, i) => <ManageTableRow rocket={rocket} key={i} i={i} />)}
                    </tbody>
                </table>}
        </div>
    );
};

export default MyItems;