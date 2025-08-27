import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    products: [],
    loading: false,
    error: null,
};

const fetchProducts = createAsyncThunk("products/fetchProducts", async (_, { rejectWithValue }) => {
    try {
        // Optionally, send a lightweight ping to wake up the server
        await axios.get("https://backend-coffeshop-node.onrender.com/api/ping").catch(() => {});

        // Increased timeout to handle cold starts
        const response = await axios.get("https://backend-coffeshop-node.onrender.com/api/products", {
            headers: { 'Content-Type': 'application/json' },
            timeout: 30000, // Increased timeout
        });

        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        return rejectWithValue(
            error.code === 'ECONNABORTED'
                ? 'Server is waking up, please wait and try again.'
                : error.response?.data?.message || error.message || 'Failed to fetch products'
        );
    }
});

const productsSlice = createSlice({
    name: "products",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            let productsArray = [];
            if (action.payload && action.payload.success && Array.isArray(action.payload.data)) {
                productsArray = action.payload.data;
            } else if (Array.isArray(action.payload)) {
                productsArray = action.payload;
            } else if (action.payload && Array.isArray(action.payload.products)) {
                productsArray = action.payload.products;
            }

            state.products = productsArray;
            state.loading = false;
            state.error = null;
        })
        builder.addCase(fetchProducts.rejected, (state, action) => {
            console.error('Products rejected with error:', action.payload);
            state.products = [];
            state.loading = false;
            state.error = action.payload || 'Failed to fetch products';
        })
    }
})

// Selectors
export const selectProducts = (state) => state.products.products;
export const selectProductsLoading = (state) => state.products.loading;
export const selectProductsError = (state) => state.products.error;
export const selectBestSellingProducts = (state, limit = 8) => {
    const products = state.products.products;
    if (!Array.isArray(products) || products.length === 0) return [];
    return products
        .sort((a, b) => (b.rating || 0) - (a.rating || 0))
        .slice(0, limit);
};

export default productsSlice.reducer;
export { fetchProducts }