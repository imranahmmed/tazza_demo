import React, { useState, useEffect, useRef } from 'react'
import TopHeader from '../common/TopHeader';
import Header from '../common/Header';
import Navbar from '../common/Navbar';
import NavSidebar from '../common/NavSidebar';
import CartSidebar from '../common/cart/CartSidebar';
import { Outlet } from 'react-router-dom';

import Footer from '../common/Footer';
import Copyright from '../common/Copyright';
import MobileMenu from '../common/MobileMenu';

const RootLayout = () => {
    const [navSidebarShow, setNavSidebarShow] = useState(false)
    const [cartSidebarShow, setCartSidebarShow] = useState(false)

    useEffect(() => {
        function resizeWith(e) {
            if (window.innerWidth < 1024) {
                setNavSidebarShow(true);
            } else {
                setNavSidebarShow(false);
            }
        }
        resizeWith();

        window.addEventListener("resize", resizeWith)
    }, [])

    const navRef = useRef()
    const cartRef = useRef()

    useEffect(() => {
        // document.body.addEventListener("click", (e) => {
        //     if (navRef.current.contains(e.target)) {
        //         setNavSidebarShow(true);
        //     } else {
        //         setNavSidebarShow(false);
        //     }
        // }); 

        // document.body.addEventListener("click", (e) => {
        //     if (cartRef.current.contains(e.target)) {
        //         setCartSidebarShow(true);
        //     } else {
        //         setCartSidebarShow(false);
        //     }
        // });
    }, [])

    const handleCartSidebarShow = () => {
        setCartSidebarShow(!cartSidebarShow)
        // document.body.style.overflow = "hidden";
    }

    const handleNavSidebarShow = () => {
        setNavSidebarShow(!navSidebarShow)
        // document.body.style.overflow = "hidden";
    }


    return (
        <>
            <TopHeader />
            <Header cartRef={cartRef} navRef={navRef} sideBarOnClick={handleNavSidebarShow} cartSideBarOnClick={handleCartSidebarShow} />
            <Navbar />
            {navSidebarShow &&
                <NavSidebar onClick={handleNavSidebarShow} navRef={navRef} />
            }

            {cartSidebarShow &&
                <CartSidebar onClick={handleCartSidebarShow} cartRef={cartRef} />
            }

            <Outlet />
            <Footer />
            <Copyright />
            <MobileMenu cartSideBarOnClick={handleCartSidebarShow}/>
        </>
    )
}

export default RootLayout