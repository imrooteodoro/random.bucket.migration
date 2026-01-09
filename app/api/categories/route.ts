import { NextResponse } from 'next/server';
import { getAllCategories, getPostsByCategory } from '@/lib/posts';

export async function GET() {
  try {
    const categories = getAllCategories();
    const categoriesWithCount = categories.map((category) => ({
      category,
      count: getPostsByCategory(category).length,
    }));
    return NextResponse.json(categoriesWithCount);
  } catch (error) {
    console.error('Error fetching categories:', error);
    return NextResponse.json([]);
  }
}
