import Link from 'next/link'
import React from 'react'

function Blog() {
    return (
        <section className='mb-8 md:mb-28'>
            <div className='container max-w-7xl'>
           {/* section head */}
                <div className="flex items-end justify-between mb-5 md:mb-12">
                    <div className="font-MorabbaMedium ">
                        <h3 className="text-2xl md:text-5xl text-zinc-700 dark:text-white">
                            مطالب خواندنی
                        </h3>
                    </div>
                    <Link href="/products" className="flex items-center text-base md:text-xl md:gap-x-1 text-orange-300 transition-colors md:hover:bg-orange-300/20 h-10 pr-3 pl-1 rounded-md tracking-tightest">
                        <span className="hidden md:inline-block">
                            مشاهده همه مطالب
                        </span>
                        <span className="md:hidden">
                            مشاهده همه
                        </span>
                        <svg className="size-5 ">
                            <use href="#chevron-left"></use>
                        </svg>
                    </Link>
                </div>
                {/* section content */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                    
                </div>
            </div>
        </section>
    )
}

export default Blog
