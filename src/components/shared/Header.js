import React from 'react';
import logo from '../../assets/images/logo.png'
import auth from '../../firebase.init';
import NavLinks from './NavLinks';
import DropdownLinks from './DropdownLinks';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { useMyContext } from '../../context/MyContext';


const Header = () => {
    const { path, nav } = useMyContext()
    const [user] = useAuthState(auth);

    return !path.includes("admin") ? (
        <div className={`flex items-center justify-between h-16 text-[17px] uppercase text-white transform duration-200 px-8 ${nav || "bg-primary"} fixed top-0 z-50 w-[100%] border-b border-primary`} >
            {/* first part of navbar ,, logo here */}
            <div className="">
                <a href='/' className="">
                    <img className='h-12' src={logo} alt="" />
                </a>
            </div>

            {/* middle part of nav bar ,,, navlinks here */}
            <div className="hidden lg:flex h-[100%]">
                <ul className="flex items-center gap-6  h-[100%]">
                    <NavLinks />
                </ul>
            </div>

            {/* last part of navbar here,,  */}
            <div className="my-0 py-0">
                {/* large screen */}
                <div className='hidden lg:block'>
                    {
                        user ?
                            <div className="dropdown dropdown-hover dropdown-end">
                                <label tabIndex="0" className="">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 lg:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>

                                    {/*  avatar : placeholder */}
                                    {user?.photoURL ? <div className="avatar hidden lg:block">
                                        <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                            <img src={user?.photoURL} alt='' />
                                        </div>
                                    </div>
                                        :
                                        <div className="avatar placeholder">
                                            <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
                                                <span className="text-3xl uppercase">{user.email.slice(0, 1)}</span>
                                            </div>
                                        </div>}

                                </label>
                                <ul tabIndex="0" className="dropdown-content  shadow-xl bg-base-100 text-primary rounded-xl  w-64">
                                    {/* profile */}
                                    <DropdownLinks user={user} />

                                </ul>
                            </div>
                            : <Link to="/login">Login</Link>}

                </div>
                {/* small screen */}
                <div className='lg:hidden'>

                    <div className="dropdown dropdown-hover dropdown-end">
                        <label tabIndex="0" className="">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 lg:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>

                            {/*  avatar : placeholder */}
                        </label>
                        <ul tabIndex="0" className="dropdown-content  shadow-xl bg-base-100 text-primary rounded-xl  w-64">
                            {/* profile */}
                            <DropdownLinks user={user} />

                        </ul>
                    </div>


                </div>
            </div>


        </div>
    ) : null
};

export default Header;