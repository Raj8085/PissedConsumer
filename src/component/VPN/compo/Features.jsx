export default function FeaturesSection() {
    return (
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Sit back, relax, and browse in confidence
            </h2>
          </div>
  
          {/* Feature Cards */}
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Malware Protection',
                description:
                  'A safer, better, easier digital life — Threat Protection Pro™ will block malware before it downloads.',
                img: '/vpn/Last/threat-protection-protective-bubble-threats-sm-svg.svg', // Replace with your image paths
              },
              {
                title: 'Remote file access',
                description:
                  'All your devices are just a click away. Wherever you go, connect to them safely with Meshnet.',
                img: '/vpn/Last/meshnet-encrypted-network-phone-girl-svg.svg', // Replace with your image paths
              },
              {
                title: 'Dark Web Monitor',
                description:
                  'A VPN service that protects your accounts: NordVPN sends instant alerts if your email address is leaked.',
                img: '/vpn/Last/dark-web-monitor-male-binoculars-svg.svg', // Replace with your image paths
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gray-100 rounded-lg p-6 text-center shadow-md h-96"
              >
                <img
                  src={feature.img}
                  alt={feature.title}
                  className="mx-auto h-44 w-48 mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
  
          {/* See All Features Button */}
          <div className="mt-8 text-center">
            <button className="px-6 py-3 border border-blue-600 text-blue-600 font-medium rounded-md hover:bg-blue-600 hover:text-white">
              See All Features
            </button>
          </div>
  
          {/* Online Security Section */}
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Take your online security to the next level
            </h2>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Safe browsing',
                description:
                  'Enjoy an effortless experience every time you go online: avoid downloading malware and browse safe from snoopers, trackers, and ads.',
                icon: 'wifi', // Replace with appropriate icons
              },
              {
                title: 'Password security',
                description:
                  'Add a premium password manager to the mix: it will generate, auto-fill, and store your passwords for you. No more endless resets!',
                icon: 'key', // Replace with appropriate icons
              },
              {
                title: 'Encrypted files',
                description:
                  'Go all out and have your files encrypted, backed up, and always within reach in a secure cloud. Share securely, sync effortlessly, and rest easy.',
                icon: 'lock', // Replace with appropriate icons
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="text-center flex flex-col items-center space-y-4"
              >
                <div className="bg-blue-100 p-4 rounded-full">
                  <svg
                    className="h-8 w-8 text-blue-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {/* Replace with appropriate icons */}
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 11c0-2.485 2-4.5 4.5-4.5S21 8.515 21 11s-2 4.5-4.5 4.5S12 13.485 12 11z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }