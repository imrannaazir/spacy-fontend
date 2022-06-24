import { signOut } from 'firebase/auth';
import React from 'react';
import { Link, Outlet } from "react-router-dom";
import auth from '../../firebase.init';
import { faGear, faRightFromBracket, faCartPlus, faUserEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DashNav = () => {
    return (
        <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col items-center justify-center  bg-base-200">
                {/* <!-- Page content here --> */}
                <Outlet />
                <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content flex flex-col justify-between">
                    {/* <!-- Sidebar content here --> */}
                    <div>
                        <li className='text-2xl font-bold'><Link to="/">Space Y</Link></li>
                        <li><Link to="/admin"><FontAwesomeIcon icon={faGear} />Manage Inventory</Link></li>
                        <li><Link to="/admin/my-items"><FontAwesomeIcon icon={faUserEdit} />My Items</Link></li>
                        <li><Link to="/admin/add"><FontAwesomeIcon icon={faCartPlus} />Add New</Link></li>
                    </div>
                    <div>
                        <li><button onClick={() => signOut(auth)}><FontAwesomeIcon icon={faRightFromBracket} />Logout</button></li>
                    </div>

                </ul>

            </div>
        </div>
    );
};

export default DashNav;