import Link from 'next/link'
import React from 'react'

function Footer() {
    return (
        <footer className='relative bg-zinc-700 py-8 md:pb-11 md:pt-[62px]  font-Dana'>
            {/* curve */}
            <svg className="text-white dark:text-zinc-800 hidden md:inline-block absolute w-[100px] h-[22px] top-0 right-0 left-0 mx-auto ">
                <use href="#footer"> </use>
            </svg>

            {/* arrow rings */}
            <div className=" absolute left-0 right-0 top-0 mx-auto -translate-y-2/4 w-[30px] h-[30px] hidden md:flex items-center justify-center rounded-full border-2 border-orange-300">
                <svg className="rotate-180 size-5 mx-auto text-zinc-700 dark:text-white">
                    <use href="#chevron-down"></use>
                </svg>
            </div>

            {/* footer content */}
            <div className=' px-4 lg:px-0 sm:-[94%]  lg:w-[90%] mx-auto '>

                <div className='flex flex-wrap justify-between text-gray-300'>
                    <div>
                        <div className=' flex items-center   gap-x-5 mb-6 md:mb-4.5'>
                            <svg className=' text-gray-300 w-[57px] h-[54px] '>
                                <use href='#mobile-logo'></use>
                            </svg>
                            <svg className='text-gray-300 w-[138px] h-[54px]'>
                                <use href='#logo-type'></use>
                            </svg>
                        </div>
                        <p className='text-lg md:text-xl/[48px]  lg:max-w-full xl:max-w-[606px]'>
                            ما برآنیم تا با پیشرو بودن در فرایند تولید، نوع و کیفیت محصول، خدمات و توزیع،الگویی برای تولیدکنندگان ایرانی باشیم و به مرجع فرهنگ قهوه در ایران تبدیل شویم. می پنداریم که نظر مردم ایران و منطقه باید نسبت به کالای ایرانی بهبود یابد و در این راستا با اشتیاق می کوشیم.
                        </p>
                    </div>

                    <div className='mt-10 md:mt-[26px]'>
                        <h4 className='font-DanaDemiBold text-2xl text-white mb-6 md:mb-7'>
                            دسترسی سریع
                        </h4>
                        <div className='grid grid-cols-2 gap-x-10 md:gap-x-16 gap-y-2.5 md:gap-y-5'>
                            <Link href="/" className='flex items-center gap-x-2 md:gap-x-3 hover:text-orange-300 transition-colors ease-in-out text-base md:text-xl ' >
                                <span className='inline-block w-2 md:w-2.5 h-1 bg-current rounded-full'></span>
                                حریم خصوصی

                            </Link>
                            <Link href="/" className='flex items-center gap-x-2 md:gap-x-3 hover:text-orange-300 transition-colors ease-in-out text-base md:text-xl ' >
                                <span className='inline-block w-2 md:w-2.5 h-1 bg-current rounded-full'></span>
                                عودت کالا
                            </Link>
                            <Link href="/" className='flex items-center gap-x-2 md:gap-x-3 hover:text-orange-300 transition-colors ease-in-out text-base md:text-xl ' >
                                <span className='inline-block w-2 md:w-2.5 h-1 bg-current rounded-full'></span>
                                شرایط استفاده

                            </Link>
                            <Link href="/" className='flex items-center gap-x-2 md:gap-x-3 hover:text-orange-300 transition-colors ease-in-out text-base md:text-xl ' >
                                <span className='inline-block w-2 md:w-2.5 h-1 bg-current rounded-full'></span>
                                ثبت سفارش

                            </Link>
                            <Link href="/" className='flex items-center gap-x-2 md:gap-x-3 hover:text-orange-300 transition-colors ease-in-out text-base md:text-xl ' >
                                <span className='inline-block w-2 md:w-2.5 h-1 bg-current rounded-full'></span>
                                پرسش های متداول

                            </Link>
                            <Link href="/" className='flex items-center gap-x-2 md:gap-x-3 hover:text-orange-300 transition-colors ease-in-out text-base md:text-xl ' >
                                <span className='inline-block w-2 md:w-2.5 h-1 bg-current rounded-full'></span>
                                فرصت های شغلی

                            </Link>
                            <Link href="/" className='flex items-center gap-x-2 md:gap-x-3 hover:text-orange-300 transition-colors ease-in-out text-base md:text-xl ' >
                                <span className='inline-block w-2 md:w-2.5 h-1 bg-current rounded-full'></span>
                                ضمانت نامه ها

                            </Link>
                            <Link href="/" className='flex items-center gap-x-2 md:gap-x-3 hover:text-orange-300 transition-colors ease-in-out text-base md:text-xl ' >
                                <span className='inline-block w-2 md:w-2.5 h-1 bg-current rounded-full'></span>
                                ارتباط با ما

                            </Link>
                        </div>
                    </div>

                    <div className='mt-10 md:mt-[26px]'>
                        <h4 className='font-DanaDemiBold text-2xl text-white mb-6 md:mb-7'>
                            در تماس باشیم
                        </h4>
                        <div >
                            <div className='mb-6 md:mb-10'>
                                <span className='flex items-center gap-x-2 md:gap-x-3 md:text-xl mb-4 md:mb-5'>
                                    <svg className='size-5 md:size-6 shrink-0'>
                                        <use href='#map-pin' />
                                    </svg>
                                    مرند، خیابان المهدی،جنب مسجد المهدی، کافه گلدن
                                </span>


                                <div className='flex flex-wrap gap-y-4 gap-x-5 font-DanaMedium'>
                                    <a href="mailto:goldencoffee@gmail.com"
                                        className='flex items-center gap-x-2 md:gap-x-3 text-xl text-orange-300 '>
                                        <svg className='size-5 md:size-6 '>
                                            <use href='#envelope' />
                                        </svg>
                                        goldencoffee@gmail.com
                                    </a>
                                    <div className='flex items-center gap-x-2 md:gap-x-3 text-xl '>
                                        <svg className='size-5 md:size-6 '>
                                            <use href='#phoneOut' />
                                        </svg>
                                        <span> 041-42212345</span>
                                        <span>09981444535</span>
                                    </div>
                                </div>
                            </div>
                            <div className='ltr flex items-center gap-x-1.5 md:gap-x-6 child:h-12 font-DanaMedium'>
                                <Link href="/" className='flex-center flex-grow items-center gap-x-2 font-DanaDemiBold  md:text-xl   bg-gradient-to-r from-orange-200 to-orange-300 text-zinc-700 rounded-xl'>
                                    @golden_coffee
                                    <svg className='size-[26px]  md:size-[38px] '>
                                        <use href='#telegram' />
                                    </svg>
                                </Link>
                                <Link href="/" className='flex-center flex-grow items-center gap-x-2   md:text-xl  border border-orange-200 text-orange-200 rounded-xl '>
                                    @golden_coffee
                                    <svg className='size-[26px]  md:size-[38px]'>
                                        <use href='#instagram' />
                                    </svg>
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex flex-wrap justify-between items-center gap-x-4 font-DanaMedium md:text-base text-xs/[20px] mt-10 md:mt-11 pt-10 md:pt-11 border-t border-t-white/10 '>
                    <div className='flex-center gap-x-2.5'>
                        <div className='flex-center shrink-0 size-[30px] rounded-full  border border-white/10'>
                            <div className='flex-center size-5 rounded-full  border border-white/10'>
                            <div className='size-2.5 rounded-full bg-gradient-to-t from-orange-300 to-orange-200'></div>
                            </div>
                        </div>
                        <p>تمامی حقوق این سایت متعلق به<span className='text-orange-200'> گلدن کافی</span> میباشد</p>
                    </div>
                    <span className='ltr mr-auto'>
                        Copyright © 2025 Golden Coffee, all rights reserved
                    </span>
                </div>
            </div>
        </footer>
    )
}

export default Footer