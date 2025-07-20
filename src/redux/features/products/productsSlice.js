import api from "@/utils/api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    loading: false,
    error: null,
};

const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
    const response = await api.get("/products");
    return  response.data;
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
            state.products = action.payload;
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
