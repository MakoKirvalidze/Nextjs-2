import { GetStaticProps } from 'next';
import { Product } from './types';
import { fetchProducts } from './lib/api';

interface HomePageProps {
  products: Product[];
}

export default function HomePage({ products }: HomePageProps) {
  return (
    <div>
      <h1>Welcome to our Site</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const products = await fetchProducts();
  return { props: { products } };
};
