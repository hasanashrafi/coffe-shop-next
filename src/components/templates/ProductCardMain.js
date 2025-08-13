import { sp } from '@/helpers/spreadNums'
import Image from 'next/image'
import React from 'react'


function ProductCardMain(product) {
    const { name, price, discount, image, rate = 0 } = product


    return (
        <div className='flex flex-col bg-white dark:bg-zinc-700 rounded-2xl p-2 md:p-5 shadow-md'>
            {/* Product Image */}
            <div className="relative mb-2 md:mb-5 ">
                <Image
                    priority
                    src={image}
                    alt={name}
                    width={300}
                    height={300}
                    quality={100}
                    className="w-32 h-32 md:w-64 md:h-64 object-contain mx-auto" // 128×128 on small screens, 192×192 on md+
                />
                {
                    discount > 0 && (
                        <span className='block h-5 md:h-[30px]  text-xs/[24px] md:text-base/[34px] absolute top-1.5 right-1.5 font-DanaDemiBold text-white dark:text-zinc-700 px-2.5 md:px-3.5 rounded-full bg-orange-300'>
                            %{discount}
                        </span>
                    )
                }
            </div>

            {/* Product Name */}
            <h3 className='min-h-10  md:min-h-14 font-DanaMedium line-clamp-2 text-sm md:text-xl text-zinc-700 dark:text-white '>
                {name}
            </h3>

            {/* Product Price */}
            <div className='flex items-center gap-x-2 md:gap-x-2.5 mt-2.5 md:mt-2.5'>
                <div className='flex items-center text-teal-600 dark:text-emerald-500'>
                    {price > 0 ? (
                        <div>
                            <span className='font-DanaDemiBold text-base md:text-xl '>
                                {sp(price * (1 - discount / 100))}
                            </span>
                            <span className='text-xs md:text-sm tracking-tighter mr-0.5'>تومان</span>
                        </div>
                    ) : (
                        <div className='flex items-center text-red-400'>
                            <span className='font-DanaDemiBold text-base md:text-xl '>
                                فعلا موجود نیست
                            </span>
                        </div>
                    )}
                </div>
                {discount > 0 && (
                    <div className='offer text-gray-400 '>
                        <span className='font-Dana text-base md:text-xl '>{sp(price)}</span>
                        <span className='text-xs md:text-sm hidden lg:inline '>تومان</span>
                    </div>)}
            </div>

            {/* Product Actions */}
            <div className='flex items-center justify-between mt-2.5 '>
                <div className=' flex items-center justify-between mt-2 gap-x-2.5 md:gap-x-3'>
                    <span className='w-[26px] h-[26px] md:size-9 flex-center bg-gray-100 text-gray-400 hover:bg-teal-600 dark:hover:bg-emerald-500 cursor-pointer transition-all ease-in-out hover:text-white dark:bg-zinc-800 rounded-full  '>
                        <svg className='size-4 md:w-6 md:h-6'>
                            <use href='#shopping'></use>
                        </svg>
                    </span>
                    <span className='block text-gray-400 hover:text-teal-600 dark:hover:text-emerald-500 cursor-pointer transition-all ease-in-out '>
                        <svg className=' size-4 md:w-6 md:h-6'>
                            <use href='#arrow-left'></use>
                        </svg>
                    </span>
                </div>

                {/* Product Rating */}
                <div className='flex items-center mt-2'>
                    <div className='flex items-center'>
                    
                        <svg className='size-4 md:size-6 text-yellow-400 cursor-pointer'>
                            <use href='#star'></use>
                        </svg> 
                        <svg className='size-4 md:size-6 text-yellow-400 cursor-pointer'>
                            <use href='#star'></use>
                        </svg> 
                        <svg className='size-4 md:size-6 text-yellow-400 cursor-pointer'>
                            <use href='#star'></use>
                        </svg>
                         <svg className='size-4 md:size-6 text-yellow-400 cursor-pointer'>
                            <use href='#star'></use>
                        </svg> 
                        <svg className='size-4 md:size-6 text-yellow-400 cursor-pointer'>
                            <use href='#star'></use>
                        </svg>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ProductCardMain