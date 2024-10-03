import { Link } from 'react-router-dom';
import { Clock, MessageSquare } from 'react-feather';
import { Fade } from 'react-awesome-reveal';


const BlogPost = ({ image, category, title, description, time, comments }) => (
  <Fade triggerOnce direction='up'>
  <div className="bg-black/10 ring-1 ring-zinc-800/40 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
    <img src={image} alt={title} className="w-full" />
    <div className="p-4">
      <span className="inline-block px-2 py-1 text-xs font-semibold text-indigo-100 bg-indigo-500 rounded-full mb-2">
        {category}
      </span>
      <h3 className="text-xl font-semibold text-slate-100 mb-2">{title}</h3>
      <p className="text-slate-400 mb-4">{description}</p>
      <div className="flex justify-between items-center text-slate-400">
        <div className="flex items-center">
          <Clock size={12} className="mr-1" />
          <span>{time}</span>
        </div>
        <div className="flex items-center">
          <MessageSquare size={12} className="mr-1" />
          <span>{comments} Comments</span>
        </div>
      </div>
    </div>
  </div>
  </Fade>
);

const Blog = () => {
    const blogPosts = [
        {
            image: "https://placehold.co/600x400",
            category: "Development",
            title: "Understanding React Hooks",
            description: "A comprehensive guide to understanding and using React Hooks in your projects.",
            time: "2 hours ago",
            comments: 12
        },
        {
            image: "https://placehold.co/600x400",
            category: "Development",
            title: "Top 10 VSCode Extensions for Developers",
            description: "Enhance your development workflow with these must-have VSCode extensions.",
            time: "3 days ago",
            comments: 5
        },
        {
            image: "https://placehold.co/600x400",
            category: "Computer Science",
            title: "Introduction to Algorithms",
            description: "An introductory guide to algorithms and their importance in computer science.",
            time: "1 week ago",
            comments: 8
        }
    ];

  return (
    <div className="py-20">
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-6xl font-bold text-white flex items-center justify-center mb-12">
            BLOG
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogPost key={index} {...post} />
          ))}
        </div>
        <Link to="/events" className='inline-block mt-12'>
          <button className="bg-indigo-600 hover:ring-4 hover:scale-105 hover:ring-indigo-950 text-white py-3 px-8 rounded transition duration-300">
            Read All Blogs
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Blog;