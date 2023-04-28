import React from 'react';
import Header from './Header';
import SideMenu from './SideMenu';

const MainPage = () => {
  return (
    <div>
      <Header />
      <SideMenu />
      <div className="main-content">
        {/* Add your main content here */}
      </div>
    </div>
  );
};

export default MainPage;
