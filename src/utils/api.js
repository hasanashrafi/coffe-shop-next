import axios from "axios";
import Cookies from 'js-cookie';

const api = axios.create({
    baseURL: 'https://backend-coffeshop-node.onrender.com/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

export const loginUser = async (data) => {
    return await api.post(`/users/signin`, data);
};

export const signupUser = async (data) => {
    return await api.post(`/users/signup`, data);
};

export const getProfile = async () => {
    return await api.get(`users/profile`);
};

export const getDashboard = async (userId) => {
    return await api.get(`/dashboard/${userId}`);
};

api.interceptors.request.use(async (config) => {
    const token = Cookies.get('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

// Add response interceptor for better error handling
api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            window.location.href = '/signin';
        }
        return Promise.reject(error);
    }
);

export default api;