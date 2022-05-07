import Header from '../Header/Header';
import google from '../../assets/images/google.png'
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';
import axios from 'axios';

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