import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-yellow-500">
          IronCore
        </Link>
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-yellow-400">
            Home
          </Link>
          <Link to="/classes" className="hover:text-yellow-400">
            Classes
          </Link>
          <Link to="/trainers" className="hover:text-yellow-400">
            Trainers
          </Link>
          <Link to="/about" className="hover:text-yellow-400">
            About
          </Link>
          <Link to="/content" className="hover:text-yellow-400">
            Contact
          </Link>
        </div>
      </div>
      {isOpen && (
          <div className="md:hidden bg-gray-700 px-4 pb-4 space-y-2 text-center">
            <Link to="/" className="block hover:text-yellow-400 border-b-1 py-2" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/classes" className="block hover:text-yellow-400 border-b-1 py-2" onClick={() => setIsOpen(false)}>Classes</Link>
            <Link to="/trainers" className="block hover:text-yellow-400 border-b-1 py-2" onClick={() => setIsOpen(false)}>Trainers</Link>
            <Link to="/about" className="block hover:text-yellow-400 border-b-1 py-2" onClick={() => setIsOpen(false)}>About</Link>
            <Link to="/contact" className="block hover:text-yellow-400 py-2" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
