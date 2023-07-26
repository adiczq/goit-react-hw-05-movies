import React, { Suspense } from 'react';
import Header from 'components/Header/Header';
import { Outlet } from 'react-router-dom';
import Loader from 'components/Loader/Loader';

const Layout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
