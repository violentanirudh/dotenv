import { useState } from 'react';
import { Menu, X } from 'lucide-react';
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
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4">
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
      )}
    </nav>
  );
};

export default Navbar;