import { GetStaticProps, GetStaticPaths } from 'next';
import { Product } from './../../types';
import { fetchProductsByCategory, fetchCategories } from '../../lib/api';

interface CategoryPageProps {
  category: string;
  products: Product[];
}

export default function CategoryPage({ category, products }: CategoryPageProps) {
  return (
    <div>
      <h1>Products in {category}</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const categories = await fetchCategories();
  const paths = categories.map(category => ({ params: { category } }));
  return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const products = await fetchProductsByCategory(params?.category as string);
  return { props: { category: params?.category, products }, revalidate: 60 };
};
