import React from 'react';
import { Users, Trophy, Calendar, Target, Heart, Zap } from 'lucide-react';

const About = () => {
  const stats = [
    { label: 'Founded', value: '2020', icon: Calendar },
    { label: 'Grand Finals', value: '5', icon: Users },
    { label: 'Titles', value: '1', icon: Trophy },
    { label: 'Games', value: '3', icon: Target }
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

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-purple-400">XSET</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Founded in 2020, XSET has rapidly become one of the most recognizable names in competitive esports. 
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
            <h3 className="text-3xl font-bold text-white mb-6">Our Mission</h3>
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
          <h3 className="text-3xl font-bold text-white text-center mb-12">Our Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl p-6 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300"
              >
                <value.icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-white mb-3">{value.title}</h4>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Photo */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-white mb-8">Meet the Team</h3>
          <div className="relative rounded-2xl overflow-hidden">
            <img
              src="https://images.pexels.com/photos/3810792/pexels-photo-3810792.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="XSET Team"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8 text-left">
              <h4 className="text-2xl font-bold text-white mb-2">XSET Family</h4>
              <p className="text-gray-300">
                Our diverse team of players, content creators, and staff working together to achieve greatness.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;