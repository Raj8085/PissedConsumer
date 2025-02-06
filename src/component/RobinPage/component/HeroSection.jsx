import { Button } from "@/components/ui/button"
import { Info } from 'lucide-react'
import { useState } from "react";

export default function RobinhoodLanding() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-neutral-800 to-[#d4c4b5]">
      {/* Navigation */}
      <nav className="bg-red-700 text-black p-4 lg:px-8">
      <div className="flex items-center justify-between">
        {/* Left Section: Logo */}
        <div className="flex items-center gap-4 ">
          <img
            src="/Robin/download.svg"
            alt="Robinhood"
            className="text-red-800 w-44 h-auto"
          />
        </div>

        {/* Middle Section: Nav Items (hidden on mobile) */}
        <div className="hidden md:flex items-center gap-6">
          <button className="hover:text-gray-300">What We Offer</button>
          <button className="hover:text-gray-300">Credit Card</button>
          <button className="hover:text-gray-300">Gold</button>
          <button className="hover:text-gray-300">Robinhood Legend</button>
          <button className="hover:text-gray-300">Learn</button>
          <button className="hover:text-gray-300">Support</button>
        </div>

        {/* Right Section: Auth Buttons + Hamburger */}
        <div className="flex items-center gap-4">
          {/* <button className="hover:text-gray-300">Log in</button>
          <button className="bg-white text-black px-4 py-2 rounded hover:bg-gray-100">
            Sign up
          </button> */}
          {/* Hamburger icon (visible on mobile) */}
          <button
            className="block md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {/* Simple "hamburger" icon */}
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu (visible when isOpen === true) */}
      {isOpen && (
        <div className="text-white md:hidden flex flex-col gap-3 mt-4">
          <button className="hover:text-gray-300">What We Offer</button>
          <button className="hover:text-gray-300">Credit Card</button>
          <button className="hover:text-gray-300">Gold</button>
          <button className="hover:text-gray-300">Robinhood Legend</button>
          <button className="hover:text-gray-300">Learn</button>
          <button className="hover:text-gray-300">Support</button>
        </div>
      )}
    </nav>

      {/* Main Content */}
      <main className=" container mx-auto px-4 pt-12 pb-24 text-center">
        <div className="space-y-4 mb-12">
          <p className="text-white text-lg">Robinhood Gold Card</p>
          <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-serif max-w-3xl mx-auto leading-tight">
            3% cash back
            <br />
            across the board
          </h1>
        </div>

        {/* Card Container */}
        <div className="relative w-full max-w-xl mx-auto aspect-[1.6/1] mb-12">
          <div className="absolute inset-0 bg-gradient-radial from-yellow-200/30 to-transparent rounded-3xl" />
        <img src="/Robin/robinhood-gold-card-removebg-preview.png" alt="hy"/>

        </div>

        {/* CTA Section */}
        <div className="space-y-6">
          <p className="text-white text-lg">
            That&apos;s right—earn 3% cash back on all categories.
          </p>
          <Button className="bg-black text-white hover:bg-black/90 px-8 py-6 text-lg rounded-full">
            Reserve your spot
          </Button>
          <div className="flex items-center justify-center gap-2 text-2xl text-white/70">
            <Info className="h-4 w-4" />
            <span>Terms apply</span>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-center gap-12 mt-16 text-lg text-black">
          <div className="text-center">
            <p className="uppercase">Material</p>
            <p>Stainless steel</p>
          </div>
          <div className="text-center">
            <p className="uppercase">Weight</p>
            <p>17 grams</p>
          </div>
          <div className="text-center">
            <p className="uppercase">Network</p>
            <p>Visa Signature</p>
          </div>
        </div>
      </main>
    </div>
  )
}

