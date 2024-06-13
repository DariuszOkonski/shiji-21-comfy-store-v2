import React from 'react';
import ProductsGrid from './ProductsGrid';
import ProductsList from './ProductsList';

const ProductsContainer = () => {
  return (
    <React.Fragment>
      <ProductsList />
      <ProductsGrid />
    </React.Fragment>
  );
};

export default ProductsContainer;
