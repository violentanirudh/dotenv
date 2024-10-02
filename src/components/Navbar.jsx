import React, { useState } from 'react';
import { Menu, X } from 'react-feather';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="p-4 rounded-lg m-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src="/logo.png" alt="dotENV Logo" className="h-16 mr-2" />
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-indigo-400">Events</a>
          <a href="#" className="hover:text-indigo-400">Team</a>
          <a href="#" className="hover:text-indigo-400">Blog</a>
          <a href="#" className="hover:text-indigo-400">Testimonials</a>
          <a href="#" className="hover:text-indigo-400">Stats</a>
        </div>
        
        <div className="hidden md:flex items-center space-x-4">
          <button className="bg-indigo-600 px-4 py-2 rounded text-white">
            Join The Community
          </button>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 px-4">
          <a href="#" className="hover:text-indigo-400">Events</a>
          <a href="#" className="hover:text-indigo-400">Team</a>
          <a href="#" className="hover:text-indigo-400">Blog</a>
          <a href="#" className="hover:text-indigo-400">Testimonials</a>
          <a href="#" className="hover:text-indigo-400">Stats</a>
          <button className="bg-indigo-600 px-4 py-2 rounded text-white">
            Join The Community
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;