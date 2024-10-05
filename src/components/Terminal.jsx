import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaTerminal } from 'react-icons/fa6';

const Terminal = ({ isOpen, setIsOpen }) => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState(['Welcome to dotENV terminal. Type "help" for commands.']);
  const inputRef = useRef(null);
  const outputRef = useRef(null);
  const navigate = useNavigate();

  const commands = {
    help: 'Available commands: home, about, events, team, blog, join, clear, exit',
    home: 'Navigating to Home page...',
    about: 'Navigating to About page...',
    events: 'Navigating to Events page...',
    team: 'Navigating to Team page...',
    blog: 'Navigating to Blog page...',
    join: 'Opening external Join page...',
    clear: 'Clearing terminal...',
    exit: 'Closing terminal...',
  };

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [output]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedInput = input.trim().toLowerCase();
    if (trimmedInput in commands) {
      setOutput([...output, `user@dotenv $ ${input}`, commands[trimmedInput]]);
      if (trimmedInput === 'clear') {
        setOutput([]);
      } else if (trimmedInput === 'exit') {
        setOutput([]);
        setIsOpen(false);
      } else if (trimmedInput === 'join') {
        window.open('https://chat.whatsapp.com/JAZ6QIoO2GFGn3gD55Bo1u', '_blank');
      } else if (trimmedInput === 'home') {
        navigate('/');
      } else if (trimmedInput !== 'help') {
        navigate(`/${trimmedInput}`);
      }
    } else {
      setOutput([...output, `user@dotenv $ ${input}`, 'Command not recognized. Type "help" for available commands.']);
    }
    setInput('');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-20 right-8 w-80 md:w-96 h-80 bg-black/60 text-indigo-400 p-4 rounded-lg overflow-hidden">
      <div ref={outputRef} className="h-64 overflow-y-auto mb-2 w-full">
        {output.map((line, index) => (
          <div key={index}>
            {line.startsWith('user@dotenv $') ? (
              <span>
                <span className="text-white">user@dotenv $</span>{line.slice(13)}
              </span>
            ) : (
              line
            )}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="flex w-full">
        <span className="mr-2"><span className="text-white">user@dotenv $</span></span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={handleInputChange}
          className="flex-grow bg-transparent outline-none"
        />
      </form>
    </div>
  );
};

export default Terminal;