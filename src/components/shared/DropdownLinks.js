import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faFan, faGear, faHome, faRightFromBracket, faRocket, faSortUp, faUserEdit, } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const DropdownLinks = ({ user }) => {
    const liStyle = "flex gap-4 items-center hover:bg-base-200 border-b border-base-200 pl-4 py-3"
    return (
        <>
            <li className={`${liStyle} justify-center border-b-2 border-primary hover:bg-base-100`}>
                <div className='flex flex-col justify-center items-center gap-4'>
                    <div class="avatar">
                        <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={user?.photoURL} alt='' />
                        </div>
                    </div>
                    <p className='text-lg text-black'>{user?.displayName}</p>
                    <p className='text-xs -mt-6 '>{user?.email}</p>
                </div>
            </li>
            <div className='lg:hidden'>
                {/* Home */}
                <li className={liStyle}> <FontAwesomeIcon
                    className='hover:bg-transparent'
                    icon={faHome} />
                    <Link
                        className='hover:bg-transparent'
                        to="/admin">Home</Link></li>
                {/* Rockets */}
                <li className={liStyle}> <FontAwesomeIcon
                    className='hover:bg-transparent'
                    icon={faRocket} />
                    <Link
                        className='hover:bg-transparent'
                        to="/admin">Rockets</Link></li>
                {/* orders */}
                <li className={liStyle}> <FontAwesomeIcon
                    className='hover:bg-transparent'
                    icon={faFan} />
                    <Link
                        className='hover:bg-transparent'
                        to="/admin">Drones</Link></li>
            </div>
            {/* orders */}
            <li className={liStyle}> <FontAwesomeIcon
                className='hover:bg-transparent'
                icon={faGear} />
                <Link
                    className='hover:bg-transparent'
                    to="/admin">Manage Items</Link></li>
            {/* wishlist */}
            <li className={liStyle}> <FontAwesomeIcon
                className='hover:bg-transparent'
                icon={faUserEdit} /><Link
                    className='hover:bg-transparent'
                    to="/admin/my-items">My Items</Link></li>
            {/* wallet */}
            <li className={liStyle}> <FontAwesomeIcon
                className='hover:bg-transparent'
                icon={faCartPlus} />
                <Link
                    className='hover:bg-transparent'
                    to="/admin/add">Add Items</Link></li>
            {/* logout */}
            <li className={`${liStyle} border-b-0`}> <FontAwesomeIcon
                className='hover:bg-transparent'
                icon={faRightFromBracket} />
                <button
                    className='hover:bg-transparent'
                    to="/">Logout</button></li>
            <FontAwesomeIcon className='absolute text-white text-lg -top-[6px] right-6' icon={faSortUp} />
        </>
    );
};

export default DropdownLinks;