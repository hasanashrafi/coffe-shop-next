import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import ShoppingCard from '../templates/ShoppingCard'
import NavBar from './NavBar'

function Header({ darkMode, currentTheme }) {
    const [isLogin, setIsLogin] = useState(false)
    
    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            setIsLogin(true)
        }
    }, [])
    return (
        <>

            {/* desktop header */}
            <header className='fixed lg:w-[95%] w-[98%] hidden md:flex justify-between items-center backdrop-blur-[6px] z-20 px-3  lg:px-10 mx-auto bg-black/30 h-20 rounded-3xl my-2 font-Dana  top-9 left-0 right-0'>
                <div className="flex justify-between w-full items-center">
                    <NavBar />

                    {/* left side items */}
                    <div className="flex justify-center gap-x-4 xl:gap-x-10  text-orange-200 items-center">
                        <div className="flex gap-x-2 lg:gap-x-5 items-center">
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
                        {isLogin ?
                            <Link href="/dashboard" className='inline-flex  items-center gap-x-2 text-orange-300'>
                                <svg className='size-5 '>
                                    <use href='#user'></use>
                                </svg>
                                پروفایل
                            </Link> :
                            <Link href="/signup" className='inline-flex  items-center gap-x-2 text-orange-300'>
                                <svg className='size-5 '>
                                    <use href='#login'></use>
                                </svg>
                                ثبت نام | ورود
                            </Link>}
                    </div>
                </div>
            </header>

        </>
    )
}

export default Header
