'use client';

import Footer from "@/components/footer";
import Header from "@/components/header";
import { PostCard } from "@/components/post-card";
import { CategoryCard } from "@/components/category-card";
import { motion } from "framer-motion";
import { ArrowRight, Terminal, Database } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [posts, setPosts] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);

  useEffect(() => {
    // Fetch posts and categories
    fetch('/api/posts')
      .then(res => res.json())
      .then(data => setPosts(data.slice(0, 3)))
      .catch(() => setPosts([]));

    fetch('/api/categories')
      .then(res => res.json())
      .then(data => setCategories(data))
      .catch(() => setCategories([]));
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section - Retro Sci-Fi */}
        <section className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            {/* Terminal-style header */}
            <div className="border-2 border-cyan-400 bg-gray-950 p-6 mb-8">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-cyan-500/30">
                <Terminal className="w-5 h-5 text-cyan-500" />
                <span className="font-mono text-sm text-cyan-400">random-bucket@system:~$</span>
              </div>
              
              <div className="flex items-center gap-4 mb-4">
                <Database className="w-12 h-12 text-cyan-500" />
                <div>
                  <h1 className="text-4xl md:text-5xl font-mono font-bold text-cyan-400 tracking-tight">
                    RANDOM_BUCKET
                  </h1>
                  <p className="font-mono text-sm text-gray-400">
                    [ v1.0.0 ] :: Personal Knowledge Database
                  </p>
                </div>
              </div>
              
              <div className="font-mono text-sm space-y-1 text-gray-300">
                <p>&gt; <span className="text-cyan-400">SUBJECTS:</span> mathematics, technology, life</p>
                <p>&gt; <span className="text-cyan-400">STATUS:</span> <span className="text-green-400">ONLINE</span></p>
                <p>&gt; <span className="text-cyan-400">DESC:</span> Exploring random ideas, discoveries and reflections</p>
              </div>
            </div>

            <div className="text-center">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-cyan-500 bg-cyan-500/10 text-cyan-400 font-mono font-bold hover:bg-cyan-500 hover:text-black transition-all"
              >
                [ EXPLORE_DATABASE ]
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </section>

        {/* Categories Section */}
        <section className="container mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="font-mono text-cyan-400 text-sm">$</span>
              <h2 className="font-mono font-bold text-xl text-white">
                ls -la ./categories/
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {categories.length > 0 ? (
                categories.map((cat, index) => (
                  <CategoryCard
                    key={cat.category}
                    category={cat.category}
                    count={cat.count}
                    index={index}
                  />
                ))
              ) : (
                <>
                  <CategoryCard category="matematica" count={0} index={0} />
                  <CategoryCard category="ciencia" count={0} index={1} />
                  <CategoryCard category="tecnologia" count={0} index={2} />
                  <CategoryCard category="reflexoes" count={0} index={3} />
                </>
              )}
            </div>
          </motion.div>
        </section>

        {/* Recent Posts Section */}
        <section className="container mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <span className="font-mono text-cyan-400 text-sm">$</span>
                <h2 className="font-mono font-bold text-xl text-white">
                  cat ./recent_posts.log
                </h2>
              </div>
              <Link
                href="/blog"
                className="flex items-center gap-1 font-mono text-sm text-cyan-400 hover:underline"
              >
                [ VIEW_ALL ]
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {posts.length > 0 ? (
                posts.map((post, index) => (
                  <PostCard key={`${post.category}-${post.slug}`} post={post} index={index} />
                ))
              ) : (
                <p className="font-mono text-gray-400 col-span-full text-center py-8 border-2 border-dashed border-gray-700">
                  &gt; ERROR: No posts found. Initialize ./content/posts/
                </p>
              )}
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
