import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png'
import auth from '../../firebase.init';
import './Header.css'
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';


const Header = () => {
    const [user, loading] = useAuthState(auth)
    const [signInWithGoogle, googleUser, googleLoading, error] = useSignInWithGoogle(auth);

    const handleSignIn = () => {
        console.log('clicked');
        signInWithGoogle()
    }
    return (
        <nav className='bg-black h-[80px]'>
            <div className=' flex w-[90%] mx-auto justify-between items-center'>
                {/* 1st part of nav */}
                {/* logo */}
                <Link to='/'> <img className='h-[70px]' src={logo} alt="" /></Link>

                {/* another part of nav */}

                {/* navigation bar */}
                <div className=' flex text-white justify-between w-[50%]'>

                    <div className=' flex gap-4'>
                        <Link className=' transform duration-500 transition hover:scale-125 hover:border-b-2 h-[25px] my-auto' to='/'>Home</Link>
                        <Link className=' transform duration-500 transition hover:scale-125 hover:border-b-2 h-[25px] my-auto' to='/shop'>Shop</Link>
                        <Link className=' transform duration-500 transition hover:scale-125 hover:border-b-2 h-[25px] my-auto' to='/blog'>Blog</Link>
                        <Link className=' transform duration-500 transition hover:scale-125 hover:border-b-2 h-[25px] my-auto' to='/about'>About</Link>
                    </div>

                    <div>
                        {!user ?
                            <button
                                onClick={handleSignIn}
                                className='btn-hover border-2 px-4 py-1'>Login
                            </button>
                            :
                            <img
                                className=' w-14 rounded-full'
                                src={user?.photoURL} alt="" />
                        }

                    </div>
                </div>

            </div>

        </nav>
    );
};

export default Header;