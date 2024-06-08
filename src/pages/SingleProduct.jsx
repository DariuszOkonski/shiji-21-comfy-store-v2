import { useLoaderData } from 'react-router-dom';
import { customFetch, formatPrice } from '../utils';

export const loader = async ({ params }) => {
  const response = await customFetch(`/products/${params.id}`);
  return { product: response.data.data };
};

const SingleProduct = () => {
  const { product } = useLoaderData();
  const { image, title, price, description, colors, company } =
    product.attributes;
  const dollarsAmount = formatPrice(price);

  return (
    <div>
      <h1>SingleProduct</h1>
    </div>
  );
};

export default SingleProduct;
