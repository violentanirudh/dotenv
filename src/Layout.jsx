import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate, Link as RouterLink, useLocation } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import GlowingCursor from './components/GlowingCursor';
import PreLoader from './components/PreLoader';
import Terminal from './components/Terminal';
import { TerminalIcon } from 'lucide-react';

// Custom Link component
const Link = ({ to, children, ...props }) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
    setTimeout(() => navigate(to), 50); // Small delay to ensure scroll completes
  };

  return (
    <RouterLink to={to} onClick={handleClick} {...props}>
      {children}
    </RouterLink>
  );
};

const Layout = () => {
  const [loading, setLoading] = useState(true);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 300); // Simulate loading time
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <GlowingCursor>
      {loading ? (
        <PreLoader />
      ) : (
        <div className='bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 h-screen w-screen relative text-slate-300'>
          <div className="absolute inset-0 bg-zinc-950/60 overflow-y-scroll">
            <div className='py-12 px-4 bg-[url("/graph-paper.svg")] bg-repeat'>
              <div className='max-w-screen-xl mx-auto'>
                <Navbar />
                <Outlet />
                <Footer />
              </div>
            </div>
          </div>
          <Terminal isOpen={isTerminalOpen} setIsOpen={setIsTerminalOpen} />
          <button
            onClick={() => setIsTerminalOpen(!isTerminalOpen)}
            className="fixed bottom-8 right-8 bg-indigo-600 text-white p-2 rounded shadow-lg hover:bg-indigo-700 transition-colors duration-200 z-30"
          >
            <TerminalIcon size={24} />
          </button>
        </div>
      )}
    </GlowingCursor>
  );
}

export { Link, Layout as default };