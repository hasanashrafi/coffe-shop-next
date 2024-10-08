'use client'
import React from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes';
import Image from 'next/image';

function Layout({ children }) {
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;
    const darkMode = () => {
        theme == "dark" ? setTheme('light') : setTheme("dark")
    }
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

            <header className=' flex justify-around items-center backdrop-blur-[6px] px-5 mx-auto bg-black/30  w-[95%] h-20  rounded-3xl my-2 font-Dana sticky top-5 left-0 right-0'>
                <div className=" flex justify-between w-full items-center ">

                    <nav className="flex items-center gap-x-6 lg:gap-x-9  h-14">
                        <div className="">
                            <img src="./images/app-logo.png" alt="app-logo" className="w-[50px] h-[45px] " />
                        </div>
                        <ul className="w-full h-full flex items-center text-md lg:text-md tracking-tightest gap-x-5 lg:gap-x-9 text-gray-300">
                            <li className="font-DanaMedium text-orange-200">
                                <a href="">صفحه اصلی</a>
                            </li>
                            <li className='group relative '>
                                <a
                                    href='#'
                                    className='group-hover:text-orange-300 transition-colors cursor-pointer'>فروشگاه</a>
                                <div className=' 
                               invisible
                               opacity-0
                                    mt-2
                                    absolute
                                    z-50 
                                    w-52
                                 bg-white
                                drop-shadow-lg
                                 p-6
                                 rounded-2xl 
                                border-t-4
                                  border-t-yellow-500 
                                  shadow-dark 
                                 group-hover:opacity-100 
                                  leading-[56px] 
                                 group-hover:visible 
                                  tracking-normal 
                                   top-full
                                    text-base
                                    transition-all
                                     ease-in-out
                                      space-y-4
                                       dark:bg-zinc-700
                                        dark:child:text-white
                                         dark:child-hover:text-orange-300
                                         first-line:text-yellow-500
                                         child:block 
                                          child:text-sm 
                                           child-hover:text-orange-300
                                            child:transition-colors
                                               child:text-slate-900
                                                           '>
                                    <a href='#'>قهوه ویژه</a>
                                    <a href='#'>قهوه ویژه در سطح جهانی</a>
                                    <a href='#'>قهوه درجه یک</a>
                                    <a href='#'>ترکیبات تجاری</a>
                                    <a href='#'>کپسول قهوه</a>
                                    <a href='#'>قهوه زینو برزیلی</a>
                                </div>
                            </li>
                            <li>
                                <a href="">دیکشنری </a>
                            </li>
                            <li>
                                <a href="">بلاگ </a>
                            </li>
                            <li>
                                <a href="">درباره ما </a>
                            </li>
                            <li>
                                <a href="">تماس با ما </a>
                            </li>
                        </ul>
                    </nav>

                    <div className=" flex  gap-x-5 justify-center text-orange-200 items-center ">

                        <div className="flex  gap-x-2  items-center ">
                            <div>
                                <div className=' relative group cursor-pointer '>
                                    <svg className="size-7 ">
                                        <use href="#shopping-cart"></use>
                                    </svg>
                                    <div className=' 
                                    left-0
                                    mt-2
                                    absolute
                                    z-68
                                    w-[400px]
                                    leading-[56px]
                                 bg-white
                                drop-shadow-lg
                                 p-6
                                 rounded-2xl 
                                border-t-4
                                  border-t-yellow-500 
                                  shadow-dark 
                                 group-hover:opacity-100 
                                 group-hover:visible 
                                   tracking-normal
                                    transition-all
                                     ease-in-out
                                       dark:bg-zinc-700 '>
                                        {/* cart header */}
                                        <div className='flex justify-between  items-center  font-DanaMedium text-xs'>
                                            <span className='  text-gray-400 '>
                                                1 مورد
                                            </span>
                                            <a href='#' className='text-orange-300 gap-x-2 w-fit flex items-center'>
                                                مشاهده سبد خرید
                                                <svg className="size-4 ">
                                                    <use href="#arrow"></use>
                                                </svg>
                                            </a>
                                        </div>
                                        {/* cart footer */}

                                        <div className='flex gap-x-2.5  mt-5 pb-4 border-b-2 border-b-gray-300 dark:border-b-white/10'>
                                            <Image
                                                src='/images/products/p1.png'
                                                className='w-[120px] h-[120px]'
                                                width={100}
                                                height={100}
                                                priority />
                                            <div className='flex flex-col justify-between '>
                                                <p className='font-DanaMedium dark:text-white text-base text-zinc-700'>قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی</p>
                                                <div className=''>
                                                    <span className='tracking-tighter text-teal-600 dark:text-emerald-400 text-sm'>14,500 تومان  تخفیف</span>
                                                    <div className=' font-DanaDemiBold text-zinc-700 dark:text-white'>
                                                        125.000
                                                        <span className=' font-Dana text-xs'> تومان</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex justify-between mt-4  items-center'>
                                            <div className='flex flex-col items-center justify-center text-zinc-700 dark:text-gray-300'>
                                                <p className='font-Dana text-sm tracking-tighter '>مبلغ قابل پرداخت</p>
                                                <p className='font-DanaDemiBold text-md dark:text-white'>
                                                    350.000
                                                    <span className='text-sm mr-1'>تومان</span>
                                                </p>
                                            </div>
                                            <button className='bg-teal-600 text-white rounded-2xl px-4 h-12 text-sm  ' >ثبت سفارش</button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className='' onClick={darkMode}>
                                {
                                    currentTheme === "dark" ?
                                        <svg className=" size-7">
                                            <use href="#sun"></use>
                                        </svg>
                                        :
                                        <svg className=" size-7 ">
                                            <use href="#night-mode"></use>
                                        </svg>

                                }
                            </button>

                        </div>
                        <span className="block w-px h-10 bg-white"></span>
                        <Link href="/signin" className="w-full flex items-center gap-x-2">
                            <svg className="w-7 h-7 rotate-180 ">
                                <use href="#login"></use>
                            </svg>
                            <span className='text-sm lg:text-md'>
                                ثبت نام
                                |
                                ورود
                            </span>
                        </Link>
                    </div>
                </div>
            </header>

            <div className=''>
                {children}
            </div>

            <footer className='mt-96 place-content-center bg-black/50 backdrop-blur-xl h-14 mx-auto text-center'>
                Developed By HsN
            </footer>
        </>
    )
}

export default Layout