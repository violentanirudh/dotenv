import React from 'react';
import { FaXTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';

const teamMembers = [
  {
    name: "Harsh Mer",
    position: "Outreach Lead",
    description:
      "We focus on delivering the best tech solutions to solve real-world problems.",
    image: "/team/harsh.jpeg",
    socials: {
      x: "https://x.com/HarshMer623",
      instagram: "www.linkedin.com/in/harsh-mer623",
      linkedin: "https://www.instagram.com/harsh_mer623",
    },
  },
  {
    name: "Virengiri Goswami",
    position: "Tech Lead",
    description:
      "Creating intuitive and engaging user experiences is my passion.",
    image: "/team/virengiri.jpeg",
    socials: {
      x: "https://x.com/virengiri03",
      instagram: "https://www.instagram.com/virengirigoswami.dev/",
      linkedin: "https://www.linkedin.com/in/virengiri-goswami",
    },
  },
  {
    name: "Milan Gohel",
    position: "DSA Lead",
    description:
      "Building efficient and scalable backend architectures for smooth performance.",
    image: "/team/milan.jpeg",
    socials: {
      x: "https://x.com/gohelmilan91823",
      instagram: "https://www.instagram.com/milan.gohel.244/",
      linkedin: "https://www.linkedin.com/in/milan-gohel-114402226",
    },
  },
  {
    name: "Mann Shiyal",
    position: "Android Lead",
    description:
      "I bridge the gap between design and technology for seamless development.",
    image: "/team/mann.jpeg",
    socials: {
      x: "https://linktr.ee/dotenvcommunity",
      instagram: "https://www.instagram.com/mannshiyal/",
      linkedin: "https://www.linkedin.com/in/mann-shiyal-a31ba5227",
    },
  },
  {
    name: "Tejash Khoraba",
    position: "Design Lead",
    description:
      "I bridge the gap between design and technology for seamless development.",
    image: "/team/tejash.jpeg",
    socials: {
      x: "https://www.instagram.com/tejashkhoraba.design",
      instagram: "https://x.com/Tejash_77",
      linkedin: "https://www.linkedin.com/in/tejashkhoraba",
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
                      <Link to={member.socials.x} aria-label="X" target='_blank'>
                        <FaXTwitter size={20} className="text-gray-300 hover:text-white" />
                      </Link>
                      <Link to={member.socials.instagram} aria-label="Instagram" target='_blank'>
                        <FaInstagram size={20} className="text-gray-300 hover:text-white" />
                      </Link>
                      <Link to={member.socials.linkedin} aria-label="LinkedIn" target='_blank'>
                        <FaLinkedinIn size={20} className="text-gray-300 hover:text-white" />
                      </Link>
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