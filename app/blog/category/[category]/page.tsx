import Header from '@/components/header';
import Footer from '@/components/footer';
import { PostCard } from '@/components/post-card';
import { getAllCategories, getPostsByCategory, getCategoryInfo } from '@/lib/posts';
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  const categories = getAllCategories();
  return categories.map((category) => ({
    category,
  }));
}

export default async function CategoryPage({ params }: PageProps) {
  const { category } = await params;
  const posts = getPostsByCategory(category);
  
  if (posts.length === 0 && !getAllCategories().includes(category)) {
    notFound();
  }

  const categoryInfo = getCategoryInfo(category);

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="mb-12">
          <div className="text-6xl mb-4">{categoryInfo.icon}</div>
          <div className="flex items-center gap-2 mb-2">
            <span className="font-mono text-cyan-400 text-sm">$</span>
            <h1 className="text-4xl md:text-5xl font-mono font-bold text-cyan-400">
              ./{category}
            </h1>
          </div>
          <p className="text-lg font-mono text-gray-400">
            &gt; {categoryInfo.description}
          </p>
        </div>

        <section>
          <h2 className="text-2xl font-mono font-bold text-white mb-6">
            {posts.length} {posts.length === 1 ? 'file' : 'files'}
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
              &gt; No posts in this category yet.
            </p>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}
