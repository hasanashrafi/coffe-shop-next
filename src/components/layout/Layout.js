'use client'
import React, { useState, useEffect } from 'react'
import SVGSymbols from './SVGSymbols'
import DesktopHeader from './DesktopHeader'
import MobileHeader from './MobileHeader'
import MobileMenu from './MobileMenu'
import Footer from './Footer'

function Layout({ children }) {
    const [mounted, setMounted] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);
    const [dropDownMenu, setDropDownMenu] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <>
            <SVGSymbols />
            <DesktopHeader />
            <MobileHeader setMobileMenu={setMobileMenu} />
            <MobileMenu
                open={mobileMenu}
                setOpen={setMobileMenu}
                dropDownMenu={dropDownMenu}
                setDropDownMenu={setDropDownMenu}
            />
            <div className="min-h-screen">
                {children}
            </div>
            <Footer />
        </>
    )
}

export default Layout