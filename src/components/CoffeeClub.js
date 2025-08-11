import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function CoffeeClub() {
  return (
    <section className='mb-8 md:mb-20 '>
      <div className='container max-w-7xl mx-auto'>

        <div className='flex items-center flex-wrap px-3 md:px-11 h-36 rounded-2xl text-white bg-gradient-to-r from-emerald-500 to-emerald-600'>
          {/* text coffee club */}
          <div className='flex items-center gap-x-3 md:gap-x-6 '>
            <Image
              src="/images/club/diamond.png"
              width={110}
              height={100}
              priority
              alt='diamond'
              quality={100}
              className='w-[87px] md:w-[110px] '
            />
            <div className=''>
              <h5 className='font-MorabbaBold text-2xl md:text-5xl  mb-2'>
                کافی کلاب
              </h5>
              <p className='font-MorabbaLight text-lg md:text-2xl'>میدونستی با امتیاز هات میتونی قهوه بگیری</p>
            </div>
          </div>
          {/* services */}
          <div className=' mr-24'>
            <div className='flex items-center gap-x-2 md:gap-x-5'>
              <div className='w-[72px] h-[72px] md:w-[98px] md:h-[98px] text-center bg-white text-emerald-600 rounded-2xl py-1.5 md:pt-5 md:pb-1'>
                <svg className='size-10 md:size-12 mb-1 md:mb-1.5 mx-auto'>
                  <use href='#activity' />
                </svg>
                <span className='text-xs md:text-sm'>
                  چرخ و بخت
                </span>
              </div>

              <div className='w-[72px] h-[72px] md:w-[98px] md:h-[98px] text-center bg-white text-emerald-600 rounded-2xl py-1.5 md:pt-5 md:pb-1'>
                <svg className='size-10 md:size-12 mb-1 md:mb-1.5 mx-auto'>
                  <use href='#discovery' />
                </svg>
                <span className='text-xs md:text-sm'>
                  ماموریت ها
                </span>
              </div>

              <div className='w-[72px] h-[72px] md:w-[98px] md:h-[98px] text-center bg-white text-emerald-600 rounded-2xl py-1.5 md:pt-5 md:pb-1'>
                <svg className='size-10 md:size-12 mb-1 md:mb-1.5 mx-auto'>
                  <use href='#ticket' />
                </svg>
                <span className='text-xs md:text-sm'>
                  جایزه ها
                </span>

              </div>
            </div>
          </div>

          <div className=''>
            <span className='inline-block md:mb-1 font-DanaDemiBold text-2xl md:text-3xl'>
              542
            </span>
            <span className='text-xs md:text-sm'>
              امتیــــاز شما
            </span>
            <Link href='/' className='w-[90px] h-[26px] md:w-[110px] md:h-8 font-DanaMedium text-xs md:text-sm flex items-center  rounded-full bg-gradient-to-r from-orange-200 to-orange-300 '>
              دریافت جایزه
              <svg className='size-5 md:size-6 text-white'>
                <use href='#chevron-left' />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CoffeeClub
