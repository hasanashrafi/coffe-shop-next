import Loader from '@/components/modules/Loader'
import ProductsPage from '@/components/ProductsPage'
import React, { useState, useEffect } from 'react'

function Products() {
  const [data, setData] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('http://localhost:3004/api/products')
        const data = await res.json()
        setData(data)
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])

  if (loading) return <Loader />
  if (error) return <div>Error: {error.message}</div>

  return (
    <ProductsPage data={data} />
  )
}

export default Products