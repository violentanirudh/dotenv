import React from 'react';
import { Calendar, MapPin, Clock } from 'react-feather';
import { Fade } from 'react-awesome-reveal';

const UpcomingEvents = () => {
  const events = [
    {
      date: 'May 15, 2024',
      title: 'DevOps Summit 2024',
      location: 'Virtual Event',
      time: '10:00 AM - 5:00 PM EST',
      description: 'Join industry leaders to explore the latest in DevOps practices and tools.',
    },
    {
      date: 'June 22, 2024',
      title: 'Blockchain Developer Conference',
      location: 'Virtual Event',
      time: '9:00 AM - 6:00 PM EST',
      description: 'Dive deep into blockchain technology and its applications in modern software development.',
    },
    {
      date: 'July 10, 2024',
      title: 'AI in Software Engineering Workshop',
      location: 'Virtual Event',
      time: '1:00 PM - 4:00 PM PST',
      description: 'Learn how to integrate AI into your development workflow for enhanced productivity.',
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto">
        <h2 className="text-6xl font-bold text-center uppercase text-white mb-12">Upcoming Events</h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute w-1 h-full rounded bg-indigo-600"></div>
          
          {/* Events */}
          {events.map((event, index) => (
            <Fade
              key={index}
              triggerOnce
              duration={1000}
            >
              <div
                className={`flex flex-col md:flex-row items-center gap-4 mb-16 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="flex-1 w-full ml-6">
                  <div className="bg-black/20 p-6 rounded shadow-lg transition hover:bg-opacity-20">
                    <h3 className="text-2xl font-semibold text-indigo-500 mb-2">{event.title}</h3>
                    <p className="text-gray-300 mb-4">{event.description}</p>
                    <div className="flex items-center mb-2">
                      <Calendar size={16} className="mr-2 text-indigo-600" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center mb-2">
                      <MapPin size={16} className="mr-2 text-indigo-600"/>
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock size={16} className="mr-2 text-indigo-600" />
                      <span>{event.time}</span> 
                    </div>
                  </div>
                </div>
                <div className="w-6 h-6 absolute -left-3 ml-[2px] bg-slate-900 transform bg-transparent rounded-xl border-4 border-indigo-600"></div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
