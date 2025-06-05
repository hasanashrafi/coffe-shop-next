import Link from 'next/link'
import React from 'react'

function MobileShoppingCard({mobileShoppingCard,setMobileShoppingCard}) {

  return (
    <>
                    <div className={`font-Dana fixed top-0 bottom-0 left-0 transition-all ease-in-out w-64 pt-3 px-4 min-h-screen bg-white dark:bg-zinc-700 shadow-lg z-20 scroll-smooth overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]`}>
                        <div className='flex items-center justify-between'>
                            <svg className='size-5 dark:text-white text-zinc-600'
                                onClick={() => setMobileShoppingCard(mobileShoppingCard => !mobileShoppingCard)}>
                                <use href='#close'></use>
                            </svg>
                            <p>سبد خرید</p>
                        </div>

                        {/* footer mobile menu */}
                        <div className='space-y-6 pt-8 mt-8 px-2.5 border-t border-t-gray-100 dark:border-t-white/10'>
                            <Link href="/" className='inline-flex  items-center gap-x-2 text-orange-300'>
                                <svg className='size-5 '>
                                    <use href='#login'></use>
                                </svg>
                                ثبت نام | ورود
                            </Link>
                        

                        </div>
                    </div>
                
            

            {
                mobileShoppingCard && (
                    <div onClick={() => setMobileShoppingCard(mobileShoppingCard => !mobileShoppingCard)}
                        className=' overly fixed md:hidden transition-all inset-0 bg-black/40 w-full h-full z-10'>
                    </div>
                )
            }
    </>
  )
}

export default MobileShoppingCard
