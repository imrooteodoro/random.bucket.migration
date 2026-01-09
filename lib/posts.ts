import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkMath from 'remark-math';
import remarkRehype from 'remark-rehype';
import rehypeKatex from 'rehype-katex';
import rehypeHighlight from 'rehype-highlight';
import rehypeStringify from 'rehype-stringify';

const postsDirectory = path.join(process.cwd(), 'content/posts');

export interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  category: string;
  author: string;
  content: string;
}

export interface PostMetadata {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  category: string;
  author: string;
}

export function getAllCategories(): string[] {
  const categories = fs.readdirSync(postsDirectory);
  return categories.filter((item) => {
    const itemPath = path.join(postsDirectory, item);
    return fs.statSync(itemPath).isDirectory();
  });
}

export function getPostsByCategory(category: string): PostMetadata[] {
  const categoryPath = path.join(postsDirectory, category);
  
  if (!fs.existsSync(categoryPath)) {
    return [];
  }

  const fileNames = fs.readdirSync(categoryPath);
  const posts = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(categoryPath, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title,
        date: data.date,
        excerpt: data.excerpt,
        category: data.category,
        author: data.author,
      };
    });

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getAllPosts(): PostMetadata[] {
  const categories = getAllCategories();
  const allPosts: PostMetadata[] = [];

  categories.forEach((category) => {
    const posts = getPostsByCategory(category);
    allPosts.push(...posts);
  });

  return allPosts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostBySlug(category: string, slug: string): Promise<Post | null> {
  try {
    const fullPath = path.join(postsDirectory, category, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    // Process markdown with proper pipeline:
    // 1. Parse markdown
    // 2. Handle math (remark-math)
    // 3. Convert to HTML (remark-rehype)
    // 4. Render math with KaTeX (rehype-katex)
    // 5. Syntax highlighting (rehype-highlight)
    // 6. Stringify to HTML
    const processedContent = await unified()
      .use(remarkParse)
      .use(remarkMath)
      .use(remarkRehype, { allowDangerousHtml: true })
      .use(rehypeKatex)
      .use(rehypeHighlight)
      .use(rehypeStringify, { allowDangerousHtml: true })
      .process(content);
    
    const contentHtml = processedContent.toString();

    return {
      slug,
      title: data.title,
      date: data.date,
      excerpt: data.excerpt,
      category: data.category,
      author: data.author,
      content: contentHtml,
    };
  } catch (error) {
    console.error(`Error loading post ${category}/${slug}:`, error);
    return null;
  }
}

export function getCategoryInfo(category: string) {
  const categoryMap: Record<string, { name: string; description: string; icon: string }> = {
    matematica: {
      name: 'Mathematics',
      description: 'Exploring patterns, numbers and abstract structures',
      icon: '∑',
    },
    ciencia: {
      name: 'Science',
      description: 'Discovering the mysteries of the universe',
      icon: '⚛',
    },
    tecnologia: {
      name: 'Technology',
      description: 'Innovation and development in the digital world',
      icon: '⚡',
    },
    reflexoes: {
      name: 'Thoughts',
      description: 'Reflections on learning and knowledge',
      icon: '💭',
    },
    inmemoriam: {
      name: 'In Memoriam',
      description: 'Memories and tributes to loved ones',
      icon: '🕊️',
    },
  };

  return categoryMap[category] || { name: category, description: '', icon: '📝' };
}
