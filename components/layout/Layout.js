'use client'
import React from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes';
import { useRouter } from 'next/router';

import NavBar from './NavBar';
import Footer from './Footer';
import ShoppingCard from '../templates/ShoppingCard';

function Layout({ children }) {
    const { systemTheme, theme, setTheme } = useTheme();
    const router = useRouter();
    const currentTheme = theme === 'system' ? systemTheme : theme;
    const darkMode = () => {
        setTheme(theme === "dark" ? 'light' : "dark")
    }

    // Check if current page is signup or signin
    const isAuthPage = router.pathname === '/signup' || router.pathname === '/signin';
    // Check if current page is main page
    const isMainPage = router.pathname === '/';

    return (
        <>
            <svg className="hidden">
                <symbol id="shopping-cart" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </symbol>
                <symbol id="night-mode" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                </symbol>
                <symbol id="sun" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                </symbol>
                <symbol id="login" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
                </symbol>
                <symbol id='arrow' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </symbol>
            </svg>

            {!isAuthPage && (
                <header className='max-w-[95%] flex justify-around items-center backdrop-blur-[6px] z-20 px-5 mx-auto bg-black/30 h-20 rounded-3xl my-2 font-Dana sticky top-5 left-0 right-0'>
                    <div className="flex justify-between w-full items-center">
                        <NavBar />

                        {/* left side items */}
                        <div className="flex gap-x-5 justify-center text-orange-200 items-center">
                            <div className="flex gap-x-2 items-center">
                                {/* shopping box */}
                                <div className='group relative cursor-pointer'>
                                    <svg className="size-7">
                                        <use href="#shopping-cart"></use>
                                    </svg>
                                    <ShoppingCard />
                                </div>

                                {/* dark mode button */}
                                <button className='' onClick={darkMode}>
                                    {
                                        currentTheme === "dark" ?
                                            <svg className="size-7">
                                                <use href="#sun"></use>
                                            </svg>
                                            :
                                            <svg className="size-7">
                                                <use href="#night-mode"></use>
                                            </svg>
                                    }
                                </button>
                            </div>
                            <span className="block w-px h-10 bg-white"></span>
                            <Link href="/signup" className="w-full flex items-center gap-x-2">
                                <svg className="w-7 h-7 rotate-180"><use href="#login"></use>
                                </svg>
                                <span className='text-sm lg:text-md'>ثبت نام|ورود
                                </span>
                            </Link>
                        </div>
                    </div>
                </header>
            )}

            <div className="min-h-screen">
                {children}
            </div>

            {!isAuthPage && <Footer />}
        </>
    )
}

export default Layout