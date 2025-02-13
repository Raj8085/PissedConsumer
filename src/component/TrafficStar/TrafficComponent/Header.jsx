import { useState } from "react";
import { Menu, X } from "lucide-react"; // Add icons for hamburger menu and close
import { Link } from "react-router-dom"; // Import Link from react-router-dom

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">TrafficStars</div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            {isMenuOpen ? (
              <X size={24} className="text-gray-600" />
            ) : (
              <Menu size={24} className="text-gray-600" />
            )}
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-4">
          <Link to="/" className="text-gray-600 hover:text-blue-600">Home</Link>
          <Link to="/about" className="text-gray-600 hover:text-blue-600">About Us</Link>
          <Link to="/services" className="text-gray-600 hover:text-blue-600">Services</Link>
          <Link to="/advertisers" className="text-gray-600 hover:text-blue-600">Advertisers</Link>
          <Link to="/publishers" className="text-gray-600 hover:text-blue-600">Publishers</Link>
          <Link to="/pricing" className="text-gray-600 hover:text-blue-600">Pricing</Link>
          <Link to="/blog" className="text-gray-600 hover:text-blue-600">Blog</Link>
          <Link to="/contact" className="text-gray-600 hover:text-blue-600">Contact Us</Link>
        </nav>

        {/* Mobile Navigation */}
        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:hidden fixed top-0 left-0 w-full h-full bg-blue-600 bg-opacity-90 z-50 transition-all ease-in-out duration-300`}
        >
          <div className="flex justify-end p-4">
            <button onClick={toggleMenu}>
              <X size={30} className="text-white" />
            </button>
          </div>
          <div className="flex flex-col items-center space-y-6 py-12">
            <Link to="/" className="text-white text-xl font-semibold hover:text-blue-200 transition-colors">Home</Link>
            <Link to="/about" className="text-white text-xl font-semibold hover:text-blue-200 transition-colors">About Us</Link>
            <Link to="/services" className="text-white text-xl font-semibold hover:text-blue-200 transition-colors">Services</Link>
            <Link to="/advertisers" className="text-white text-xl font-semibold hover:text-blue-200 transition-colors">Advertisers</Link>
            <Link to="/publishers" className="text-white text-xl font-semibold hover:text-blue-200 transition-colors">Publishers</Link>
            <Link to="/pricing" className="text-white text-xl font-semibold hover:text-blue-200 transition-colors">Pricing</Link>
            <Link to="/blog" className="text-white text-xl font-semibold hover:text-blue-200 transition-colors">Blog</Link>
            <Link to="/contact" className="text-white text-xl font-semibold hover:text-blue-200 transition-colors">Contact Us</Link>
          </div>
        </nav>

        
      </div>
    </header>
  );
}