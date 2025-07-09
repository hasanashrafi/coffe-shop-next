import React from 'react'
import ProductCard from './templates/ProductCard'

function ProductsPage({ data }) {
console.log(data)
  return (
    <>
      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 child:h-[460px] child:bg-white child:dark:bg-zinc-700 child:rounded-xl ">
        {data && data.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </>

  )
}

export default ProductsPage