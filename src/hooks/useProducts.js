import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '@/redux/features/products/productsSlice';


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