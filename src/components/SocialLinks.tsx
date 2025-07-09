import React from 'react';
import { Instagram, Twitter, Linkedin, Facebook, Github, Globe, Mail, MessageCircle } from 'lucide-react';
import LinkButton from './LinkButton';

const SocialLinks: React.FC = () => {
  const links = [
    { href: '#', icon: Instagram, label: 'Follow on Instagram', gradient: 'bg-gradient-to-r from-pink-500/20 to-orange-500/20' },
    { href: '#', icon: Twitter, label: 'Follow on X', gradient: 'bg-gradient-to-r from-blue-400/20 to-blue-600/20' },
    { href: '#', icon: Linkedin, label: 'Connect on LinkedIn', gradient: 'bg-gradient-to-r from-blue-600/20 to-blue-800/20' },
    { href: '#', icon: Github, label: 'View on GitHub', gradient: 'bg-gradient-to-r from-gray-600/20 to-gray-800/20' },
    { href: '#', icon: Globe, label: 'Visit Website', gradient: 'bg-gradient-to-r from-green-500/20 to-emerald-600/20' },
    { href: '#', icon: Mail, label: 'Send Email', gradient: 'bg-gradient-to-r from-red-500/20 to-pink-600/20' },
    { href: '#', icon: MessageCircle, label: 'WhatsApp Chat', gradient: 'bg-gradient-to-r from-green-400/20 to-green-600/20' },
    { href: '#', icon: Facebook, label: 'Like on Facebook', gradient: 'bg-gradient-to-r from-blue-500/20 to-indigo-600/20' },
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
          gradient={link.gradient}
        />
      ))}
    </div>
  );
};

export default SocialLinks;