'use client';

import Link from "next/link";
import React from "react";
import ThemeSwitch from "./ThemeSwitch";
import { FaBars, FaTimes } from "react-icons/fa";
import { usePathname } from "next/navigation";

interface Props {
  nav:  boolean,
  openNav: () => void,
  closeNav: () => void
}

const Navbar = ({nav, openNav, closeNav} : Props) => {
  const pathname = usePathname();

  const navAnimation = nav ? 'translate-y-0' : 'translate-y-[-100%]';
  console.log(pathname);
  return (
    <>
      <nav className="border-b border-secondary bg-primary relative z-[1000]">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0 md:w-1/4 py-2 px-4 text-gray-50 md:border-r border-secondary">
            <Link href={"/"} className="mr-2">
              aakash-gundeti
            </Link>
          </div>

          <div className="block md:hidden py-2 px-4 text-gray-50">
            {!nav ? (
              <button onClick={openNav}>
                <FaBars size={20} />
              </button>
            ) : (
              <button onClick={closeNav}>
                <FaTimes size={20} />
              </button>
            )}
          </div>

          <div className="hidden md:flex md:w-3/4 justify-between">
            <div className="flex">
              <Link href={"/"} className={`nav-link ${pathname === '/' ? 'active' : ''}`}>
                _hello
              </Link>
              <Link href={"/about"} className={`nav-link ${pathname === '/about' ? 'active' : ''}`}>
                {" "}
                _about-me{" "}
              </Link>
              <Link href={"/projects"} className={`nav-link ${pathname === '/projects' ? 'active' : ''}`}>
                {" "}
                _projects{" "}
              </Link>
            </div>
            <div className="flex">
              <Link href={"/contact-me"} className={`nav-link border-l border-r-0 ${pathname === '/contact-me' ? 'active' : ''}`}>
                _contact-me
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div id="mobile-menu" className={`${navAnimation} bg-primary w-full fixed top-10 flex h-full flex-col transform duration-300 transition-all`}>
        <Link href={"/"} className={`nav-link-mobile ${pathname === '/' ? 'active' : ''}`}>
          _hello
        </Link>
        <Link href={"/about"} className={`nav-link-mobile ${pathname === '/about' ? 'active' : ''}`}>
          {" "}
          _about-me{" "}
        </Link>
        <Link href={"/projects"} className={`nav-link-mobile ${pathname === '/projects' ? 'active' : ''}`}>
          {" "}
          _projects{" "}
        </Link>
        <Link href={"/contact-me"} className={`nav-link-mobile ${pathname === '/contact-me' ? 'active' : ''}`}>
          _contact-me
        </Link>
      </div>
    </>
  );
};

export default Navbar;
