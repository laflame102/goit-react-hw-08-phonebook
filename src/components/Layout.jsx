import { Suspense } from 'react';
import ApplicationBar from './AppBar/AppBar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <ApplicationBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
