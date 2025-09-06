import React from 'react';
import { ShoppingCart, Star } from 'lucide-react';

const Merchandise = () => {
  const products = [
    {
      name: 'XSET Jersey 2024',
      price: '$75',
      originalPrice: '$90',
      image: 'https://images.pexels.com/photos/8500011/pexels-photo-8500011.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 4.8,
      isNew: true
    },
    {
      name: 'Gaming Hoodie',
      price: '$65',
      image: 'https://images.pexels.com/photos/8535164/pexels-photo-8535164.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 4.9,
      isNew: false
    },
    {
      name: 'Limited Edition Cap',
      price: '$35',
      image: 'https://images.pexels.com/photos/1082529/pexels-photo-1082529.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 4.7,
      isNew: true
    },
    {
      name: 'Team Mousepad',
      price: '$25',
      image: 'https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 4.6,
      isNew: false
    }
  ];

  return (
    <section id="merchandise" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Official <span className="text-purple-400">Merchandise</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Rep your favorite team with official XSET gear
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 border border-gray-700 hover:border-purple-500/40"
            >
              <div className="aspect-square relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {product.isNew && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      New
                    </span>
                  </div>
                )}
                {product.originalPrice && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Sale
                    </span>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-gray-300 text-sm ml-1">{product.rating}</span>
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-white mb-3">{product.name}</h3>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-purple-400">{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-400 line-through">{product.originalPrice}</span>
                    )}
                  </div>
                </div>
                
                <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2">
                  <ShoppingCart className="w-4 h-4" />
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default Merchandise;