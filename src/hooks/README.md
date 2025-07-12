# Product Fetching Utilities

This directory contains reusable hooks and utilities for fetching products across the application.

## Available Hooks

### `useProducts(autoFetch = true)`

A custom hook that automatically manages product fetching and state.

**Parameters:**

- `autoFetch` (boolean, default: true) - Whether to automatically fetch products on mount

**Returns:**

- `products` (array) - Array of products
- `loading` (boolean) - Loading state
- `error` (string|null) - Error message if any
- `refetch` (function) - Function to manually refetch products

**Usage:**

```javascript
import { useProducts } from "@/hooks/useProducts";

function MyComponent() {
  const { products, loading, error, refetch } = useProducts();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
      <button onClick={refetch}>Refresh</button>
    </div>
  );
}
```

### `useProductsManual()`

A hook for manual control over when to fetch products.

**Returns:**

- `products` (array) - Array of products
- `loading` (boolean) - Loading state
- `error` (string|null) - Error message if any
- `fetchProducts` (function) - Function to fetch products

**Usage:**

```javascript
import { useProductsManual } from "@/hooks/useProducts";

function MyComponent() {
  const { products, loading, error, fetchProducts } = useProductsManual();

  const handleRefresh = () => {
    fetchProducts();
  };

  return (
    <div>
      <button onClick={handleRefresh}>Load Products</button>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}
```

## Available Services

### `productService.js`

Utility functions for direct API calls outside of React components.

**Functions:**

- `fetchProductsAPI()` - Fetch all products
- `fetchProductById(id)` - Fetch a single product by ID
- `searchProducts(query)` - Search products by query
- `getProductsByCategory(category)` - Get products by category

**Usage:**

```javascript
import { fetchProductsAPI, fetchProductById } from "@/utils/productService";

// In a non-React context
const products = await fetchProductsAPI();
const product = await fetchProductById(1);
```

## Benefits

1. **Centralized State Management** - All components share the same product data
2. **Automatic Caching** - Products are cached in Redux store
3. **Consistent Error Handling** - Unified error handling across components
4. **Performance Optimization** - Prevents multiple API calls for the same data
5. **Type Safety** - Consistent data structure across the app
6. **Easy Testing** - Mock the hook or service for testing

## Migration Guide

### Before (Multiple fetch calls):

```javascript
// Component 1
useEffect(() => {
  fetch('/api/products').then(res => res.json()).then(setProducts);
}, []);

// Component 2
useEffect(() => {
  const response = await api.get('/products');
  setProducts(response.data);
}, []);
```

### After (Using the hook):

```javascript
// Both components
const { products, loading, error } = useProducts();
```

This approach ensures data consistency and reduces unnecessary API calls.
