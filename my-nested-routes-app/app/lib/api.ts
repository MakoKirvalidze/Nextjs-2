import { Product, BlogPost } from '../types';

export async function fetchProducts(): Promise<Product[]> {
  return [
    { id: 1, name: 'Product 1', category: 'Category A' },
    { id: 2, name: 'Product 2', category: 'Category B' },
  ];
}

export async function fetchBlogPosts(): Promise<BlogPost[]> {
  return [
    { id: 1, title: 'First Post', content: 'Content of the first post' },
    { id: 2, title: 'Second Post', content: 'Content of the second post' },
  ];
}

export async function fetchBlogPost(id: string): Promise<BlogPost> {
  return { id: parseInt(id), title: 'Post Title', content: 'Post Content' };
}

export async function fetchProductsByCategory(category: string): Promise<Product[]> {
  return [
    { id: 1, name: `Product in ${category} 1`, category },
    { id: 2, name: `Product in ${category} 2`, category },
  ];
}

export async function fetchCategories(): Promise<string[]> {
  return ['Category A', 'Category B', 'Category C'];
}
