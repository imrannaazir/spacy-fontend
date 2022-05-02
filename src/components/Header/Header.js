import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png'
import auth from '../../firebase.init';
import './Header.css'
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faGaugeHigh, faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { Slide } from 'react-reveal';


const Header = () => {
    const [openUser, setOpenUser] = useState(false)
    const [user, loading] = useAuthState(auth)
    const [signInWithGoogle, googleUser, googleLoading, error] = useSignInWithGoogle(auth);

    const handleSignInWithGoogle = () => {
        signInWithGoogle()
    }
    return (<Slide top>
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
                                onClick={handleSignInWithGoogle}
                                className='btn-hover border-2 px-4 py-1'>Login
                            </button>
                            :
                            <div

                                onClick={() => setOpenUser(!openUser)}
                                className='transform  duration-500 hover:scale-75 flex items-center'>
                                <img
                                    className=' w-14 rounded-full'
                                    src={user?.photoURL} alt="" />
                                <FontAwesomeIcon className='text-xl' icon={faCaretDown} />
                            </div>
                        }

                    </div>
                </div>

            </div>

            {/* user nav started  */}
            {openUser && <Slide right cascade>
                <nav className='absolute right-0 top-[70px] bg-black border-2 rounded-md text-white p-4'>
                    <div className='w-full text-center'>
                        <img className='w-[100px] mx-auto rounded-full' src={user?.photoURL} alt="" />
                        <p className='text-lg font-semibold'>{user?.displayName}</p>
                        <p className=' text-xs mb-3'>{user?.email}</p>
                    </div>
                    <hr className=' mb-8' />
                    <Link to='/admin' className='hover:text-gray-500 block'><FontAwesomeIcon icon={faGaugeHigh} /> Dashboard</Link>
                    <button
                        className='hover:text-gray-500 cursor-pointer block'><FontAwesomeIcon icon={faRightToBracket} /> Logout</button>

                </nav>
            </Slide>}
        </nav>
    </Slide>
    );
};

export default Header;