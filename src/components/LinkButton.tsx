import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface LinkButtonProps {
  href: string;
  icon: LucideIcon;
  label: string;
  delay?: number;
  gradient?: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({ href, icon: Icon, label, delay = 0, gradient }) => {
  return (
    <a
      href={href}
      className="group relative block w-full max-w-md mx-auto animate-fade-in-up active:scale-95 transition-transform duration-200"
      style={{ animationDelay: `${delay}ms` }}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-purple-200/40 via-blue-200/40 to-teal-200/40 dark:from-purple-900/30 dark:via-blue-900/30 dark:to-teal-900/30 backdrop-blur-sm border border-cyan-500/60 dark:border-cyan-400/60 transition-all duration-300 shadow-lg shadow-cyan-500/20 dark:shadow-cyan-400/10">
        <div className="flex items-center justify-center px-6 py-4">
          <div className="absolute left-6 flex items-center justify-center w-6 h-6 flex-shrink-0">
            <Icon className="w-5 h-5 text-cyan-700 dark:text-white transition-all duration-300 group-active:scale-110" />
          </div>
          <span className="text-cyan-800 dark:text-cyan-100 font-medium text-base transition-all duration-300 text-center w-full">
            {label}
          </span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/20 to-cyan-500/0 dark:from-cyan-400/0 dark:via-cyan-400/10 dark:to-cyan-400/0 translate-x-[-100%] group-active:translate-x-[100%] transition-transform duration-700 ease-out"></div>
        <div className="absolute inset-0 opacity-100 transition-opacity duration-300">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/60 dark:via-cyan-400/50 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/60 dark:via-cyan-400/50 to-transparent"></div>
        </div>
      </div>
    </a>
  );
};

export default LinkButton;