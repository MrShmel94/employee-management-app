import React, { createContext, useState, useEffect } from 'react';

const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [userData, setUserData] = useState(null);

  const getUserData = () => {
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  };

  return (
    <MenuContext.Provider value={{ menuVisible, setMenuVisible, userData, setUserData, getUserData }}>
      {children}
    </MenuContext.Provider>
  );
};

export default MenuContext;
