'use client'
import React, { useEffect } from 'react'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import ProductCard from './templates/ProductCard'
import Loader from './modules/Loader';
import { fetchProducts } from '@/redux/features/products/productsSlice';

function ProductsPage() {
  const dispatch = useDispatch();

  // Use inline selectors to debug the issue
  const products = useSelector((state) => {
    console.log('Redux state:', state);
    return state?.products?.products || [];
  });
  const loading = useSelector((state) => state?.products?.loading || false);
  const error = useSelector((state) => state?.products?.error || null);

  useEffect(() => {
    console.log('Dispatching fetchProducts');
    dispatch(fetchProducts());
  }, [dispatch]);

  console.log('ProductsPage render - products:', products, 'loading:', loading, 'error:', error);

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

        {/* products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {products.map((product, index) => (
            <ProductCard key={product.id || `product-${index}`} product={product} variant="main" />
          ))}
        </div>

        {products.length === 0 && (
          <div className="text-center py-20 text-zinc-500">
            هیچ محصولی یافت نشد
          </div>
        )}
      </div>
    </section>
  )
}

export default ProductsPage