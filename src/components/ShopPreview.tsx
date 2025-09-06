import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Clock, Star, ArrowRight } from 'lucide-react';

const ShopPreview = () => {
  const previewItems = [
    {
      name: 'BENEATH',
      price: 'TBA',
      image: 'https://i.imgur.com/NksMZDX.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Apparel'
    },
    {
      name: 'BENEATH',
      price: 'TBA',
      image: 'https://i.imgur.com/4wjv9O2.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Apparel'
    },
    {
      name: 'BENEATH',
      price: 'TBA',
      image: 'https://i.imgur.com/gcOCcoP.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Apparel'
    },
    {
      name: 'BENEATH',
      price: 'TBA',
      image: 'https://i.imgur.com/2kkAjwY.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Apparel'
    }
  ];

  return (
    <section id="shop" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Clock className="w-8 h-8 text-purple-400 mr-3" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Realism <span className="text-purple-400">Collection</span>
            </h2>
          </div>
          
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full text-2xl font-bold inline-block mb-6 animate-pulse">
            COMING SOON
          </div>
          
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Get ready to rep BENEATH with our exclusive merchandise collection launching soon
          </p>
        </div>

        {/* Preview Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {previewItems.map((item, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl overflow-hidden border border-gray-700 hover:border-purple-500/40 transition-all duration-300"
            >
              {/* Coming Soon Overlay */}
              <div className="absolute inset-0 bg-black/60 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-center">
                  <Clock className="w-12 h-12 text-purple-400 mx-auto mb-2" />
                  <p className="text-white font-bold text-lg">Coming Soon</p>
                </div>
              </div>

              <div className="aspect-square relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 filter grayscale group-hover:grayscale-0"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-purple-600/80 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {item.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-3">{item.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-purple-400">{item.price}</span>
                  <div className="flex items-center text-gray-400">
                    <Star className="w-4 h-4 mr-1" />
                    <span className="text-sm">Preview</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-2xl p-8 md:p-12 border border-purple-500/20 text-center">
          <ShoppingBag className="w-16 h-16 text-purple-400 mx-auto mb-6" />
          <h3 className="text-3xl font-bold text-white mb-4">Be the First to Know</h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Sign up for our newsletter to get notified when our official merchandise store launches, 
            plus exclusive early access and special discounts.
          </p>
          
          <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors duration-200"
            />
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center">
              Notify Me
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
          
          <p className="text-gray-400 text-sm mt-4">
            No spam, just exclusive updates and early access to BENEATH merchandise.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ShopPreview;