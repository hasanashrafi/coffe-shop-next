import Link from 'next/link'
import React from 'react'

function CategoryBanner() {
    return (
        <section className='mt-8 mb-10 md:my-20'>
            <div className='container max-w-7xl '>
               <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
              
               <Link href='/products' className='bg-cover flex flex-col justify-center items-start pr-7 md:pr-12  bg-category-right rounded-2xl  h-[142px] md:h-[248px] '>
                    <span className='font-DanaDemiBold text-xl md:text-4xl/6 mb-4 md:mb-7  text-white'>
                        انواع قهوه
                    </span>
                    <p className='md:text-xl/6 md:font-DanaMedium mt-0.5 md:mt-1.5  text-white'>
                        ترکیبی و تک خاستگاه
                    </p>
                </Link>

                <Link href='/' className='bg-cover flex flex-col justify-center items-start pr-7 md:pr-12 bg-category-left  rounded-2xl  h-[142px] md:h-[248px] '>
                    <span className='font-DanaDemiBold text-xl/6 md:text-4xl/6 mb-4 md:mb-7  text-white'>
                        پودر های فوری
                    </span>
                    <p className=' md:text-xl/6 md:font-DanaMedium mt-0.5 md:mt-1.5  text-white'>
                        نسکافه ، هات چاکلت ، ماسالا
                    </p>
                </Link>

               </div>
            </div>
        </section>
    )
}

export default CategoryBanner
