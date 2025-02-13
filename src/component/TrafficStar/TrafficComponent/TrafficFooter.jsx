
import { Facebook, Linkedin, Twitter } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-start space-y-8 md:space-y-0">
          {/* Logo Section */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-2xl font-semibold mb-4">TrafficStars</h3>
            <p className="text-sm opacity-80">Empowering Digital Advertising with AI-Driven Solutions</p>
          </div>

          {/* Quick Links */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="text-sm space-y-3">
              <li>
                <Link to="/privacy" className="text-gray-200 hover:text-blue-400 transition duration-300">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-200 hover:text-blue-400 transition duration-300">Terms of Service</Link>
              </li>
              <li>
                <Link to="/help" className="text-gray-200 hover:text-blue-400 transition duration-300">Help Center</Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold mb-4">Connect with Us</h4>
            <div className="flex space-x-6">
              <Link to="#" className="text-gray-200 hover:text-blue-400 transition duration-300">
                <Facebook size={30} />
              </Link>
              <Link to="#" className="text-gray-200 hover:text-blue-400 transition duration-300">
                <Linkedin size={30} />
              </Link>
              <Link to="#" className="text-gray-200 hover:text-blue-400 transition duration-300">
                <Twitter size={30} />
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 text-center text-sm opacity-80">
          © {new Date().getFullYear()} TrafficStars. All rights reserved.
        </div>
      </div>
    </footer>
  )
}