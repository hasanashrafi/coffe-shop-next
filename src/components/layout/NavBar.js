import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Links from './Links'


function NavBar() {
  return (
    <nav className="flex items-center gap-x-6 lg:gap-x-9  h-14">
      <div className="shrink-0">
        <Image src="/images/app-logo.png" priority width={100} height={100} alt="app-logo" className="w-[50px] h-[45px] " />
      </div>
      <ul className="w-full h-full flex items-center text-md lg:text-md tracking-tightest gap-x-5  lg:gap-x-9 text-gray-300">
        <li className="font-DanaMedium text-orange-200">
          <Link href="/">صفحه اصلی</Link>
        </li>
        <li className='group relative '>
          <Link
            href='/products'
            className=' group-hover:text-orange-300 transition-colors cursor-pointer'>فروشگاه</Link>
          <ul className=' bg-white invisible  opacity-0 mt-2 absolute z-50 delay-75  w-52 bg-whitedrop-shadow-lg p-6 rounded-2xl border-t-4 border-t-yellow-500 shadow-dark  group-hover:opacity-100 leading-[56px]  group-hover:visible tracking-normal top-full text-base transition-all ease-in-out space-y-4 dark:bg-zinc-700 dark:child:text-white dark:child-hover:text-orange-300 first-line:text-yellow-500 child:block  child:text-sm  child-hover:text-orange-300 child:transition-colors child:text-slate-900'>
            <Links />
          </ul>
        </li>
        <li>
          <Link href="">دیکشنری </Link>
        </li>
        <li>
          <Link href="">بلاگ </Link>
        </li>
        <li>
          <Link href="">درباره ما </Link>
        </li>
        <li>
          <Link href="">تماس با ما </Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar