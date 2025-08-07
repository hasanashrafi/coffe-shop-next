import React from 'react'
import Link from 'next/link'
import ProductCardMain from './templates/ProductCardMain'
import { useProducts } from '@/hooks/useProducts';
import Loader from './modules/Loader';

function ProductsPage() {
  const { products, loading, error } = useProducts();

  if (loading) return <Loader />
  if (error) return <div className='h-screen flex items-center justify-center bg-red-400 text-3xl'>Error: {error}</div>

  return (
    <section className="p-2.5 md:p-5 font-Dana products pt-8 md:pt-24 lg:pt-48 md:bg-products-hero md:dark:bg-[url(/images/products-bg.png)]  bg-no-repeat ">
      <div className="container max-w-7xl">
        {/* section head */}
        <div className="flex items-end justify-between mb-5 md:mb-12">
          <div className="font-MorabbaMedium ">
            <h3 className="text-2xl md:text-5xl text-zinc-700 dark:text-white">جدیدترین محصولات</h3>
            <p className="text-lg md:text-3xl font-MorabbaLight mt-0.5 md:mt-1.5 text-zinc-700 dark:text-white">فراوری شده از دانه های قهوه</p>
          </div>
          <Link href="/products" className="flex items-center text-base md:text-xl md:gap-x-1 text-orange-300 transition-colors md:hover:bg-orange-300/20 h-10 pr-3 pl-1 rounded-md tracking-tightest">
            <span className="hidden md:inline-block">
              مشاهده همه محصولات
            </span>
            <span className="md:hidden">
              مشاهده همه
            </span>
            <svg className="size-5 ">
              <use href="#chevron-left"></use>
            </svg>
          </Link>
        </div>

        {/* section body */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 lg:gap-5 child:h-[273px] md:child:h-[367px] lg:child:h-[467px]  ">
          {products.length && products.map((product) => (
            <ProductCardMain key={product._id} {...product} />
          ))}
        </div>
      </div>
    </section>

  )
}

export default ProductsPage