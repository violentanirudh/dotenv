import React from "react";
import { Fade } from "react-awesome-reveal";

const volunteers = [
    {
        name: "Leslie Alexander",
        role: "Volunteer Coordinator",
        image: "https://via.placeholder.com/150", // replace with actual image link
    },
    {
        name: "Michael Foster",
        role: "Event Organizer",
        image: "https://via.placeholder.com/150",
    },
    {
        name: "Dries Vincent",
        role: "Community Outreach",
        image: "https://via.placeholder.com/150",
    },
    {
        name: "Lindsay Walton",
        role: "Volunteer",
        image: "https://via.placeholder.com/150",
    },
    {
        name: "Courtney Henry",
        role: "Volunteer",
        image: "https://via.placeholder.com/150",
    },
    {
        name: "Tom Cook",
        role: "Volunteer",
        image: "https://via.placeholder.com/150",
    },
];

const Volunteers = () => {
  return (
    <div className="mx-auto py-20">
    <Fade triggerOnce direction='up'>
      <h1 className="text-6xl font-bold text-center mb-12 uppercase">Volunteers</h1>
      <div className="flex gap-8 justify-center items-center flex-wrap mx-auto">
        {volunteers.map((volunteer, index) => (
            <Fade triggerOnce direction='up'>
                <div key={index} className="flex items-center space-x-4 w-72">
                    <img
                    src={volunteer.image}
                    alt={volunteer.name}
                    className="w-16 h-16 rounded object-cover"
                    />
                    <div>
                    <h2 className="text-lg truncate text-ellipsis">{volunteer.name}</h2>
                    <p className="text-indigo-600">{volunteer.role}</p>
                    </div>
                </div>
            </Fade>
        ))}
      </div>
    </Fade>
    </div>
  );
};

export default Volunteers;
