import Header from '../Header/Header';
import google from '../../assets/images/google.png'
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';
import axios from 'axios';
import github from '../../assets/images/github.png'

const Login = () => {
    const [user, loading] = useAuthState(auth)

    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || "/"
    const [signInWithGoogle, googleUser, googleLoading, error] = useSignInWithGoogle(auth);
    const login = () => {
        signInWithGoogle()
    }
    if (googleLoading) {
        return <Loading />
    }
    if (loading) {
        return <Loading />
    }
    if (error) {
        console.log(error);
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
                className='w-[375px]  mx-auto border-2  mt-20 text-center rounded-lg shadow-lg'>

                <p
                    className=' text-2xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 font-semibold mb-4'>Login to SPACEY
                </p>


                <form
                    className='flex flex-col text-white'>
                    <input className='w-[330px] px-3 py-1 mx-auto border-2 rounded-full bg-transparent' type="email" placeholder='Enter your email' name="" id="" autoComplete='off' />
                    <input className='w-[330px] px-3 py-1 mx-auto border-2  mt-5  rounded-full bg-transparent' type="password" placeholder='Enter your password ' autoComplete='off' name="" id="" />



                    <button className='text-right w-[330px] mx-auto text-pink-400 '>forgot password?</button>



                    <button className='w-[330px] px-3 py-2 mx-auto  rounded-full  bg-gradient-to-r from-pink-500 hover:from-purple-600 to-purple-600 hover:to-pink-600 duration-500 hover:scale-105' type="submit">Login</button>


                    <div className='text-left w-[330px] mx-auto'>
                        <p className='text-gray-300'>Don't have an account?
                            <Link className='underline text-purple-400' to=''>Sign up</Link>
                        </p>
                    </div>
                </form>


                <div className='w-[200px] mx-auto flex items-center'>
                    <div className='h-[1px] w-full bg-gradient-to-r from-pink-500 to-purple-600 '></div>
                    <span className='text-white mx-2'>OR</span>
                    <div className='h-[1px] w-full bg-gradient-to-r from-pink-500 to-purple-600 '></div>
                </div>

                <div>
                    <button
                        onClick={login}
                        className=' w-[330px] mx-auto border-2 rounded-full flex items-center text-white'>
                        <img
                            className=' w-[24px] mr-[70px] m-1' src={google} alt="" />
                        Continue with Google
                    </button>
                    <button
                        onClick={login}
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