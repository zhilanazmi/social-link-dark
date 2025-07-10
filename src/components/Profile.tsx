import React from 'react';
import { Code, Shield, Bug, Globe } from 'lucide-react';

const Profile: React.FC = () => {
  return (
    <div className="text-center mb-8">
      <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-600 dark:from-white dark:via-gray-100 dark:to-gray-300 bg-clip-text text-transparent mb-4 animate-fade-in-down animation-delay-300">
        Zhillan Azmi
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-3 mb-6 animate-fade-in-up animation-delay-500">
        <div className="flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-blue-100/80 to-purple-100/80 dark:from-blue-500/10 dark:to-purple-500/10 rounded-full border border-blue-300/40 dark:border-blue-500/20">
          <Code className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">Fullstack Developer</span>
        </div>
        <div className="flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-red-100/80 to-orange-100/80 dark:from-red-500/10 dark:to-orange-500/10 rounded-full border border-red-300/40 dark:border-red-500/20">
          <Shield className="w-4 h-4 text-red-600 dark:text-red-400" />
          <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">Cyber Security</span>
        </div>
        <div className="flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-green-100/80 to-teal-100/80 dark:from-green-500/10 dark:to-teal-500/10 rounded-full border border-green-300/40 dark:border-green-500/20">
          <Globe className="w-4 h-4 text-green-600 dark:text-green-400" />
          <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">Web Pentester</span>
        </div>
        <div className="flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-yellow-100/80 to-orange-100/80 dark:from-yellow-500/10 dark:to-orange-500/10 rounded-full border border-yellow-300/40 dark:border-yellow-500/20">
          <Bug className="w-4 h-4 text-yellow-600 dark:text-yellow-400" />
          <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">Bug Hunter</span>
        </div>
      </div>
      <p className="text-base text-gray-600 dark:text-gray-500 max-w-md mx-auto leading-relaxed animate-fade-in-up animation-delay-600">
        Passionate about building secure digital experiences and finding vulnerabilities to make the web safer.
      </p>
    </div>
  );
};

export default Profile;