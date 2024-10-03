import { useEffect, useState } from 'react';
import Footer from './components/Footer';
import { Outlet, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import GlowingCursor from './components/GlowingCursor';
import PreLoader from './components/PreLoader';

const Layout = () => {

  const [loading, setLoading] = useState(true);
  const navigation = useNavigate();

  useEffect(() => {
    if (navigation.state === 'loading') {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [navigation.state]);

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
      </div>
      )}
    </GlowingCursor>
  );
}

export default Layout;
