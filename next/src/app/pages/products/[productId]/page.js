import React from 'react';

const products = [
  { id: 1, name: 'Professional Soccer Ball', price: 59.99, image: 'https://www.soccerbible.com/media/125809/la-liga-2-min.jpg', description: 'FIFA-approved match ball with superior air retention and water-resistant properties.' },
  { id: 2, name: 'Premium Soccer Cleats', price: 129.99, image: 'https://th.bing.com/th/id/OIP.0hjK6KCLl46WfNyZgg1w1gAAAA?rs=1&pid=ImgDetMain', description: 'Lightweight cleats with superior traction and comfort for optimal performance on the field.' },
  { id: 3, name: 'Team Jersey', price: 89.99, image: 'https://th.bing.com/th/id/R.d813176016f15dc3ca40fd214cc8b792?rik=IoiRtYSIEk4o%2fQ&riu=http%3a%2f%2fcdn.shopify.com%2fs%2ffiles%2f1%2f0550%2f6161%2f0625%2ffiles%2f23RMA-HS-500x500.jpg%3fv%3d1684698246&ehk=AKJEMCrkwKZkPDYid4fJWnZZhknUQmhiYj%2fMb3w1UDc%3d&risl=&pid=ImgRaw&r=0', description: 'Official team jersey made with moisture-wicking fabric for comfort during intense matches.' },
  { id: 4, name: 'Training Cones Set', price: 24.99, image: 'https://nwscdn.com/media/catalog/product/cache/all/thumbnail/800x/9df78eab33525d08d6e5fb8d27136e95/m/a/main_167_4.jpg', description: 'Set of 20 durable plastic cones for agility training and drill setup.' },
  { id: 5, name: 'Goalkeeper Gloves', price: 49.99, image: 'https://nwscdn.com/media/catalog/product/g/o/goalkeepers-gloves-for-soccer_players-of-all-ages_10.jpg', description: 'Professional-grade goalkeeper gloves with extra padding and superior grip.' },
  { id: 6, name: 'Soccer Goal Net', price: 79.99, image: 'https://nwscdn.com/media/catalog/product/cache/all/image/1200x/9df78eab33525d08d6e5fb8d27136e95/t/a/target_goal_for_elite_football_clubs_3_1.jpg', description: 'Regulation-size soccer goal net made from high-quality, weather-resistant materials.' },
];

const ProductDetailsPage = ({ params }) => {
  const product = products.find(p => p.id === parseInt(params.productId));

  if (!product) {
    return <div>Product not found</div>;
  }

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
              <p className="text-gray-600 text-xl mb-4">${product.price.toFixed(2)}</p>
              <p className="text-gray-700 mb-6">{product.description}</p>
              <button className="bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition duration-300 transform hover:scale-105">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductDetailsPage;
