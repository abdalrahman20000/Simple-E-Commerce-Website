import React from 'react';
import Link from 'next/link';
// import axios from 'axios';
// require("dotenv").config();
// const mongoose = require("../../config/db");
// const Product = require('../../models/product');


// const products = [
//   { id: 1, name: 'Professional Soccer Ball', price: 59.99, image: 'https://www.soccerbible.com/media/125809/la-liga-2-min.jpg' },
//   { id: 2, name: 'Premium Soccer Cleats', price: 129.99, image: 'https://th.bing.com/th/id/OIP.0hjK6KCLl46WfNyZgg1w1gAAAA?rs=1&pid=ImgDetMain' },
//   { id: 4, name: 'Training Cones Set', price: 24.99, image: 'https://nwscdn.com/media/catalog/product/cache/all/thumbnail/800x/9df78eab33525d08d6e5fb8d27136e95/m/a/main_167_4.jpg' },
//   { id: 5, name: 'Goalkeeper Gloves', price: 49.99, image: 'https://nwscdn.com/media/catalog/product/g/o/goalkeepers-gloves-for-soccer_players-of-all-ages_10.jpg' },
//   { id: 6, name: 'Soccer Goal Net', price: 79.99, image: 'https://nwscdn.com/media/catalog/product/cache/all/image/1200x/9df78eab33525d08d6e5fb8d27136e95/t/a/target_goal_for_elite_football_clubs_3_1.jpg' },
// ];

const ProductsPage = async () => {
  // const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
  // const prod = response.data;
  // const products = Product.find();

  //-----------first task------------------------

  // const response = await fetch('https://fakestoreapi.com/products',
  //   {
  //     cache: 'force-cache'
  //   }
  // );
  // const products = await response.json();

  //-----------second task------------------------


  const response = await fetch('http://localhost:3000//api/productsApi', {
    cache: 'force-cache',
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error('Error fetching products:', errorText);
    return <div>Error loading products.</div>; // Show error message
  }

  const products = await response.json();


  // console.log("Fetched products:", products);



  // console.log("------------------------------------------------------------------------------------------------");
  // console.log(products);
  // console.log("------------------------------------------------------------------------------------------------");


  //------------third task-----------------------



  const ProductCard = ({ product }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-green-700 mb-2">{product.name}</h3>
        <p className="text-gray-600">${product.price}</p>
        <Link href={`/pages/products/${product._id}`} className="mt-4 inline-block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300">
          View Details
        </Link>
      </div>
    </div>
  );


  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-green-700">Our Products</h1>
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