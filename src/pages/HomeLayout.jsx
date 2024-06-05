import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Navbar } from '../components';

const HomeLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Navbar />
      <section className='align-element py-20'>
        <Outlet />
      </section>
    </React.Fragment>
  );
};

export default HomeLayout;
