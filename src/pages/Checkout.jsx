import React from 'react';
import { useSelector } from 'react-redux';
import { CheckoutForm, SectionTitle, CartTotals } from '../components';
import { toast } from 'react-toastify';
import { redirect, useLoaderData } from 'react-router-dom';

export const loader = (store) => () => {
  const user = store.getState().cartState.user;

  if (!user) {
    toast.warn('you must be logged in to checkout');
    return redirect('/login');
  }

  return null;
};

const Checkout = () => {
  useLoaderData();
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
