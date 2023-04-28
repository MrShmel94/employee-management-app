import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SideMenu = () => {
  const [menuVisible, setMenuVisible] = useState(true);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <aside className={menuVisible ? 'visible' : 'hidden'}>
      <nav>
        <Link to="/page1">Page 1</Link>
        <Link to="/page2">Page 2</Link>
        <Link to="/page3">Page 3</Link>
      </nav>
      <button className="toggle-menu" onClick={toggleMenu}>
        {menuVisible ? 'Hide' : 'Show'}
      </button>
    </aside>
  );
};

export default SideMenu;