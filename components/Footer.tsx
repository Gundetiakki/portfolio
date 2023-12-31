import Link from 'next/link'
import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

function Footer() {
  return (
    <footer className="flex items-center justify-between border-t border-secondary">
      <div className="flex-shrink-0 py-2 px-4 text-gray-50 lg:border-r border-secondary">
        find me in:
      </div>

      <div className="flex lg:w-full justify-between">
        <div className="flex">
          <Link href={"https://twitter.com/AGundeti"} target='_blank' className="footer-link">
            <FaTwitter size={20} />
          </Link>
          <Link href={"https://www.linkedin.com/in/aakash-gundeti-031131106/"} target='_blank' className="footer-link">
            <FaLinkedin size={20} />
          </Link>
          <Link href={"https://www.instagram.com/aakashg345/"} target='_blank' className="footer-link">
            <FaInstagram size={20} />
          </Link>
        </div>
        <div className="hidden py-2 px-4 lg:flex items-center footer-link border-r-0">
          <Link
            href={"https://github.com/aakash-gundeti"}
            target="_blank"
            className="flex"
          >
            <span className="mr-2">@aakash-gundeti</span>
            <FaGithub size={20} />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer