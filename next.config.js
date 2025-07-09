/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/api/products',
                destination: 'https://backend-coffeshop.onrender.com/api/products'
            }
        ]
    }
}

module.exports = nextConfig 