import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import "./layout.css"
const Layout = () => {
  return (
    <div className='bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 h-screen w-screen relative text-slate-300 overflow-y-scroll overflow-x-hidden scroller '>
      <div className="absolute inset-0 bg-zinc-950/60 overflow-hidden">
        <div className='h-screen overflow-hidden py-12 px-4 bg-[url("/graph-paper.svg")] bg-repeat'>
          <div className='max-w-screen-xl mx-auto'>
            <Navbar />
            <Outlet />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
