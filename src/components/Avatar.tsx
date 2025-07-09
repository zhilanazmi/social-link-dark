import React from 'react';
import { User } from 'lucide-react';

const Avatar: React.FC = () => {
  return (
    <div className="relative mb-8 animate-fade-in-down">
      <div className="w-32 h-32 mx-auto relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-blue-400 to-teal-400 rounded-full animate-spin-slow"></div>
        <div className="absolute inset-1 bg-gray-900 rounded-full flex items-center justify-center">
          <User className="w-16 h-16 text-gray-400" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 via-blue-400/20 to-teal-400/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-300"></div>
      </div>
    </div>
  );
};

export default Avatar;