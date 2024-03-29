import React, { useState } from 'react';

export type MenuItem = {
  name: string;
  label: string;
  icon?: React.ReactNode;
  args?: Record<string, any>;
  element?: (...args: any[]) => JSX.Element;
};

const useMenu = (items: MenuItem[]) => {
  const [activeMenuIndex, setActiveMenuIndex] = useState<number>(0);
  const activeMenu = items[activeMenuIndex];
  const switchMenu = (menuIdx: number) => {
    const menu = items[menuIdx];
    if (menu) {
      setActiveMenuIndex(menuIdx);
    }
  };

  return {
    activeMenuIndex,
    activeMenu,
    switchMenu,
    menuItems: items,
  };
};

export default useMenu;
