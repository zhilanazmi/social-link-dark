import React from 'react';
import { User } from 'lucide-react';

const Avatar: React.FC = () => {
  return (
    <div className="relative mb-8 animate-fade-in-down">
      <div className="w-32 h-32 mx-auto relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-teal-500 dark:from-purple-400 dark:via-blue-400 dark:to-teal-400 rounded-full animate-spin-slow"></div>
        <div className="absolute inset-1 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center">
          <User className="w-16 h-16 text-gray-600 dark:text-gray-400" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 via-blue-500/30 to-teal-500/30 dark:from-purple-400/20 dark:via-blue-400/20 dark:to-teal-400/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-300"></div>
      </div>
    </div>
  );
};

export default Avatar;