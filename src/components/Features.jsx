import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { Cloud, Lock, Book, Video } from 'react-feather';

const Features = () => {
  return (
    <Fade triggerOnce direction='up'>
    <div className="py-20">
      <div className="text-center mb-12">
        <h1 className="text-6xl font-bold mb-6">BENEFITS</h1>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
        <FeatureCard 
          icon={<Cloud size={24} className="text-indigo-400" />}
          title="Push to deploy"
          description="Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa."
        />
        <FeatureCard 
          icon={<Lock size={24} className="text-indigo-400" />}
          title="SSL certificates"
          description="Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet."
        />
        <FeatureCard 
          icon={<Book size={24} className="text-indigo-400" />}
          title="Simple queues"
          description="Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque."
        />
        <FeatureCard 
          icon={<Video size={24} className="text-indigo-400" />}
          title="Advanced security"
          description="Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget."
        />
        <FeatureCard 
          icon={<Video size={24} className="text-indigo-400" />}
          title="Advanced security"
          description="Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget."
        />
        <FeatureCard 
          icon={<Video size={24} className="text-indigo-400" />}
          title="Advanced security"
          description="Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget."
        />
      </div>
    </div>
    </Fade>
  );
};

const FeatureCard = ({ icon, title, description }) => {
  return (
    <Fade triggerOnce direction='up'>
        <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 mt-1">
            <div className="bg-indigo-600 bg-opacity-10 rounded-lg p-2">
            {icon}
            </div>
        </div>
        <div>
            <h2 className="text-lg font-semibold mb-2">{title}</h2>
            <p className="text-slate-400">{description}</p>
        </div>
        </div>
    </Fade>
  );
};

export default Features;