import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [theme, setTheme] = useState('light');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar bg-red-600 text-white shadow-lg fixed">
      <div className="w-11/12 mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex-1">
          <Link to="/" className="text-2xl font-bold">
            Susanto CD
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="lg:hidden">
          <button
            className="btn btn-circle btn-outline text-white"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`lg:flex flex-col lg:flex-row lg:items-center lg:static absolute top-16 left-0 w-full lg:w-auto bg-red-600 lg:bg-transparent shadow-lg lg:shadow-none transition-transform ${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
          }`}
        >
          <ul className="menu lg:menu-horizontal px-4 py-4 lg:py-0 lg:px-1 flex flex-col lg:flex-row gap-4 lg:gap-5">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? 'active text-blue-300 bg-red-900 px-2 py-1 rounded'
                    : 'px-2 py-1'
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? 'active text-blue-300 bg-red-900 px-2 py-1 rounded'
                    : 'px-2 py-1'
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/skills"
                className={({ isActive }) =>
                  isActive
                    ? 'active text-blue-300 bg-red-900 px-2 py-1 rounded'
                    : 'px-2 py-1'
                }
              >
                Skills
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  isActive
                    ? 'active text-blue-300 bg-red-900 px-2 py-1 rounded'
                    : 'px-2 py-1'
                }
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? 'active text-blue-300 bg-red-900 px-2 py-1 rounded'
                    : 'px-2 py-1'
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Theme Toggle */}
        <div className="hidden lg:flex items-center">
          <button
            className="btn btn-circle btn-outline ml-4 text-white"
            onClick={toggleTheme}
          >
            {theme === 'light' ? <FiMoon size={20} /> : <FiSun size={20} />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
