// ProductDetailsPage.js
import React from 'react';
import AddToCartButton from '../../../components/addToCart'; // Import the client component

const ProductDetailsPage = async ({ params }) => {
  // const response = await fetch('https://fakestoreapi.com/products', {
  //   cache: 'no-store',
  // });
  // const products = await response.json();
  // const product = products.find(p => p.id === parseInt(params.productId));

  // if (!product) {
  //   return <div>Product not found</div>;
  // }

  //--------------first and second task--------------------------------

  // console.log("id :",params.productId);

  const response = await fetch(`http://localhost:3000/api/productsApi/${params.productId}`, {
    cache: 'no-store',
  })
  .catch(err=>{console.log});

  if (!response.ok) {
    const errorText = await response.text();
    console.error('Error fetching product-:', errorText);
    return <div>Error loading products.</div>; // Show error message
  }

  const product = await response.json();



  //---------------third task------------------------------------------

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img className="h-full w-48 object-cover md:w-48 max-sm:w-full max-sm:h-auto" src={product.image} alt={product.name} />
            </div>
            <div className="p-8">
              <h1 className="text-3xl font-bold text-green-700 mb-2">{product.name}</h1>
              <p className="text-gray-600 text-xl mb-4">${product.price}</p>
              <p className="text-gray-700 mb-6">{product.description}</p>
              <AddToCartButton product={product} /> {/* Use the client component */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductDetailsPage;
