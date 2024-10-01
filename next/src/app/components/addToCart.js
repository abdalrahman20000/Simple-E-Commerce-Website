// AddToCartButton.js
'use client'; // This makes it a client component

import React from 'react';

const AddToCartButton = ({ product }) => {
  const addToCartHandle = () => {
    // Get the current cart from sessionStorage
    const existingCart = sessionStorage.getItem("cart");
    
    // Ensure cart is always an array
    let cart = [];
    if (existingCart) {
      try {
        cart = JSON.parse(existingCart);
        // Ensure it's an array
        if (!Array.isArray(cart)) {
          cart = [];
        }
      } catch (error) {
        // If parsing fails, reset to empty array
        console.error("Failed to parse cart:", error);
        cart = [];
      }
    }

    // Check if the product is already in the cart
    const isProductInCart = cart.some(item => item.id === product.id);

    if (!isProductInCart) {
      // If the product is not in the cart, add it
      cart.push(product);
      sessionStorage.setItem("cart", JSON.stringify(cart));
      alert(`${product.name} has been added to your cart!`);
    } else {
      alert(`${product.name} is already in your cart!`);
    }
  };

  return (
    <button
      className="bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition duration-300 transform hover:scale-105"
      onClick={addToCartHandle} // Call the function
    >
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
