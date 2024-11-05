import { GetStaticProps } from 'next';
import { Product } from './../types';
import { fetchProducts } from '../lib/api';

interface ProductsPageProps {
  products: Product[];
}

export default function ProductsPage({ products }: ProductsPageProps) {
  return (
    <div>
      <h1>Our Products</h1>
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
