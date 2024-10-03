import React from 'react';
import { Mail, Facebook, Instagram, Linkedin, Twitter } from 'react-feather';
import { Fade } from 'react-awesome-reveal';

const ContactForm = () => {
  return (
    <div className="py-20">
      <Fade triggerOnce direction='up'>
        <div className="container mx-auto">
          <h2 className="text-6xl font-bold text-white mb-8 text-center uppercase">Contact Us</h2>
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Contact Form */}
            <Fade triggerOnce direction='up' className='className="lg:w-2/3 bg-black/20 p-6 rounded-lg'>
              <div>
                      <h2 className="text-2xl text-white uppercase font-semibold">Got A Question?</h2>
                      <p className="text-gray-300 mb-6">Don't hesitate to reach out to us. We're here to help.</p>
                      <form className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <input
                            type="text"
                            placeholder="First Name"
                            className="w-full px-4 py-3 bg-slate-700/20 border-2 border-slate-800/60 text-white rounded focus:outline-none focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/20"
                          />
                          <input
                            type="text"
                            placeholder="Last Name"
                            className="w-full px-4 py-3 bg-slate-700/20 border-2 border-slate-800/60 text-white rounded focus:outline-none focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/20"
                          />
                        </div>
                        <input
                          type="email"
                          placeholder="Email"
                          className="w-full px-4 py-3 bg-slate-700/20 border-2 border-slate-800/60 text-white rounded focus:outline-none focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/20"
                        />
                        <input
                          type="text"
                          placeholder="Subject"
                          className="w-full px-4 py-3 bg-slate-700/20 border-2 border-slate-800/60 text-white rounded focus:outline-none focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/20"
                        />
                        <textarea
                          placeholder="Your message"
                          rows="4"
                          className="w-full px-4 py-3 bg-slate-700/20 border-2 border-slate-800/60 text-white rounded focus:outline-none focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/20"
                        ></textarea>
                        <button
                          type="submit"
                          className="w-full bg-indigo-600 text-white py-3 px-4 rounded hover:bg-indigo-800 transition duration-300"
                        >
                          Send Message
                        </button>
                      </form>
              </div>
            </Fade>

            <Fade triggerOnce direction='up' className="lg:w-1/3 bg-black/20 p-6 rounded-lg">
            <div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white mb-4">About Our Community</h3>
              <p className="text-gray-300">
                Join our community of developers and tech enthusiasts. Stay updated with the latest trends, participate in events, and connect with like-minded individuals.
              </p>
                <div className="flex items-center text-gray-300">
                  <Mail className="mr-3" size={20} />
                  <span>example@dotenv.com</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mt-8 mb-4">Stay Tuned</h3>
              <div className="flex space-x-8">
                <a href="#" className="hover:text-indigo-600">
                  <Facebook size={24} />
                </a>
                <a href="#" className="hover:text-indigo-600">
                  <Twitter size={24} />
                </a>
                <a href="#" className="hover:text-indigo-600">
                  <Instagram size={24} />
                </a>
                <a href="#" className="hover:text-indigo-600">
                  <Linkedin size={24} />
                </a>
              </div>
              
            </div>
            </Fade>

          </div>
        </div>
      </Fade>
    </div>
  );
};

export default ContactForm;