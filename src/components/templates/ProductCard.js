import { sp } from '@/helpers/spreadNums'
import Image from 'next/image'
import React from 'react'
import { FaShoppingBag } from 'react-icons/fa'

function ProductCard({ product, variant = 'main' }) {
    const { name, price, discount, image, rate = 0 } = product

    // Main variant (desktop) - similar to ProductCardMain
    if (variant === 'main') {
        return (
            <div className='flex flex-col bg-white dark:bg-zinc-700 rounded-2xl p-2 md:p-5 shadow-md'>
                {/* Product Image */}
                <div className="relative mb-2 md:mb-5">
                    <Image
                        priority
                        src={image}
                        alt={name}
                        width={300}
                        height={300}
                        quality={100}
                        className="w-32 h-32 md:w-64 md:h-64 object-contain mx-auto"
                    />
                    {discount > 0 && (
                        <span className='block h-5 md:h-[30px] text-xs/[24px] md:text-base/[34px] absolute top-1.5 right-1.5 font-DanaDemiBold text-white dark:text-zinc-700 px-2.5 md:px-3.5 rounded-full bg-orange-300'>
                            %{discount}
                        </span>
                    )}
                </div>

                {/* Product Name */}
                <h3 className='min-h-10 md:min-h-14 font-DanaMedium line-clamp-2 text-sm md:text-xl text-zinc-700 dark:text-white'>
                    {name}
                </h3>

                {/* Product Price */}
                <div className='flex items-center gap-x-2 md:gap-x-2.5 mt-2.5 md:mt-2.5'>
                    <div className='flex items-center text-teal-600 dark:text-emerald-500'>
                        {price > 0 ? (
                            <div>
                                <span className='font-DanaDemiBold text-base md:text-xl'>
                                    {sp(price * (1 - discount / 100))}
                                </span>
                                <span className='text-xs md:text-sm tracking-tighter mr-0.5'>تومان</span>
                            </div>
                        ) : (
                            <div className='flex items-center text-red-400'>
                                <span className='font-DanaDemiBold text-base md:text-xl'>
                                    فعلا موجود نیست
                                </span>
                            </div>
                        )}
                    </div>
                    {discount > 0 && (
                        <div className='offer text-gray-400'>
                            <span className='font-Dana text-base md:text-xl'>{sp(price)}</span>
                            <span className='text-xs md:text-sm hidden lg:inline'>تومان</span>
                        </div>
                    )}
                </div>

                {/* Product Actions */}
                <div className='flex items-center justify-between mt-2.5'>
                    <div className='flex items-center justify-between mt-2 gap-x-2.5 md:gap-x-3'>
                        <span className='w-[26px] h-[26px] md:size-9 flex-center bg-gray-100 text-gray-400 hover:bg-teal-600 dark:hover:bg-emerald-500 cursor-pointer transition-all ease-in-out hover:text-white dark:bg-zinc-800 rounded-full'>
                            <svg className='size-4 md:w-6 md:h-6'>
                                <use href='#shopping'></use>
                            </svg>
                        </span>
                        <span className='block text-gray-400 hover:text-teal-600 dark:hover:text-emerald-500 cursor-pointer transition-all ease-in-out'>
                            <svg className='size-4 md:w-6 md:h-6'>
                                <use href='#arrow-left-right'></use>
                            </svg>
                        </span>
                    </div>

                    {/* Product Rating */}
                    <div className='flex items-center mt-2'>
                        <div className='flex items-center'>
                            {[...Array(5)].map((_, index) => (
                                <svg key={index} className='size-4 md:size-6 text-yellow-400 cursor-pointer'>
                                    <use href='#star'></use>
                                </svg>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    // Basket variant (mobile) - similar to ProductCardBasket
    if (variant === 'basket') {
        return (
            <div className="md:w-[350px] group flex items-center bg-white dark:bg-zinc-700 gap-x-1 md:gap-x-2.5 rounded-xl mt-5 p-5 md:p-3">
                {/* Product Image */}
                <Image
                    priority
                    src={image}
                    className="w-[90px] h-[90px] md:w-[120px] md:h-[120px] object-cover transform hover:scale-110 transition-transform duration-500"
                    width={120}
                    height={120}
                    alt={`${name}`}
                />

                {/* Product Info */}
                <div className="flex flex-col justify-between gap-y-1.5">
                    <h4 className="font-DanaMedium dark:text-white text-zinc-700 text-sm md:text-base line-clamp-2">
                        {name}
                    </h4>

                    <div className='mt-2'>
                        {/* discount */}
                        <div className="">
                            {discount > 0 && (
                                <p className="text-teal-600 dark:text-emerald-500 text-xs font-DanaMedium">
                                    {discount}% تخفیف
                                </p>
                            )}
                            <span className="text-zinc-300 dark:text-white text-xs font-DanaMedium">
                                {discount > 0 && (
                                    <span className="line-through text-gray-400 dark:text-gray-500">
                                        {price} تومان
                                    </span>
                                )}
                            </span>
                        </div>

                        {/* price */}
                        <div className="flex items-center justify-between mt-2">
                            <div className="font-DanaDemiBold text-zinc-700 dark:text-white">
                                {discount > 0 ? Math.round(price * (1 - discount / 100)) : price}
                                <span className="font-Dana text-xs md:text-sm mr-1">تومان</span>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    // Default responsive variant that automatically adapts
    return (
        <div className='md:hidden'>
            {/* Mobile version - Basket style */}
            <div className="group flex items-center bg-white dark:bg-zinc-700 gap-x-1 rounded-xl mt-5 p-5">
                <Image
                    priority
                    src={image}
                    className="w-[90px] h-[90px] object-cover transform hover:scale-110 transition-transform duration-500"
                    width={90}
                    height={90}
                    alt={`${name}`}
                />

                <div className="flex flex-col justify-between gap-y-1.5">
                    <h4 className="font-DanaMedium dark:text-white text-zinc-700 text-sm line-clamp-2">
                        {name}
                    </h4>

                    <div className='mt-2'>
                        {discount > 0 && (
                            <p className="text-teal-600 dark:text-emerald-500 text-xs font-DanaMedium">
                                {discount}% تخفیف
                            </p>
                        )}
                        <div className="flex items-center justify-between mt-2">
                            <div className="font-DanaDemiBold text-zinc-700 dark:text-white">
                                {discount > 0 ? Math.round(price * (1 - discount / 100)) : price}
                                <span className="font-Dana text-xs mr-1">تومان</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
