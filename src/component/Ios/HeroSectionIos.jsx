import { Link } from "react-router-dom";
import PopComponent from "../Amazon/PopComponent";

export default function HomeIos() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-4 md:px-20">
        <Link to="#" className="text-[#bf5af2] text-xl font-semibold">
          iOS Customer Support
        </Link>
        <div className="space-x-6">
          <Link to="#" className="hover:text-[#bf5af2]">
            We Offer
          </Link>
          <Link to="#" className="hover:text-[#bf5af2]">
            FAQ
          </Link>
        </div>
      </nav>
      <PopComponent/>

      {/* Hero Section */}
      <div className="container mx-auto md:px-16 px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="space-y-2">
              <span className="block text-[#bf5af2] text-5xl md:text-6xl font-bold">iOS Customer Support</span>
              <span className="block text-4xl md:text-5xl font-bold">We&apos;re Here to Help!</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-xl">
              Get answers and expert support for all your iOS devices and services.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#34c759] hover:bg-[#34c759]/90 text-black px-6 py-3 rounded-md font-medium">
                Make An Inquiry
              </button>
              <button className="bg-[#1c1c1e] hover:bg-[#2c2c2e] text-white px-6 py-3 rounded-md font-medium">
                Chat with us
              </button>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <img
              src="/Robin/ios-support1-removebg-preview.png"
              alt="iOS Photos App Icon"
              width={400}
              height={400}
              className="w-64 md:w-96"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

