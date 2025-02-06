import PopComponent from "../Amazon/PopComponent";

function UtilitiesCustomerSupport() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="w-full bg-gray-200 py-16">
  <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center">
    {/* Content Section */}
    <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">
        Utilities Customer Support
      </h1>
      <p className="mt-4 text-lg md:text-xl text-gray-600">
        Your trusted partner for resolving utility-related queries efficiently.
      </p>
      <div className="mt-8 flex justify-center lg:justify-start space-x-4">
        <a
          href="#contact"
          className="bg-teal-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-green-600 transition transform hover:scale-105"
        >
          Get Support
        </a>
        <a
          href="#contact"
          className="bg-teal-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-teal-700 transition transform hover:scale-105"
        >
          Contact Us
        </a>
      </div>
    </div>

    {/* Image Section */}
    <div className="lg:w-1/2 flex justify-center">
      <img
        src="/Images/Utility-and-Communication.png"
        alt="Utilities Support"
        className="w-full max-w-md lg:max-w-full h-auto rounded-lg shadow-lg"
      />
    </div>
  </div>
</header>




      {/* <header className="bg-gradient-to-r from-blue-700 to-indigo-600 text-white text-center py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            viewBox="0 0 1440 320"
          >
            <path
              fill="currentColor"
              d="M0,224L48,208C96,192,192,160,288,138.7C384,117,480,107,576,112C672,117,768,139,864,154.7C960,171,1056,181,1152,186.7C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold">Utilities Customer Support</h1>
          <p className="mt-4 text-lg md:text-xl">
            Your trusted partner for resolving utility-related queries efficiently.
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <a
              href="#contact"
              className="bg-white text-indigo-600 px-6 py-3 rounded-full shadow-lg hover:bg-gray-100 transition transform hover:scale-105"
            >
              Get Support
            </a>
            <a
              href="#contact"
              className="bg-indigo-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-indigo-700 transition transform hover:scale-105"
            >
              Contact Us
            </a>
          </div>
        </div>
      </header> */}

<nav className="bg-white shadow-md sticky top-0 z-50">
  <div className="max-w-7xl mx-auto px-4 py-4 grid grid-cols-1 md:grid-cols-4 gap-4">
    <a
      href="#electricity"
      className="block text-center text-gray-700 text-lg font-medium
                 bg-gray-50 px-4 py-2 rounded-md shadow
                 transition-colors hover:bg-indigo-50 hover:text-indigo-600"
    >
      Electricity
    </a>
    <a
      href="#heating-cooling"
      className="block text-center text-gray-700 text-lg font-medium
                 bg-gray-50 px-4 py-2 rounded-md shadow
                 transition-colors hover:bg-indigo-50 hover:text-indigo-600"
    >
      Heating &amp; Cooling
    </a>
    <a
      href="#water-sewer"
      className="block text-center text-gray-700 text-lg font-medium
                 bg-gray-50 px-4 py-2 rounded-md shadow
                 transition-colors hover:bg-indigo-50 hover:text-indigo-600"
    >
      Water &amp; Sewer
    </a>
    <a
      href="#internet-cable-phone"
      className="block text-center text-gray-700 text-lg font-medium
                 bg-gray-50 px-4 py-2 rounded-md shadow
                 transition-colors hover:bg-indigo-50 hover:text-indigo-600"
    >
      Internet &amp; Cable
    </a>
  </div>
</nav>

