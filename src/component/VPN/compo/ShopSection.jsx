export default function OneStopShopSection() {
    return (
      <section className="bg-blue-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
            {/* Left Content */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                A one-stop shop for safe browsing, passwords, and files
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Pick the best plan for your needs and rest easy knowing all
                aspects of your digital life are protected at all times.
              </p>
              <button className="mt-6 px-6 py-3 text-white bg-red-600 hover:bg-red-700 font-medium rounded-lg shadow">
                Choose Your Plan
              </button>
            </div>
  
            {/* Right Image */}
            <div className="relative">
              <img
                src="/vpn/Last/laptop-nordvpn-nordpass-nordlocker-bundle-md-2x-png.png" // Replace with your image path
                alt="Mockup of NordVPN features"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
  