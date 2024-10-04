import { Facebook, Twitter, Linkedin, Instagram } from 'react-feather';
import { Fade } from 'react-awesome-reveal';

const Footer = () => {
  return (
    <footer className="text-white py-20">
      <div className="container mx-auto text-center space-y-10">
        <Fade triggerOnce direction='up'>
          <h3 className="text-6xl font-semibold">.env</h3>

          <p className="text-slate-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione veniam amet autem sunt, perspiciatis nemo.
          </p>

          <div className="flex justify-center space-x-8">
            <a href="#" className="hover:text-blue-400">
              <Facebook size={24} />
            </a>
            <a href="#" className="hover:text-blue-400">
              <Twitter size={24} />
            </a>
            <a href="#" className="hover:text-blue-400">
              <Instagram size={24} />
            </a>
            <a href="#" className="hover:text-blue-400">
              <Linkedin size={24} />
            </a>
          </div>

          <p className="text-slate-500">
            &copy; 2024 dotENV. Design by <span className="text-indigo-400">Team dotENV.</span>
          </p>
        </Fade>
      </div>
    </footer>
  );
};

export default Footer;
