import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function ContactUs() {
    return (
        <section className='mb-16 md:mb-28'>
            <div className='container mx-auto max-w-7xl'>
                <div className='flex flex-col lg:flex-row items-center lg:items-start gap-y-8 lg:gap-x-5 '>
                    <Image
                        width={296}
                        height={296}
                        alt='contactUs'
                        priority
                        quality={100}
                        src="/images/contact.png"
                        className=' md:w-[296px] shrink-0 ' />
                    <div className=' text-zinc-700 dark:text-white'>
                        <h3 className='font-MorabbaMedium text-2xl md:text-5xl mb-0.5 md:mb-1.5'>
                            یکی از بهترین قهوه ها!
                        </h3>
                        <span className='inline-block font-MorabbaLight text-3xl/48'>
                            کیفیت قهوه را از ما بخواهید...
                        </span>
                    <div className='my-5 md:my-6 child:inline-block child:size-1 child:bg-zinc-700 child:rounded-full child:dark:bg-gray-400 flex items-center gap-x-2.5 '>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <p className='tex-base md:text-xl'>
                        فضای گرم و دنج ما را احساس کنید، جایی که همه می توانند قهوه معطری پیدا کنند و دسرهای خوشمزه ما را که کاملاً با قهوه داغ همراه شده است، امتحان کنند. فضای داخلی شیک و کارکنان خوش برخورد ما روز شما را می سازد!
                    </p>
                    <Link href="/" 
                    className='inline-flex items-center justify-center gap-x-2 px-6 mt-5 md:mt-6 h-[50px] md:h-[60px] border md:border-2 border-orange-300 rounded-full text-xl tracking-tightest text-orange-300 '>
                    <svg className='size-5 md:size-8'>
                        <use href='#phoneOut' />
                    </svg>
                        ثبت سفارش تلفنی
                    </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactUs