import Link from "next/link"


function Header() {
    return (
        <>
            <svg className="hidden">
                <symbol id="shopping-cart" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </symbol>
                <symbol id="night-mode" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                </symbol>
                <symbol id="sun" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                </symbol>
                <symbol id="login" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
                </symbol>
            </svg>

            <header className='flex justify-around items-center py-5 pr-10 pl-4 mx-auto bg-black/50 backdrop-blur-xl w-[95%] h-20  rounded-3xl my-2 font-Dana'>
                <div className="flex justify-between w-full h-14 ">

                    <nav className="flex gap-x-9 p-2   ">
                        <div className="">
                            <img src="./images/app-logo.png" alt="app-logo" className="w-[45px] h-[45px] " />
                        </div>

                        <ul className="w-full flex items-center gap-x-9 text-white">
                            <li>
                                <a href="">صفحه اصلی</a>
                            </li>
                            <li className='flex flex-col group relative cursor-pointer py-2'>
                                <a>فروشگاه</a>
                                <ul className='invisible text-brown-900  absolute z-50  w-56 bg-white drop-shadow-lg py-2 mt-9 p-5 rounded-lg px-4  shadow-xl group-hover:visible '>
                                    <li className=' p-1 hover:bg-brown-100 rounded-md '><a>قهوه ویژه</a></li>
                                    <li className=' p-1 hover:bg-brown-100 rounded-md '><a>قهوه ویژه در سطح جهانی</a></li>
                                    <li className=' p-1 hover:bg-brown-100 rounded-md '><a>قهوه درجه یک</a></li>
                                    <li className=' p-1 hover:bg-brown-100 rounded-md '><a>ترکیبات تجاری</a></li>
                                    <li className=' p-1 hover:bg-brown-100 rounded-md '><a>کپسول قهوه</a></li>
                                    <li className=' p-1 hover:bg-brown-100 rounded-md '><a>قهوه زینو برزیلی</a></li>
                                </ul>
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
                    
                    <div className=" flex  gap-x-5 justify-center text-brown-300  items-center ">
                        <div className="flex divide-x-2 w-[50%] gap-x-3   items-center ">
                            <div className="">
                                <svg className="w-[25px] h-[25px] ">
                                    <use xlinkHref="#night-mode"></use>
                                </svg>
                            </div>
                            <div className=" text-sm pl-5">
                                <svg className="w-[25px] h-[25px] ">
                                    <use xlinkHref="#shopping-cart"></use>
                                </svg>
                            </div>
                        </div>
                        <Link href="/signin" className="w-full flex items-center ">
                            <svg className="w-[25px] h-[25px] rotate-180 ml-1">
                                <use xlinkHref="#login"></use>
                            </svg>
                            ثبت نام | ورود
                        </Link>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header