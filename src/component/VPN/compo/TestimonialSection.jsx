export default function TestimonialsSection() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Trusted by tech experts and users
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Is NordVPN the best VPN service for online privacy? Let’s ask our users and tech experts.
          </p>
        </div>

        {/* Tabs */}
        <div className="mt-8 flex justify-center space-x-6 text-gray-600">
          {["Tech Reviews", "Users", "Video Reviews", "Featured", "Awards"].map(
            (tab, index) => (
              <button
                key={index}
                className={`text-sm font-medium ${
                  index === 0
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "hover:text-blue-600"
                }`}
              >
                {tab}
              </button>
            )
          )}
        </div>

        {/* Reviews */}
        <div className="mt-12 grid gap-8 sm:grid-cols-1 lg:grid-cols-2  sm:px-8 lg:px-52">
          {/* Review 1 */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start">
              <img
                src="/vpn/Last/pcmag.png" // Replace with your image path
                alt="PCMag Logo"
                className="h-12 w-12 rounded-full"
              />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-900">Max Eddy</p>
                <p className="text-sm text-gray-600">Software analyst, PCMag</p>
              </div>
            </div>
            <p className="mt-4 text-gray-600">
              “As VPN services go, it&apos;s hard to beat NordVPN. It has a large and diverse collection of servers, an excellent collection of advanced features, strong privacy and security practices, and approachable clients for every major platform.”
            </p>
          </div>

          {/* Review 2 */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start">
              <img
                src="/vpn/Last/tech-of-tommorow.png" // Replace with your image path
                alt="Tech of Tomorrow Logo"
                className="h-12 w-12 rounded-full"
              />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-900">
                  Tech of Tomorrow
                </p>
                <p className="text-sm text-gray-600">
                  Tech reviewer, YouTube
                </p>
              </div>
            </div>
            <p className="mt-4 text-gray-600">
              “The bottom line here is: When you’re online, you don’t have to worry about being secure or about your information getting out there if you have a VPN. NordVPN makes it simple.”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
