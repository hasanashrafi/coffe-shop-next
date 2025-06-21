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
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/products`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })

        if (!response.ok) {
          throw new Error('Failed to fetch products')
        }

        const data = await response.json()
        setData(data)

      } catch (error) {
        setError(error)
        console.error('Error fetching products:', error)

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