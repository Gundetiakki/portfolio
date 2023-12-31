'use client'

import { ThemeProvider } from "next-themes"
import { usePathname } from "next/navigation";
import { ReactNode, createContext, useEffect, useState } from "react";

type navContextType = {
  nav: boolean;
  openNav: () => void;
  closeNav: () => void;
};

const navContextDefaultValues: navContextType = {
  nav: false,
  openNav: () => {},
  closeNav: () => {},
};

export const NavContext = createContext<navContextType>(
  navContextDefaultValues
);

type Props = {
  children: ReactNode;
};

export function Providers({ children } : Props){
  const [nav, setNav] = useState<boolean>(false);
  const pathname = usePathname();
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);

  const value = {
    nav,
    openNav,
    closeNav,
  };

  useEffect(() => {
    setNav(false);
  }, [pathname]);

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <NavContext.Provider value={value}>
        {children}
      </NavContext.Provider>
    </ThemeProvider>
  );
}