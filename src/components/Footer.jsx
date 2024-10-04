import { Fade } from 'react-awesome-reveal';
import { Link, useLocation } from 'react-router-dom';
import { FaInstagram, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  const location = useLocation();

  return (
    <footer className="text-white py-20">
      <div className="container mx-auto text-center space-y-10">
        <Fade key={location.pathname} triggerOnce direction='up'>
          <h3 className="text-6xl font-semibold">.env</h3>
          <p className="text-slate-300">
          We're building a tech community to help you grow in Cloud, DevOps, App Development, Blockchain, and UI/UX. Join hands-on workshops and real-world projects to develop practical skills and collaborate with peers.          <div className="flex justify-center space-x-8">
          </p>
          <div>
            <Link to="https://x.com/_dotenv_" className="hover:text-indigo-500" target='_blank'>
              <FaXTwitter size={24} />
            </Link>
            <Link to="https://www.instagram.com/dotenv.tech/" className="hover:text-indigo-500" target='_blank'>
              <FaInstagram size={24} />
            </Link>
            <Link to="https://www.linkedin.com/company/dotenv-community/" className="hover:text-indigo-500" target='_blank'>
              <FaLinkedinIn size={24} />
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