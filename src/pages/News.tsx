import React from 'react';
import { Calendar, ArrowUpRight, Trophy, Users, Target, Eye } from 'lucide-react';

const News = () => {
  const newsItems = [
    {
      title: 'BENEATH Ultimate Zonewars',
      excerpt: 'Beneath Fortnite Ultimate Zonewars, Winning Duo receives $200.',
      date: '2024-08-1',
      category: 'Custom Tournaments',
      image: 'https://i.imgur.com/yRS3roR.png?auto=compress&cs=tinysrgb&w=600',
      featured: true,
      views: '1',
      icon: Trophy
    },
    {
      title: 'BENEATH Expands to Rocket League',
      excerpt: 'Beneath Expans to Rocket League.',
      date: '2024-06-25',
      category: 'Title Expansion',
      image: 'https://i.imgur.com/fME2uc5.jpeg?auto=compress&cs=tinysrgb&w=600',
      views: '1',
      icon: Users
    },
    {
      title: 'BENEATH x G-FUEL',
      excerpt: 'Beneath Announces their Sponsorship with G-Fuel.',
      date: '2024-07-11',
      category: 'Sponsorship',
      image: 'https://i.imgur.com/M0mUODA.jpeg?auto=compress&cs=tinysrgb&w=600',
      views: '1',
      icon: Target
    },
    {
      title: 'COMING SOON',
      excerpt: 'Coming Soon',
      date: '2025-00-00',
      category: 'TBD',
      image: 'https://i.imgur.com/MKiUWWA.png?auto=compress&cs=tinysrgb&w=600',
      views: '1',
      icon: Users
    },
    {
      title: 'COMING SOON',
      excerpt: 'Coming Soon',
      date: '2025-00-00',
      category: 'TBD',
      image: 'https://i.imgur.com/MKiUWWA.png?auto=compress&cs=tinysrgb&w=600',
      views: '1',
      icon: Target
    },
    {
      title: 'COMING SOON',
      excerpt: 'Coming Soon',
      date: '2025-00-00',
      category: 'TBD',
      image: 'https://i.imgur.com/MKiUWWA.png?auto=compress&cs=tinysrgb&w=600',
      views: '1',
      icon: Trophy
    }
  ];

  const featuredNews = newsItems[0];
  const regularNews = newsItems.slice(1);

  return (
    <div className="min-h-screen bg-black pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Latest <span className="text-purple-400">News</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Stay updated with the latest from BENEATH
          </p>
        </div>

        {/* Featured Article */}
        <div className="mb-16">
          <article className="group relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl overflow-hidden border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="aspect-video lg:aspect-square relative overflow-hidden">
                <img
                  src={featuredNews.image}
                  alt={featuredNews.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                <div className="absolute top-4 left-4 flex items-center space-x-2">
                  <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                    <featuredNews.icon className="w-4 h-4 mr-2" />
                    {featuredNews.category}
                  </span>
                  <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    FEATURED
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 flex items-center bg-black/60 text-white px-2 py-1 rounded text-sm">
                  <Eye className="w-3 h-3 mr-1" />
                  {featuredNews.views}
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center text-gray-400 text-sm mb-4">
                  <Calendar className="w-4 h-4 mr-2" />
                  {new Date(featuredNews.date).toLocaleDateString()}
                </div>
                <h2 className="text-3xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors duration-200">
                  {featuredNews.title}
                </h2>
                <p className="text-gray-300 mb-6 text-lg leading-relaxed">{featuredNews.excerpt}</p>
                <button className="flex items-center text-purple-400 hover:text-purple-300 font-semibold transition-colors duration-200">
                  Read Full Story
                  <ArrowUpRight className="w-5 h-5 ml-2" />
                </button>
              </div>
            </div>
          </article>
        </div>

        {/* Regular News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularNews.map((item, index) => (
            <article
              key={index}
              className="group bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl overflow-hidden border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                <div className="absolute top-3 left-3">
                  <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-semibold flex items-center">
                    <item.icon className="w-3 h-3 mr-1" />
                    {item.category}
                  </span>
                </div>
                <div className="absolute bottom-3 right-3 flex items-center bg-black/60 text-white px-2 py-1 rounded text-xs">
                  <Eye className="w-3 h-3 mr-1" />
                  {item.views}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-gray-400 text-xs mb-3">
                  <Calendar className="w-3 h-3 mr-1" />
                  {new Date(item.date).toLocaleDateString()}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-200 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">{item.excerpt}</p>
                <button className="flex items-center text-blue-400 hover:text-blue-300 text-sm font-semibold transition-colors duration-200">
                  Read More
                  <ArrowUpRight className="w-3 h-3 ml-1" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;