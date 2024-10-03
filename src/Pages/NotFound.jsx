import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-6xl font-bold text-white mb-4">404</h1>
      <h2 className="text-3xl font-light text-indigo-300 mb-6">
        Oops! Page Not Found.
      </h2>
      <p className="text-lg mb-8">
        Sorry, the page you are looking for does not exist. Explore new paths:
      </p>
      <Link
        to="/"
        className="bg-indigo-600 px-4 py-2 rounded text-white hover:bg-indigo-700"
      >
        Return to Home
      </Link>
    </div>
  );
}

export default NotFound;
