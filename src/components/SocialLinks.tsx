import React from 'react';
import { Instagram, Twitter, Linkedin, Facebook, Github, Globe, Mail, MessageCircle } from 'lucide-react';
import LinkButton from './LinkButton';

const SocialLinks: React.FC = () => {
  const links = [
    { 
      href: '#', 
      icon: Instagram, 
      label: 'Follow on Instagram', 
      colors: {
        bg: 'from-pink-500/40 via-purple-500/40 to-orange-500/40 dark:from-pink-500/30 dark:via-purple-500/30 dark:to-orange-500/30',
        border: 'border-pink-500/60 dark:border-pink-400/60',
        icon: 'text-pink-700 dark:text-pink-300',
        text: 'text-pink-800 dark:text-pink-200',
        shimmer: 'from-pink-500/0 via-pink-500/30 to-pink-500/0 dark:from-pink-400/0 dark:via-pink-400/20 dark:to-pink-400/0',
        shadow: 'shadow-pink-500/20 dark:shadow-pink-400/10'
      }
    },
    { 
      href: '#', 
      icon: Twitter, 
      label: 'Follow on X', 
      colors: {
        bg: 'from-slate-800/40 via-slate-900/40 to-black/40 dark:from-slate-600/30 dark:via-slate-700/30 dark:to-slate-800/30',
        border: 'border-slate-800/60 dark:border-slate-500/60',
        icon: 'text-slate-900 dark:text-slate-200',
        text: 'text-slate-900 dark:text-slate-100',
        shimmer: 'from-slate-800/0 via-slate-800/30 to-slate-800/0 dark:from-slate-500/0 dark:via-slate-500/20 dark:to-slate-500/0',
        shadow: 'shadow-slate-800/20 dark:shadow-slate-500/10'
      }
    },
    { 
      href: '#', 
      icon: Linkedin, 
      label: 'Connect on LinkedIn', 
      colors: {
        bg: 'from-blue-600/40 via-blue-700/40 to-blue-800/40 dark:from-blue-600/30 dark:via-blue-700/30 dark:to-blue-800/30',
        border: 'border-blue-600/60 dark:border-blue-500/60',
        icon: 'text-blue-800 dark:text-blue-300',
        text: 'text-blue-900 dark:text-blue-200',
        shimmer: 'from-blue-600/0 via-blue-600/30 to-blue-600/0 dark:from-blue-500/0 dark:via-blue-500/20 dark:to-blue-500/0',
        shadow: 'shadow-blue-600/20 dark:shadow-blue-500/10'
      }
    },
    { 
      href: '#', 
      icon: Github, 
      label: 'View on GitHub', 
      colors: {
        bg: 'from-zinc-800/40 via-zinc-900/40 to-black/40 dark:from-zinc-600/30 dark:via-zinc-700/30 dark:to-zinc-800/30',
        border: 'border-zinc-800/60 dark:border-zinc-500/60',
        icon: 'text-zinc-900 dark:text-zinc-200',
        text: 'text-zinc-900 dark:text-zinc-100',
        shimmer: 'from-zinc-800/0 via-zinc-800/30 to-zinc-800/0 dark:from-zinc-500/0 dark:via-zinc-500/20 dark:to-zinc-500/0',
        shadow: 'shadow-zinc-800/20 dark:shadow-zinc-500/10'
      }
    },
    { 
      href: '#', 
      icon: Globe, 
      label: 'Visit Website', 
      colors: {
        bg: 'from-emerald-500/40 via-green-500/40 to-teal-500/40 dark:from-emerald-500/30 dark:via-green-500/30 dark:to-teal-500/30',
        border: 'border-emerald-500/60 dark:border-emerald-400/60',
        icon: 'text-emerald-700 dark:text-emerald-300',
        text: 'text-emerald-800 dark:text-emerald-200',
        shimmer: 'from-emerald-500/0 via-emerald-500/30 to-emerald-500/0 dark:from-emerald-400/0 dark:via-emerald-400/20 dark:to-emerald-400/0',
        shadow: 'shadow-emerald-500/20 dark:shadow-emerald-400/10'
      }
    },
    { 
      href: '#', 
      icon: Mail, 
      label: 'Send Email', 
      colors: {
        bg: 'from-red-500/40 via-red-600/40 to-red-700/40 dark:from-red-500/30 dark:via-red-600/30 dark:to-red-700/30',
        border: 'border-red-500/60 dark:border-red-400/60',
        icon: 'text-red-700 dark:text-red-300',
        text: 'text-red-800 dark:text-red-200',
        shimmer: 'from-red-500/0 via-red-500/30 to-red-500/0 dark:from-red-400/0 dark:via-red-400/20 dark:to-red-400/0',
        shadow: 'shadow-red-500/20 dark:shadow-red-400/10'
      }
    },
    { 
      href: '#', 
      icon: MessageCircle, 
      label: 'WhatsApp Chat', 
      colors: {
        bg: 'from-green-500/40 via-green-600/40 to-green-700/40 dark:from-green-500/30 dark:via-green-600/30 dark:to-green-700/30',
        border: 'border-green-500/60 dark:border-green-400/60',
        icon: 'text-green-700 dark:text-green-300',
        text: 'text-green-800 dark:text-green-200',
        shimmer: 'from-green-500/0 via-green-500/30 to-green-500/0 dark:from-green-400/0 dark:via-green-400/20 dark:to-green-400/0',
        shadow: 'shadow-green-500/20 dark:shadow-green-400/10'
      }
    },
    { 
      href: '#', 
      icon: Facebook, 
      label: 'Like on Facebook', 
      colors: {
        bg: 'from-blue-500/40 via-blue-600/40 to-blue-700/40 dark:from-blue-500/30 dark:via-blue-600/30 dark:to-blue-700/30',
        border: 'border-blue-500/60 dark:border-blue-400/60',
        icon: 'text-blue-700 dark:text-blue-300',
        text: 'text-blue-800 dark:text-blue-200',
        shimmer: 'from-blue-500/0 via-blue-500/30 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400/20 dark:to-blue-400/0',
        shadow: 'shadow-blue-500/20 dark:shadow-blue-400/10'
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