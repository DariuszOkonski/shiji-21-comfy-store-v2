import React from 'react';
import { Filters, PaginationContainer, ProductsContainer } from '../components';
import { customFetch } from '../utils';
import { useLoaderData } from 'react-router-dom';

const url = '/products';
export const loader = async ({ request }) => {
  const response = await customFetch(url);
  const products = response.data.data;
  const meta = response.data.meta;

  return { products, meta };
};

const Products = () => {
  const { products, meta } = useLoaderData();

  return (
    <React.Fragment>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </React.Fragment>
  );
};

export default Products;
