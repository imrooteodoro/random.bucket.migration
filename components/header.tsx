'use client';

import Link from 'next/link';
import { BookOpen, Home, User } from 'lucide-react';
import { ProfileAvatar } from './profile-avatar';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-cyan-400 bg-black">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <ProfileAvatar size="sm" />
            <div>
              <h1 className="font-mono font-bold text-cyan-400 tracking-tight">
                RANDOM_BUCKET
              </h1>
              <p className="font-mono text-xs text-gray-500">
                :: sys.database
              </p>
            </div>
          </Link>

          <nav className="flex items-center gap-4">
            <Link
              href="/"
              className="flex items-center gap-1 px-3 py-1 border border-transparent hover:border-cyan-400 text-gray-400 hover:text-cyan-400 transition-all font-mono text-sm"
            >
              <Home className="w-4 h-4" />
              <span className="hidden sm:inline">/home</span>
            </Link>
            <Link
              href="/blog"
              className="flex items-center gap-1 px-3 py-1 border border-transparent hover:border-cyan-400 text-gray-400 hover:text-cyan-400 transition-all font-mono text-sm"
            >
              <BookOpen className="w-4 h-4" />
              <span className="hidden sm:inline">/blog</span>
            </Link>
            <Link
              href="/about"
              className="flex items-center gap-1 px-3 py-1 border border-transparent hover:border-cyan-400 text-gray-400 hover:text-cyan-400 transition-all font-mono text-sm"
            >
              <User className="w-4 h-4" />
              <span className="hidden sm:inline">/about</span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}