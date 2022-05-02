import React, { useEffect } from 'react';
import Header from '../Header/Header';
import google from '../../assets/images/google.png'
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const [user, loading] = useAuthState(auth)
    useEffect(() => {
        if (user) {
            navigate(from);
        }
    }, [user]);
    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || "/"
    const [signInWithGoogle, googleUser, googleLoading, error] = useSignInWithGoogle(auth);
    const login = () => {
        signInWithGoogle()
    }
    if (googleLoading) {
        return <div className='text-center h-screen '><Header />
            <span className='px-4 py-2 bg-yellow-100 rounded-lg shadow-lg'>Loading...</span></div>
    }
    if (loading) {
        return <div className='text-center h-screen '>
            <span className='px-4 py-2 bg-yellow-100 rounded-lg shadow-lg'>Loading...</span></div>
    }
    if (error) {
        console.log(error);
    }

    return (
        <div className=' h-screen'>
            <Header />
            <div
                className='w-[375px]  mx-auto border-2 py-32 mt-20 text-center rounded-lg shadow-lg bg-white'>

                <p
                    className=' text-lg font-semibold mb-4'>Login to Helping-Hub
                </p>

                <button
                    onClick={login}
                    className=' w-[330px] mx-auto border-2 rounded-full flex items-center'>
                    <img
                        className=' w-[24px] mr-[70px] m-1' src={google} alt="" />
                    Continue with Google
                </button>
            </div>
        </div>
    );
};

export default Login;