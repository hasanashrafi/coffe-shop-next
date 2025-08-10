const filterProducts = (products, category) => {
  if (category === 'all') {
    return products;
  } else {
    return products.filter((product) => product.category === category);
  }

}

export default filterProducts

// Get best selling products based on sales count
export const getBestSellingProducts = (products, limit = 6) => {
    return products
        .filter(product => product.salesCount && product.salesCount > 0)
        .sort((a, b) => b.salesCount - a.salesCount)
        .slice(0, limit);
};

// Get products by sales count (alias for consistency)
export const getTopSalesProducts = (products, limit = 6) => {
    return getBestSellingProducts(products, limit);
};