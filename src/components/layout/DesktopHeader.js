import React from 'react';
import Link from 'next/link';
import NavBar from './NavBar';
import ShoppingCard from '../templates/ShoppingCard';
import ThemeToggle from './ThemeToggle';

const DesktopHeader = ({ currentTheme, darkMode }) => {
    return (
        <header className='fixed lg:w-[95%] w-[98%] hidden md:flex justify-between items-center backdrop-blur-[6px] z-20 px-3 lg:px-10 mx-auto bg-black/30 h-20 rounded-3xl my-2 font-Dana top-9 left-0 right-0'>
            <div className="flex justify-between w-full items-center">
                <NavBar />
                <div className="flex justify-center gap-x-4 xl:gap-x-10 text-orange-200 items-center">
                    <div className="flex gap-x-2 lg:gap-x-5 items-center">
                        <div className='group relative cursor-pointer'>
                            <svg className="size-7">
                                <use href="#shopping-cart"></use>
                            </svg>
                            <ShoppingCard />
                        </div>
                        <ThemeToggle className="text-gray-300 hover:text-orange-300 transition-colors" />
                    </div>
                    <span className="block w-px h-10 bg-white"></span>
                    <Link href="/signup" className="w-full flex items-center gap-x-2">
                        <svg className="w-7 h-7 rotate-180"><use href="#login"></use></svg>
                        <span className='hidden xl:inline-block text-sm lg:text-md'>ثبت نام|ورود</span>
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default DesktopHeader;
