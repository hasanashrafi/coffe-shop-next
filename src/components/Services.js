import React from 'react'

function Services() {
    return (
        <section className='services mb-12 md:mb-36 '>
            <div className='container max-w-7xl'>

                <div className='flex flex-wrap child:text-center lg:child:text-right child:w-1/2 lg:child:w-auto gap-y-11 items-center justify-between text-zinc-700 dark:text-white'>

                    <div className='flex items-center flex-col md:flex-row md:gap-x-4 gap-y-5 '>
                        <div>
                            <svg className='dark:hidden w-[66px] h-[73px] '>
                                <use href='#support' />
                            </svg> 
                            <svg className='hidden dark:inline-block w-[66px] h-[73px] '>
                                <use href='#support-dark' />
                            </svg>
                        </div>
                        <div className=''>
                            <h5 className='font-DanaDemiBold text-sm md:text-lg/6 mb-1 md:mb-3.5'>
                                پشتیبانی شبانه روزی
                            </h5>
                            <span className='text-xs md:text-sm/6'>
                                7 روز هفته، 24 ساعته
                            </span>
                        </div>
                    </div>

                    <div className='flex items-center flex-col md:flex-row md:gap-x-4 gap-y-5 '>
                        <div>
                            <svg className='dark:hidden w-[108px] h-[73px] '>
                                <use href='#express-delivery' />
                            </svg>
                            <svg className='hidden dark:inline-block w-[108px] h-[73px] '>
                                <use href='#express-delivery-dark' />
                            </svg>
                        </div>
                        <div className=''>
                            <h5 className='font-DanaDemiBold text-sm md:text-lg/6 mb-1 md:mb-3.5'>
                                امکان تحویل اکسپرس
                            </h5>
                            <span className='text-xs md:text-sm/6'>
                                ارسال بسته با سرعت باد                            </span>
                        </div>
                    </div>

                    <div className='flex items-center flex-col md:flex-row md:gap-x-4 gap-y-5 '>
                        <div>
                            <svg className='dark:hidden w-[66px] h-[73px] '>
                                <use href='#coffee' />
                            </svg>
                            <svg className='hidden dark:inline-block w-[66px] h-[73px] '>
                                <use href='#coffee-dark' />
                            </svg>
                        </div>
                        <div className=''>
                            <h5 className='font-DanaDemiBold text-sm md:text-lg/6 mb-1 md:mb-3.5'>
                                رست اختصاصی                             </h5>
                            <span className='text-xs md:text-sm/6'>
                                تازه برشته شده و با کیفیت
                            </span>
                        </div>
                    </div>

                    <div className='flex items-center flex-col md:flex-row md:gap-x-4 gap-y-5 '>
                        <div>
                            <svg className='dark:hidden w-[66px] h-[73px] '>
                                <use href='#pitcher' />
                            </svg>
                            <svg className='hidden dark:inline-block w-[66px] h-[73px] '>
                                <use href='#pitcher-dark' />
                            </svg>
                        </div>
                        <div className=''>
                            <h5 className='font-DanaDemiBold text-sm md:text-lg/6 mb-1 md:mb-3.5'>
                                اکسسوری قهوه                          
                                  </h5>
                            <span className='text-xs md:text-sm/6'>
                                وسایل و ادوات دم آوری
                            </span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Services