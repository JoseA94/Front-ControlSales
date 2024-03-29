import React from 'react';
import Sidebar from 'components/Sidebar';
import PrivateRoute from 'components/PrivateRoute';

const PrivateLayout = ({ children }) => {
  return (
    <div className='flex w-screen h-screen'>
      <PrivateRoute>
        <div className='flex flex-col lg:flex-row flex-nowrap h-full w-full'>
          <Sidebar />
          <main className='flex w-full  overflow-y-scroll items-center justify-center'>
            {children}
          </main>
        </div>
      </PrivateRoute>
    </div>
  );
};

export default PrivateLayout;

