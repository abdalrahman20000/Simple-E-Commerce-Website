import React from 'react';
import Link from 'next/link';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-green-700">About FootballZone</h1>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-600 mb-4">
            FootballZone is your one-stop shop for all things football. We're passionate about the beautiful game and dedicated to providing high-quality equipment and gear to players and fans alike.
          </p>
          <p className="text-gray-600 mb-4">
            Founded in 2010, we've been serving the football community for over a decade. Our team of experts carefully selects each product to ensure it meets our high standards of quality and performance.
          </p>
          <h2 className="text-2xl font-semibold mb-4 text-green-600">Our Mission</h2>
          <p className="text-gray-600 mb-4">
            To inspire and equip football enthusiasts of all levels, helping them achieve their best on and off the field.
          </p>
          <div className="mt-8 text-center">
            <Link href="/pages/products" className="inline-block bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition duration-300 transform hover:scale-105">
              Explore Our Products
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutPage;