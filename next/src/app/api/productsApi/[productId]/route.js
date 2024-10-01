import connect from '../../../config/db';
import Product from '../../../models/product';

export async function GET(req, { params }) {
    await connect();

    const { productId } = params;
    console.log("ID : ", productId);

    try {
        const product = await Product.findById(productId);

        if (!product) {
            return new Response(JSON.stringify({ message: 'Product not found' }), {
                status: 404,
                headers: {
                    'Content-Type': 'application/json',
                },
            });
        }

        return new Response(JSON.stringify(product), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });

    } catch (error) {
        console.error('Error fetching product:', error);
        return new Response(JSON.stringify({ message: 'Error fetching product', error }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}
