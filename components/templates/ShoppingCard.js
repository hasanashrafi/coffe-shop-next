import React from 'react'
import ProductCard from './ProductCard'

function ShoppingCard() {
    
    return (
        <div className='invisible group-hover:visible opacity-0 group-hover:opacity-100 left-0 mt-2 top-full absolute z-50 w-[400px] leading-[56px] bg-white drop-shadow-lg p-6 rounded-2xl border-t-4 border-t-yellow-500 shadow-dark overflow-hidden tracking-normal transition-all ease-in-out dark:bg-zinc-700'>
            {/* cart header */}
            <div className='flex justify-between items-center font-DanaMedium text-xs'>
                <span className='text-gray-400'>
                    1 مورد
                </span>
                <a href='#' className='text-orange-300 gap-x-2 w-fit flex items-center'>
                    مشاهده سبد خرید
                    <svg className="size-4">
                        <use href="#arrow"></use>
                    </svg>
                </a>
            </div>

            {/* products */}
            <div className='pb-1 divide-y divide-gray-100 dark:divide-white/10 child:py-5 border-b-2 border-b-gray-300 dark:border-b-white/10'>
                <ProductCard />
                <ProductCard />
            </div>

            {/* cart footer */}
            <div className='flex justify-between mt-4 items-center'>
                <div className='flex flex-col items-center justify-center text-zinc-700 dark:text-gray-300'>
                    <p className='font-Dana text-sm tracking-tighter'>مبلغ قابل پرداخت</p>
                    <p className='font-DanaDemiBold text-md dark:text-white'>
                        350.000
                        <span className='text-sm mr-1'>تومان</span>
                    </p>
                </div>
                <button className='bg-teal-600 text-white rounded-2xl px-4 h-12 text-sm'>ثبت سفارش</button>

            </div>
        </div>
    )
}

export default ShoppingCard