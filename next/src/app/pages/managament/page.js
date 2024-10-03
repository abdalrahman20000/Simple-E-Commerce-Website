import React from 'react';
import { revalidatePath } from 'next/cache';
import axios from 'axios';

async function updateProduct(id, formData) {
  'use server';
  const name = formData.get('name');
  const price = formData.get('price');
  
  const response = await fetch(`http://localhost:3000/api/productsApi/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, price }),
  });

  if (!response.ok) {
    throw new Error('Failed to update product');
  }

  revalidatePath('/products');
}

async function deleteProduct(id) {
  'use clinet';
  const response = await axios.post(`http://localhost:3000/api/productsApi/deleteProduct/${id}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new Error('Failed to delete product');
  }

  revalidatePath('/products');
}

async function addProduct(formData) {
  'use server';
  const name = formData.get('name');
  const price = formData.get('price');
  const image = formData.get('image');

  const response = await fetch('http://localhost:3000/api/productsApi', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, price, image }),
  });

  if (!response.ok) {
    throw new Error('Failed to add product');
  }

  revalidatePath('/products');
}

const ProductCard = ({ product }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
    <div className="p-4">
      <form action={updateProduct.bind(null, product._id)}>
        <input
          type="text"
          name="name"
          defaultValue={product.name}
          className="text-lg font-semibold text-green-700 mb-2 w-full"
        />
        <input
          type="number"
          name="price"
          defaultValue={product.price}
          className="text-gray-600 w-full"
        />
        <div className="mt-4 flex justify-between">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
          >
            Update
          </button>
          <button
            formAction={deleteProduct()}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300"
          >
            Delete
          </button>
        </div>
      </form>
    </div>
  </div>
);

const AddProductForm = () => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden p-4 mb-8">
    <h2 className="text-2xl font-bold mb-4">Add New Product</h2>
    <form action={addProduct}>
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
        <input
          type="number"
          id="price"
          name="price"
          required
          step="0.01"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="image" className="block text-sm font-medium text-gray-700">Image URL</label>
        <input
          type="url"
          id="image"
          name="image"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300"
      >
        Add Product
      </button>
    </form>
  </div>
);

const ProductsPage = async () => {
  const response = await fetch('http://localhost:3000/api/productsApi', {
    cache: 'no-store', // This ensures fresh data on every request
  });

  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }

  const products = await response.json();

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-green-700">Our Products</h1>
        <AddProductForm />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(product => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default ProductsPage;