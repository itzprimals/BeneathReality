import React from 'react';
import { Calendar, ArrowUpRight } from 'lucide-react';

const News = () => {
  const newsItems = [
    {
      title: 'XSET VALORANT Wins Regional Championship',
      excerpt: 'Our VALORANT roster dominates the competition with a flawless 3-0 victory in the regional finals.',
      date: '2024-01-15',
      category: 'VALORANT',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600',
      featured: true
    },
    {
      title: 'New Fortnite Roster Announcement',
      excerpt: 'We\'re excited to welcome three new talented players to our competitive Fortnite team.',
      date: '2024-01-12',
      category: 'Fortnite',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Partnership with Leading Gaming Brand',
      excerpt: 'XSET announces strategic partnership to enhance player performance and fan experience.',
      date: '2024-01-10',
      category: 'Partnership',
      image: 'https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Community Event This Weekend',
      excerpt: 'Join us for exclusive content, giveaways, and meet & greet with your favorite players.',
      date: '2024-01-08',
      category: 'Community',
      image: 'https://images.pexels.com/photos/3810792/pexels-photo-3810792.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  return (
    <section id="news" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Latest <span className="text-blue-400">News</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Stay updated with the latest from XSET
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Featured Article */}
          <div className="lg:col-span-2">
            <article className="group relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl overflow-hidden border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={newsItems[0].image}
                  alt={newsItems[0].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {newsItems[0].category}
                  </span>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center text-gray-400 text-sm mb-4">
                  <Calendar className="w-4 h-4 mr-2" />
                  {new Date(newsItems[0].date).toLocaleDateString()}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-200">
                  {newsItems[0].title}
                </h3>
                <p className="text-gray-300 mb-6">{newsItems[0].excerpt}</p>
                <button className="flex items-center text-blue-400 hover:text-blue-300 font-semibold transition-colors duration-200">
                  Read More
                  <ArrowUpRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </article>
          </div>

          {/* Side Articles */}
          <div className="space-y-6">
            {newsItems.slice(1).map((item, index) => (
              <article
                key={index}
                className="group bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl overflow-hidden border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                  <div className="absolute top-3 left-3">
                    <span className="bg-purple-600 text-white px-2 py-1 rounded text-xs font-semibold">
                      {item.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-gray-400 text-xs mb-3">
                    <Calendar className="w-3 h-3 mr-1" />
                    {new Date(item.date).toLocaleDateString()}
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-200 line-clamp-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">{item.excerpt}</p>
                  <button className="flex items-center text-purple-400 hover:text-purple-300 text-sm font-semibold transition-colors duration-200">
                    Read More
                    <ArrowUpRight className="w-3 h-3 ml-1" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;