import React from 'react';
import { Trophy, MapPin, Calendar } from 'lucide-react';

const Players = () => {
  const players = [
    {
      name: 'Jordan "Zekken" Montemurro',
      role: 'Duelist',
      game: 'VALORANT',
      country: 'USA',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400',
      achievements: ['VCT Champions 2023', 'Masters Tokyo'],
      joinDate: '2022-01-15'
    },
    {
      name: 'Matthew "Cryocells" Panganiban',
      role: 'Sentinel',
      game: 'VALORANT',
      country: 'USA',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=400',
      achievements: ['VCT Americas League', 'Masters Berlin'],
      joinDate: '2021-08-20'
    },
    {
      name: 'Aydan "Aydan" Conrad',
      role: 'Content Creator',
      game: 'Fortnite',
      country: 'USA',
      image: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=400',
      achievements: ['FNCS Champion', 'World Cup Qualifier'],
      joinDate: '2020-03-10'
    },
    {
      name: 'Zer0 "Zer0" Gaming',
      role: 'IGL',
      game: 'Apex Legends',
      country: 'Canada',
      image: 'https://images.pexels.com/photos/4491461/pexels-photo-4491461.jpeg?auto=compress&cs=tinysrgb&w=400',
      achievements: ['ALGS Championship', 'Regional Champions'],
      joinDate: '2021-11-05'
    }
  ];

  return (
    <section id="players" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Meet Our <span className="text-purple-400">Players</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Elite competitors representing XSET across multiple esports titles
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {players.map((player, index) => (
            <div
              key={index}
              className="group bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 border border-purple-500/20 hover:border-purple-500/40"
            >
              <div className="aspect-square relative overflow-hidden">
                <img
                  src={player.image}
                  alt={player.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {player.game}
                  </span>
                </div>
                <div className="absolute top-4 right-4 flex items-center text-white text-sm">
                  <MapPin className="w-4 h-4 mr-1" />
                  {player.country}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{player.name}</h3>
                <p className="text-purple-400 font-semibold mb-4">{player.role}</p>
                
                <div className="space-y-2 mb-4">
                  {player.achievements.slice(0, 2).map((achievement, achievementIndex) => (
                    <div
                      key={achievementIndex}
                      className="flex items-center text-gray-300 text-sm"
                    >
                      <Trophy className="w-3 h-3 text-yellow-400 mr-2" />
                      {achievement}
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center text-gray-400 text-sm">
                  <Calendar className="w-4 h-4 mr-2" />
                  Joined {new Date(player.joinDate).toLocaleDateString()}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Players;