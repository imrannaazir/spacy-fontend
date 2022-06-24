import React from 'react';
import { Link, Outlet } from "react-router-dom";

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
                <ul class="menu  overflow-y-auto w-60 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to="/admin">Manage Inventory</Link></li>
                    <li><Link to="/admin/my-items">My Items</Link></li>
                    <li><Link to="/admin/add">Add New</Link></li>

                </ul>

            </div>
        </div>
    );
};

export default DashNav;