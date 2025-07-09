import React from 'react';

const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-200/30 via-blue-200/30 to-teal-200/30 dark:from-purple-900/15 dark:via-blue-900/15 dark:to-teal-900/15 animate-pulse"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-200/40 via-purple-200/40 to-pink-200/40 dark:from-indigo-900/20 dark:via-purple-900/20 dark:to-pink-900/20 animate-pulse animation-delay-1000"></div>
      <div className="absolute inset-0 bg-gradient-to-bl from-cyan-200/30 via-blue-200/30 to-purple-200/30 dark:from-cyan-900/15 dark:via-blue-900/15 dark:to-purple-900/15 animate-pulse animation-delay-2000"></div>
      
      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-300/20 dark:bg-purple-500/8 rounded-full blur-3xl animate-float"></div>
      <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-blue-300/20 dark:bg-blue-500/8 rounded-full blur-3xl animate-float animation-delay-1000"></div>
      <div className="absolute bottom-1/4 left-1/3 w-56 h-56 bg-teal-300/20 dark:bg-teal-500/8 rounded-full blur-3xl animate-float animation-delay-2000"></div>
      <div className="absolute top-1/2 right-1/3 w-40 h-40 bg-pink-300/15 dark:bg-pink-500/6 rounded-full blur-2xl animate-float animation-delay-3000"></div>
      <div className="absolute bottom-1/3 right-1/5 w-32 h-32 bg-cyan-300/15 dark:bg-cyan-500/6 rounded-full blur-2xl animate-float animation-delay-4000"></div>
      
      {/* Animated particles */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-1 h-1 bg-cyan-500/60 dark:bg-cyan-400/40 rounded-full animate-ping animation-delay-1000"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-purple-500/60 dark:bg-purple-400/40 rounded-full animate-ping animation-delay-2000"></div>
        <div className="absolute bottom-32 left-20 w-1 h-1 bg-blue-500/60 dark:bg-blue-400/40 rounded-full animate-ping animation-delay-3000"></div>
        <div className="absolute bottom-20 right-32 w-1 h-1 bg-teal-500/60 dark:bg-teal-400/40 rounded-full animate-ping animation-delay-4000"></div>
        <div className="absolute top-60 left-1/2 w-1 h-1 bg-pink-500/60 dark:bg-pink-400/40 rounded-full animate-ping animation-delay-5000"></div>
      </div>
    </div>
  );
};

export default AnimatedBackground;