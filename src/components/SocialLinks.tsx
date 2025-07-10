import React from 'react';
import { Instagram, Twitter, Linkedin, Github, Globe } from 'lucide-react';
import LinkButton from './LinkButton';

const SocialLinks: React.FC = () => {
  const links = [
    { 
      href: 'https://instagram.com/zhilanazmi', 
      icon: Instagram, 
      label: 'Instagram', 
      colors: {
        bg: 'from-rose-500/25 via-pink-500/25 to-orange-500/25 dark:from-rose-500/15 dark:via-pink-500/15 dark:to-orange-500/15',
        border: 'border-rose-400/40 dark:border-rose-400/30',
        icon: 'text-rose-600 dark:text-rose-400',
        text: 'text-rose-700 dark:text-rose-300',
        shimmer: 'from-rose-500/0 via-rose-500/20 to-rose-500/0 dark:from-rose-400/0 dark:via-rose-400/15 dark:to-rose-400/0',
        shadow: 'shadow-rose-500/15 dark:shadow-rose-400/8'
      }
    },
    { 
      href: 'https://www.linkedin.com/in/zhilanazmi/', 
      icon: Linkedin, 
      label: 'LinkedIn', 
      colors: {
        bg: 'from-blue-500/25 via-blue-600/25 to-blue-700/25 dark:from-blue-500/15 dark:via-blue-600/15 dark:to-blue-700/15',
        border: 'border-blue-500/40 dark:border-blue-400/30',
        icon: 'text-blue-600 dark:text-blue-400',
        text: 'text-blue-700 dark:text-blue-300',
        shimmer: 'from-blue-500/0 via-blue-500/20 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400/15 dark:to-blue-400/0',
        shadow: 'shadow-blue-500/15 dark:shadow-blue-400/8'
      }
    },
    { 
      href: 'https://github.com/zhilanazmi', 
      icon: Github, 
      label: 'GitHub', 
      colors: {
        bg: 'from-slate-700/25 via-slate-800/25 to-slate-900/25 dark:from-slate-600/15 dark:via-slate-700/15 dark:to-slate-800/15',
        border: 'border-slate-700/40 dark:border-slate-600/30',
        icon: 'text-slate-800 dark:text-slate-300',
        text: 'text-slate-900 dark:text-slate-200',
        shimmer: 'from-slate-700/0 via-slate-700/20 to-slate-700/0 dark:from-slate-600/0 dark:via-slate-600/15 dark:to-slate-600/0',
        shadow: 'shadow-slate-700/15 dark:shadow-slate-600/8'
      }
    },
    { 
      href: 'https://x.com/zhilanazmi', 
      icon: Twitter, 
      label: 'X', 
      colors: {
        bg: 'from-gray-600/25 via-gray-700/25 to-gray-800/25 dark:from-gray-500/15 dark:via-gray-600/15 dark:to-gray-700/15',
        border: 'border-gray-600/40 dark:border-gray-500/30',
        icon: 'text-gray-700 dark:text-gray-300',
        text: 'text-gray-800 dark:text-gray-200',
        shimmer: 'from-gray-600/0 via-gray-600/20 to-gray-600/0 dark:from-gray-500/0 dark:via-gray-500/15 dark:to-gray-500/0',
        shadow: 'shadow-gray-600/15 dark:shadow-gray-500/8'
      }
    },
    { 
      href: 'https://finflow.zhilanazmi.com', 
      icon: Globe, 
      label: 'FinFlow - Expense Tracker', 
      colors: {
        bg: 'from-teal-500/25 via-cyan-500/25 to-blue-500/25 dark:from-teal-500/15 dark:via-cyan-500/15 dark:to-blue-500/15',
        border: 'border-teal-500/40 dark:border-teal-400/30',
        icon: 'text-teal-600 dark:text-teal-400',
        text: 'text-teal-700 dark:text-teal-300',
        shimmer: 'from-teal-500/0 via-teal-500/20 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/15 dark:to-teal-400/0',
        shadow: 'shadow-teal-500/15 dark:shadow-teal-400/8'
      }
    },
    { 
      href: 'https://netflix.zhilanazmi.com', 
      icon: Globe, 
      label: 'Netflix Premium Service', 
      colors: {
        bg: 'from-teal-500/25 via-cyan-500/25 to-blue-500/25 dark:from-teal-500/15 dark:via-cyan-500/15 dark:to-blue-500/15',
        border: 'border-teal-500/40 dark:border-teal-400/30',
        icon: 'text-teal-600 dark:text-teal-400',
        text: 'text-teal-700 dark:text-teal-300',
        shimmer: 'from-teal-500/0 via-teal-500/20 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/15 dark:to-teal-400/0',
        shadow: 'shadow-teal-500/15 dark:shadow-teal-400/8'
      }
    },
  ];

  return (
    <div className="w-full max-w-md mx-auto space-y-4">
      {links.map((link, index) => (
        <LinkButton
          key={index}
          href={link.href}
          icon={link.icon}
          label={link.label}
          delay={700 + index * 80}
          colors={link.colors}
        />
      ))}
    </div>
  );
};

export default SocialLinks;