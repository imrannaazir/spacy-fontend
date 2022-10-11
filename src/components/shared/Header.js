import React, { useState } from 'react';
import logo from '../../assets/images/logo.png'
import auth from '../../firebase.init';
import NavLinks from './NavLinks';
import DropdownLinks from './DropdownLinks';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const Header = () => {
    const location = useLocation()
    const path = location.pathname
    const [nav, setNav] = useState(path.length > 1 ? false : true);
    const [user] = useAuthState(auth);
    useEffect(() => {
        // handle header bg by scrolling
        const handleNavBg = () => {
            if (window.scrollY > 80 || path.length > 1) {
                setNav(false)
            }
            else {
                setNav(true)
            };
        };
        window.addEventListener('scroll', handleNavBg);
    }, [path])


    //loading


    return !path.includes("admin") ? (
        <div class={`navbar text-base-100 transform duration-200 px-8 ${nav || "bg-primary"} fixed top-0 z-50 w-[100%]`} >
            {/* first part of navbar ,, logo here */}
            <div class="navbar-start">
                <a href='#home' class="">
                    <img className='h-12' src={logo} alt="" />
                </a>
            </div>

            {/* middle part of nav bar ,,, navlinks here */}
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    <NavLinks />
                </ul>
            </div>

            {/* last part of navbar here,,  */}
            <div class="navbar-end my-0 py-0">
                {/* Avatar  */}
                {user ? <div class="dropdown dropdown-hover dropdown-end">
                    <label tabindex="0" class="">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 lg:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>

                        {/*  avatar : placeholder */}
                        {user?.photoURL ? <div class="avatar hidden lg:block">
                            <div class="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={user?.photoURL} alt='' />
                            </div>
                        </div>
                            :
                            <div class="avatar placeholder">
                                <div class="bg-neutral-focus text-neutral-content rounded-full w-12">
                                    <span class="text-3xl uppercase">{user.email.slice(0, 1)}</span>
                                </div>
                            </div>}

                    </label>
                    <ul tabindex="0" class="dropdown-content  shadow-xl bg-base-100 text-primary rounded-xl  w-64">
                        {/* profile */}
                        <DropdownLinks user={user} />

                    </ul>
                </div>
                    : <Link to="/login">Login</Link>}
                {/* <NavigateAccount user={user} /> */}
            </div>


        </div>
    ) : null
};

export default Header;