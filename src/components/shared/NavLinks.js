import React from 'react';
import { Link } from 'react-router-dom';

const NavLinks = () => {
    return (
        <>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">Rockets</Link></li>
            <li><Link to="/">Drones</Link></li>
            <li><Link to="/">Partners</Link></li>
            <li><Link to="/">Join</Link></li>

        </>
    );
};

export default NavLinks;