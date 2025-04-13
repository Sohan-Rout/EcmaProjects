import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // For mobile menu

  return (
    <nav className="bg-white shadow-md dark:bg-gray-900">
      {/* Container */}
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-xl font-bold text-gray-800 dark:text-white cursor-pointer">
            EcmaProjects
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
            Home
          </Link>
          <Link href="/projects" className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
            Projects
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
            About Us
          </Link>
          <Link href="/resources" className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
            Resources
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
            Contact
          </Link>
        </div>

        {/* Call-to-Action Button */}
        <Link href="/submit-project">
          <button className="hidden md:inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">
            Submit Project
          </button>
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 dark:text-gray-300 focus:outline-none"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-white dark:bg-gray-800 py-4`}
      >
        <Link href="/" className="block px-6 py-2 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
          Home
        </Link>
        <Link href="/projects" className="block px-6 py-2 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
          Projects
        </Link>
        <Link href="/about" className="block px-6 py-2 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
          About Us
        </Link>
        <Link href="/resources" className="block px-6 py-2 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
          Resources
        </Link>
        <Link href="/contact" className="block px-6 py-2 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
          Contact
        </Link>
        <Link href="/submit-project">
          <button className="w-full text-center bg-blue-600 text-white px-4 py-2 rounded-md mt-4 hover:bg-blue-700 transition duration-300">
            Submit Project
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;