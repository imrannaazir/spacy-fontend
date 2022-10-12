import { useEffect } from "react";
import { useState } from "react";
import { createContext, useContext, } from "react"
import { useLocation } from "react-router-dom";



const MyContext = createContext({})

export function useMyContext() {
    return useContext(MyContext)
}


export function MyContextProvider({ children }) {
    const location = useLocation()
    const path = location.pathname
    const [nav, setNav] = useState(path.length > 1 ? false : true);
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
    return (
        <MyContext.Provider
            value={{
                nav, setNav, path
            }}  >
            {children}
        </MyContext.Provider>
    )
}