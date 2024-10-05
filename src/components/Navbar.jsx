import React, { useState } from 'react';
import { FaBars, FaXmark } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Fade delay={50} direction='down'>
      <nav className="py-4 rounded-lg relative z-50">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/">
            <div className="flex items-center">
              <img src="/logo.png" alt="dotENV Logo" className="h-16 mr-2" />
            </div>
          </Link>
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link to="/about" className="hover:text-indigo-400">About</Link>
            <Link to="/events" className="hover:text-indigo-400">Events</Link>
            <Link to="/team" className="hover:text-indigo-400">Team</Link>
            <Link to="/blog" className="hover:text-indigo-400">Blog</Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link to="https://chat.whatsapp.com/JAZ6QIoO2GFGn3gD55Bo1u" target='_blank'>
              <button className="bg-indigo-600 px-4 py-2 rounded text-white">
                Join
              </button>
            </Link>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white">
              {isOpen ? <FaXmark size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isOpen && (
          <Fade>
          <div className="md:hidden flex flex-col gap-4 z-50 bg-black/20 p-8 w-full rounded-lg">
            <Link to="/about" className="hover:text-indigo-400">About</Link>
            <Link to="/events" className="hover:text-indigo-400">Events</Link>
            <Link to="/team" className="hover:text-indigo-400">Team</Link>
            <Link to="/blog" className="hover:text-indigo-400">Blog</Link>
            <Link to="https://chat.whatsapp.com/JAZ6QIoO2GFGn3gD55Bo1u" target='_blank'>
              <button className="bg-indigo-600 px-4 py-2 rounded text-white">
                Join
              </button>
            </Link>
          </div>
          </Fade>
        )}
      </nav>
    </Fade>
  );
};

export default Navbar;