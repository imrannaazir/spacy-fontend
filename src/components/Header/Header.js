import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png'
import auth from '../../firebase.init';
import './Header.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCaretDown, faGaugeHigh, faRightToBracket, faX } from '@fortawesome/free-solid-svg-icons';
import { Slide } from 'react-reveal';
import { signOut } from 'firebase/auth';


const Header = () => {
    const [openUser, setOpenUser] = useState(false)
    const [nav, setNav] = useState(false);
    const [user, loading] = useAuthState(auth);
    const [openNav, setOpenNav] = useState(false);

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






        <nav className={`${nav && !openNav ? 'bg-transparent' : 'bg-black left-[75px] text-white'} h-[80px] sticky top-0 z-40`}>
            <div className=' flex flex-col lg:flex-row w-[90%] mx-auto lg:justify-between lg:items-center'>
                {/* 1st part of nav */}
                {/* logo */}
                <Link to='/'> <img className='h-[70px]' src={logo} alt="" /></Link>

                {/* another part of nav */}

                {/* navigation bar */}
                <div className=' flex flex-col lg:flex-row text-white justify-between w-[50%]'>

                    <div className={`flex flex-col lg:flex-row gap-4 bg-black lg:bg-transparent absolute text-center lg:static w-full left-0 py-4 duration-500 ${openNav ? '' : 'top-[-400px]'}`}>
                        <a className=' transform duration-500 transition hover:scale-125 lg:hover:border-b-2 h-[25px] my-auto ' href='/#home'>Home</a>
                        <a className=' transform duration-500 transition hover:scale-125 lg:hover:border-b-2 h-[25px] my-auto' href='/#rockets'>Explore</a>
                        <Link className=' transform duration-500 transition hover:scale-125 lg:hover:border-b-2 h-[25px] my-auto' to='/blogs'>Blog</Link>
                        <a className=' transform duration-500 transition hover:scale-125 lg:hover:border-b-2 h-[25px] my-auto' href='/#videos'>About</a>


                        <div className='lg:hidden'>
                            {!user ?
                                <Link to='/login'><button

                                    className='border-2 px-4 py-1 hover:scale-110 hover:bg-black duration-500 hover:font-bold'>Login
                                </button>
                                </Link>
                                :
                                <div

                                    onClick={() => setOpenUser(!openUser)}
                                    className='transform  duration-500 hover:scale-75 flex items-center'>

                                    <img
                                        className=' w-14 rounded-full'
                                        src={user?.photoURL ? user?.photoURL : 'https://png.pngitem.com/pimgs/s/130-1300400_user-hd-png-download.png'} alt="" />
                                    <FontAwesomeIcon className='text-xl' icon={faCaretDown} />
                                </div>



                            }

                        </div>

                        <FontAwesomeIcon
                            onClick={() => setOpenNav(!openNav)}
                            className='fixed lg:hidden text-xl text-white right-6 top-6 
            z-50'
                            icon={openNav ? faX : faBars} />

                    </div>

                    <div className='hidden lg:flex'>
                        {!user ?
                            <Link to='/login'><button

                                className='border-2 px-4 py-1 hover:scale-110 hover:bg-black duration-500 hover:font-bold'>Login
                            </button>
                            </Link>
                            :
                            <div

                                onClick={() => setOpenUser(!openUser)}
                                className='transform  duration-500 hover:scale-75 flex items-center'>

                                <img
                                    className=' w-14 rounded-full'
                                    src={user?.photoURL ? user?.photoURL : 'https://png.pngitem.com/pimgs/s/130-1300400_user-hd-png-download.png'} alt="" />
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
                        <img className='w-[100px] mx-auto rounded-full' src={user?.photoURL ? user?.photoURL : 'https://png.pngitem.com/pimgs/s/130-1300400_user-hd-png-download.png'} alt="" />
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