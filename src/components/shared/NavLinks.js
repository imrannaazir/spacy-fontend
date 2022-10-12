import React from 'react';
import { NavLink } from 'react-router-dom';
import { useMyContext } from '../../context/MyContext';

const NavLinks = () => {
    const { setNav } = useMyContext()
    const navLink = [
        {
            name: "Our Product",
            link: "/all-products",
            id: 1
        },
        {
            name: "About Us",
            link: "/about-us",
            id: 2
        },
        {
            name: "Contact Us",
            link: "/contact-us",
            id: 2
        },
    ]
    const navLinksStyles = ({ isActive }) => {
        return {
            borderBottom: isActive ? "2px solid black" : "none",
            height: "64px",
            display: "flex",
            alignItems: "center"
        }

    }
    return (
        <>
            <li><NavLink style={navLinksStyles} to="/" >Home</NavLink ></li>
            {
                navLink.map(link => <li key={link.id}>
                    <NavLink style={navLinksStyles} onClick={() => setNav(false)} to={link.link}>{link.name}</NavLink>
                </li>)
            }

        </>
    );
};

export default NavLinks;