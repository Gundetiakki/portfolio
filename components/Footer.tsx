import Link from 'next/link'
import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

function Footer() {
  return (
    <div className="flex items-center justify-between border-t border-secondary">
      <div className="flex-shrink-0 py-2 px-4 text-gray-50 lg:border-r border-secondary">
        find me in:
      </div>

      <div className="flex lg:w-full justify-between">
        <div className="flex">
          <div className="border-x lg:border-r border-secondary py-2 px-4 text-gray-50">
            {/* <Link href={"/"}> */}
            <FaTwitter size={20} />
            {/* </Link> */}
          </div>
          <div className="border-r border-secondary py-2 px-4 text-gray-50">
            {/* <Link href={"/about"} className={`nav-link`}> */}
            <FaLinkedin size={20} />
            {/* </Link> */}
          </div>
          <div className="border-r border-secondary py-2 px-4 text-gray-50">
            {/* <Link href={"/projects"} className={`nav-link`}> */}{" "}
            <FaInstagram size={20} />
            {/* </Link> */}
          </div>
        </div>
        <div className="hidden py-2 px-4 lg:flex items-center border-l border-secondary text-gray-50">
          {/* <Link href={"/contact-me"} className="nav-link border-l border-r-0"> */}
          <span>@Gundetiakki</span>
          <FaGithub size={20} />
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
}

export default Footer