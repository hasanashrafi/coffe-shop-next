import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [],
    loading: false,
    error: null,
};

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            const existingProduct = state.products.find(
                (product) => product.id === action.payload.id
            );

            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                state.products.push({
                    ...action.payload,
                    quantity: 1,
                });
            }
        },
        incrementQuantity: (state, action) => {
            const product = state.products.find(
                (product) => product.id === action.payload
            );
            if (product) {
                product.quantity += 1;
            }
        },
        decrementQuantity: (state, action) => {
            const product = state.products.find(
                (product) => product.id === action.payload
            );
            if (product && product.quantity > 1) {
                product.quantity -= 1;
            } else if (product && product.quantity === 1) {
                state.products = state.products.filter(
                    (item) => item.id !== action.payload
                );
            }
        },
        removeProduct: (state, action) => {
            state.products = state.products.filter(
                (product) => product.id !== action.payload
            );
        },
        clearCart: (state) => {
            state.products = [];
        },
    },
});

export const {
    addProduct,
    incrementQuantity,
    decrementQuantity,
    removeProduct,
    clearCart,
} = productSlice.actions;

export default productSlice.reducer; 