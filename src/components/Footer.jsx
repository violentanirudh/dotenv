import React from 'react';
import { TwitterIcon, Linkedin, Instagram } from 'lucide-react';
import { Fade } from 'react-awesome-reveal';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();

  return (
    <footer className="text-white py-20">
      <div className="container mx-auto text-center space-y-10">
        <Fade key={location.pathname} triggerOnce direction='up'>
          <h3 className="text-6xl font-semibold">.env</h3>
          <p className="text-slate-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione veniam amet autem sunt, perspiciatis nemo.
          </p>
          <div className="flex justify-center space-x-8">
            <Link to="https://x.com/_dotenv_" className="hover:text-indigo-500" target='_blank'>
              <TwitterIcon size={24} />
            </Link>
            <Link to="https://www.instagram.com/dotenv.tech/" className="hover:text-indigo-500" target='_blank'>
              <Instagram size={24} />
            </Link>
            <Link to="https://www.linkedin.com/company/dotenv-community/" className="hover:text-indigo-500" target='_blank'>
              <Linkedin size={24} />
            </Link>
          </div>
          <p>
            &copy; 2024 dotENV. Design by <span className="text-indigo-400">Team dotENV.</span>
          </p>
        </Fade>
      </div>
    </footer>
  );
};

export default Footer;