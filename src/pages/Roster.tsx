import React from 'react';
import { Users, Crown, Shield } from 'lucide-react';

const Roster = () => {
  const roundTableMembers = [
    { name: 'Knives', role: ' ', position: 0, image: 'https://i.imgur.com/TJLHqVW.jpeg' },
    { name: 'Zork', role: ' ', position: 1, image: 'https://i.imgur.com/YiW3BAb.png' },
    { name: 'Bat', role: ' ', position: 2, image: 'https://i.imgur.com/otbhl66.jpeg' },
    { name: 'Sean', role: ' ', position: 3, image: 'https://i.imgur.com/s75I2Sd.jpeg' },
    { name: 'Primal', role: ' ', position: 4, image: 'https://i.imgur.com/3N9yVqE.jpeg' },
    { name: 'Judah', role: ' ', position: 5, image: 'https://i.imgur.com/9VCc9LY.jpeg' },
    { name: 'Rehzo', role: ' ', position: 6, image: 'https://imgur.com/a/0GwIsxF.jpeg' },
    { name: 'Eli', role: ' ', position: 7, image: 'https://i.imgur.com/boFtHF4.jpeg' }
  ];

  // Calculate positions for circular layout
  const getCirclePosition = (index: number, total: number, radius: number) => {
    const angle = (index * 2 * Math.PI) / total - Math.PI / 2; // Start from top
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    return { x, y };
  };

  const radius = 200; // Distance from center

  return (
    <div className="min-h-screen bg-black pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            The <span className="text-purple-400">Round Table</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Meet the leadership team that guides BENEATH to excellence in competitive gaming and content creation
          </p>
        </div>

        {/* Circular Diagram */}
        <div className="flex justify-center mb-20">
          <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] mx-auto">
            {/* Center Logo */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-b from-purple-600 to-blue-600 rounded-full flex items-center justify-center border-2 sm:border-3 lg:border-4 border-white shadow-2xl">
                <Crown className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white" />
              </div>
              <div className="text-center mt-2 sm:mt-3 lg:mt-4">
                <h3 className="text-white font-bold text-sm sm:text-base lg:text-lg">BENEATH</h3>
                <p className="text-purple-400 text-xs sm:text-sm">Leadership</p>
              </div>
            </div>

            {/* Connection Lines */}
            <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
              {roundTableMembers.map((_, index) => {
                const currentRadius = window.innerWidth < 640 ? 120 : window.innerWidth < 1024 ? 160 : radius;
                const pos = getCirclePosition(index, roundTableMembers.length, currentRadius);
                const centerX = window.innerWidth < 640 ? 150 : window.innerWidth < 1024 ? 200 : 250;
                const centerY = window.innerWidth < 640 ? 150 : window.innerWidth < 1024 ? 200 : 250;
                return (
                  <line
                    key={index}
                    x1={centerX}
                    y1={centerY}
                    x2={centerX + pos.x}
                    y2={centerY + pos.y}
                    stroke="rgba(147, 51, 234, 0.3)"
                    strokeWidth="1.5"
                    strokeDasharray="5,5"
                  />
                );
              })}
            </svg>

            {/* Member Circles */}
            {roundTableMembers.map((member, index) => {
              const currentRadius = window.innerWidth < 640 ? 120 : window.innerWidth < 1024 ? 160 : radius;
              const pos = getCirclePosition(index, roundTableMembers.length, currentRadius);
              const centerX = window.innerWidth < 640 ? 150 : window.innerWidth < 1024 ? 200 : 250;
              const centerY = window.innerWidth < 640 ? 150 : window.innerWidth < 1024 ? 200 : 250;
              return (
                <div
                  key={index}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 group"
                  style={{
                    left: `${centerX + pos.x}px`,
                    top: `${centerY + pos.y}px`,
                    zIndex: 5
                  }}
                >
                  <div className="relative">
                    {/* Member Circle */}
                    <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-b from-gray-700 to-gray-800 rounded-full flex items-center justify-center border-2 sm:border-3 border-purple-500/50 group-hover:border-purple-400 transition-all duration-300 group-hover:scale-110 shadow-xl">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    
                    {/* Member Info */}
                    <div className="absolute top-full mt-2 sm:mt-3 lg:mt-4 left-1/2 transform -translate-x-1/2 text-center min-w-[80px] sm:min-w-[100px] lg:min-w-[120px]">
                      <h4 className="text-white font-bold text-xs sm:text-sm mb-1 group-hover:text-purple-400 transition-colors duration-200">
                        {member.name}
                      </h4>
                      <p className="text-gray-400 text-xs sm:text-xs">{member.role}</p>
                    </div>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 rounded-full bg-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Leadership Philosophy */}
        <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-2xl p-8 md:p-12 border border-purple-500/20 mb-16">
          <div className="text-center">
            <Shield className="w-16 h-16 text-purple-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-6">Our Leadership Philosophy</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              The Round Table represents our commitment to collaborative leadership and shared vision. 
              Each member brings unique expertise and perspective, working together to guide BENEATH 
              toward continued success in competitive gaming, content creation, and community building.
            </p>
          </div>
        </div>

        {/* Leadership Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl p-6 border border-purple-500/20">
            <div className="text-3xl font-bold text-purple-400 mb-2">8</div>
            <div className="text-white font-semibold mb-1">Leadership Members</div>
            <div className="text-gray-400 text-sm">Diverse expertise across all areas</div>
          </div>
          
          <div className="text-center bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl p-6 border border-blue-500/20">
            <div className="text-3xl font-bold text-blue-400 mb-2">20</div>
            <div className="text-white font-semibold mb-1">Years Combined Experience</div>
            <div className="text-gray-400 text-sm">In gaming and business leadership</div>
          </div>
          
          <div className="text-center bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl p-6 border border-purple-500/20">
            <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
            <div className="text-white font-semibold mb-1">Dedicated Leadership</div>
            <div className="text-gray-400 text-sm">Always working for team success</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roster;