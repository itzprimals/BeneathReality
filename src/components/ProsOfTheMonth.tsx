import React from 'react';
import { Star, Trophy, Calendar, MapPin, Users } from 'lucide-react';

const CreatorsOfTheMonth = () => {
  const newCreators = [
    {
      name: 'BNTH Abe',
      role: 'Streamer',
      game: 'Fortnite',
      country: 'NA',
      image: 'https://i.imgur.com/dpxgq3P.png?auto=compress&cs=tinysrgb&w=400',
      previousTeam: 'Beneath',
      achievements: ['100 Followers'],
      joinDate: '2025-07-00',
      stats: { followers: '100', avgViews: '5', engagement: '100%' }
    },
    {
      name: 'BNTH Sean',
      role: 'Content Creator',
      game: 'Fortnite',
      country: 'NA',
      image: 'https://i.imgur.com/mGAQMoD.jpeg?auto=compress&cs=tinysrgb&w=400',
      previousTeam: 'Beneath',
      achievements: ['400 Followers'],
      joinDate: '2024-07-00',
      stats: { subscribers: '400', avgViews: '250K', engagement: '100%' }
    }
  ];

  return (
    <section id="pros" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Creators of the <span className="text-purple-400">Month</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Welcome our newest content creators who joined BENEATH this month
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {newCreators.map((creator, index) => (
            <div
              key={index}
              className="group bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 border border-purple-500/20 hover:border-purple-500/40 relative"
            >
              {/* New Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center">
                  <Star className="w-4 h-4 mr-1" />
                  NEW
                </span>
              </div>

              <div className="aspect-square relative overflow-hidden">
                <img
                  src={creator.image}
                  alt={creator.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4 flex items-center text-white text-sm bg-black/60 px-2 py-1 rounded">
                  <MapPin className="w-4 h-4 mr-1" />
                  {creator.country}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {creator.game}
                  </span>
                  <div className="flex items-center text-gray-400 text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(creator.joinDate).toLocaleDateString()}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{creator.name}</h3>
                <p className="text-purple-400 font-semibold mb-3">{creator.role}</p>
                
                <div className="mb-4">
                  <p className="text-gray-300 text-sm mb-2">
                    <span className="font-semibold">Previous:</span> {creator.previousTeam}
                  </p>
                </div>

                <div className="space-y-2 mb-4">
                  <h4 className="text-white font-semibold text-sm">Key Achievements:</h4>
                  {creator.achievements.map((achievement, achievementIndex) => (
                    <div
                      key={achievementIndex}
                      className="flex items-center text-gray-300 text-sm"
                    >
                      <Trophy className="w-3 h-3 text-yellow-400 mr-2" />
                      {achievement}
                    </div>
                  ))}
                </div>

                {/* Stats */}
                <div className="bg-gray-700/50 rounded-lg p-3">
                  <h4 className="text-white font-semibold text-sm mb-2">Stats:</h4>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    {Object.entries(creator.stats).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-purple-400 font-bold">{value}</div>
                        <div className="text-gray-400 uppercase">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-2xl p-8 border border-purple-500/20">
            <Users className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">Join Our Discord!</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join Our Official Discord Server Now!
            </p>
            <a 
              href="https://discord.gg/GYDY6CW5GQ" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Join Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};


export default CreatorsOfTheMonth