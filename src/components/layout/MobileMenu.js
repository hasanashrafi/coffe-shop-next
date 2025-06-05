import React from 'react';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import Links from './Links';

const MobileMenu = ({ open, setOpen, dropDownMenu, setDropDownMenu }) => {
    if (!open) return null;
    return (
        <>
            <div className={`font-Dana fixed top-0 bottom-0 right-0 transition-all ease-in-out w-64 pt-3 px-4 min-h-screen bg-white dark:bg-zinc-700 shadow-lg z-20 scroll-smooth overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]`}>
                {/* nav mobile menu */}
                <div className='flex justify-between items-center p-2 pb-5 mb-6 border-b border-b-gray-100 dark:border-b-white/10'>
                    <div className='flex items-center justify-center  gap-x-3.5 '>
                        <svg className='size-10 text-orange-300'>
                            <use href='#mobile-logo'></use>
                        </svg>
                        <svg className='text-orange-300 w-[100px] h-10'>
                            <use href='#logo-type'></use>
                        </svg>
                    </div>
                    <svg className='size-5 dark:text-white text-zinc-600' onClick={() => setOpen(false)}>
                        <use href='#close'></use>
                    </svg>
                </div>
                <div className='flex items-center pr-2.5 bg-orange-200/20 rounded-md h-10 mb-4'>
                    <Link href="/" className="flex items-center  gap-x-2 text-orange-300 dark:text-orange-300 hover:text-orange-300">
                        <svg className='size-5'>
                            <use href='#home'></use>
                        </svg>
                        صفحه اصلی
                    </Link>
                </div>
                <ul className='flex flex-col p-4 gap-y-6 child:pr-2.5 child:p-2 text-zinc-600 dark:text-white'>
                    <li className=' pr-0 cu:text-orange-300 ' >
                        <div className={` ${dropDownMenu ? 'child:text-orange-300 child:dark:text-orange-300' : 'child:text-zinc-600'} flex items-center justify-between`}>
                            <Link href="/products" className="inline-flex  items-center  gap-x-2  dark:text-white hover:text-orange-300">
                                <span className="flex items-center gap-x-2" >
                                    <svg className='size-5'>
                                        <use href='#shop-bag'></use>
                                    </svg>
                                    فروشگاه
                                </span>
                            </Link>
                            <span>
                                <svg className={`size-5 ${dropDownMenu && "rotate-180"} transition-all ease-in-out duration-100`} onClick={() => setDropDownMenu(!dropDownMenu)}>
                                    <use href='#chevron-down'></use>
                                </svg>
                            </span>
                        </div>
                        {dropDownMenu && (
                            <ul className='flex flex-col justify-start  text-sm text-zinc-600 dark:text-white/90 mt-3 child-hover:text-orange-300  pr-7 transition-all ease-in-out duration-500 gap-y-3'>
                                <Links />
                            </ul>

                        )}
                    </li>
                    <li>
                        <Link href="/" className="inline-flex items-center gap-x-2 text-zinc-600 dark:text-white hover:text-orange-300">
                            <svg className='size-5'>
                                <use href='#chat'></use>
                            </svg>
                            دیکشنری
                        </Link>
                    </li>
                    <li>
                        <Link href="/blog" className="inline-flex  gap-x-2 text-zinc-700 dark:text-white hover:text-orange-300">
                            <svg className='size-5'>
                                <use href='#document'></use>
                            </svg>
                            بلاگ
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className="inline-flex gap-x-2 text-zinc-700 dark:text-white hover:text-orange-300">
                            <svg className='size-5'>
                                <use href='#briefcase'></use>
                            </svg>
                            درباره ما
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className="inline-flex gap-x-2 text-zinc-700 dark:text-white hover:text-orange-300">
                            <svg className='size-5'>
                                <use href='#phone'></use>
                            </svg>
                            تماس با ما
                        </Link>
                    </li>
                </ul>
                {/* footer mobile menu */}
                <div className='space-y-6 pt-8 mt-8 px-2.5 border-t border-t-gray-100 dark:border-t-white/10'>
                    <Link href="/" className='inline-flex  items-center gap-x-2 text-orange-300'>
                        <svg className='size-5 '>
                            <use href='#login'></use>
                        </svg>
                        ثبت نام | ورود
                    </Link>
                    {/* ThemeToggle will be used here */}
                    <ThemeToggle />

                    <Link href="/" className='inline-flex items-center gap-x-2 text-orange-300'>
                        <svg className='size-5 '>
                            <use href='#shopping'></use>
                        </svg>
                        سبد خرید
                    </Link>
                </div>
            </div>
            <div onClick={() => setOpen(false)} className='overly fixed md:hidden transition-all inset-0 bg-black/40 w-full h-full z-10'></div>
        </>
    );
};

export default MobileMenu;
