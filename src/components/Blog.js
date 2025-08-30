import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Blog() {
    return (
        <section className='mb-8 md:mb-28'>
            <div className='container max-w-7xl'>
                {/* section head */}
                <div className="flex items-end justify-between mb-5 md:mb-12">
                    <div className="font-MorabbaMedium ">
                        <h3 className="text-2xl md:text-5xl text-zinc-700 dark:text-white">
                            مطالب خواندنی
                        </h3>
                    </div>
                    <Link href="/products" className="flex items-center text-base md:text-xl md:gap-x-1 text-orange-300 transition-colors md:hover:bg-orange-300/20 h-10 pr-3 pl-1 rounded-md tracking-tightest">
                        <span className="hidden md:inline-block">
                            مشاهده همه مطالب
                        </span>
                        <span className="md:hidden">
                            مشاهده همه
                        </span>
                        <svg className="size-5 ">
                            <use href="#chevron-left"></use>
                        </svg>
                    </Link>
                </div>

                {/* section content */}
                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                    <div className='group flex sm:block gap-x-2.5 bg-white dark:bg-zinc-700 p-2.5 md:pb-2 rounded-2xl shadow-md'>
                        <div className='shrink-0 size-[130px] sm:w-auto sm:h-auto relative sm:mb-4 rounded-2xl rounded-bl-4xl overflow-hidden'>
                            <Image
                                width={500}
                                height={500}
                                src={'/images/blogs/blog-1.png'}
                                alt='blog'
                                className=' h-full sm:h-auto object-cover '
                                priority
                                sizes='100vw'
                                quality={100}
                            />
                            <div className='absolute inset-0  sm:flex-center hidden invisible cursor-pointer opacity-0 group-hover:visible group-hover:opacity-100  transition-all  delay-75 bg-gradient-to-r from-orange-200/80 to-orange-300/80 rounded-xl'>
                                <svg className='w-[138px] h-[58px] text-amber-700'>
                                    <use href='#logo-type' />
                                </svg>
                            </div>
                        </div>

                        <div className='w-full flex flex-col sm:flex-row  items-start justify-between'>
                            <Link href='/' className=' max-w-[193px] ml-1.5 sm:ml-0 mt-2.5 sm:mt-0 text-sm/7 md:text-lg font-DanaMedium md:font-Dana line-clamp-2 text-zinc-700 dark:text-white'>
                                طرز تهیه قهوه دمی با دستگاه اروپرس
                            </Link>
                            <div className='hidden sm:flex gap-5 '>
                                <div className='hidden lg:block w-px h-[61px] bg-gray-100 dark:bg-white/10 '></div>
                                <div className='flex flex-col text-left -mt-1 text-emerald-600 dark:text-emerald-500 text-sm ml-[12px] lg:ml-[18px]'>
                                    <span className='text-2xl font-DanaDemiBold'>21</span>
                                    <span className='text-sm'>مرداد</span>
                                    <span className='text-sm'>1404</span>
                                </div>
                            </div>


                            <div className='w-full  flex sm:hidden items-end justify-between mt-5 pt-[18px] pb-1.5  border-t border-t-gray-100 dark:border-t-white/10'>
                                <span className='inline-block text-sm text-emerald-600 dark:text-emerald-500'>
                                    21 مرداد 1404
                                </span>
                                <Link href='/' className=' flex items-center gap-x-1 h-5 rounded-md pr-2.5 pl-2 text-sm font-DanaMedium bg-orange-200/20 text-orange-300'>
                                    مطالعه
                                    <svg className='size-3.5'>
                                        <use href='#arrow-left' />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='group flex sm:block gap-x-2.5 bg-white dark:bg-zinc-700 p-2.5 md:pb-2 rounded-2xl shadow-md'>
                        <div className='shrink-0 size-[130px] sm:w-auto sm:h-auto relative sm:mb-4 rounded-2xl rounded-bl-4xl overflow-hidden'>
                            <Image
                                width={500}
                                height={500}
                                src={'/images/blogs/blog-2.png'}
                                alt='blog'
                                className=' h-full sm:h-auto object-cover '
                                priority
                                sizes='100vw'
                                quality={100}
                            />
                            <div className='absolute inset-0  sm:flex-center hidden invisible cursor-pointer opacity-0 group-hover:visible group-hover:opacity-100  transition-all  delay-75 bg-gradient-to-r from-orange-200/80 to-orange-300/80 rounded-xl'>
                                <svg className='w-[138px] h-[58px] text-amber-700'>
                                    <use href='#logo-type' />
                                </svg>
                            </div>
                        </div>

                        <div className='w-full flex flex-col sm:flex-row  items-start justify-between'>
                            <Link href='/' className=' max-w-[193px] ml-1.5 sm:ml-0 mt-2.5 sm:mt-0 text-sm/7 md:text-lg font-DanaMedium md:font-Dana line-clamp-2 text-zinc-700 dark:text-white'>
                                یک نوشیدنی هیجان انگیز و پرکالری برای شروع روز                            </Link>
                            <div className='hidden sm:flex gap-5 '>
                                <div className='hidden lg:block w-px h-[61px] bg-gray-100 dark:bg-white/10 '></div>
                                <div className='flex flex-col text-left -mt-1 text-emerald-600 dark:text-emerald-500 text-sm ml-[12px] lg:ml-[18px]'>
                                    <span className='text-2xl font-DanaDemiBold'>21</span>
                                    <span className='text-sm'>مرداد</span>
                                    <span className='text-sm'>1404</span>
                                </div>
                            </div>


                            <div className='w-full  flex sm:hidden items-end justify-between mt-5 pt-[18px] pb-1.5  border-t border-t-gray-100 dark:border-t-white/10'>
                                <span className='inline-block text-sm text-emerald-600 dark:text-emerald-500'>
                                    21 مرداد 1404
                                </span>
                                <Link href='/' className=' flex items-center gap-x-1 h-5 rounded-md pr-2.5 pl-2 text-sm font-DanaMedium bg-orange-200/20 text-orange-300'>
                                    مطالعه
                                    <svg className='size-3.5'>
                                        <use href='#arrow-left' />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='group flex sm:block gap-x-2.5 bg-white dark:bg-zinc-700 p-2.5 md:pb-2 rounded-2xl shadow-md'>
                        <div className='shrink-0 size-[130px] sm:w-auto sm:h-auto relative sm:mb-4 rounded-2xl rounded-bl-4xl overflow-hidden'>
                            <Image
                                width={500}
                                height={500}
                                src={'/images/blogs/blog-3.png'}
                                alt='blog'
                                className=' h-full sm:h-auto object-cover '
                                priority
                                sizes='100vw'
                                quality={100}
                            />
                            <div className='absolute inset-0  sm:flex-center hidden invisible cursor-pointer opacity-0 group-hover:visible group-hover:opacity-100  transition-all  delay-75 bg-gradient-to-r from-orange-200/80 to-orange-300/80 rounded-xl'>
                                <svg className='w-[138px] h-[58px] text-amber-700'>
                                    <use href='#logo-type' />
                                </svg>
                            </div>
                        </div>

                        <div className='w-full flex flex-col sm:flex-row  items-start justify-between'>
                            <Link href='/' className=' max-w-[193px] ml-1.5 sm:ml-0 mt-2.5 sm:mt-0 text-sm/7 md:text-lg font-DanaMedium md:font-Dana line-clamp-2 text-zinc-700 dark:text-white'>
                                طرز تهیه یک فنجان کافه زینو برزیلی                            </Link>
                            <div className='hidden sm:flex gap-5 '>
                                <div className='hidden lg:block w-px h-[61px] bg-gray-100 dark:bg-white/10 '></div>
                                <div className='flex flex-col text-left -mt-1 text-emerald-600 dark:text-emerald-500 text-sm ml-[12px] lg:ml-[18px]'>
                                    <span className='text-2xl font-DanaDemiBold'>21</span>
                                    <span className='text-sm'>مرداد</span>
                                    <span className='text-sm'>1404</span>
                                </div>
                            </div>


                            <div className='w-full  flex sm:hidden items-end justify-between mt-5 pt-[18px] pb-1.5  border-t border-t-gray-100 dark:border-t-white/10'>
                                <span className='inline-block text-sm text-emerald-600 dark:text-emerald-500'>
                                    21 مرداد 1404
                                </span>
                                <Link href='/' className=' flex items-center gap-x-1 h-5 rounded-md pr-2.5 pl-2 text-sm font-DanaMedium bg-orange-200/20 text-orange-300'>
                                    مطالعه
                                    <svg className='size-3.5'>
                                        <use href='#arrow-left' />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='group flex sm:block gap-x-2.5 bg-white dark:bg-zinc-700 p-2.5 md:pb-2 rounded-2xl shadow-md'>
                        <div className='shrink-0 size-[130px] sm:w-auto sm:h-auto relative sm:mb-4 rounded-2xl rounded-bl-4xl overflow-hidden'>
                            <Image
                                width={500}
                                height={500}
                                src={'/images/blogs/blog-4.png'}
                                alt='blog'
                                className=' h-full sm:h-auto object-cover '
                                priority
                                sizes='100vw'
                                quality={100}
                            />
                            <div className='absolute inset-0  sm:flex-center hidden invisible cursor-pointer opacity-0 group-hover:visible group-hover:opacity-100  transition-all  delay-75 bg-gradient-to-r from-orange-200/80 to-orange-300/80 rounded-xl'>
                                <svg className='w-[138px] h-[58px] text-amber-700'>
                                    <use href='#logo-type' />
                                </svg>
                            </div>
                        </div>

                        <div className='w-full flex flex-col sm:flex-row  items-start justify-between'>
                            <Link href='/' className=' max-w-[193px] ml-1.5 sm:ml-0 mt-2.5 sm:mt-0 text-sm/7 md:text-lg font-DanaMedium md:font-Dana line-clamp-2 text-zinc-700 dark:text-white'>
                                طرز تهیه قهوه دالگونا مناسب روزهای کرونایی                            </Link>
                            <div className='hidden sm:flex gap-5 '>
                                <div className='hidden lg:block w-px h-[61px] bg-gray-100 dark:bg-white/10 '></div>
                                <div className='flex flex-col text-left -mt-1 text-emerald-600 dark:text-emerald-500 text-sm ml-[12px] lg:ml-[18px]'>
                                    <span className='text-2xl font-DanaDemiBold'>21</span>
                                    <span className='text-sm'>مرداد</span>
                                    <span className='text-sm'>1404</span>
                                </div>
                            </div>


                            <div className='w-full  flex sm:hidden items-end justify-between mt-5 pt-[18px] pb-1.5  border-t border-t-gray-100 dark:border-t-white/10'>
                                <span className='inline-block text-sm text-emerald-600 dark:text-emerald-500'>
                                    21 مرداد 1404
                                </span>
                                <Link href='/' className=' flex items-center gap-x-1 h-5 rounded-md pr-2.5 pl-2 text-sm font-DanaMedium bg-orange-200/20 text-orange-300'>
                                    مطالعه
                                    <svg className='size-3.5'>
                                        <use href='#arrow-left' />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Blog
