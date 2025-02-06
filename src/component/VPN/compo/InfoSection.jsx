export default function VPNInfoSection() {
    return (
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              What is a VPN?
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              VPN stands for “virtual private network.” A VPN service gives you safe and private access to the internet. By encrypting your connection, a VPN changes your IP address and virtual location while protecting your online activity from spying eyes and keeping your data safer from cybercriminals.
            </p>
          </div>
  
          {/* Content */}
          <div className="mt-12 lg:flex lg:items-center lg:justify-between">
            {/* Left Image */}
            <div className="lg:w-1/2">
              <div className="flex justify-center">
                <img
                  src="/vpn/benefits_security-safety_phone-auto-connection-servers-protected-md@2x.png"
                  alt="VPN Protected Mobile"
                  className="w-3/4 lg:w-full h-auto"
                />
              </div>
            </div>
  
            {/* Right Content */}
            <div className="mt-8 lg:mt-0 lg:w-1/2 lg:pl-16">
              <h3 className="text-2xl font-semibold text-gray-900">
                Why NordVPN?
              </h3>
              <p className="mt-4 text-gray-600">
                Protect yourself online. Thanks to all kinds of nifty, cutting-edge technology, NordVPN keeps your devices malware-free and your online activities safe from strangers&apos; eyes. How safe? It would take the world’s most powerful computer billions of years to unencrypt your data — that safe.
              </p>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li className="flex items-center">
                  <svg
                    className="h-5 w-5 text-blue-600 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Security and performance
                </li>
                <li className="flex items-center">
                  <svg
                    className="h-5 w-5 text-blue-600 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Control your private data
                </li>
              </ul>
            </div>
          </div>
  
          {/* Supported Devices */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-semibold text-gray-900">
              Available for all your devices
            </h3>
            <p className="mt-4 text-gray-600">
              Use a VPN on up to 10 devices and enjoy a secure and private access to the internet — even on public Wi-Fi.
            </p>
            <div className="mt-6 flex justify-center flex-wrap gap-6">
  {/* Replace with actual image URLs */}
  {[
    { name: 'Windows', img: '/vpn/windows.svg' },
    { name: 'macOS', img: '/vpn/macos.svg' },
    { name: 'Linux', img: '/vpn/linux.svg' },
    { name: 'Android', img: '/vpn/android.svg' },
    { name: 'iOS', img: '/vpn/ios.svg' },
    { name: 'Chrome', img: '/vpn/chrome.svg' },
    { name: 'Firefox', img: '/vpn/firefox.svg' },
    { name: 'Edge', img: '/vpn/microsoft-edge.svg' },
    { name: 'Android TV', img: '/vpn/android-tv.svg' },
    { name: 'tvOS', img: '/vpn/apple-tv.svg' },
  ].map((device, index) => (
    <div
      key={index}
      className="text-gray-600 text-sm flex flex-col items-center space-y-2"
    >
      <img
        src={device.img}
        alt={device.name}
        className="h-12 w-12 object-contain"
      />
      <span>{device.name}</span>
    </div>
  ))}
</div>
 
            <button className="mt-8 px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700">
              See All Apps
            </button>
          </div>
        </div>
      </section>
    );
  }
  