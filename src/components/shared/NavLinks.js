import React from 'react';
import { Link } from 'react-router-dom';

const NavLinks = () => {
    return (
        <>
            <li><Link to="/" >Home</Link ></li>
            <li><Link to="/all-products" >Our Products</Link ></li>
            <li><Link to="/" >Drones</Link ></li>
            <li><Link to="/about-us" >About Us</Link ></li>
            <li><Link to="/contact-us" >Contact Us</Link ></li>

        </>
    );
};

export default NavLinks;