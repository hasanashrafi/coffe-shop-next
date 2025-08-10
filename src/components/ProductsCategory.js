import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function ProductsCategory() {
    return (
        <section className='flex flex-wrap items-center justify-center gap-y-6 gap-x-[29px] md:gap-[65px] mb-10 md:mb-20'>
            <Link href="/" className=' w-25 md:w-50 text-center '>
                <Image
                    src="/images/categories/category1.png"
                    alt='category'
                    width={100}
                    height={100}
                    loading='lazy'
                    className='mx-auto' />
                <span className='inline-block mt-1.5 md:mt-2.5 font-DanaDemiBold text-zinc-700 dark:text-white text-sm md:text-xl'>
                    لوازم جانبی و تجهیزات
                </span>
            </Link>
            <Link href="/" className='w-25 md:w-50 text-center '>
                <Image
                    src="/images/categories/category2.png"
                    alt='category'
                    width={100}
                    height={100}
                    loading='lazy'
                    className='mx-auto' />
                <span className='inline-block mt-1.5 md:mt-2.5 font-DanaDemiBold text-zinc-700 dark:text-white text-sm md:text-xl'>
                    اسپرسو ساز
                </span>
            </Link>
            <Link href="/" className='w-25 md:w-50 text-center '>
                <Image
                    src="/images/categories/category3.png"
                    alt='category'
                    width={100}
                    height={100}
                    loading='lazy'
                    className='mx-auto' />
                <span className='inline-block mt-1.5 md:mt-2.5 font-DanaDemiBold text-zinc-700 dark:text-white text-sm md:text-xl'>
                    پک تستر قهوه
                </span>
            </Link>
            <Link href="/" className='w-25 md:w-50 text-center '>
                <Image
                    src="/images/categories/category4.png"
                    alt='category'
                    width={100}
                    height={100}
                    loading='lazy'
                    className='mx-auto' />
                <span className='inline-block mt-1.5 md:mt-2.5 font-DanaDemiBold text-zinc-700 dark:text-white text-sm md:text-xl'>قهوه و اسپرسو</span>
            </Link>
            <Link href="/" className='w-25 md:w-50 text-center '>
                <Image
                    src="/images/categories/category5.png"
                    alt='category'
                    width={100}
                    height={100}
                    loading='lazy'
                    className='mx-auto' />
                <span className='inline-block mt-1.5 md:mt-2.5 font-DanaDemiBold text-zinc-700 dark:text-white text-sm md:text-xl'>
                    قهوه ترک
                </span>
            </Link>
        </section>
    )
}

export default ProductsCategory


