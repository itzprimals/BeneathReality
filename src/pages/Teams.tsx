import React from 'react';
import { Trophy, Users, Target, Calendar, MapPin } from 'lucide-react';

const Teams = () => {
  const teams = [
    {
      game: 'VALORANT',
      image: 'https://i.imgur.com/MKiUWWA.png?auto=compress&cs=tinysrgb&w=600',
      achievements: ['Grand Finals RETAKE Tournament', 'TBD'],
      icon: Target,
      teamUrl: 'https://x.com/syax_ag',
      players: [
        { name: 'BNTH SYAX', role: 'Comp Player' },
        { name: 'BNTH CNVX', role: 'Comp Player' },
        { name: 'BNTH KAYUCO', role: 'Comp Player' },
        { name: 'BNTH AXL', role: 'Comp Player' },
        { name: 'BNTH ROCKO', role: 'Comp Player' },
        { name: 'BNTH HOMMIES', role: 'Comp Player' }
      ]
    },
    {
      game: 'Fortnite',
      image: 'https://i.imgur.com/MKiUWWA.png?auto=compress&cs=tinysrgb&w=600',
      achievements: ['TBD', 'TBD'],
      icon: Trophy,
      teamUrl: 'https://x.com/laysfnx',
      players: [
        { name: 'BNTH Lays', role: 'Pro Fortnite' },
        { name: 'BNTH ???', role: 'Pro Fortnite' },
        { name: 'BNTH ???', role: 'Pro Fortnite' }
      ]
    },
    {
      game: 'Apex Legends',
      image: 'https://i.imgur.com/MKiUWWA.png?auto=compress&cs=tinysrgb&w=600',
      achievements: ['TBD', 'TBD'],
      icon: Users,
      teamUrl: 'https://x.com/JCtheguru06',
      players: [
        { name: 'BNTH JC', role: 'Comp Player' },
        { name: 'BNTH BLADEZ', role: 'Comp Player' },
        { name: 'BNTH SENSAI', role: 'Comp Player' },
        { name: 'BNTH ZIX', role: 'Comp Player' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-purple-400">Teams</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Elite competitors across the most popular esports titles
          </p>
        </div>

        <div className="space-y-16">
          {teams.map((team, index) => (
            <div key={team.game} className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl overflow-hidden border border-purple-500/20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="aspect-video lg:aspect-square relative overflow-hidden">
                  <img
                    src={team.image}
                    alt={team.game}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <team.icon className="w-8 h-8 text-purple-400" />
                  </div>
                </div>
                
                <div className="p-8">
                  <h2 className="text-3xl font-bold text-white mb-4">{team.game}</h2>
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-purple-400 mb-3">Achievements</h3>
                    <div className="space-y-2">
                      {team.achievements.map((achievement, achievementIndex) => (
                        <div key={achievementIndex} className="flex items-center text-gray-300">
                          <Trophy className="w-4 h-4 text-yellow-400 mr-3" />
                          {achievement}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-purple-400 mb-3">Roster</h3>
                    <div className="space-y-3">
                      {team.players.map((player, playerIndex) => (
                        <a 
                          key={playerIndex} 
                          href={team.teamUrl}
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center justify-between bg-gray-700/50 rounded-lg p-3 hover:bg-gray-600/50 transition-colors duration-200 cursor-pointer"
                        >
                          <span className="text-white font-medium">{player.name}</span>
                          <span className="text-purple-400 text-sm">{player.role}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Teams;