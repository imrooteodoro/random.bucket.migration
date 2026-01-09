'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, FileText, Pin } from 'lucide-react';
import { format } from 'date-fns';
import type { PostMetadata } from '@/lib/posts';

// Cores das categorias - sincronizadas com lib/posts.ts
// Se adicionar nova categoria, adicione aqui também OU ela usará a cor padrão (gray)
const categoryColors: Record<string, { border: string; text: string }> = {
  matematica: { border: 'border-cyan-500', text: 'text-cyan-500' },
  ciencia: { border: 'border-purple-500', text: 'text-purple-500' },
  tecnologia: { border: 'border-green-500', text: 'text-green-500' },
  reflexoes: { border: 'border-amber-500', text: 'text-amber-500' },
  inmemoriam: { border: 'border-gray-500', text: 'text-gray-500' },
  music: { border: 'border-pink-500', text: 'text-pink-500' },
  random: { border: 'border-orange-500', text: 'text-orange-500' },
  psi: { border: 'border-indigo-500', text: 'text-indigo-500' },
};

export function getCategoryColorClient(category: string) {
  return categoryColors[category] || { border: 'border-gray-500', text: 'text-gray-500' };
}

interface PostCardProps {
  post: PostMetadata;
  index: number;
}

export function PostCard({ post, index }: PostCardProps) {
  const colorScheme = getCategoryColorClient(post.category);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}}
      className="group"
    >
      <Link href={`/blog/${post.category}/${post.slug}`}>
        <div className={`h-full p-4 border-2 ${colorScheme.border} bg-gray-950 hover:shadow-lg hover:shadow-cyan-900/20 transition-all duration-200 ${post.pinned ? 'ring-2 ring-yellow-500/50' : ''}`}>
          {/* Header */}
          <div className={`flex items-center gap-2 mb-3 pb-2 border-b ${colorScheme.border}`}>
            <FileText className={`w-4 h-4 ${colorScheme.text}`} />
            <span className={`font-mono text-xs ${colorScheme.text} flex-1`}>
              /{post.category}/{post.slug}.md
            </span>
            {post.pinned && (
              <span className="flex items-center gap-1 text-yellow-500 font-mono text-xs">
                <Pin className="w-3 h-3" />
                PINNED
              </span>
            )}
          </div>

          {/* Title */}
          <h2 className="font-mono font-bold text-lg text-white mb-2 group-hover:text-cyan-400 transition-colors">
            {post.title}
          </h2>

          {/* Excerpt */}
          <p className="font-mono text-sm text-gray-400 mb-4 line-clamp-2">
            {post.excerpt}
          </p>

          {/* Meta */}
          <div className="flex items-center justify-between text-xs font-mono text-gray-500">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {format(new Date(post.date), 'yyyy-MM-dd')}
              </span>
              <span className="flex items-center gap-1">
                <User className="w-3 h-3" />
                {post.author}
              </span>
            </div>
            <span className={`flex items-center gap-1 ${colorScheme.text} group-hover:gap-2 transition-all`}>
              READ
              <ArrowRight className="w-3 h-3" />
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
