// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import React, { useRef, useState, useEffect } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import { useProducts } from '@/hooks/useProducts';
import ProductCardMain from './templates/ProductCardMain';
import { getBestSellingProducts } from '@/helpers/filterProducts';

function BestSelling() {
  const swiperRef = useRef(null);
  const { products, loading, error } = useProducts();
  const [bestSellingProducts, setBestSellingProducts] = useState([]);

  useEffect(() => {
    if (products && products.length > 0) {
      const bestSellers = getBestSellingProducts(products, 8);
      setBestSellingProducts(bestSellers);
    }
  }, [products]);

  const handlePrevSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  if (loading) {
    return (
      <section>
        <div className='container mx-auto max-w-7xl'>
          <div className="flex items-center justify-center h-64">
            <div className="text-lg text-zinc-700 dark:text-white">در حال بارگذاری محصولات...</div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section>
        <div className='container mx-auto max-w-7xl'>
          <div className="flex items-center justify-center h-64">
            <div className="text-lg ">خطا در بارگذاری محصولات</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className='mb-9 md:mb-20 '>
      <div className='container max-w-7xl mx-auto'>
        <div className="flex items-end justify-between mb-5 md:mb-12">
          <div className="font-MorabbaMedium ">
            <h3 className="text-2xl md:text-5xl text-zinc-700 dark:text-white">
              محصولات پرفروش
            </h3>
            <p className="text-lg md:text-3xl font-MorabbaLight mt-0.5 md:mt-1.5 text-zinc-700 dark:text-white">
              پیشنهاد قهوه خورها...
            </p>
          </div>
          <div className='flex gap-x-3 md:gap-x-[18px]'>
            <span onClick={handleNextSlide} className='flex-center size-9 md:size-10 cursor-pointer transition-all hover:bg-gray-300 dark:hover:bg-white dark:hover:text-zinc-700 rounded-full shadow-md text-zinc-700 dark:text-white bg-white dark:bg-zinc-700'>
              <svg className="size-5 md:w-[26px] md:h-[26px] ">
                <use href="#chevron-right"></use>
              </svg>
            </span>
            <span onClick={handlePrevSlide} className='flex-center size-9 md:size-10 cursor-pointer transition-all hover:bg-gray-300 dark:hover:bg-white dark:hover:text-zinc-700 rounded-full shadow-md text-zinc-700 dark:text-white bg-white dark:bg-zinc-700'>
              <svg className="size-5 md:w-[26px] md:h-[26px] ">
                <use href="#chevron-left"></use>
              </svg>
            </span>
          </div>
        </div>
      </div>

      {bestSellingProducts.length > 0 ? (
        <Swiper
         className='mx-auto max-w-7xl'
          modules={[Navigation]}
          spaceBetween={14}
          slidesPerView={2}
          breakpoints={{
            640: {
              slidesPerView: 3,
              spaceBetween: 14,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          autoHeight={true}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={() => console.log('slide change')}
        >
          {bestSellingProducts.map((product, index) => (
            <SwiperSlide className='p-0.5 ' key={`product-${product.id}-${index}`} >
              <ProductCardMain {...product} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="container mx-auto">
          <div className="flex items-center justify-center h-32">
            <div className="text-lg text-zinc-700 dark:text-white">محصولی برای نمایش وجود ندارد</div>
          </div>
        </div>
      )}
    </section>
  )
}

export default BestSelling
