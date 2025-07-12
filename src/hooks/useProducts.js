import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '@/redux/features/products/productsSlice';

/**
 * Custom hook for managing products across the application
 * @param {boolean} autoFetch - Whether to automatically fetch products on mount (default: true)
 * @returns {object} - Object containing products, loading state, error state, and refetch function
 */
export const useProducts = (autoFetch = true) => {
    const dispatch = useDispatch();
    const { products, loading, error } = useSelector(state => state.products);

    const refetch = () => {
        dispatch(fetchProducts());
    };

    useEffect(() => {
        if (autoFetch && products.length === 0 && !loading) {
            dispatch(fetchProducts());
        }
    }, [dispatch, autoFetch, products.length, loading]);

    return {
        products,
        loading,
        error,
        refetch
    };
};

/**
 * Custom hook for fetching products only when needed (manual control)
 * @returns {object} - Object containing products, loading state, error state, and fetch function
 */
export const useProductsManual = () => {
    const dispatch = useDispatch();
    const { products, loading, error } = useSelector(state => state.products);

    const fetchProductsData = () => {
        dispatch(fetchProducts());
    };

    return {
        products,
        loading,
        error,
        fetchProducts: fetchProductsData
    };
};
