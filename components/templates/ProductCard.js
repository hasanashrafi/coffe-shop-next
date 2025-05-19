import Image from 'next/image'
import React from 'react'



function ProductCard(product) {
const {name,price,discount,image} = product
    return (
        <div className=" flex  gap-x-2.5">
            <img
                src={image} 
                className="w-[120px] h-[120px]"
                width={100}
                height={100}
               
                alt="product"
            />
            <div className="flex flex-col justify-between">
                <p className="font-DanaMedium dark:text-white text-base text-zinc-700">{name}</p>
                <div className="">
                    {discount > 0 && (
                        <span className="tracking-tighter text-teal-600 dark:text-emerald-400 text-sm">
                            {discount} تومان  تخفیف
                        </span>
                    )}
                    <div className="font-DanaDemiBold text-zinc-700 dark:text-white">
                        {price}
                        <span className="font-Dana text-xs"> تومان</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
