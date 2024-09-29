import Image from "next/image";
import Link from 'next/link';
import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>FootballZone - Your One-Stop Shop for Football Gear</title>
        <meta name="description" content="Welcome to FootballZone. Discover the latest football gear, accessories, and our passion for the sport." />
        <meta property="og:title" content="FootballZone" />
        <meta property="og:description" content="Check out the newest football gear and learn about our commitment to quality." />
        <meta property="og:image" content="https://example.com/image.jpg" /> {/* Replace with a relevant image URL */}
        <meta property="og:url" content="https://yourwebsite.com" /> {/* Replace with your website URL */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="FootballZone" />
        <meta name="twitter:description" content="Latest football gear and accessories available." />
        <meta name="twitter:image" content="https://example.com/image.jpg" /> {/* Replace with a relevant image URL */}
      </Head>
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-green-700">Welcome to FootballZone</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition duration-300">
            <h2 className="text-2xl font-semibold mb-4 text-green-600">Latest Products</h2>
            <p className="text-gray-600">Check out our newest football gear and accessories!</p>
            <Link href="/pages/products" className="mt-4 inline-block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300">Shop Now</Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition duration-300">
            <h2 className="text-2xl font-semibold mb-4 text-green-600">About Us</h2>
            <p className="text-gray-600">Learn more about our passion for football and commitment to quality.</p>
            <Link href="/pages/about" className="mt-4 inline-block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300">Read More</Link>
          </div>
        </div>
      </main>
    </div>
  );
}
