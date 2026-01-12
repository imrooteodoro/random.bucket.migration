'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Folder, FolderOpen } from 'lucide-react';
import { useState } from 'react';

interface CategoryCardProps {
  category: string;
  count: number;
  index: number;
}

const categoryInfo: Record<string, { name: string; description: string; icon: string }> = {
  matematica: {
    name: 'MATH',
    description: 'Patterns & Numbers',
    icon: '∑',
  },
  ciencia: {
    name: 'SCI',
    description: 'Universe Mysteries',
    icon: '⚛',
  },
  tecnologia: {
    name: 'TECH',
    description: 'Digital World',
    icon: '⚡',
  },
  reflexoes: {
    name: 'MIND',
    description: 'Thoughts & Ideas',
    icon: '◈',
  },
  inmemoriam: {
    name: 'IN-MEMORIAM',
    description: 'In Memoriam',
    icon: '🕊️',
  },
};

export function CategoryCard({ category, count, index }: CategoryCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const info = categoryInfo[category] || { name: category.toUpperCase(), description: '', icon: '▢' };

  const colors: Record<string, { border: string; text: string; bg: string }> = {
    matematica: { border: 'border-cyan-500', text: 'text-cyan-400', bg: 'bg-cyan-500/10' },
    ciencia: { border: 'border-purple-500', text: 'text-purple-400', bg: 'bg-purple-500/10' },
    tecnologia: { border: 'border-green-500', text: 'text-green-400', bg: 'bg-green-500/10' },
    reflexoes: { border: 'border-amber-500', text: 'text-amber-400', bg: 'bg-amber-500/10' },
    inmemoriam: { border: 'border-gray-500', text: 'text-gray-400', bg: 'bg-gray-500/10' },
  };

  const colorScheme = colors[category] || { border: 'border-gray-500', text: 'text-gray-400', bg: 'bg-gray-500/10' };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group"
    >
      <Link href={`/blog/category/${category}`}>
        <div className={`h-full p-4 border-2 ${colorScheme.border} ${colorScheme.bg} bg-gray-900 transition-all duration-200 hover:shadow-lg hover:shadow-current/20`}>
          {/* Folder Tab */}
          <div className={`flex items-center gap-2 mb-3 pb-2 border-b ${colorScheme.border}`}>
            {isHovered ? (
              <FolderOpen className={`w-5 h-5 ${colorScheme.text}`} />
            ) : (
              <Folder className={`w-5 h-5 ${colorScheme.text}`} />
            )}
            <span className={`font-mono font-bold text-sm ${colorScheme.text}`}>
              /{info.name}
            </span>
          </div>
          
          {/* Content */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className={`text-2xl ${colorScheme.text}`}>{info.icon}</span>
              <span className="font-mono text-xs text-gray-600 dark:text-gray-400">
                {count} {count === 1 ? 'file' : 'files'}
              </span>
            </div>
            <p className="font-mono text-xs text-gray-700 dark:text-gray-300">
              {info.description}
            </p>
          </div>
          
          {/* Bottom bar */}
          <div className={`mt-3 pt-2 border-t border-dashed ${colorScheme.border} flex justify-between items-center`}>
            <span className="font-mono text-xs text-gray-500">$ cd ./{category}</span>
            <span className={`font-mono text-xs ${colorScheme.text} group-hover:animate-pulse`}>_</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
