import Header from '@/components/header';
import Footer from '@/components/footer';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="font-mono text-cyan-400 text-sm">$</span>
              <h1 className="text-4xl md:text-5xl font-mono font-bold text-cyan-400 tracking-tight">
                ./about
              </h1>
            </div>
            <p className="text-xl font-mono text-gray-400">
              &gt; cat user_profile.dat
            </p>
          </div>

          {/* Profile Section - CRT Monitor Style */}
          <div className="mb-12">
            <div className="border-2 border-cyan-400 bg-gray-950">
              {/* Monitor title bar */}
              <div className="flex items-center gap-2 px-4 py-2 border-b border-cyan-400 bg-cyan-400/10">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 border border-red-500 bg-red-500/30"></div>
                  <div className="w-3 h-3 border border-yellow-500 bg-yellow-500/30"></div>
                  <div className="w-3 h-3 border border-green-500 bg-green-500/30"></div>
                </div>
                <span className="font-mono text-sm text-cyan-400 ml-2">USER_PROFILE.DAT</span>
              </div>
              
              {/* Content */}
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  {/* Photo in CRT frame */}
                  <div className="flex-shrink-0 mx-auto md:mx-0">
                    <div className="relative">
                      {/* CRT Monitor frame */}
                      <div className="w-48 h-48 md:w-56 md:h-56 border-4 border-gray-600 bg-gray-800 p-2 shadow-[inset_0_0_20px_rgba(0,255,255,0.1)]">
                        <div className="relative w-full h-full overflow-hidden bg-black">
                          {/* Photo */}
                          <Image
                            src="/random.bucket.migration/me.jpeg"
                            alt="Adelson Teodoro"
                            fill
                            className="object-cover"
                          />
                          {/* Scanline overlay */}
                          <div 
                            className="absolute inset-0 pointer-events-none opacity-30"
                            style={{
                              background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)'
                            }}
                          />
                          {/* CRT glow effect */}
                          <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10" />
                          {/* Screen curvature effect */}
                          <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_30px_rgba(0,0,0,0.5)]" />
                        </div>
                      </div>
                      {/* Monitor stand */}
                      <div className="mx-auto w-16 h-4 bg-gray-600 border-x-4 border-b-4 border-gray-700"></div>
                      <div className="mx-auto w-24 h-2 bg-gray-700 rounded-b"></div>
                    </div>
                    {/* File info */}
                    <p className="font-mono text-xs text-gray-500 text-center mt-3">
                      profile.jpg | 256x256 | RGB
                    </p>
                  </div>

                  {/* Bio in terminal style */}
                  <div className="flex-1 font-mono">
                    <div className="space-y-4">
                      <div>
                        <span className="text-gray-500"># USER IDENTIFICATION</span>
                        <h2 className="text-2xl font-bold text-cyan-400 mt-1">ADELSON TEODORO</h2>
                        <p className="text-gray-400 text-sm">@imrooteodoro</p>
                      </div>

                      <div className="border-t border-gray-700 pt-4">
                        <span className="text-gray-500"># OCCUPATION</span>
                        <p className="text-gray-300 mt-1">Developer & Curious Mind</p>
                      </div>

                      <div className="border-t border-gray-700 pt-4">
                        <span className="text-gray-500"># INTERESTS[]</span>
                        <div className="mt-1 flex flex-wrap gap-2">
                          <span className="px-2 py-1 border border-cyan-500 text-cyan-400 text-xs">Mathematics</span>
                          <span className="px-2 py-1 border border-purple-500 text-purple-400 text-xs">Science</span>
                          <span className="px-2 py-1 border border-green-500 text-green-400 text-xs">Technology</span>
                          <span className="px-2 py-1 border border-amber-500 text-amber-400 text-xs">Philosophy</span>
                          <span className="px-2 py-1 border border-pink-500 text-pink-400 text-xs">Music</span>
                          <span className="px-2 py-1 border border-red-500 text-red-400 text-xs">Chess</span>
                        </div>
                      </div>

                      <div className="border-t border-gray-700 pt-4">
                        <span className="text-gray-500"># LINKS[]</span>
                        <div className="mt-2 space-y-1 text-sm">
                          <p><span className="text-gray-500">[0]</span> <a href="https://github.com/imrooteodoro" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">github.com/imrooteodoro</a></p>
                          <p><span className="text-gray-500">[1]</span> <a href="https://instagram.com/imrooteodoro" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">instagram.com/imrooteodoro</a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* About the blog */}
          <div className="border-2 border-cyan-400 bg-gray-950 p-8 font-mono">
            <h2 className="text-xl font-bold text-cyan-400 mb-4">&gt; Why I created Random Bucket</h2>
            <p className="text-gray-300 mb-6">
              I've always been fascinated by the connections between different fields of knowledge.
              Mathematics reveals hidden patterns, science explains the universe, and technology
              lets us build amazing things. This blog is my way of documenting discoveries,
              sharing ideas, and exploring the beautiful randomness of learning.
            </p>
            <p className="text-gray-300 mb-6">
              The name "Random Bucket" reflects exactly that - a diverse collection of ideas
              and explorations. Each post is like reaching into a bucket and pulling out
              something unexpected to learn about!
            </p>

            <h2 className="text-xl font-bold text-cyan-400 mb-4">&gt; What you'll find here</h2>
            <ul className="text-gray-300 mb-6 space-y-2 pl-4">
              <li>- <span className="text-cyan-400">Mathematics, Science, Technology, Philosophy, Music, Chess, Random Things</span></li>
           
            </ul>

            <div className="border-t border-gray-700 pt-6 mt-6">
              <p className="text-gray-500 text-sm">
                <span className="text-cyan-400">$</span> echo "Thanks for visiting!"<br/>
                <span className="text-green-400">&gt;</span> Thanks for visiting!
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
