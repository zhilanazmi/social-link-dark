import React from 'react';
import AnimatedBackground from './components/AnimatedBackground';
import Avatar from './components/Avatar';
import Profile from './components/Profile';
import SocialLinks from './components/SocialLinks';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white overflow-hidden">
      <AnimatedBackground />
      
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-8">
        <div className="w-full max-w-lg mx-auto backdrop-blur-sm bg-gray-900/10 rounded-3xl p-8 border border-gray-800/30">
          <Avatar />
          <Profile />
          <SocialLinks />
        </div>
        
        {/* Subtle footer */}
        <div className="absolute bottom-4 text-center">
          <p className="text-gray-600 text-xs animate-fade-in animation-delay-1500 flex items-center justify-center gap-1">
            Made with ❤️ by Zhillan Azmi
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;