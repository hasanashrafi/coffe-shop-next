

function Header() {
    return (
        <div className='font-Dana'>
            <nav className="flex gap-4 p-4">
                <div className="">
                    <img src="./images/app-logo.png" alt="app-logo" />
                </div>

                <ul className="flex w-[50%] items-center justify-between">
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
            <div>
            </div>
        </div>
    )
}

export default Header