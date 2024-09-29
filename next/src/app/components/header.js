"use client"; // Add this line to indicate it's a client component

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ShoppingCart } from 'lucide-react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-green-700 text-white shadow-lg">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <div className='flex items-center'>
                    <Image
                        src={"https://logowik.com/content/uploads/images/modern-soccer-ball5584.logowik.com.webp"}
                        width={70}
                        height={70}
                        priority
                        className='rounded-full'
                    />
                    {/* <Link href="/" className="text-2xl font-bold pl-5">FootballZone</Link> */}
                </div>
                <nav className="hidden md:flex space-x-4 mr-10">
                    <Link href="/" className="hover:text-yellow-300 transition duration-300">Home</Link>
                    <Link href="/pages/about" className="hover:text-yellow-300 transition duration-300">About</Link>
                    <Link href="/pages/products" className="hover:text-yellow-300 transition duration-300">Products</Link>
                </nav>
                <div className="flex items-center space-x-4">
                    {/* <Link href="/cart" className="hover:text-yellow-300 transition duration-300"> */}
                    <ShoppingCart />
                    {/* </Link> */}
                    <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden">
                    <Link href="/" className="block py-2 px-4 text-sm hover:bg-green-600">Home</Link>
                    <Link href="/pages/about" className="block py-2 px-4 text-sm hover:bg-green-600">About</Link>
                    <Link href="/pages/products" className="block py-2 px-4 text-sm hover:bg-green-600">Products</Link>
                </div>
            )}
        </header>
    );
};

export default Header;