<PopComponent/>


      {/* Main Content */}
     

      <main className="flex-grow container mx-auto px-4 py-8">
  {/* Main Grid Section */}
  <section className="grid lg:grid-cols-2 gap-8">
    {/* Electricity Section */}
    <div id="electricity" className="p-6 bg-gradient-to-r from-indigo-100 to-indigo-50 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
      <h2 className="text-3xl font-semibold text-indigo-800 mb-4 flex items-center">
        <svg
          className="w-8 h-8 mr-3 text-indigo-600"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
        Electricity
      </h2>
      <p className="text-gray-700 mb-3">
        Have questions about electricity costs or need assistance with your energy bill? Our support team can guide you through understanding your charges and reducing your consumption.
      </p>
      <button className="mt-4 bg-indigo-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-indigo-700 transition">
        Learn More
      </button>
    </div>

    {/* Heating and Cooling Section */}
    <div id="heating-cooling" className="p-6 bg-gradient-to-r from-blue-100 to-blue-50 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
      <h2 className="text-3xl font-semibold text-blue-800 mb-4 flex items-center">
        <svg
          className="w-8 h-8 mr-3 text-blue-600"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8c-1.38 0-2.74-.56-3.76-1.64A4.992 4.992 0 0112 2c2.76 0 5 2.24 5 5 0 2.76-2.24 5-5 5z"
          />
        </svg>
        Heating and Cooling
      </h2>
      <p className="text-gray-700 mb-3">
        Need help with your heating or cooling system bills? Whether it’s gas or oil, our experts can provide advice on optimizing energy use and understanding seasonal fluctuations.
      </p>
      <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-700 transition">
        Learn More
      </button>
    </div>

    {/* Water and Sewer Services Section */}
    <div id="water-sewer" className="p-6 bg-gradient-to-r from-green-100 to-green-50 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
      <h2 className="text-3xl font-semibold text-green-800 mb-4 flex items-center">
        <svg
          className="w-8 h-8 mr-3 text-green-600"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M20 13V7a4 4 0 00-8 0v6m2-4h4m-2 0v4m-6 4a4 4 0 11-8 0V7a4 4 0 118 0v10z"
          />
        </svg>
        Water and Sewer Services
      </h2>
      <p className="text-gray-700 mb-3">
        If you have questions about water usage or sewer system fees, we’re here to help. Learn how to manage costs and maintain your home’s water efficiency.
      </p>
      <button className="mt-4 bg-green-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-green-700 transition">
        Learn More
      </button>
    </div>

    {/* Internet, Cable, and Phone Services Section */}
    <div id="internet-cable-phone" className="p-6 bg-gradient-to-r from-teal-100 to-teal-50 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
      <h2 className="text-3xl font-semibold text-teal-800 mb-4 flex items-center">
        <svg
          className="w-8 h-8 mr-3 text-teal-600"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 10h11M9 21l3-3m-6 0l3 3m6 0a3 3 0 100-6m-6-4a3 3 0 110-6m0 0V5m0 3v6m3 3l3-3m-6 0l3 3"
          />
        </svg>
        Internet, Cable, and Phone Services
      </h2>
      <p className="text-gray-700 mb-3">
        Confused about your internet, cable, or phone bills? Our support team can assist you in selecting affordable plans and resolving service issues.
      </p>
      <button className="mt-4 bg-teal-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-teal-700 transition">
        Learn More
      </button>
    </div>
  </section>
</main>




      {/* Contact Form */}
      <section id="contact" className="bg-gradient-to-r from-indigo-50 to-blue-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center text-indigo-600 mb-6">Contact Us</h2>
          <p className="text-center text-gray-700 mb-8">
            Need assistance? Fill out the form below, and our customer support team will get back to you shortly.
          </p>
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <form>
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                  placeholder="Your Name"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                  placeholder="Your Email"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="query" className="block text-gray-700 font-medium mb-2">
                  Your Query:
                </label>
                <textarea
                  id="query"
                  name="query"
                  rows="5"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                  placeholder="Describe your query..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg shadow hover:bg-indigo-700 transition transform hover:scale-105 flex items-center justify-center"
              >
                <svg
                  className="w-5 h-5 mr-2 animate-bounce"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-indigo-700 text-white text-center py-6">
        <p>
          © {new Date().getFullYear()} Utilities Customer Support. All Rights Reserved. |{' '}
          <a href="#" className="text-indigo-300 hover:underline">
            Privacy Policy
          </a>
        </p>
      </footer>
    </div>
  );
}

export default UtilitiesCustomerSupport;
