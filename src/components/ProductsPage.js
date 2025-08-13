'use client'
import React, { useEffect } from 'react'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import ProductCardMain from './templates/ProductCardMain'
import Loader from './modules/Loader';
import { fetchProducts } from '@/redux/features/products/productsSlice';

function ProductsPage() {
  const dispatch = useDispatch();

  // Use inline selectors to debug the issue
  const products = useSelector((state) => {
    return state?.products?.products || [];
  });
  const loading = useSelector((state) => state?.products?.loading || false);
  const error = useSelector((state) => state?.products?.error || null);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  console.log('ProductsPage render - products:', products, 'loading:', loading, 'error:', error);

  // Safety check - if Redux state is not ready, show loading
  if (!products || products === undefined) {
    return <Loader />;
  }

  if (loading) return <Loader />
  if (error) return <div className='h-screen flex items-center justify-center bg-red-400 text-3xl'>Error: {error}</div>

  return (
    <section className="p-2.5 md:p-5 font-Dana products pt-8 md:pt-24 lg:pt-48 md:bg-products-hero md:dark:bg-[url(/images/products-bg.png)]  bg-no-repeat ">
      <div className="container max-w-7xl">
        {/* section head */}
        <div className="flex items-end justify-between mb-5 md:mb-12">
          <div>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-MorabbaBold text-zinc-700 dark:text-white mb-2 md:mb-4">
              محصولات
            </h2>
            <p className="text-sm md:text-base text-zinc-500 dark:text-zinc-400">
              تمام محصولات ما را مشاهده کنید
            </p>
          </div>
          <Link href="/" className="text-sm md:text-base text-yellow-500 hover:text-yellow-600 transition-colors">
            بازگشت به خانه
          </Link>
        </div>

        {/* products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {products.map((product, index) => (
            <ProductCardMain key={product.id || `product-${index}`} {...product} />
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