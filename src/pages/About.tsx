import React from 'react';
import { Users, Trophy, Calendar, Target, Heart, Zap, Globe, Star } from 'lucide-react';

const About = () => {
  const stats = [
    { label: 'Founded', value: '2020', icon: Calendar },
    { label: 'Games', value: '3', icon: Users },
    { label: 'Grand Finals', value: '5', icon: Trophy },
    { label: 'Titles', value: '1', icon: Target }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Passion',
      description: 'We live and breathe esports, bringing unmatched dedication to everything we do.'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for perfection in competition and set the highest standards for ourselves.'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Our fans and community are at the heart of everything we do and achieve.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We embrace new technologies and strategies to stay ahead of the competition.'
    }
  ];

  const milestones = [
    {
      year: 'May, 2020',
      title: 'BENEATH Founded',
      description: 'Developed branding after the ministry and pulled in a full token team. Exclusive organization with only 40+ members and reaching heights for being a tournament based organization. Undefeated and profitable through wins.'
    },
    {
      year: 'August, 2020',
      title: 'Reputable Status',
      description: 'Achieved an everlasting status in the fortnite community and built a massive following through instagram and discord. Achieved 4k+ subscribers on YouTube, 40k+ followers on Instagram, and 4k+ members on Discord.'
    },
    {
      year: '2022',
      title: 'Departure',
      description: 'Beneath ends its legacy after a long run of achievements, status, and growth.'
    },
    {
      year: 'March, 2025',
      title: 'Revival',
      description: 'Beneath returns with all of the original founders and owners while building another massive following in two weeks. Manifestation #1 dropping, revealing the showcase of their revival. Reaching 2k+ Discord members in only 2 weeks.'
    },
    {
      year: 'May-July, 2025',
      title: 'Game Expansion',
      description: 'Beneath expands to all three new devisions to now reach higher heights in the esports scene. In Fortnite, beneath lands in the competitive scene with 3x FNCS Grand Final qualifications. Overall, beneath has achieved huge things. From their Valorant Team reaching the RETAKE Grand Finals, to having the status of one of the most successful-developed token-based community for tournament visions. Becoming profitable after only 4 months of the re-run and becoming sponsored by Tangem Wallets, one of the biggest Crypto Wallets in the world.'
    }
  ];

  return (
    <div className="min-h-screen bg-black pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-purple-400">BENEATH</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Founded in 2020, BENEATH has rapidly become one of the most recognizable names in competitive esports. 
            We represent the next generation of gaming excellence, combining top-tier talent with innovative 
            content creation and community engagement.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl p-6 border border-purple-500/20"
            >
              <stat.icon className="w-8 h-8 text-purple-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-2xl p-8 md:p-12 mb-20 border border-purple-500/20">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              To build the most innovative and successful esports organization in the world, while creating 
              meaningful connections with our community and pushing the boundaries of competitive gaming. 
              We believe in the power of esports to bring people together and inspire the next generation 
              of gamers and creators.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl p-6 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300"
              >
                <value.icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-purple-500/20"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl p-6 border border-purple-500/20">
                      <div className="text-2xl font-bold text-purple-400 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-white mb-3">{milestone.title}</h3>
                      <p className="text-gray-300">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-purple-500 rounded-full border-4 border-black"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Photo */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Meet the Team</h2>
          <div className="relative rounded-2xl overflow-hidden">
            <img
              src="https://i.imgur.com/MKiUWWA.png?auto=compress&cs=tinysrgb&w=1200"
              alt="BENEATH Team"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8 text-left">
              <h3 className="text-2xl font-bold text-white mb-2">BENEATH Family</h3>
              <p className="text-gray-300">
                Our diverse team of players, content creators, and staff working together to achieve greatness.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;