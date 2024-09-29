import React from 'react';
import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-6xl font-bold text-green-700 mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-gray-700 mb-8">Page Not Found</h2>
        <p className="text-xl text-gray-600 mb-8">Oops! It looks like you've wandered offside. The page you're looking for doesn't exist.</p>
        <Link href="/" className="inline-block bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition duration-300 transform hover:scale-105">
          Return to Home Field
        </Link>
      </main>
    </div>
  );
};

export default NotFoundPage;