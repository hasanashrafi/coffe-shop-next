// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import React, { useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import ProductCardMain from './templates/ProductCardMain';
import { fetchProducts } from '@/redux/features/products/productsSlice';

function BestSelling() {
  const swiperRef = useRef(null);
  const dispatch = useDispatch();

  // Use inline selectors to debug the issue
  const { loading, error } = useSelector((state) => state.products);
  const products = useSelector((state) => state.products.products || []);

  // Get best selling products inline - create a copy to avoid mutating Redux state
  const bestSellingProducts = [...products]
    .sort((a, b) => (b.rating || 0) - (a.rating || 0))
    .slice(0, 8);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleNextSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const handlePrevSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-20 text-red-500">
        Error loading products: {error}
      </div>
    );
  }

  return (
    <section className="py-8 md:py-16 font-Dana">
      <div className="container max-w-7xl">
        {/* section head */}
        <div className="flex items-end justify-between mb-5 md:mb-12">
          <div>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-MorabbaBold text-zinc-700 dark:text-white mb-2 md:mb-4">
              پرفروش‌ترین محصولات
            </h2>
            <p className="text-sm md:text-base text-zinc-500 dark:text-zinc-400">
              محصولات پرفروش و محبوب ما را مشاهده کنید
            </p>
          </div>
          <div className="flex gap-2 md:gap-3">
            <span onClick={handlePrevSlide} className='flex-center size-9 md:size-10 cursor-pointer transition-all hover:bg-gray-300 dark:hover:bg-white dark:hover:text-zinc-700 rounded-full shadow-md text-zinc-700 dark:text-white bg-white dark:bg-zinc-700'>
              <svg className="size-5 md:w-[26px] md:h-[26px] ">
                <use href="#chevron-right"></use>
              </svg>
            </span>
            <span onClick={handleNextSlide} className='flex-center size-9 md:size-10 cursor-pointer transition-all hover:bg-gray-300 dark:hover:bg-white dark:hover:text-zinc-700 rounded-full shadow-md text-zinc-700 dark:text-white bg-white dark:bg-zinc-700'>
              <svg className="size-5 md:w-[26px] md:h-[26px] ">
                <use href="#chevron-left"></use>
              </svg>
            </span>
          </div>
        </div>

        {/* products slider */}
        <div className="relative">
          <Swiper
            ref={swiperRef}
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            navigation={false}
            height={400}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
            className="best-selling-swiper "
          >
            {bestSellingProducts.map((product, index) => (
              <SwiperSlide key={index} className='p-0.5 '>
                <ProductCardMain {...product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default BestSelling
