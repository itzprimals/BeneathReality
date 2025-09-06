import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowUpRight, Trophy, Users, Target } from 'lucide-react';

const BeneathCurrent = () => {
  const featuredNews = [
    {
      title: 'BENEATH Ultimate Zonewars',
      excerpt: 'Beneath Fortnite Ultimate Zonewars, Winning Duo receives $200',
      date: '2024-08-1',
      category: 'Custom Tournament',
      image: 'https://i.imgur.com/yRS3roR.png?auto=compress&cs=tinysrgb&w=800',
      featured: true,
      icon: Trophy
    },
    {
      title: 'BENEATH Expands to Rocket League',
      excerpt: 'Beneath Expands to Rocket League.',
      date: '2025-06-26',
      category: 'Title Expansion',
      image: 'https://i.imgur.com/fME2uc5.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: Target
    },
    {
      title: 'BENEATH x G-FUEL',
      excerpt: 'Beneath Announces their Sponsorship with G-Fuel.',
      date: '2025-07-12',
      category: 'Sponsorship',
      image: 'https://i.imgur.com/M0mUODA.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: Users
    }
  ];

  return (
    <section id="news" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="text-purple-400">BENEATH</span> Current
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Stay updated with the latest news and developments from our organization
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Featured Article */}
          <div className="lg:col-span-1">
            <article className="group relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl overflow-hidden border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 h-full">
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={featuredNews[0].image}
                  alt={featuredNews[0].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                <div className="absolute top-4 left-4 flex items-center space-x-2">
                  {(() => {
                    const Icon = featuredNews[0].icon;
                    return (
                  <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Icon className="w-4 h-4 mr-2" />
                    {featuredNews[0].category}
                  </span>
                    );
                  })()}
                  <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    FEATURED
                  </span>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center text-gray-400 text-sm mb-4">
                  <Calendar className="w-4 h-4 mr-2" />
                  {new Date(featuredNews[0].date).toLocaleDateString()}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors duration-200">
                  {featuredNews[0].title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{featuredNews[0].excerpt}</p>
                <button className="flex items-center text-purple-400 hover:text-purple-300 font-semibold transition-colors duration-200">
                  Read Full Story
                  <ArrowUpRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </article>
          </div>

          {/* Side Articles */}
          <div className="space-y-6">
            {featuredNews.slice(1).map((item, index) => (
              <article
                key={index}
                className="group bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl overflow-hidden border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300"
              >
                <div className="flex">
                  <div className="w-1/3 aspect-square relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-900/20"></div>
                  </div>
                  
                  <div className="flex-1 p-6">
                    <div className="flex items-center text-gray-400 text-xs mb-2">
                      {(() => {
                        const Icon = item.icon;
                        return <Icon className="w-3 h-3 mr-1" />;
                      })()}
                      <span className="mr-3">{item.category}</span>
                      <Calendar className="w-3 h-3 mr-1" />
                      {new Date(item.date).toLocaleDateString()}
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-200 line-clamp-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-300 text-sm mb-3 line-clamp-2">{item.excerpt}</p>
                    <button className="flex items-center text-blue-400 hover:text-blue-300 text-sm font-semibold transition-colors duration-200">
                      Read More
                      <ArrowUpRight className="w-3 h-3 ml-1" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/news" 
            className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            View All News
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BeneathCurrent;