import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = ({ user }) => (
  <header className="header">
    <div className="logo">
      <NavLink to="/main">Logo</NavLink>
    </div>
    <nav>
      <NavLink to="/page1">Page 1</NavLink>
      <NavLink to="/page2">Page 2</NavLink>
      <NavLink to="/page3">Page 3</NavLink>
    </nav>
    <div className="user-info">
      {/* <span>{user.email}</span> */}
      {/* <span>'user.email'</span> */}
      {/* {user.logout && <button onClick={user.logout}>Logout</button>} */}
      {'user.logout' && <button onClick={() => {}}>Logout</button>}
    </div>
  </header>
);

export default Header;
