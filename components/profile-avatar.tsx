'use client';

import { Terminal } from 'lucide-react';

interface ProfileAvatarProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function ProfileAvatar({ size = 'md', className = '' }: ProfileAvatarProps) {
  const sizeClasses = {
    sm: 'w-10 h-10',
    md: 'w-32 h-32',
    lg: 'w-48 h-48',
  };

  const iconSizes = {
    sm: 'w-5 h-5',
    md: 'w-14 h-14',
    lg: 'w-20 h-20',
  };

  return (
    <div className={`${sizeClasses[size]} relative overflow-hidden border-2 border-cyan-400 bg-black ${className}`}>
      <div className="w-full h-full bg-black flex items-center justify-center">
        <Terminal className={`${iconSizes[size]} text-cyan-400`} />
      </div>
      {/* Scanline effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent pointer-events-none" />
    </div>
  );
}
