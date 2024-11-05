import { GetStaticProps } from 'next';
import { BlogPost } from './../types';
import { fetchBlogPosts } from '../lib/api';

interface BlogPageProps {
  posts: BlogPost[];
}

export default function BlogPage({ posts }: BlogPageProps) {
  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await fetchBlogPosts();
  return { props: { posts } };
};
