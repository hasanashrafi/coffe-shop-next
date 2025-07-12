import Image from 'next/image'
import React from 'react'
import { FaShoppingBag } from 'react-icons/fa'

function ProductCardMain(product) {
  const { name, price, discount, image } = product
  return (
    <div className='h-[200px] md:h-[460px] bg-white dark:bg-zinc-700 rounded-xl'>
      <div className="md:w-[350px] group flex items-center bg-white dark:bg-zinc-700 gap-x-1 md:gap-x-2.5 rounded-xl mt-5 p-5 md:p-3  ">
            {/* Product Image */}
            <Image
                priority
                src={image}
                className=" w-[90px] h-[90px] md:w-[120px] md:h-[120px]  object-cover transform hover:scale-110 transition-transform duration-500"
                width={120}
                height={120}
                alt={`${name}`}
            />

            {/* Product Info */}
            <div className=" flex flex-col justify-between  gap-y-1.5">
                <h4 className="font-DanaMedium dark:text-white text-zinc-700 text-sm md:text-base line-clamp-2 ">
                    {name}
                </h4>

                <div className='mt-2'>
                    {/* discount */}
                    <div className="">
                        {discount > 0 && (
                            <p className="text-teal-600 dark:text-emerald-500  text-xs font-DanaMedium">
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
                        <div className="font-DanaDemiBold text-zinc-700 dark:text-white ">
                            {discount > 0 ? Math.round(price * (1 - discount / 100)) : price}
                            <span className="font-Dana text-xs md:text-sm mr-1">تومان</span>
                        </div>
                        <button className="hidden md:inline-block bg-teal-600 dark:bg-teal-500 text-white dark:text-white px-2 py-1 rounded-lg text-lg md:text-sm  transition-colors hover:bg-teal-700 dark:hover:bg-teal-600">
                             <FaShoppingBag className='text-xl '/>  
                        </button>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default ProductCardMain
