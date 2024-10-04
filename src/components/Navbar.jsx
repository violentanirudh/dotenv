import { useState } from 'react';
import { Menu, X } from 'react-feather';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="py-4 rounded-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <div className="flex items-center">
            <img src="/logo.png" alt="dotENV Logo" className="h-16 mr-2" />
          </div>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="/about" className="hover:text-indigo-400">About</a>
          <a href="/events" className="hover:text-indigo-400">Events</a>
          <a href="/team" className="hover:text-indigo-400">Team</a>
          <a href="/blog" className="hover:text-indigo-400">Blog</a>
        </div>
        
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/join">
            <button className="bg-indigo-600 px-4 py-2 rounded text-white">
              Join The Community
            </button>
          </Link>
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
        <div className="md:hidden mt-4 flex flex-col gap-4">
          <a href="/about" className="hover:text-indigo-400">About</a>
          <a href="/events" className="hover:text-indigo-400">Events</a>
          <a href="/team" className="hover:text-indigo-400">Team</a>
          <a href="/blog" className="hover:text-indigo-400">Blog</a>
          <Link to="/join">
            <button className="bg-indigo-600 px-4 py-2 rounded text-white">
              Join The Community
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;