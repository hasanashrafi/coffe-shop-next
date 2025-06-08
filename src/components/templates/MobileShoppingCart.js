import Link from 'next/link'
import React from 'react'
import ProductCard from './ProductCard';
import sampleProducts from '@/data/data';

function MobileShoppingCard({ mobileShoppingCard, setMobileShoppingCard }) {



    return (
        <>
            <div
                className={`font-Dana fixed flex flex-col justify-between  top-0 bottom-0 ${mobileShoppingCard ? 'left-0' : '-left-64'} transition-all ease-in-out w-64  px-4 min-h-screen bg-white dark:bg-zinc-700 shadow-lg z-20 scroll-smooth overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]`}
            >
                {/* header cart */}
                <div className="flex justify-between items-center py-4  mb-4 border-b border-b-gray-300 dark:border-b-white/10">
                    <svg
                        className="size-5 dark:text-white text-zinc-700 font-DanaMedium"
                        onClick={() =>
                            setMobileShoppingCard(
                                (mobileShoppingCard) => !mobileShoppingCard
                            )
                        }
                    >
                        <use href="#close"></use>
                    </svg>
                    <p className="dark:text-white">
                        سبد خرید
                    </p>
                </div>

                {/* body cart */}
                <div className={`divide-y rounded-none divide-gray-300   child:rounded-none  ${sampleProducts.length > 3 ? 'max-h-full overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]' : ''
                    }`}>
                    {sampleProducts.map(product => (
                        <ProductCard key={product.id} {...product} />
                    ))}
                </div>

                {/* footer cart  */}
                <div className="flex items-end gap-x-4 justify-between mt-auto mb-8 ">
                    <Link
                        href="/"
                        className="w-28 flex items-center justify-center h-11 text-white bg-teal-700 dark:bg-teal-600 rounded-xl "
                    >
                        ثبت سفارش
                    </Link>
                    <div className="flex flex-col items-center justify-center text-zinc-700 dark:text-gray-300">
                        <p className="font-DanaMedium text-xs tracking-tighter text-gray-300">
                            مبلغ قابل پرداخت
                        </p>
                        <p className="font-DanaDemiBold text-md dark:text-white">
                            350.000
                            <span className="text-xs mr-1">تومان</span>
                        </p>
                    </div>
                </div>

            </div>

            {mobileShoppingCard && (
                <div
                    onClick={() =>
                        setMobileShoppingCard((mobileShoppingCard) => !mobileShoppingCard)
                    }
                    className=" overly fixed md:hidden transition-all inset-0 bg-black/40 w-full h-full z-10"
                ></div>
            )}
        </>
    );
}

export default MobileShoppingCard



