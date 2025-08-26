import React from 'react';

import ProductsPage from '@/components/ProductsPage';

function Products() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-900">
      <div className="container mx-auto px-4 py-8 ">
        <ProductsPage/>
      </div>
    </div>
  );
}

export default Products   