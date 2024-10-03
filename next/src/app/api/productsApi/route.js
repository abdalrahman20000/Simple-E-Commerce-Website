// app/api/productsApi/route.js
import connect from '../../config/db'; // Adjust path as necessary
import Product from '../../models/product'; // Adjust path as necessary
import { NextResponse } from 'next/server';
export async function GET(req) {
  await connect();

  try {
    const products = await Product.find({});
    return new Response(JSON.stringify(products), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error fetching products:', error);
    return new Response(JSON.stringify({ message: 'Error fetching products', error }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
