import React from 'react';
import { Handshake, Star, Globe, Zap } from 'lucide-react';

const Partnerships = () => {
  const partners = [
    {
      name: 'HyperX',
      category: 'Gaming Peripherals',
      logo: 'https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=200',
      description: 'Official gaming headsets and peripherals partner'
    },
    {
      name: 'NVIDIA',
      category: 'Graphics Technology',
      logo: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=200',
      description: 'Powering our gaming rigs with cutting-edge GPUs'
    },
    {
      name: 'Red Bull',
      category: 'Energy & Lifestyle',
      logo: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=200',
      description: 'Fueling our competitive spirit and events'
    },
    {
      name: 'Secretlab',
      category: 'Gaming Chairs',
      logo: 'https://images.pexels.com/photos/4491461/pexels-photo-4491461.jpeg?auto=compress&cs=tinysrgb&w=200',
      description: 'Premium gaming chairs for optimal performance'
    },
    {
      name: 'Discord',
      category: 'Communication',
      logo: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=200',
      description: 'Connecting our community and teams'
    },
    {
      name: 'Twitch',
      category: 'Streaming Platform',
      logo: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=200',
      description: 'Official streaming and content platform'
    }
  ];

  const benefits = [
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Access to millions of esports fans worldwide through our platforms and events.'
    },
    {
      icon: Star,
      title: 'Premium Content',
      description: 'High-quality content creation and brand integration opportunities.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Cutting-edge marketing strategies and authentic brand storytelling.'
    },
    {
      icon: Handshake,
      title: 'Long-term Partnership',
      description: 'Building lasting relationships that grow with our organization.'
    }
  ];

  return (
    <section id="partnerships" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-purple-400">Partners</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We work with industry-leading brands to deliver exceptional experiences for our community
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-20">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl p-6 text-center border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-lg overflow-hidden">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-white font-bold mb-2">{partner.name}</h3>
              <p className="text-purple-400 text-sm mb-2">{partner.category}</p>
              <p className="text-gray-400 text-xs">{partner.description}</p>
            </div>
          ))}
        </div>

        {/* Partnership Benefits */}
        <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-2xl p-8 md:p-12 border border-purple-500/20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-6">Why Partner with XSET?</h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join forces with one of the fastest-growing esports organizations and tap into 
              the passionate gaming community that follows our journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <benefit.icon className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-white mb-3">{benefit.title}</h4>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Become a Partner
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partnerships;