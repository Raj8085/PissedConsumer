import PopComponent from "../Amazon/PopComponent";

function MicrosoftSupport() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-100 via-blue-100 to-blue-200 py-16">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-8">
          {/* Hero Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900">
              Your Microsoft All-in-One Solution is Here!
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-800">
              Simplify your life with seamless support for Microsoft 365,
              Teams, Azure, OneDrive, Windows, and more.
            </p>
            <div className="mt-8 flex justify-center lg:justify-start space-x-4">
              <button
                onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}
                className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-700 transition"
              >
                Get Started Now
              </button>
              <button
                onClick={() => document.getElementById("solutions").scrollIntoView({ behavior: "smooth" })}
                className="bg-white text-blue-600 px-6 py-3 rounded-full shadow-md hover:bg-blue-50 transition"
              >
                Explore Solutions
              </button>
            </div>
          </div>
          {/* Hero Image */}
          <div className="lg:w-1/2">
            <img
              src="/Images/microsoft image.png"
              alt="Microsoft Support Illustration"
              className="w-full max-w-lg mx-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </header>
      <PopComponent/>
      {/* Overview Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
            What We Offer
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            Comprehensive support for all Microsoft services under one roof,
            tailored to your personal and business needs.
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {["Microsoft 365", "Microsoft Teams", "Azure", "OneDrive", "Windows"].map((item) => (
              <div
                key={item}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition"
              >
                <h3 className="text-lg font-semibold text-blue-800">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
            Why Choose Us?
          </h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "One-Stop Solution", desc: "All Microsoft services in one place." },
              { title: "Certified Experts", desc: "Professional assistance from specialists." },
              { title: "Quick Turnaround", desc: "Fast resolutions to keep you productive." },
            ].map(({ title, desc }) => (
              <div
                key={title}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition"
              >
                <h3 className="text-lg font-semibold text-blue-800">{title}</h3>
                <p className="mt-2 text-gray-700">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-16" id="solutions">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
            Our All-in-One Solutions
          </h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { title: "Microsoft 365", desc: "Setup, troubleshooting, and optimization." },
              { title: "Microsoft Teams", desc: "Collaboration tools and issue resolution." },
              { title: "Azure", desc: "Cloud services and infrastructure support." },
              { title: "OneDrive", desc: "File storage, backup, and recovery." },
              { title: "Windows", desc: "Updates, installations, and security solutions." },
            ].map(({ title, desc }) => (
              <div
                key={title}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition"
              >
                <h3 className="text-lg font-semibold text-blue-800">{title}</h3>
                <p className="mt-2 text-gray-700">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-blue-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
            What Our Customers Say
          </h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { text: "Fantastic service! They made managing Microsoft Teams so easy for my business.", name: "Jane Doe" },
              { text: "Expert support and quick resolutions! Highly recommended for Azure cloud solutions.", name: "John Smith" },
            ].map(({ text, name }) => (
              <div
                key={name}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition"
              >
                <p className="italic text-gray-700">&quot;{text}&quot;</p>
                <h4 className="mt-4 font-semibold text-blue-800">- {name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gradient-to-r from-blue-100 to-blue-200 py-16" id="contact">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center">
            Get in Touch
          </h2>
          <div className="mt-8 max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg">
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <select
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option>Query Type</option>
                <option>Microsoft 365</option>
                <option>Teams</option>
                <option>Azure</option>
                <option>OneDrive</option>
                <option>Windows</option>
              </select>
              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-blue-900 text-white text-center py-4">
        <p>© 2024 Microsoft Support. All Rights Reserved.</p>
        <div className="mt-2">
          <a href="#" className="text-blue-300 hover:underline mx-2">FAQ</a>
          <a href="#" className="text-blue-300 hover:underline mx-2">Privacy Policy</a>
          <a href="#" className="text-blue-300 hover:underline mx-2">Terms of Service</a>
        </div>
      </footer>
    </div>
  );
}

export default MicrosoftSupport;
