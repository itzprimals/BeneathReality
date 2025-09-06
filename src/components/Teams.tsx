import React from 'react';
import { Trophy, Users, Target } from 'lucide-react';

const Teams = () => {
  const teams = [
    {
      game: 'VALORANT',
      image: 'https://i.imgur.com/MKiUWWA.png?auto=compress&cs=tinysrgb&w=600',
      achievements: ['Champions 2023', 'Masters Berlin'],
      icon: Target
    },
    {
      game: 'Fortnite',
      image: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=600',
      achievements: ['FNCS Champion', 'World Cup Qualifier'],
      icon: Trophy
    },
    {
      game: '3rd Roster Soon',
      image: 'https://images.pexels.com/photos/4491461/pexels-photo-4491461.jpeg?auto=compress&cs=tinysrgb&w=600',
      achievements: ['ALGS Championship', 'Regional Champions'],
      icon: Users
    }
  ];

  return (
    <section id="teams" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-purple-400">Teams</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Elite competitors across the most popular esports titles
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teams.map((team, index) => (
            <div
              key={team.game}
              className="group relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 border border-purple-500/20 hover:border-purple-500/40"
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={team.image}
                  alt={team.game}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <team.icon className="w-8 h-8 text-purple-400" />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-4">{team.game}</h3>
                <div className="space-y-2">
                  {team.achievements.map((achievement, achievementIndex) => (
                    <div
                      key={achievementIndex}
                      className="flex items-center text-gray-300"
                    >
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                      {achievement}
                    </div>
                  ))}
                </div>
                <button className="mt-6 w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition-colors duration-200">
                  View Roster
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teams;