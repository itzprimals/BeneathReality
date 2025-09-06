import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Play, Eye, Clock } from 'lucide-react';

const RecentVideos = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const videos = [
    {
      title: 'The *ONE CHEST* Challenge in Fortnite!',
      thumbnail: 'https://i.imgur.com/cJeykxy.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '21:19',
      views: '1K',
      uploadDate: '4 weeks ago',
      videoId: 'CRxAEZ-Xr5Q'
    },
    {
      title: 'ONE CALL 📞 | Beneath Teamtage #2',
      thumbnail: 'https://i.imgur.com/lngcbUn.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '1:43',
      views: '1.3K',
      uploadDate: '2 months ago',
      videoId: 'CRxAEZ-Xr5Q'
    },
    {
      title: '$500 Fortnite *PRO* Kill Race',
      thumbnail: 'https://i.imgur.com/IfM99mY.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '9:08',
      views: '430',
      uploadDate: '3 months ago',
      videoId: 'CRxAEZ-Xr5Q'
    },
    {
      title: 'F*ck The Industry ❌ | Beneath Teamtage #1',
      thumbnail: 'https://i.imgur.com/iMrZjRb.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '2:00',
      views: '1K',
      uploadDate: '4 months ago',
      videoId: 'CRxAEZ-Xr5Q'
    },
    {
      title: 'How to JOIN OUR FORTNITE TEAM',
      thumbnail: 'https://i.imgur.com/2Og4ybK.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '0:25',
      views: '980',
      uploadDate: '1 month ago',
      videoId: 'CRxAEZ-Xr5Q'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(videos.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(videos.length / 3)) % Math.ceil(videos.length / 3));
  };

  const getVisibleVideos = () => {
    const startIndex = currentSlide * 3;
    return videos.slice(startIndex, startIndex + 3);
  };

  return (
    <section id="videos" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Recent <span className="text-purple-400">YouTube Videos</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Catch up on our latest content and highlights
          </p>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full transition-colors duration-200 shadow-lg"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full transition-colors duration-200 shadow-lg"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Video Slides */}
          <div className="overflow-hidden mx-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {getVisibleVideos().map((video, index) => (
                <a
                  key={index}
                  href="https://www.youtube.com/@Beneathgg/videos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 border border-purple-500/20 hover:border-purple-500/40 cursor-pointer"
                >
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                    <div className="absolute bottom-4 right-4 bg-black/80 text-white px-2 py-1 rounded text-xs flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {video.duration}
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Play className="w-16 h-16 text-white" />
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-white mb-3 line-clamp-2 group-hover:text-purple-400 transition-colors duration-200">
                      {video.title}
                    </h3>
                    <div className="flex items-center justify-between text-gray-400 text-sm">
                      <div className="flex items-center">
                        <Eye className="w-3 h-3 mr-1" />
                        {video.views}
                      </div>
                      <span>{video.uploadDate}</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: Math.ceil(videos.length / 3) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  currentSlide === index ? 'bg-purple-400' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentVideos;