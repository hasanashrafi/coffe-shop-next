import axios from "axios";

const api = axios.create({
    baseURL: 'https://backend-coffeshop-node.onrender.com/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

export const signupUser = async (data) => {
    return await api.post(`/users/signup`, data)
}

export const loginUser = async (data) => {
    return await api.post(`/users/signin`, data)
}
export const profileUser = async (data) => {
    return await api.get("/users/profile", data)
}

api.interceptors.request.use(async (config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
})

export default api;