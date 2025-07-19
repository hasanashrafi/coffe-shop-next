import axios from "axios";

const api = axios.create({
    baseURL: 'https://backend-coffeshop-node.onrender.com/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

export const loginUser = async (data) => {
    return await api.post(`users/signin`, data)
}

api.interceptors.request.use(async (config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
})

export default api;