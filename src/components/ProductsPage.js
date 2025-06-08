import React, { useState } from 'react'
import ProductCard from './templates/ProductCard'
import { FaFilter } from 'react-icons/fa'
import filterProducts from '@/helpers/filterProducts'

function ProductsPage({ data }) {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'همه محصولات' },
    { id: 'coffee', name: 'قهوه' },
    { id: 'tea', name: 'چای' },
    { id: 'juice', name: 'آبمیوه' }
  ]

  const filteredProducts = filterProducts(data, selectedCategory)
  return (
    <div className="min-h-screen max-w-[95%] mx-auto mt-5 rounded-xl backdrop-blur-[6px] bg-black/30 dark:bg-zinc-900 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-MorabbaBold text-orange-300 dark:text-white mb-2">
            محصولات ما
          </h1>
          <p className="text-orange-300 dark:text-brown-300">
            بهترین محصولات با کیفیت عالی
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex items-center gap-x-4 mb-8 overflow-x-auto pb-2">
          <FaFilter className="text-brown-600 dark:text-brown-300" />
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-lg text-sm font-DanaMedium transition-colors
                                ${selectedCategory === category.id
                  ? 'bg-brown-600 text-white'
                  : 'bg-white dark:bg-zinc-800 text-brown-600 dark:text-brown-300 hover:bg-brown-100 dark:hover:bg-zinc-700'
                }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductsPage