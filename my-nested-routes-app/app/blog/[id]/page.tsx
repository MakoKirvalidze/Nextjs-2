import { GetServerSideProps } from 'next';
import { BlogPost } from './../../types';
import { fetchBlogPost } from '../../lib/api';

interface BlogPostPageProps {
  post: BlogPost;
}

export default function BlogPostPage({ post }: BlogPostPageProps) {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const post = await fetchBlogPost(params?.id as string);
  return { props: { post } };
};
