import React from 'react';
import { Play, Eye, Clock, ArrowUpRight } from 'lucide-react';

const Content = () => {
  const videos = [
    {
      title: 'XSET vs Sentinels - VCT Highlights',
      thumbnail: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600',
      duration: '12:34',
      views: '2.1M',
      uploadDate: '2 days ago',
      type: 'Highlights'
    },
    {
      title: 'Behind the Scenes: Team Bootcamp',
      thumbnail: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600',
      duration: '8:45',
      views: '856K',
      uploadDate: '5 days ago',
      type: 'Documentary'
    },
    {
      title: 'Player Spotlight: Zekken\'s Journey',
      thumbnail: 'https://images.pexels.com/photos/4491461/pexels-photo-4491461.jpeg?auto=compress&cs=tinysrgb&w=600',
      duration: '15:22',
      views: '1.3M',
      uploadDate: '1 week ago',
      type: 'Interview'
    },
    {
      title: 'XSET Fortnite Squad Wins Championship',
      thumbnail: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=600',
      duration: '6:18',
      views: '3.2M',
      uploadDate: '2 weeks ago',
      type: 'Highlights'
    }
  ];

  const streams = [
    {
      streamer: 'Zekken',
      game: 'VALORANT',
      viewers: '12.4K',
      title: 'Ranked Grind to Radiant',
      thumbnail: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=300',
      isLive: true
    },
    {
      streamer: 'Aydan',
      game: 'Fortnite',
      viewers: '8.7K',
      title: 'Zero Build Arena Practice',
      thumbnail: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=300',
      isLive: true
    }
  ];

  return (
    <section id="content" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Latest <span className="text-blue-400">Content</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Watch highlights, behind-the-scenes content, and live streams from our players
          </p>
        </div>

        {/* Live Streams */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
            <div className="w-3 h-3 bg-red-500 rounded-full mr-3 animate-pulse"></div>
            Live Now
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {streams.map((stream, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl overflow-hidden border border-red-500/30 hover:border-red-500/60 transition-all duration-300"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={stream.thumbnail}
                    alt={stream.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                  <div className="absolute top-4 left-4 flex items-center space-x-2">
                    <span className="bg-red-600 text-white px-2 py-1 rounded text-sm font-semibold flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
                      LIVE
                    </span>
                    <span className="bg-black/60 text-white px-2 py-1 rounded text-sm">
                      {stream.game}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 bg-black/60 text-white px-2 py-1 rounded text-sm flex items-center">
                    <Eye className="w-3 h-3 mr-1" />
                    {stream.viewers}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Play className="w-16 h-16 text-white" />
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="text-lg font-bold text-white mb-1">{stream.streamer}</h4>
                  <p className="text-gray-300 text-sm">{stream.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Videos */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8">Recent Videos</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {videos.map((video, index) => (
              <div
                key={index}
                className="group bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 border border-blue-500/20 hover:border-blue-500/40"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-semibold">
                      {video.type}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black/80 text-white px-2 py-1 rounded text-xs flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {video.duration}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Play className="w-12 h-12 text-white" />
                  </div>
                </div>
                
                <div className="p-4">
                  <h4 className="text-lg font-bold text-white mb-2 line-clamp-2 group-hover:text-blue-400 transition-colors duration-200">
                    {video.title}
                  </h4>
                  <div className="flex items-center justify-between text-gray-400 text-sm">
                    <div className="flex items-center">
                      <Eye className="w-3 h-3 mr-1" />
                      {video.views}
                    </div>
                    <span>{video.uploadDate}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center mx-auto">
            View All Content
            <ArrowUpRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Content;