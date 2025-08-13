/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_BASE_URL: 'https://backend-coffeshop-node.onrender.com/api',
    BACKEND_BASE_URL: 'https://backend-coffeshop-node.onrender.com/api',
  },
};

export default nextConfig;
