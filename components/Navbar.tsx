'use client';

import Link from "next/link";
import React from "react";
import ThemeSwitch from "./ThemeSwitch";
import { FaBars } from "react-icons/fa";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <nav className="border-b border-secondary">
      <div className="flex items-center justify-between">
        <div className="flex-shrink-0 lg:w-1/4 py-2 px-4 text-gray-50 lg:border-r border-secondary">
          <Link href={"/"} className="mr-2">
            aakash-gundeti
          </Link>
        </div>

        <div className="block lg:hidden py-2 px-4 text-gray-50">
          <FaBars size={20} />
        </div>

        <div className="hidden lg:flex lg:w-3/4 justify-between">
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

      <div id="mobile-menu" className="hidden lg:hidden mt-4">
        <a href="#" className="block text-white py-2 px-4">
          Home
        </a>
        <a href="#" className="block text-white py-2 px-4">
          About
        </a>
        <a href="#" className="block text-white py-2 px-4">
          Projects
        </a>
        <a href="#" className="block text-white py-2 px-4">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
