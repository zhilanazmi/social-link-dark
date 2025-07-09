import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import AnimatedBackground from './components/AnimatedBackground';
import Avatar from './components/Avatar';
import Profile from './components/Profile';
import SocialLinks from './components/SocialLinks';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 text-gray-900 dark:text-white overflow-hidden transition-colors duration-500">
        <AnimatedBackground />
        <ThemeToggle />
        
        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-8">
          <div className="w-full max-w-lg mx-auto backdrop-blur-sm bg-white/20 dark:bg-gray-900/10 rounded-3xl p-8 border border-gray-200/30 dark:border-gray-800/30 shadow-xl dark:shadow-none">
            <Avatar />
            <Profile />
            <SocialLinks />
          </div>
          
          {/* Subtle footer */}
          <div className="absolute bottom-4 text-center">
            <p className="text-gray-500 dark:text-gray-600 text-xs animate-fade-in animation-delay-1500 flex items-center justify-center gap-1">
              Made with ❤️ by Zhillan Azmi
            </p>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;