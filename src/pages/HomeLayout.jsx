import React from 'react';
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
  return (
    <React.Fragment>
      <nav>
        <span className='text-4xl text-primary'>Comfy</span>
      </nav>
      <section className='align-element py-20'>
        <Outlet />
      </section>
    </React.Fragment>
  );
};

export default HomeLayout;
