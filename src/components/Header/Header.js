import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png'
import auth from '../../firebase.init';
import './Header.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faGaugeHigh, faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { Slide } from 'react-reveal';
import { signOut } from 'firebase/auth';


const Header = () => {
    const [openUser, setOpenUser] = useState(false)
    const [nav, setNav] = useState(true);
    const [user, loading] = useAuthState(auth);

    const handleNavBg = () => {
        if (window.scrollY > 80) {
            setNav(false)
        }
        else {
            setNav(true)
        }
    }
    window.addEventListener('scroll', handleNavBg)

    if (loading) {
        return <div className=' h-[100px] w-[100x]'> Loading.. </div>
    }
    return (<Slide top>
        <nav className={`${nav ? 'bg-transparent' : 'bg-black'} h-[80px] sticky top-0 z-50`}>
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
                            <Link to='/login'><button

                                className='btn-hover border-2 px-4 py-1'>Login
                            </button>
                            </Link>
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
                <nav className={`${user?.email ? 'absolute' : 'hidden'} right-0 top-[70px] ${nav ? 'bg-transparent' : 'bg-black'} border-2 rounded-md text-white p-4`}>
                    <div className='w-full text-center'>
                        <img className='w-[100px] mx-auto rounded-full' src={user?.photoURL} alt="" />
                        <p className='text-lg font-semibold'>{user?.displayName}</p>
                        <p className=' text-xs mb-3'>{user?.email}</p>
                    </div>
                    <hr className=' mb-8' />
                    <Link to='/admin' className='hover:text-gray-500 block'><FontAwesomeIcon icon={faGaugeHigh} /> Dashboard</Link>
                    <button
                        onClick={() => signOut(auth)}
                        className='hover:text-gray-500 cursor-pointer block'><FontAwesomeIcon icon={faRightToBracket} /> Logout</button>

                </nav>
            </Slide>}
        </nav>
    </Slide>
    );
};

export default Header;