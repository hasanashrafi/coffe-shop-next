import React from 'react'

function Footer() {
    return (
        <footer className='relative bg-zinc-700 py-8 md:pb-11 md:pt-[62px]  font-Dana'>
            {/* curve */}
            <svg className="text-white dark:text-zinc-800 hidden md:inline-block absolute w-[100px] h-[22px] top-0 right-0 left-0 mx-auto ">
                <use href="#footer"> </use>
            </svg>

            {/* arrow rings */}
            <div className=" absolute left-0 right-0 top-0 mx-auto -translate-y-2/4 w-[30px] h-[30px] hidden md:flex items-center justify-center rounded-full border-2 border-gray-300">
                <svg className="rotate-180 size-5 mx-auto text-zinc-700 dark:text-white">
                    <use href="#chevron-down"></use>
                </svg>
            </div>

            {/* footer content */}
            <div className='flex justify-between text-gray-300 px-4 md:px-0 w-[98%] lg:w-[90%] mx-auto h-96'>
                <div>
                    <div className=' flex items-center   gap-x-5 mb-6 md:mb-4.5'>
                        <svg className=' text-gray-300 w-[57px] h-[54px] '>
                            <use href='#mobile-logo'></use>
                        </svg>
                        <svg className='text-gray-300 w-[138px] h-[54px]'>
                            <use href='#logo-type'></use>
                        </svg>
                    </div>
                    <p className='text-lg md:text-xl/[48px] max-w-[606px]'>
                        ما برآنیم تا با پیشرو بودن در فرایند تولید، نوع و کیفیت محصول، خدمات و توزیع،الگویی برای تولیدکنندگان ایرانی باشیم و به مرجع فرهنگ قهوه در ایران تبدیل شویم. می پنداریم که نظر مردم ایران و منطقه باید نسبت به کالای ایرانی بهبود یابد و در این راستا با اشتیاق می کوشیم.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer