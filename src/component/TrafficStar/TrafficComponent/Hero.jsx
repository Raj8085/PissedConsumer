
// import { Button } from "../components/ui/button"

import { Link } from "react-router-dom";

// export default function HeroSection() {
//   return (
//     <section className="bg-blue-600 text-white py-20">
//       <div className="container mx-auto px-4 text-center">
//         <h1 className="text-4xl md:text-5xl font-bold mb-6">
//           Empowering Digital Advertising with AI-Driven Solutions
//         </h1>
//         <p className="text-xl mb-8">
//           Revolutionize your digital advertising strategy with TrafficStars
//         </p>
//         <div className="flex justify-center space-x-4">
//           <Button size="lg" variant="secondary">Start Advertising</Button>
//           <Button size="lg" variant="outline">Join as a Publisher</Button>
//         </div>
//       </div>
//     </section>
//   )
// }



const HeroSection = () => {
  return (
    <div className="bg-gray-50 p-6 md:p-12">
      <div className="max-w-7xl mx-auto text-center space-y-6">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
        Empowering Digital Advertising with AI-Driven Solutions
        </h1>
        <p className="text-gray-600 text-lg md:text-xl">
        Revolutionize your digital advertising strategy with TrafficStars
        </p>
        {/* <div className="flex justify-center space-x-4 flex-wrap">
          <span className="text-orange-500 font-medium">Video Pre-Roll</span>
          <span className="text-blue-500 font-medium">Video IM Slider</span>
          <span className="text-blue-700 font-medium">Banners</span>
          <span className="text-green-500 font-medium">Native</span>
          <span className="text-purple-500 font-medium">Full Page Interstitial</span>
          <span className="text-yellow-500 font-medium">Popunder</span>
          <span className="text-gray-500 font-medium">Push</span>
        </div> */}

        <Link to="/contact">
        <button className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition mt-10">
          GET STARTED
        </button>
        </Link>
        <div className="relative mt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
            <img
              src="/download (1).jpg"
              alt="Smiling group"
              className="rounded-lg shadow-md w-full h-auto object-cover"
            />
            <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
              <div className="text-green-500 bg-green-100 px-3 py-1 rounded-full font-semibold">
                192+ Countries
              </div>
              <p className="text-gray-600 text-lg">
                Delivering results across the globe!
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="text-4xl md:text-6xl font-bold text-gray-900">7b</div>
              <p className="text-gray-600">impressions daily</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
