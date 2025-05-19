import React from 'react'
import ProductCard from './templates/ProductCard'

function ProductsPage({ data }) {
    console.log(data)
    return (
        <div className='min-h-screen bg-white flex flex-wrap mx-auto p-5'>
            {data && data.map((product) => (
                <ProductCard key={product.id} {...product} />
            ))}
        </div>
    )
}

export default ProductsPage