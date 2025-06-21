/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_BASE_URL:'https://backend-coffeshop-next.onrender.com/api',
    MONGO_URI:"mongodb+srv://hasan:102310230@cluster0.qjygrev.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  },
};

export default nextConfig;
