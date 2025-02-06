
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'
// import StatusBar from '@/Pricing/Status'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
    {/* <StatusBar/> */}
    <nav className="bg-white/95 backdrop-blur-sm fixed w-full z-50 top-0 left-0 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
        <Link to="/">
          <div className="flex-shrink-0">
              <img
                src="/nordvpn.svg"
                alt="NordVPN Logo"
                width={120}
                height={32}
                className="h-8 w-auto"
              />
          </div>
          </Link>
          {/* Desktop Navigation */}
          {/* <div className="hidden md:flex items-center space-x-4">
              Pricing
            <div className="relative group">
              <button className="text-gray-700 group hover:text-gray-900 px-3 py-2 text-sm font-medium inline-flex items-center">
                Why NordVPN?
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </div>
            <div className="relative group">
              <button className="text-gray-700 group hover:text-gray-900 px-3 py-2 text-sm font-medium inline-flex items-center">
                Download VPN
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </div>
            <div className="relative group">
              <button className="text-gray-700 group hover:text-gray-900 px-3 py-2 text-sm font-medium inline-flex items-center">
                Resources
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </div>
            <div className="relative group">
              <button className="text-gray-700 group hover:text-gray-900 px-3 py-2 text-sm font-medium inline-flex items-center">
                For Business
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </div>
          </div> */}

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {/* <button className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              Products
            </button>
            <button className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              Log In
            </button> */}
            <Link to='/pricing'>
            <button className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-700">
              Pricing
            </button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {/* <Link href="/pricing" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"> */}
            {/* Pricing */}
            <Link to="/pricing">
  <button className="w-full text-left px-3 py-2 rounded-md font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
    Pricing
  </button>
</Link>

          <button className="w-full text-left px-3 py-2 rounded-md  font-medium text-red-700 hover:text-blue-900 hover:bg-gray-50 text-3xl">
            
          </button>
          <button className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
            {/* Resources */}
          </button>
          <button className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
            {/* For Business */}
          </button>
          <button className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
            {/* Products */}
          </button>
          <button className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
            {/* Log In */}
          </button>
        
        </div>
      </div>
    </nav>
    </>
  )
}

