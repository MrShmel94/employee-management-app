import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ user }) => (
  <header>
    <div className="logo">
      <Link to="/main">Logo</Link>
    </div>
    <nav>
      <Link to="/page1">Page 1</Link>
      <Link to="/page2">Page 2</Link>
      <Link to="/page3">Page 3</Link>
    </nav>
    <div className="user-info">
      <span>{user.email}</span>
      {user.logout && <button onClick={user.logout}>Logout</button>}
    </div>
  </header>
);

export default Header;
