import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import google from '../../assets/images/google.png';
import github from '../../assets/images/github.png'

import auth from '../../firebase.init';
import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Loading from '../Loading/Loading';
import axios from 'axios';
import toast from 'react-hot-toast';

const SignUp = () => {
    const [createUserWithEmailAndPassword, emailUser, emailLoading, emailError] = useCreateUserWithEmailAndPassword(auth);
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);
    const [user, loading, error] = useAuthState(auth);
    const location = useLocation();
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || "/"
    const [signInfo, setSignInfo] = useState({
        email: '',
        password: '',
        confirmPass: ''
    });

    const [errors, setErrors] = useState({
        emailError: '',
        passwordError: '',
        confirmPassError: ''
    });



    // handle onchange for email
    const changeEmail = e => {
        const emailRegx = /\S+@\S+\.\S+/;
        const validEmail = emailRegx.test(e.target.value);
        if (validEmail) {
            setSignInfo({ ...signInfo, email: e.target.value });
            setErrors({ ...errors, emailError: '' });
        }
        else {
            setSignInfo({ ...signInfo, email: '' });
            setErrors({ ...errors, emailError: 'Please provide a valid email!' })
        }
    }

    //handle onChange password
    const changePassword = e => {
        const passwordRegx = /.{6,}/;
        const validPassword = passwordRegx.test(e.target.value);
        if (validPassword) {
            setSignInfo({ ...signInfo, password: e.target.value });
            setErrors({ ...errors, passwordError: '' });
        }
        else {
            setSignInfo({ ...signInfo, password: '' });
            setErrors({ ...errors, passwordError: 'Password must have minimum 6 characters!' })
        }
    }


    // handle onChange for confirm pass
    const changeConfirmPass = e => {
        if (e.target.value === signInfo.password) {
            setSignInfo({ ...signInfo, confirmPass: e.target.value });
            setErrors({ ...errors, confirmPassError: '' });
        }
        else {
            setSignInfo({ ...signInfo, confirmPass: '' });
            setErrors({ ...errors, confirmPassError: `Password doesn't match!` })
        }
    }

    const handleSignUpEmail = e => {
        e.preventDefault();
        if (signInfo.confirmPass === '' || signInfo.password === '') { return }
        else {
            createUserWithEmailAndPassword(signInfo.email, signInfo.password)

        }
    };

    // loading
    if (loading || emailLoading || googleLoading || githubLoading) return <Loading />

    //error handle
    if (googleError) {
        toast.error(googleError.message);
    }
    if (githubError) {
        toast.error(googleError.message);
    }

    if (user) {
        (async function () {
            const email = user?.email;
            if (email) {
                const { data } = await axios.post('http://localhost:5000/login', { email })
                localStorage.setItem('accessToken', data.accessToken)
            }
        })();

        navigate(from, { replace: true });
    }

    return (
        <div className=' h-screen'>
            <Header />
            <div
                className='w-[375px]  mx-auto border-2  mt-20 py-6 text-center rounded-lg shadow-lg'>

                <p
                    className=' text-2xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 font-semibold mb-4'>Sign up to SPACEY
                </p>

                {/* form started */}
                <form
                    onSubmit={handleSignUpEmail}
                    className='flex flex-col text-white'>

                    {/* email */}
                    <input
                        onChange={changeEmail}
                        className='w-[330px] px-3 py-1 mx-auto border-2 rounded-full bg-transparent'
                        type="email"
                        placeholder='Enter your email'
                        name="email"
                        autoComplete='off'
                        required
                    />
                    <p className=' pl-6 text-red-500 text-left'>{errors.emailError}</p>


                    {/* password */}
                    <input
                        onChange={changePassword}
                        className='w-[330px] px-3 py-1 mx-auto border-2  mt-5  rounded-full bg-transparent' type="password"
                        placeholder='Create password '
                        autoComplete='off'
                        name="password"
                        required
                    />
                    <p className=' pl-6 text-red-500 text-left'>{errors.passwordError}</p>


                    {/* confirm password */}
                    <input
                        onChange={changeConfirmPass}
                        className='w-[330px] px-3 py-1 mx-auto border-2  mt-5  rounded-full bg-transparent' type="password"
                        placeholder='Confirm password '
                        autoComplete='off'
                        name="confirmPass"
                        required
                    />
                    <p className=' pl-6 text-red-500 text-left'>{errors.confirmPassError}</p>


                    {/* forget password/ reset password */}
                    <button className='text-right w-[330px] mx-auto text-pink-400 '>forgot password?</button>


                    {/* Sign up button */}
                    <button className='w-[330px] px-3 py-2 mx-auto  rounded-full  bg-gradient-to-r from-pink-500 hover:from-purple-600 to-purple-600 hover:to-pink-600 duration-500 hover:scale-105' type="submit">Sign up</button>

                    {/* switch to Login */}
                    <div className='text-left w-[330px] mx-auto'>
                        <p className='text-gray-300'>Already have a account?
                            <Link className='underline text-purple-400' to='/login'>Login</Link>
                        </p>
                    </div>


                </form>

                {/* or section */}
                <div className='w-[200px] mx-auto flex items-center my-4'>
                    <div className='h-[1px] w-full bg-gradient-to-r from-pink-500 to-purple-600 '></div>
                    <span className='text-white mx-2'>OR</span>
                    <div className='h-[1px] w-full bg-gradient-to-r from-pink-500 to-purple-600 '></div>
                </div>


                {/* sign up with social media */}
                <div>
                    {/* google */}
                    <button
                        onClick={() => signInWithGoogle()}
                        className=' w-[330px] mx-auto border-2 rounded-full flex items-center text-white'>
                        <img
                            className=' w-[24px] mr-[70px] m-1' src={google} alt="" />
                        Continue with Google
                    </button>

                    {/* github */}
                    <button
                        onClick={() => signInWithGithub()}
                        className=' w-[330px] mx-auto border-2 rounded-full flex items-center text-white my-4'>
                        <img
                            className=' w-[24px] mr-[70px] m-1' src={github} alt="" />
                        Continue with GitHub
                    </button>
                </div>

            </div>
        </div>
    );
};

export default SignUp;