import { Link } from "react-router-dom";

const AboutPage = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between py-40">
            <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8">
                <h1 className="text-6xl font-bold text-white mb-4 sm:mb-6 md:mb-8">ABOUT .env</h1>
                <p className="text-lg mb-8 text-gray-300">
                    Welcome to .ENV, a vibrant community dedicated to empowering individuals in the tech industry. We are a group of passionate individuals committed to fostering collaboration, innovation, and support among our members.
                </p>
                <div>
                <div className="flex gap-4">
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
            </div>
            <div className="max-w-80 mx-auto flex justify-center">
                <img src="/startup.svg" alt="Team" className="w-full"/>
            </div>
        </div>
    );
}

export default AboutPage;