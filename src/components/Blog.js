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
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                    <div className='bg-white dark:bg-zinc-700 p-2.5 md:pb-2 rounded-2xl shadow-md'>
                        <div className='relative mb-4 rounded-2xl rounded-bl-4xl overflow-hidden'>
                            <Image
                                width={100}
                                height={100}
                                src={'/images/blogs/blog-1.png'}
                                alt='blog'
                                className='w-full h-full object-cover '
                                priority
                                sizes='100vw'
                                quality={100}
                            />
                            <div className='absolute inset-0  md:flex-center hidden  bg-gradient-to-r from-orange-200/80 to-orange-300/80 rounded-xl'>
                                <svg className='w-[138px] h-[58px] text-amber-700'>
                                    <use href='#logo-type' />
                                </svg>
                            </div>
                        </div>
                        <div className='flex justify-between'>
                            <h2 className='max-w-[193px] text-sm md:text-lg font-DanaMedium md:font-Dana line-clamp-2 text-zinc-700 dark:text-white'>طرز تهیه قهوه دمی با دستگاه اروپرس</h2>
                            <div className='flex flex-col text-left text-emerald-600 dark:text-emerald-500 text-sm ml-[18px]'>
                                <span className='text-2xl font-DanaDemiBold'>21</span>
                                <span className='text-sm'>مرداد</span>
                                <span className='text-sm'>1404</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blog
