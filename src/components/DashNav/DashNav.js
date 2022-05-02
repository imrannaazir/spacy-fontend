import { faAdd, faBars, faHome, faList, faList12, faListCheck, faRightFromBracket, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { Slide } from 'react-reveal';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png'
import auth from '../../firebase.init';

const DashNav = () => {
    const [open, setOpen] = useState(false)
    return (
        <Slide left cascade>
            <div>


                <div className={`h-screen fixed w-[75px] bg-black z-10`}>
                    {!open && <Slide left>

                        <FontAwesomeIcon
                            onClick={() => setOpen(!open)}
                            className='text-white absolute top-4 left-6 text-lg' icon={faBars} /></Slide>}


                    <div>
                        <div className={`text-white mt-[120px] text-lg pl-6 flex flex-col`}>
                            <div className='flex flex-col gap-6'>
                                <Link to='/'><FontAwesomeIcon icon={faHome} /></Link>
                                <Link to='/admin'><FontAwesomeIcon icon={faListCheck} /></Link>
                                <Link to='/add'><FontAwesomeIcon icon={faAdd} /></Link>
                            </div>
                            <button
                                onClick={() => signOut(auth)}
                                className='absolute bottom-6 text-white'><FontAwesomeIcon icon={faRightFromBracket} /></button>
                        </div>

                    </div>



                </div>
                <div className={`h-screen ${open ? 'fixed' : 'hidden'} w-[150px] bg-black left-[75px] text-white`}>
                    {open && <FontAwesomeIcon
                        onClick={() => setOpen(!open)}
                        className='text-white absolute top-4 right-6 text-xs' icon={faX} />}
                    <div className=' mt-[120px] text-lg pl-4 flex flex-col gap-6'>
                        <Link to='/'>Home</Link>
                        <Link to='/admin'>Manage Items</Link>
                        <Link to='/add'>Add Item</Link>
                    </div>
                    <button
                        onClick={() => signOut(auth)}
                        className=' absolute bottom-6 text-lg pl-4'>Logout</button>

                </div>
                <img className={`h-[50px] z-50 ${open ? 'absolute' : 'hidden'} top-12 left-4`} src={logo} alt="" />

            </div>
        </Slide>
    );
};

export default DashNav;