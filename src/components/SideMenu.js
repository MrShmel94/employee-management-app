import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import MenuContext from './MenuContext';

const SideMenu = () => {
  const { menuVisible, setMenuVisible } = useContext(MenuContext);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <>
      <aside className={`side-menu ${menuVisible ? 'visible' : 'hidden'}`}>
        <nav>
          <Link to="/page1">Page 1</Link>
          <Link to="/page2">Page 2</Link>
          <Link to="/page3">Page 3</Link>
        </nav>
      </aside>
      <button className="menu-button" onClick={toggleMenu}>
        ☰
      </button>
    </>
  );
};

export default SideMenu;
