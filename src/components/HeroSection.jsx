import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';

const HeroSection = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(200);

  const words = ['Development', 'DevOps', 'Blockchain'];

  useEffect(() => {
    let timer = setTimeout(() => {
      tick();
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text]);

  const tick = () => {
    let i = loopNum % words.length;
    let fullText = words[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setTypingSpeed(() => 100);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setTypingSpeed(150);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setTypingSpeed(150);
    }
  };

  return (
    <Fade direction='up' triggerOnce>
      <div className="flex flex-col items-center justify-center py-40 px-4 text-center z-0">
        <h1 className="text-3xl md:text-6xl font-bold mb-4 text-white">
          <span>Explore New Variables</span>
          <span className="block mt-2 h-20 text-indigo-400">
            {text}
            <span className="animate-blink">|</span>
          </span>
        </h1>
        <p className="mb-8 max-w-2xl">
          Dive into the world of cutting-edge technology. Discover the latest trends, tools, and techniques that are shaping the future of software development and innovation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/events">
            <button className="bg-indigo-600 hover:ring-4 hover:scale-105 hover:ring-indigo-950 text-white py-3 px-8 rounded transition duration-300">
              Explore Events
            </button>
          </Link>
          <Link to="/team">
            <button className="hover:scale-105 bg-black/20 py-3 px-8 rounded border border-zinc-800/20 transition duration-300">
              Meet the Team
            </button>
          </Link>
        </div>
      </div>
    </Fade>
  );
};

export default HeroSection;
