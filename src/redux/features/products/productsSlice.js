import api from "@/utils/api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    loading: false,
    error: null,
};

const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
    const response = await api.get("/products");
    return response.data.data;
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
            console.log('API products response:', action.payload);
            // Normalize: check for .data, .products, or direct array
            if (Array.isArray(action.payload)) {
                state.products = action.payload;
            } else if (action.payload && Array.isArray(action.payload.data)) {
                state.products = action.payload.data;
            } else if (action.payload && Array.isArray(action.payload.products)) {
                state.products = action.payload.products;
            } else {
                state.products = [];
            }
            state.loading = false;
            state.error = null;
        })
        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.products = [];
            state.loading = false;
            state.error = action.error.message;
        })
    }
})

export default productsSlice.reducer;
export { fetchProducts }
