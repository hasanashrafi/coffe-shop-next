/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_BASE_URL:'https://backend-coffeshop-next.onrender.com/api/products '
  },
};

export default nextConfig;
