import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white text-black   md:px-72">
      {/* Top row: Brokerage links */}
      <div className="border-b border-gray-700">
        <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between">
          <div className="flex flex-col sm:flex-row items-start sm:items-center">
            <Link
              to="#"
              className="text-sm mb-2 sm:mb-0 sm:mr-6 hover:underline"
            >
              Brokerage Customer Relationship Summary
            </Link>
            <Link to="#" className="text-sm hover:underline">
              FINRA’s BrokerCheck
            </Link>
          </div>
          <div className="mt-4 sm:mt-0">
            {/* Social Icons Row (replace # with real links) */}
            <div className="flex space-x-4 text-xl">
              <Link to="#" aria-label="Twitter (X)" className="hover:opacity-70">
                <i className="fa-brands fa-x-twitter"></i>
              </Link>
              <Link
                to="#"
                aria-label="Instagram"
                className="hover:opacity-70"
              >
                <i className="fa-brands fa-instagram"></i>
              </Link>
              <Link to="#" aria-label="LinkedIn" className="hover:opacity-70">
                <i className="fa-brands fa-linkedin"></i>
              </Link>
              <Link to="#" aria-label="TikTok" className="hover:opacity-70">
                <i className="fa-brands fa-tiktok"></i>
              </Link>
              <Link to="#" aria-label="YouTube" className="hover:opacity-70">
                <i className="fa-brands fa-youtube"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Middle row: Columns */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Product Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about-pissed" className="hover:underline">
                  About PissedConsumer
                </Link>
              </li>
              <li>
                <Link to="/press" className="hover:underline">
                  Press Page
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:underline">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/faq-consumer" className="hover:underline">
                  FAQ For Consumer
                </Link>
              </li>
              <li>
                <Link to="/faq-consumer" className="hover:underline">
                  FAQ For Companies
                </Link>
              </li>
              <li>
                <Link to="/career" className="hover:underline">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact-pissed" className="hover:underline">
                  Contact pissed consumer
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Browse</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/company" className="hover:underline">
                  Companies
                </Link>
              </li>
              <li>
                <Link to="/review" className="hover:underline">
                  Review
                </Link>
              </li>
              <li>
                <Link to="/category" className="hover:underline">
                  Category
                </Link>
              </li>
              <li>
                <Link to="/attoney" className="hover:underline">
                State Attorneys General Contacts
                </Link>
              </li>
              
            </ul>
          </div>

          {/* Legal & Regulatory Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal & Regulatory</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/term" className="hover:underline">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:underline">
                  Privacy
                </Link>
              </li>
              <li>
                <Link to="/legal" className="hover:underline">
                  Legal Information
                </Link>
              </li>
            </ul>
          </div>

          {/* Extra Column (if needed) */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/bussiness" className="hover:underline">
                  Business Solution
                </Link>
              </li>
              <li>
                <Link to="/list-bussiness" className="hover:underline">
                  List Your Business
                </Link>
              </li>
              <li>
                <Link to="/tips-consumer" className="hover:underline">
                  Tips For Consumers
                </Link>
              </li>
              <li>
                <Link to="/tips-company" className="hover:underline">
                  Tips For Companies
                </Link>
              </li>
              {/* <li>
                <Link to="#" className="hover:underline">
                  PissedConsumer Club
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">
                  Advertise with us 
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom row: Address and copyright */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="text-sm mb-2 md:mb-0">
            Robinhood, 85 Willow Road, Menlo Park, CA 94025.
          </div>
          <div className="text-sm">© 2025 Robinhood. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}