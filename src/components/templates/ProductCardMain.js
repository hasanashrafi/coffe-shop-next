import { sp } from '@/helpers/spreadNums'
import Image from 'next/image'
import React from 'react'
import { FaShoppingBag } from 'react-icons/fa'

function ProductCardMain(product) {
    const { name, price, discount, image } = product

    return (
        <div className=' bg-white dark:bg-zinc-700 rounded-2xl p-5 shadow-md'>
            <div className="relative mb-5">
                {/* Product Image */}
                <Image
                    priority
                    src={image}
                    className=" w-[120px] h-[120px] mx-auto md:w-[120px] md:h-[120px]  object-cover transform hover:scale-110 transition-transform duration-500"
                    width={120}
                    height={120}
                    alt={`${name}`}
                />
                <span className='block h-[30px] leading-[34px] absolute top-1.5 right-1.5 font-DanaDemiBold text-white dark:text-zinc-700 px-3.5 rounded-full bg-orange-300'>%{discount}</span>
                {/* Product Info */}
            </div>

            <h5 className='font-DanaMedium line-clamp-2 text-xl text-zinc-700 dark:text-white '>
                {name}
            </h5>
            <div className='flex items-center gap-x-2.5 mt-2.5'>
                <div className='flex items-center text-teal-600 dark:text-emerald-500'>
                    <span className='font-DanaDemiBold text-xl '>
                        {sp(price * (1 - discount/100))}
                    </span>
                    <span className='text-sm tracking-tighter mr-0.5'>تومان</span>
                </div>
                <div className='offer text-gray-400 '>
                    <span className='font-Dana text-xl '>{sp(price)}</span>
                    <span className='text-sm '>تومان</span>

                </div>
            </div>
        </div>
    )
}

export default ProductCardMain
