import sampleProducts from '@/data/data';

export default function handler(req, res) {
    if (req.method === 'GET') {
        try {
            // You can add query parameters for filtering, sorting, etc.
            const { sortBy, limit } = req.query;

            let products = [...sampleProducts];

            // Sort by sell rate if requested
            if (sortBy === 'sellRate') {
                products = products.sort((a, b) => b.sellRate - a.sellRate);
            }

            // Sort by sales count if requested
            if (sortBy === 'salesCount') {
                products = products.sort((a, b) => b.salesCount - a.salesCount);
            }

            // Limit results if requested
            if (limit) {
                products = products.slice(0, parseInt(limit));
            }

            res.status(200).json({
                success: true,
                data: products,
                total: products.length
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: 'خطا در دریافت محصولات'
            });
        }
    } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).json({
            success: false,
            message: `Method ${req.method} Not Allowed`
        });
    }
} 