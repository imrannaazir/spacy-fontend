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
            name: "Blog",
            link: "/blog",
            id: 2
        },
        {
            name: "About Us",
            link: "/about-us",
            id: 3
        },
        {
            name: "Contact Us",
            link: "/contact-us",
            id: 4
        },
        {
            name: "Career",
            link: "/career",
            id: 5
        },
    ]
    const navLinksStyles = ({ isActive }) => {
        return {
            borderBottom: isActive ? "2px solid white" : "none",
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