import { sp } from '@/helpers/spreadNums'
import Image from 'next/image'
import React from 'react'


function ProductCardMain(product) {
    const { name, price, discount, image } = product

    return (
        <div className='flex flex-col justify-around bg-white dark:bg-zinc-700 rounded-2xl px-2 md:pt-4 shadow-md'>
            <div className="relative mb-2 md:mb-5">
                {/* Product Image */}
                <Image
                    priority
                    src={image}
                    className=" w-32 md:w-auto mx-auto "
                    width={120}
                    height={120}
                    alt={`${name}`}
                />
                <span className='block h-5 md:h-[30px]  text-xs/[24px] md:text-base/[34px] absolute top-1.5 right-1.5 font-DanaDemiBold text-white dark:text-zinc-700 px-2.5 md:px-3.5 rounded-full bg-orange-300'>%{discount}</span>
                {/* Product Info */}
            </div>
            <h5 className='font-DanaMedium line-clamp-2 text-sm md:text-xl text-zinc-700 dark:text-white '>
                {name}
            </h5>

            <div className='flex items-center gap-x-2 md:gap-x-2.5 mt-1.5 md:mt-2.5'>
                <div className='flex items-center text-teal-600 dark:text-emerald-500'>
                    <span className='font-DanaDemiBold text-base md:text-xl '>
                        {sp(price * (1 - discount / 100))}
                    </span>
                    <span className='text-xs md:text-sm tracking-tighter mr-0.5'>تومان</span>
                </div>
                <div className='offer text-gray-400 '>
                    <span className='font-Dana text-base md:text-xl '>{sp(price)}</span>
                    <span className='text-xs md:text-sm hidden lg:inline '>تومان</span>
                </div>
            </div>


            <div className='flex items-center justify-between mt-2.5 '>
                <div className='flex items-center justify-between mt-2 gap-x-2.5 md:gap-x-3'>
                    <span className='w-[26px] h-[26px] md:size-9 flex-center bg-gray-100 text-gray-400 hover:bg-teal-600 dark:hover:bg-emerald-500 cursor-pointer transition-all ease-in-out hover:text-white dark:bg-zinc-800 rounded-full  '>
                        <svg className='w-4 h-4 md:w-6 md:h-6'>
                            <use href='#shopping'></use>
                        </svg>
                    </span>
                    <span className='block text-gray-400 hover:text-teal-600 dark:hover:text-emerald-500 cursor-pointer transition-all ease-in-out '>
                        <svg className=' w-4 h-4 md:w-6 md:h-6'>
                            <use href='#arrow-left'></use>
                        </svg>
                    </span>
                </div>

                <div className='flex items-center gap-x-1 child:text-yellow-400 '>
                    <span>
                        <svg className='size-6 text-gray-400'>
                            <use href='#star'></use>
                        </svg>
                    </span>
                    <svg className='size-4 md:size-6'>
                        <use href='#star'></use>
                    </svg>
                    <svg className='size-4 md:size-6'>
                        <use href='#star'></use>
                    </svg>
                    <svg className='size-4 md:size-6'>
                        <use href='#star'></use>
                    </svg>
                    <svg className='size-4 md:size-6'>
                        <use href='#star'></use>
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default ProductCardMain
