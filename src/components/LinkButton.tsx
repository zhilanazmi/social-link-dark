import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface ColorScheme {
  bg: string;
  border: string;
  icon: string;
  text: string;
  shimmer: string;
  shadow: string;
}

interface LinkButtonProps {
  href: string;
  icon: LucideIcon;
  label: string;
  delay?: number;
  colors: ColorScheme;
}

const LinkButton: React.FC<LinkButtonProps> = ({ href, icon: Icon, label, delay = 0, colors }) => {
  return (
    <a
      href={href}
      className="group relative block w-full max-w-md mx-auto animate-fade-in-up active:scale-95 transition-transform duration-200"
      style={{ animationDelay: `${delay}ms` }}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-r ${colors.bg} backdrop-blur-sm border ${colors.border} transition-all duration-300 shadow-lg ${colors.shadow}`}>
        <div className="flex items-center justify-center px-6 py-4">
          <div className="absolute left-6 flex items-center justify-center w-6 h-6 flex-shrink-0">
            <Icon className={`w-5 h-5 ${colors.icon} transition-all duration-300 group-active:scale-110`} />
          </div>
          <span className={`${colors.text} font-medium text-base transition-all duration-300 text-center w-full`}>
            {label}
          </span>
        </div>
        <div className={`absolute inset-0 bg-gradient-to-r ${colors.shimmer} translate-x-[-100%] group-active:translate-x-[100%] transition-transform duration-700 ease-out`}></div>
        <div className="absolute inset-0 opacity-100 transition-opacity duration-300">
          <div className={`absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent ${colors.border.replace('border-', 'via-').replace('/60', '/60')} to-transparent`}></div>
          <div className={`absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent ${colors.border.replace('border-', 'via-').replace('/60', '/60')} to-transparent`}></div>
        </div>
      </div>
    </a>
  );
};

export default LinkButton;