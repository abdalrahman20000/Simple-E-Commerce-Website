"use client";

import React from 'react';
import Link from 'next/link';

const CartSidebar = ({ cartItems, onClose }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50">
            <div className="bg-green-700 w-72 p-4 overflow-y-scroll">
                <h2 className="text-xl font-bold mb-4">Cart</h2>
                {cartItems.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <ul>
                        {cartItems.map((item) => (
                            <li key={item._id} className="flex-col justify-center mb-2 bg-white  rounded-sm">
                                <div className="md:flex-shrink-0 flex items-center justify-center p-4 ">
                                    <img className="h-40 object-cover rounded-lg md:w-48 max-sm:w-full max-sm:h-auto" src={item.image} alt={item.name} />
                                </div>
                                <span className='text-green-700'>${item.price}</span>
                            </li>
                        ))}
                    </ul>
                )}
                <button
                    className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
                    onClick={onClose}
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default CartSidebar;
