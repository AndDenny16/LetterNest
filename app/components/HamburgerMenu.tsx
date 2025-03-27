import React, { useState } from 'react';
import type { MenuItem } from '@/types';

interface HamburgerMenuProps {
  items: MenuItem[];
}

export const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ items }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close the menu when clicking outside
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Hamburger Button */}
      <button
        className="fixed top-5 left-5 z-50 bg-transparent border-none cursor-pointer p-2.5"
        onClick={toggleMenu}
        aria-label="Menu"
        aria-expanded={isOpen}
      >
        <span
          className={`block w-6 h-0.5 my-1.5 mx-auto transition-all duration-300 ease-in-out bg-gray-800 ${
            isOpen ? 'rotate-45 translate-y-2.5' : ''
          }`}
        />
        <span
          className={`block w-6 h-0.5 my-1.5 mx-auto transition-all duration-300 ease-in-out bg-gray-800 ${
            isOpen ? 'opacity-0' : ''
          }`}
        />
        <span
          className={`block w-6 h-0.5 my-1.5 mx-auto transition-all duration-300 ease-in-out bg-gray-800 ${
            isOpen ? '-rotate-45 -translate-y-2.5' : ''
          }`}
        />
      </button>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ease-in-out ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={closeMenu}
      />

      {/* Sidebar Menu */}
      <nav
        className={`fixed top-0 left-0 h-screen w-64 bg-gray-100 shadow-md z-50 pt-16 px-5 transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <ul className="p-0">
          {items.map((item) => (
            <li key={item.id} className="list-none my-5">
              <a
                href={item.path}
                className="no-underline text-gray-800 font-bold text-lg transition-colors duration-300 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};