import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from "react-feather"; // Import Feather icons
import { Fade } from 'react-awesome-reveal'; // Import Fade from react-awesome-reveal

const teamMembers = [
  {
    name: "Harsh Mer",
    position: "Outreach Lead",
    description:
      "We focus on delivering the best tech solutions to solve real-world problems.",
    image: "/team/harsh.jpeg", // Replace with real image
    socials: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    name: "Virengiri Goswami",
    position: "Tech Lead",
    description:
      "Creating intuitive and engaging user experiences is my passion.",
    image: "/team/virengiri.jpeg", // Replace with real image
    socials: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    name: "Milan Gohel",
    position: "DSA Lead",
    description:
      "Building efficient and scalable backend architectures for smooth performance.",
    image: "/team/milan.jpeg", // Replace with real image
    socials: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    name: "Mann Shiyal",
    position: "Android Lead",
    description:
      "I bridge the gap between design and technology for seamless development.",
    image: "/team/mann.jpeg", // Replace with real image
    socials: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    name: "Tejash Khoraba",
    position: "Design Lead",
    description:
      "I bridge the gap between design and technology for seamless development.",
    image: "/team/tejash.jpeg", // Replace with real image
    socials: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
];

const TeamSection = () => {

  return (
    <section className="py-20">
      <Fade triggerOnce direction='up'>
        <div className="container mx-auto text-center">
          <h2 className="text-6xl font-bold uppercase text-white mb-12">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Fade key={index} triggerOnce direction='up'>
                <div
                  className="rounded-lg bg-black/10 ring-1 ring-zinc-800/40 backdrop-blur-sm text-white transform hover:scale-105 transition-transform duration-300"
                >
                  <div className="border-b flex justify-between border-zinc-800/40 p-4">
                    <p>Connect</p>
                    <div className="flex gap-4">
                      <a href={member.socials.facebook} aria-label="Facebook">
                        <Facebook size={20} className="text-gray-300 hover:text-white" />
                      </a>
                      <a href={member.socials.twitter} aria-label="Twitter">
                        <Twitter size={20} className="text-gray-300 hover:text-white" />
                      </a>
                      <a href={member.socials.instagram} aria-label="Instagram">
                        <Instagram size={20} className="text-gray-300 hover:text-white" />
                      </a>
                      <a href={member.socials.linkedin} aria-label="LinkedIn">
                        <Linkedin size={20} className="text-gray-300 hover:text-white" />
                      </a>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex gap-4 items-center">
                      <img
                        className="w-24 h-24 rounded object-cover"
                        src={member.image}
                        alt={member.name}
                      />
                      <div className='text-left'>
                        <h3 className="text-xl font-bold">{member.name}</h3>
                        <p className="text-gray-400">{member.position}</p>
                      </div>
                    </div>
                    {/* <p className="text-gray-300 mt-2 text-left">{member.description}</p> */}
                  </div>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default TeamSection;
