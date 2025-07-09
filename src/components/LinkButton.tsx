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
      className="group relative block w-full max-w-md mx-auto animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className={`relative overflow-hidden rounded-2xl bg-gray-800/40 backdrop-blur-sm border border-gray-700/30 hover:border-cyan-400/60 transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-lg group-hover:shadow-cyan-400/10 ${gradient ? `group-hover:${gradient}` : 'group-hover:bg-gradient-to-r group-hover:from-purple-900/30 group-hover:via-blue-900/30 group-hover:to-teal-900/30'}`}>
        <div className="flex items-center justify-center px-6 py-4">
          <div className="absolute left-6 flex items-center justify-center w-6 h-6 flex-shrink-0">
            <Icon className="w-5 h-5 text-cyan-400 transition-all duration-300 group-hover:scale-110 group-hover:text-white" />
          </div>
          <span className="text-white font-medium text-base transition-all duration-300 group-hover:text-cyan-100 text-center w-full">
            {label}
          </span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/10 to-cyan-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out"></div>
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"></div>
        </div>
      </div>
    </a>
  );
};

export default LinkButton;