const filterProducts = (products, category) => {
    if (category === 'all') {
        return products;
        } else {
          return products.filter((product) => product.category === category);
        }

    }
    
    export default filterProducts