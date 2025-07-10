import React from 'react';
import profilePhoto from '../../ZhillanAzmi-crop.png';

const Avatar: React.FC = () => {
  return (
    <div className="relative mb-8 animate-fade-in-down">
      <div className="w-32 h-32 mx-auto relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-teal-500 dark:from-purple-400 dark:via-blue-400 dark:to-teal-400 rounded-full animate-spin-slow"></div>
        <div className="absolute inset-1 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center overflow-hidden">
          <img 
            src={profilePhoto}
            alt="Zhillan Azmi" 
            className="w-full h-full object-cover rounded-full"
            onError={(e) => {
              // Fallback to default avatar if image fails to load
              e.currentTarget.src = "https://ui-avatars.com/api/?name=Zhillan+Azmi&background=6366f1&color=ffffff&size=400";
            }}
          />
        </div>
        <div className="absolute inset-0 rounded-full blur-lg group-hover:blur-xl transition-all duration-300"></div>
      </div>
    </div>
  );
};

export default Avatar;