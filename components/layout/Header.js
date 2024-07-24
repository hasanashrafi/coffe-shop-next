import Link from "next/link"


function Header() {
    return (
        <div className='flex justify-around p-2 mx-auto w-[90%] border border-slate-600 rounded-4xl my-2 font-Dana'>
            <nav className="flex gap-4 p-2 bg-red-500">
                <div className="">
                    <img src="./images/app-logo.png" alt="app-logo" />
                </div>

                <ul className="w-full flex items-center justify-between">
                    <li>
                        <a href="">صفحه اصلی</a>
                    </li>
                    <li className='flex flex-col group relative cursor-pointer py-2'>
                        <a>فروشگاه</a>
                        <ul className='invisible  absolute z-50  w-56 bg-gray-100 py-2 mt-6 rounded-4xl px-4 text-gray-800 shadow-xl group-hover:visible '>
                            <li className=' '><a>قهوه ویژه</a></li>
                            <li className=' '><a>قهوه ویژه در سطح جهانی</a></li>
                            <li className=''><a>قهوه درجه یک</a></li>
                            <li className=' '><a>ترکیبات تجاری</a></li>
                            <li className=' '><a>کپسول قهوه</a></li>
                            <li className=' '><a>قهوه زینو برزیلی</a></li>
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

            {/* card icon */}
            <div className="flex w-[25%] justify-around  items-center  bg-blue-500 ">
                <div className="flex divide-x-2">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                        </svg>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                        </svg>
                    </div>
                </div>

                <Link href="/signin" className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25" />
                    </svg>
                    ثبت نام | ورود
                </Link>
            </div>

        </div>
    )
}

export default Header