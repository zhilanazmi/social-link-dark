import React from 'react';
import { Code, Shield, Bug, Globe } from 'lucide-react';

const Profile: React.FC = () => {
  return (
    <div className="text-center mb-8">
      <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent mb-4 animate-fade-in-down animation-delay-300">
        Zhillan Azmi
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-3 mb-6 animate-fade-in-up animation-delay-500">
        <div className="flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-500/20">
          <Code className="w-4 h-4 text-blue-400" />
          <span className="text-sm text-gray-300 font-medium">FullStack Developer</span>
        </div>
        <div className="flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-full border border-red-500/20">
          <Shield className="w-4 h-4 text-red-400" />
          <span className="text-sm text-gray-300 font-medium">Cyber Security</span>
        </div>
        <div className="flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-green-500/10 to-teal-500/10 rounded-full border border-green-500/20">
          <Globe className="w-4 h-4 text-green-400" />
          <span className="text-sm text-gray-300 font-medium">Web Pentester</span>
        </div>
        <div className="flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-full border border-yellow-500/20">
          <Bug className="w-4 h-4 text-yellow-400" />
          <span className="text-sm text-gray-300 font-medium">Bug Hunter</span>
        </div>
      </div>
      <p className="text-base text-gray-500 max-w-md mx-auto leading-relaxed animate-fade-in-up animation-delay-600">
        Passionate about building secure digital experiences and finding vulnerabilities to make the web safer.
      </p>
    </div>
  );
};

export default Profile;