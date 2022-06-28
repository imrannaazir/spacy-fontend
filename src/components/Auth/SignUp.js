import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import google from '../../assets/images/google.png';
import github from '../../assets/images/github.png'

import auth from '../../firebase.init';
import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Loading from '../shared/Loading';
import axios from 'axios';
import toast from 'react-hot-toast';

const SignUp = () => {
    const [createUserWithEmailAndPassword, emailUser, emailLoading, emailError] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);
    const [user, loading, error] = useAuthState(auth);
    const location = useLocation();
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";


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
        };
    };

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
        };
    };


    // handle onChange for confirm pass
    const changeConfirmPass = e => {
        if (e.target.value === signInfo.password) {
            setSignInfo({ ...signInfo, confirmPass: e.target.value });
            setErrors({ ...errors, confirmPassError: '' });
        }
        else {
            setSignInfo({ ...signInfo, confirmPass: '' });
            setErrors({ ...errors, confirmPassError: `Password doesn't match!` })
        };
    };

    const handleSignUpEmail = e => {
        e.preventDefault();
        if (signInfo.confirmPass === '' || signInfo.password === '') { return }
        else {
            createUserWithEmailAndPassword(signInfo.email, signInfo.password)

        };
    };

    // loading
    if (loading || emailLoading || googleLoading || githubLoading) return <Loading />

    //error handle
    if (googleError || githubError || error || emailError) {
        toast.error(googleError.message || githubError.message || error.message || emailError.message);
    };


    if (user || emailUser || googleUser || githubUser) {
        (async function () {
            const email = user?.email;
            if (email) {
                const { data } = await axios.post('https://limitless-beach-86891.herokuapp.com/login', { email })
                localStorage.setItem('accessToken', data.accessToken)
            };
        })();

        navigate(from, { replace: true });
    };

    return (
        <div className=' h-screen flex justify-center items-center'>
            <div
                className='w-[375px]  mx-auto border-2  py-6 text-center rounded-lg shadow-lg bg-base-100'>
                <p
                    className=' text-2xl text-primary font-semibold mb-4'>Sign up to SPACEY
                </p>

                {/* form started */}
                <form
                    onSubmit={handleSignUpEmail}
                    className='flex flex-col text-white'>

                    {/* email */}
                    <input
                        onChange={changeEmail}
                        className='input input-bordered text-primary mx-6'
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
                        className='input input-bordered mx-6 mt-4 text-primary'
                        type="password"
                        placeholder='Create password '
                        autoComplete='off'
                        name="password"
                        required
                    />
                    <p className=' pl-6 text-red-500 text-left'>{errors.passwordError}</p>


                    {/* confirm password */}
                    <input
                        onChange={changeConfirmPass}
                        className='input input-bordered mx-6 text-primary mt-4'
                        type="password"
                        placeholder='Confirm password '
                        autoComplete='off'
                        name="confirmPass"
                        required
                    />
                    <p className=' pl-6 text-red-500 text-left'>{errors.confirmPassError}</p>

                    {/* Sign up button */}
                    <button className='w-[330px] btn btn-primary mx-auto mt-4 text-white' type="submit">Sign up</button>

                    {/* switch to Login */}
                    <div className='text-left w-[330px] mx-auto'>
                        <p className='text-gray-300'>Already have a account?
                            <Link className='underline text-purple-400' to='/login'>Login</Link>
                        </p>
                    </div>


                </form>

                {/* or section */}
                <div className='divider w-[80%] mx-auto'>OR</div>


                {/* sign up with social media */}
                <div>
                    {/* google */}
                    <button
                        onClick={() => signInWithGoogle()}
                        className=' w-[330px] mx-auto btn btn-outline'>
                        <img
                            className=' w-[24px] mr-4' src={google} alt="" />
                        Continue with Google
                    </button>

                    {/* github */}
                    <button
                        onClick={() => signInWithGithub()}
                        className=' w-[330px] mx-auto btn btn-outline mt-4'>
                        <img
                            className=' w-[24px] mr-4 bg-black rounded-full' src={github} alt="" />
                        Continue with GitHub
                    </button>
                </div>

            </div>
        </div>
    );
};

export default SignUp;