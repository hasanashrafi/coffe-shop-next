// import axios from 'axios';

// // Use local Next.js API route to avoid CORS issues
// const API_BASE_URL = 'https://backend-coffeshop-next.onrender.com/api';

// export async function fetchProducts() {
//     try {
//         const response = await axios.get(`${API_BASE_URL}/products`, {
//             headers: { 'Content-Type': 'application/json' },
//             timeout: 15000,
//         });

//         const payload = response?.data.data;
//         console.log('Products response:', payload);

//         if (Array.isArray(payload)) return payload;
//         if (payload && Array.isArray(payload?.data)) return payload.data;
//         if (payload && Array.isArray(payload?.products)) return payload.products;

//         return [];
//     } catch (error) {
//         console.error('Error fetching products:', error);
//         return [];
//     }
// }

// export async function fetchProductsWithParams(params = {}) {
//     try {
//         const queryParams = new URLSearchParams();
//         if (params.sortBy) queryParams.append('sortBy', params.sortBy);
//         if (params.limit) queryParams.append('limit', params.limit);

//         const url = `${API_BASE_URL}/products${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;

//         const response = await axios.get(url, {
//             headers: { 'Content-Type': 'application/json' },
//             timeout: 15000,
//         });

//         const payload = response?.data;

//         if (Array.isArray(payload)) return payload;
//         if (payload && Array.isArray(payload?.data)) return payload.data;
//         if (payload && Array.isArray(payload?.products)) return payload.products;

//         return [];
//     } catch (error) {
//         console.error('Error fetching products with params:', error);
//         return [];
//     }
// } 