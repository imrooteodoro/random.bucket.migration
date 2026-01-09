import { Github, Mail, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t-2 border-cyan-400 bg-black">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-mono text-sm">
            <p className="text-gray-400">
              <span className="text-cyan-400">$</span> echo "Random Bucket © 2026"
            </p>
            <p className="text-gray-500 text-xs mt-1">
              <span className="text-cyan-400">&gt;</span> Created by{' '}
              <a
                href="https://github.com/imrooteodoro"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:underline"
              >
                @imrooteodoro
              </a>
            </p>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="https://github.com/imrooteodoro"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-gray-700 hover:border-cyan-400 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4 text-gray-400" />
            </a>
            <a
              href="mailto:mrooteodoro.ai.dev@gmail.com"
              className="p-2 border border-gray-700 hover:border-cyan-400 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4 text-gray-400" />
            </a>
            <a
              href="https://www.instagram.com/imrooteodoro/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-gray-700 hover:border-cyan-400 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4 text-gray-400" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}