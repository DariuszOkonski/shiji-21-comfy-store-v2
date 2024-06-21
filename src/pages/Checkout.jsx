import React from 'react';
import { useSelector } from 'react-redux';
import { CheckoutForm, SectionTitle, CartTotals } from '../components';

const Checkout = () => {
  const cartTotal = useSelector((state) => state.cartState.cartTotal);

  if (cartTotal === 0) {
    return <SectionTitle text='Your cart is empty' />;
  }

  return (
    <React.Fragment>
      <SectionTitle text='place your order' />
      <div className='mt-8 grid gap-8 md:grid-cols-2 items-start'>
        <CheckoutForm />
        <CartTotals />
      </div>
    </React.Fragment>
  );
};

export default Checkout;
