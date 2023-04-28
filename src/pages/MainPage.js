import React from 'react';
import Header from '../components/Header/Header';
import SideMenu from '../components/SideMenu/SideMenu';

const MainPage = () => {
  const user = {
    email: 'user@example.com',
    logout: () => {
      // Implement logout logic here
    },
  };

  return (
    <div className="main-page">
      <Header user={user} />
      <SideMenu />
      <main>
        {/* Main content of the page goes here */}
      </main>
    </div>
  );
};

export default MainPage;