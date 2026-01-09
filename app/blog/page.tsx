import Header from '@/components/header';
import Footer from '@/components/footer';
import { PostCard } from '@/components/post-card';
import { CategoryCard } from '@/components/category-card';
import { getAllPosts, getAllCategories, getPostsByCategory } from '@/lib/posts';

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = getAllCategories();
  const categoriesWithCount = categories.map((category) => ({
    category,
    count: getPostsByCategory(category).length,
  }));

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="flex items-center gap-2 mb-2">
          <span className="font-mono text-cyan-400 text-sm">$</span>
          <h1 className="text-4xl md:text-5xl font-mono font-bold text-cyan-400 tracking-tight">
            ./blog
          </h1>
        </div>
        <p className="text-lg font-mono text-gray-400 mb-12">
          &gt; All posts organized by category
        </p>

        {/* Categories */}
        <section className="mb-16">
          <h2 className="text-2xl font-mono font-bold text-white mb-6">
            ls ./categories/
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categoriesWithCount.map((cat, index) => (
              <CategoryCard
                key={cat.category}
                category={cat.category}
                count={cat.count}
                index={index}
              />
            ))}
          </div>
        </section>

        {/* All Posts */}
        <section>
          <h2 className="text-2xl font-mono font-bold text-white mb-6">
            cat ./posts.log ({posts.length})
          </h2>
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post, index) => (
                <PostCard
                  key={`${post.category}-${post.slug}`}
                  post={post}
                  index={index}
                />
              ))}
            </div>
          ) : (
            <p className="font-mono text-gray-400 text-center py-12 border-2 border-dashed border-gray-700">
              &gt; ERROR: No posts found. Initialize ./content/posts/
            </p>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}
