import Header from '@/components/header';
import Footer from '@/components/footer';
import { CodeBlockEnhancer } from '@/components/code-block-enhancer';
import { getAllCategories, getPostsByCategory, getPostBySlug, getCategoryInfo } from '@/lib/posts';
import { notFound } from 'next/navigation';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import Link from 'next/link';

interface PageProps {
  params: Promise<{ category: string; slug: string }>;
}

export async function generateStaticParams() {
  const categories = getAllCategories();
  const params: { category: string; slug: string }[] = [];

  categories.forEach((category) => {
    const posts = getPostsByCategory(category);
    posts.forEach((post) => {
      params.push({
        category,
        slug: post.slug,
      });
    });
  });

  return params;
}

export default async function PostPage({ params }: PageProps) {
  const { category, slug } = await params;
  const post = await getPostBySlug(category, slug);

  if (!post) {
    notFound();
  }

  const categoryInfo = getCategoryInfo(category);

  const getCategoryColor = (cat: string) => {
    const colors: Record<string, string> = {
      matematica: 'border-cyan-500 text-cyan-400',
      ciencia: 'border-purple-500 text-purple-400',
      tecnologia: 'border-green-500 text-green-400',
      reflexoes: 'border-amber-500 text-amber-400',
      inmemoriam: 'border-gray-500 text-gray-400',
    };
    return colors[cat] || 'border-gray-500 text-gray-400';
  };

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <Link
          href={`/blog/category/${category}`}
          className="inline-flex items-center gap-2 text-gray-400 hover:text-cyan-400 mb-8 font-mono text-sm transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          cd ../{categoryInfo.name}
        </Link>

        <article className="max-w-4xl mx-auto">
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className={`px-4 py-2 border-2 font-mono text-sm font-semibold ${getCategoryColor(category)}`}>
                {categoryInfo.icon} {categoryInfo.name}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-mono font-bold text-cyan-400 mb-6">
              {post.title}
            </h1>

            <p className="text-xl font-mono text-gray-400 mb-6">
              {post.excerpt}
            </p>

            <div className="flex items-center gap-6 font-mono text-gray-500 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <time dateTime={post.date}>
                  {format(new Date(post.date), 'yyyy-MM-dd')}
                </time>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {post.author}
              </div>
            </div>
          </header>

          <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent mb-12" />

          <div
            className="prose prose-lg prose-invert max-w-none
              prose-headings:font-mono prose-headings:font-bold prose-headings:tracking-tight
              prose-headings:text-cyan-400
              prose-p:text-gray-300 prose-p:leading-relaxed prose-p:text-justify prose-p:mb-6
              prose-a:text-cyan-400 prose-a:underline prose-a:decoration-cyan-400
              prose-strong:text-white prose-strong:font-semibold
              prose-em:text-gray-300 prose-em:italic
              prose-code:text-green-400
              prose-code:bg-gray-900 prose-code:px-2 prose-code:py-0.5 prose-code:font-mono prose-code:text-sm
              prose-pre:bg-gray-950 prose-pre:border-2 prose-pre:border-gray-700
              prose-pre:shadow-lg prose-pre:overflow-x-auto
              prose-blockquote:border-l-4 prose-blockquote:border-cyan-500
              prose-blockquote:pl-6 prose-blockquote:py-1 prose-blockquote:my-6 prose-blockquote:not-italic
              prose-blockquote:text-gray-400 prose-blockquote:font-normal
              prose-ul:text-gray-300
              prose-ol:text-gray-300
              prose-li:text-gray-300
              prose-hr:border-gray-700 prose-hr:my-8
              prose-img:shadow-lg"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          <CodeBlockEnhancer />
        </article>
      </main>

      <Footer />
    </div>
  );
}
