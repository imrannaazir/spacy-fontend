import Header from '../shared/Header';
import google from '../../assets/images/google.png'
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../shared/Loading';
import axios from 'axios';
import github from '../../assets/images/github.png';
import { useState } from 'react';
import toast from 'react-hot-toast';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/"
    const [user, loading] = useAuthState(auth);
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);
    const [signInWithEmailAndPassword, emailUser, emailLoading, emailError,] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(
        auth
    );


    const [signInfo, setSignInfo] = useState({
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({
        emailError: '',
        passwordError: ''
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


    //errors handle
    if (googleError) {
        toast.error(googleError.message);
    };
    if (githubError) {
        toast.error(googleError.message);
    };


    // handle login with email and pass
    const handleLogin = e => {
        e.preventDefault();
        console.log(typeof (signInfo.email))
        if (signInfo.email === '' || signInfo.password === '') { return }
        else {
            signInWithEmailAndPassword(signInfo.email, signInfo.password);
            e.target.reset()
            if (emailError) {
                toast.error(emailError.message)
            };
        };
    };

    // loading
    if (googleLoading || loading || githubLoading || emailLoading || sending) {
        return <Loading />;
    };

    // redirect to home or previous page
    if (user) {
        (async function () {
            const email = user?.email;
            if (email) {
                const { data } = await axios.post('https://nameless-beach-41067.herokuapp.com/login', { email })
                localStorage.setItem('accessToken', data.accessToken)
            };
        })();
        navigate(from, { replace: true });
    };

    return (
        <div className=' h-screen'>
            <Header />


            <div
                className='w-[375px]  mx-auto border-2  mt-20 py-6 text-center rounded-lg shadow-lg'>

                <p
                    className=' text-2xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 font-semibold mb-4'>Login to SPACEY
                </p>

                {/* form started */}
                <form
                    onSubmit={handleLogin}
                    className='flex flex-col text-white'>

                    {/* email  */}
                    <input
                        onChange={changeEmail}
                        className='w-[330px] px-3 py-1 mx-auto border-2 rounded-full bg-transparent'
                        type="email"
                        placeholder='Enter your email'
                        name=""
                        autoComplete='off'
                        required
                    />
                    <p className=' pl-6 text-red-500 text-left'>{errors.emailError}</p>

                    {/* password */}
                    <input
                        onChange={changePassword}
                        className='w-[330px] px-3 py-1 mx-auto border-2  mt-5  rounded-full bg-transparent' type="password"
                        placeholder='Enter your password '
                        autoComplete='off'
                        name=""
                        id=""
                        required
                    />
                    {/* show errors */}
                    <p className=' pl-6 text-red-500 text-left'>{errors.passwordError}</p>

                    {/* forgot password , reset  */}
                    <button
                        onClick={async () => {
                            await sendPasswordResetEmail(signInfo.email);
                            toast.success('Sent email!');
                        }}
                        className='text-right w-[330px] mx-auto text-pink-400 '>forgot password?</button>


                    {/* login button */}
                    <button className='w-[330px] px-3 py-2 mx-auto  rounded-full  bg-gradient-to-r from-pink-500 hover:from-purple-600 to-purple-600 hover:to-pink-600 duration-500 hover:scale-105' type="submit">Login</button>

                    {/* toggle to sign up */}
                    <div className='text-left w-[330px] mx-auto'>
                        <p className='text-gray-300'>Don't have an account?
                            <Link className='underline text-purple-400' to='/signup'>Sign up</Link>
                        </p>
                    </div>
                </form>

                {/* or  */}
                <div className='w-[200px] mx-auto flex items-center my-6'>
                    <div className='h-[1px] w-full bg-gradient-to-r from-pink-500 to-purple-600 '></div>
                    <span className='text-white mx-2'>OR</span>
                    <div className='h-[1px] w-full bg-gradient-to-r from-pink-500 to-purple-600 '></div>
                </div>

                {/* social sign in */}
                <div>
                    {/* google */}
                    <button
                        onClick={() => signInWithGoogle()}
                        className=' w-[330px] mx-auto border-2 rounded-full flex items-center text-white'>
                        <img
                            className=' w-[24px] mr-[70px] m-1' src={google} alt="" />
                        Continue with Google
                    </button>

                    {/* git hub */}
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

export default Login;