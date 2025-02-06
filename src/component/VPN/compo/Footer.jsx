export default function Footer() {
    return (
      <footer className="bg-gray-900 text-gray-400 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Follow Us Section */}
            <div>
              <h4 className="text-gray-100 text-lg font-semibold">Follow us</h4>
              <div className="mt-4 flex space-x-4">
              <a href="#" aria-label="Facebook">
                <i className="fab fa-facebook text-white text-2xl"></i>
              </a>
              <a href="#" aria-label="X (formerly Twitter)">
                <i className="fab fa-twitter text-white text-2xl"></i>
              </a>
              <a href="#" aria-label="LinkedIn">
                <i className="fab fa-linkedin text-white text-2xl"></i>
              </a>
              <a href="#" aria-label="YouTube">
                <i className="fab fa-youtube text-white text-2xl"></i>
              </a>
              <a href="#" aria-label="Instagram">
                <i className="fab fa-instagram text-white text-2xl"></i>
              </a>
            </div>
            <div className="mt-6 flex gap-4">
              <button className="bg-black text-white px-4 py-2 rounded-md">
                Download on the <strong>App Store</strong>
              </button>
              <button className="ml-4 bg-black text-white px-4 py-2 rounded-md">
                Get it on <strong>Google Play</strong>
              </button>
            </div>
          </div>

          {/* NordVPN Section */}
          <div>
            <h4 className="text-gray-100 text-lg font-semibold">NordVPN</h4>
            <ul className="mt-4 space-y-2">
              {[
                "About us",
                "Careers",
                "Money-back guarantee",
                "VPN routers",
                "Reviews",
                "Student and employee discount",
                "Where to buy",
                "Refer a friend",
                "Research lab",
              ].map((item, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-white">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Engage Section */}
          <div>
            <h4 className="text-gray-100 text-lg font-semibold">Engage</h4>
            <ul className="mt-4 space-y-2">
              {[
                "What is a VPN?",
                "IP lookup",
                "What is my IP?",
                "Cybersecurity glossary",
                "Cybersecurity hub",
                "Social responsibility",
                "Press area",
                "Become a partner",
              ].map((item, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-white">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Section */}
          <div>
            <h4 className="text-gray-100 text-lg font-semibold">Help</h4>
            <ul className="mt-4 space-y-2">
              {[
                "Support center",
                "Tutorials",
                "FAQ",
                "Privacy policy",
                "Cookie preferences",
                "Terms of service",
                "Contact us",
              ].map((item, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-white">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Discover Section */}
          <div>
            <h4 className="text-gray-100 text-lg font-semibold">Discover</h4>
            <ul className="mt-4 space-y-2">
              {[
                "Nord Security",
                "NordLayer",
                "NordPass",
                "NordLocker",
                "NordStellar",
                "NordProtect",
                "Saily",
              ].map((item, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-white">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Available Apps Section */}
        <div className="mt-12">
          <h4 className="text-gray-100 text-lg font-semibold">
            Available VPN apps
          </h4>
          <div className="flex flex-wrap gap-4 mt-4">
            {[
              { name: "Windows", icon: "fab fa-windows" },
              { name: "macOS", icon: "fab fa-apple" },
              { name: "Linux", icon: "fab fa-linux" },
              { name: "Android", icon: "fab fa-android" },
              { name: "iOS", icon: "fab fa-apple" },
              { name: "Chrome", icon: "fab fa-chrome" },
              { name: "Firefox", icon: "fab fa-firefox" },
              { name: "Edge", icon: "fab fa-edge" },
              { name: "Android TV", icon: "fab fa-android" },
              { name: "Apple TV", icon: "fab fa-apple" },
            ].map((app, index) => (
              <div
                key={index}
                className="flex items-center text-gray-400 hover:text-white space-x-2"
              >
                <i className={`${app.icon} text-2xl`}></i>
                <span>{app.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 border-t border-gray-700 pt-6 flex justify-between items-center">
          <p className="text-sm text-gray-500">
            © 2025 Nord Security. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            <i className="fab fa-cc-visa text-2xl"></i>
            <i className="fab fa-cc-mastercard text-2xl"></i>
            <i className="fab fa-cc-amex text-2xl"></i>
            <i className="fab fa-cc-paypal text-2xl"></i>
            <span>English</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
