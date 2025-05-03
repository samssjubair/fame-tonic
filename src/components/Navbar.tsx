'use client'

import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/logo.png';
import Image from 'next/image';
import Container from './HOC/Container';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed w-full bg-transparent z-50">
      <Container>
        <div className="flex items-center justify-between h-16 relative">
          <div className="flex-shrink-0 md:flex-shrink-0 md:flex md:items-center mx-auto md:mx-0">
            <Link href="/" className="text-2xl font-bold text-white">
              <Image src={logo} alt="Logo" width={120}/>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link
                href="/about"
                className="nav-item"
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="nav-item"
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="md:hidden absolute right-0">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-gray-300 focus:outline-none"
            >
              {isMenuOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </Container>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black bg-opacity-80">
            <a
              href="/about"
              className="font-['Figtree'] font-semibold text-[18px] leading-[100%] tracking-[0%] text-center align-middle text-[#A9A9A9] hover:text-white block px-3 py-2 rounded-md"
            >
              About Us
            </a>
            <a
              href="/contact"
              className="font-['Figtree'] font-semibold text-[18px] leading-[100%] tracking-[0%] text-center align-middle text-[#A9A9A9] hover:text-white block px-3 py-2 rounded-md"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
