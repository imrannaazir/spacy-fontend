import React from 'react';
import toast from "react-hot-toast"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBlog, faComputer, faGear, faHome, faInfo, faPhone, faPlane, faRightFromBracket, faSortUp, } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import auth from '../../firebase.init';
import { useMyContext } from '../../context/MyContext';
const DropdownLinks = ({ user }) => {
    const { setNav } = useMyContext()
    const navLink = [
        {
            name: "Home",
            link: "/",
            id: 6,
            icon: faHome
        },
        {
            name: "Our Product",
            link: "/all-products",
            id: 1,
            icon: faPlane
        },
        {
            name: "Blog",
            link: "/blog",
            id: 2,
            icon: faBlog
        },
        {
            name: "About Us",
            link: "/about-us",
            id: 3,
            icon: faInfo
        },
        {
            name: "Contact Us",
            link: "/contact-us",
            id: 4,
            icon: faPhone
        },
        {
            name: "Career",
            link: "/career",
            id: 5,
            icon: faComputer
        },
    ]
    //navigate func
    const navigate = useNavigate()

    const liStyle = "flex gap-4 items-center hover:bg-base-200 border-b border-base-200 pl-4 py-3"
    return (
        <>
            {
                user ?
                    <li className={`${liStyle} justify-center border-b-2 border-primary hover:bg-base-100`}>

                        <div className='flex flex-col justify-center items-center gap-4'>
                            {/* avatar : placeholder */}
                            {user?.photoURL ?
                                <div className="avatar">
                                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src={user?.photoURL} alt='' />
                                    </div>
                                </div>
                                :
                                <div className="avatar placeholder">
                                    <div className="bg-neutral-focus text-neutral-content rounded-full w-24">
                                        <span className="text-3xl uppercase">{user?.email?.slice(0, 1)}</span>
                                    </div>
                                </div>}


                            <p className='text-lg text-black'>{user?.displayName}</p>
                            <p className='text-xs -mt-6 '>{user?.email}</p>
                        </div>
                    </li> : null
            }


            <div className='lg:hidden'>
                {

                    navLink.map(link => <li key={link.id} className={liStyle}> <FontAwesomeIcon
                        className='hover:bg-transparent'
                        icon={link.icon} />
                        <Link onClick={() => setNav(false)}
                            className='hover:bg-transparent'
                            to={link?.link}>{link?.name}</Link></li>
                    )
                }
            </div>
            {
                user ? <>
                    <li className={liStyle}> <FontAwesomeIcon
                        className='hover:bg-transparent'
                        icon={faGear} />
                        <Link
                            className='hover:bg-transparent'
                            to="/admin">Dashboard</Link></li>
                    {/* logout */}
                    <li className={`${liStyle} border-b-0`}> <FontAwesomeIcon
                        className='hover:bg-transparent'
                        icon={faRightFromBracket} />
                        <button onClick={() => {
                            signOut(auth)
                            navigate("/")
                            toast.success("Successfully logged out!")
                        }}
                            className='hover:bg-transparent'
                        >Logout</button></li>
                    <FontAwesomeIcon className='absolute text-white text-lg -top-[6px] right-6' icon={faSortUp} />
                </> :
                    <li className={liStyle}> <FontAwesomeIcon
                        className='hover:bg-transparent'
                        icon={faRightFromBracket} />
                        <Link onClick={() => setNav(false)}
                            className='hover:bg-transparent'
                            to="/Login">Login</Link></li>

            }

        </>
    );
};

export default DropdownLinks;