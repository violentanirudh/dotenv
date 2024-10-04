import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { BookOpen, Share2, Users, MessageSquare, Globe, Bell, Award, Tool, Compass, Calendar } from 'react-feather';

const Features = () => {
  return (
    <Fade triggerOnce direction='up'>
      <div className="py-20">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold mb-6">OBJECTIVES</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
          <FeatureCard
            icon={<BookOpen size={24} className="text-indigo-400" />}
            title="Learning"
            description="Encouraging continuous learning of emerging technologies and skills."
          />
          <FeatureCard
            icon={<Share2 size={24} className="text-indigo-400" />}
            title="Sharing Knowledge"
            description="Promoting a culture of collaboration where members exchange insights and experiences."
          />
          <FeatureCard
            icon={<Users size={24} className="text-indigo-400" />}
            title="Team Management"
            description="Developing leadership and teamwork skills through group activities and projects."
          />
          <FeatureCard
            icon={<MessageSquare size={24} className="text-indigo-400" />}
            title="Soft Skills"
            description="Enhancing communication, problem-solving, and other essential interpersonal skills."
          />
          <FeatureCard
            icon={<Globe size={24} className="text-indigo-400" />}
            title="Networking"
            description="Building connections with peers, mentors, and industry professionals."
          />
          <FeatureCard
            icon={<Bell size={24} className="text-indigo-400" />}
            title="Awareness"
            description="Providing information on open-source contributions, internships, hackathons, meetups, and various opportunities."
          />
          <FeatureCard
            icon={<Award size={24} className="text-indigo-400" />}
            title="Contests and Quizzes"
            description="Organizing engaging contests and quizzes to reinforce learning."
          />
          <FeatureCard
            icon={<Tool size={24} className="text-indigo-400" />}
            title="Workshops and Bootcamps"
            description="Hosting hands-on workshops and bootcamps for practical skill development."
          />
          <FeatureCard
            icon={<Compass size={24} className="text-indigo-400" />}
            title="Mentorship and Guidance"
            description="Offering mentorship programs to help members navigate their career paths and educational journeys."
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