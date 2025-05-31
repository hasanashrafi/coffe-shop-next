import Image from 'next/image'
import React from 'react'
import { FaHeart, FaShoppingCart } from 'react-icons/fa'
import { motion } from 'framer-motion'

function ProductCard(product) {
    const { name, price, discount, image } = product

    return (
        <div

            className="group relative  bg-white dark:bg-zinc-800 rounded-2xl p-4 shadow-light dark:shadow-dark hover:shadow-lg transition-all duration-300"
        >
            {/* Favorite Button */}
            <button className="absolute top-3 right-3 p-2 rounded-full bg-white/80 dark:bg-zinc-700/80 backdrop-blur-sm hover:bg-rose-50 dark:hover:bg-rose-900/20 transition-colors">
                <FaHeart className="w-4 h-4 text-gray-400 group-hover:text-rose-500 transition-colors" />
            </button>

            <div className="flex gap-x-4">
                {/* Product Image */}
                <div className="relative">
                    <div className="w-[120px] h-[120px] rounded-xl overflow-hidden bg-brown-100 dark:bg-brown-900/20">
                        <Image
                           priority
                            src={ image}
                            className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                            width={120}
                            height={120}

                            alt={`${name}`}
                        />
                    </div>
                    {discount > 0 && (
                        <div className="absolute -top-3 -right-2 bg-green-500 dark:bg-orange-500 text-white px-2 py-1 rounded-lg text-xs font-DanaMedium">
                            {discount}% تخفیف
                        </div>
                    )}
                </div>

                {/* Product Info */}
                <div className="flex flex-col justify-between flex-1">
                    <div>
                        <h3 className="font-DanaMedium dark:text-white text-lg text-brown-900 mb-1 line-clamp-2">{name}</h3>
                        <div className="flex items-center gap-x-2">
                            <span className="text-brown-600 dark:text-brown-300 text-sm font-Dana">
                                {discount > 0 && (
                                    <span className="line-through text-gray-400 dark:text-gray-500">
                                        {price} تومان
                                    </span>
                                )}
                            </span>
                        </div>
                    </div>

                    <div className="flex items-center justify-between mt-2">
                        <div className="font-DanaDemiBold text-brown-900 dark:text-white text-lg">
                            {discount > 0 ? Math.round(price * (1 - discount / 100)) : price}
                            <span className="font-Dana text-sm mr-1">تومان</span>
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-green-700 hover:bg-green-900 dark:bg-brown-900 dark:hover:bg-brown-600 text-white p-2 rounded-lg transition-colors"
                        >
                            <FaShoppingCart className="w-5 h-5" />
                        </motion.button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
