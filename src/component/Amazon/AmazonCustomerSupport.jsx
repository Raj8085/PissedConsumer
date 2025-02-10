import  { useState } from 'react';
import PopComponent from './PopComponent';
// import SupportImage from './support-image.png'; 
function AmazonCustomerSupport() {
  // State to manage which FAQ is open
  const [openFAQ, setOpenFAQ] = useState(null);

  // Function to toggle FAQ answers
  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="flex flex-col h-2">
      {/* Header */}
      <header className="w-full bg-gradient-to-r from-yellow-300 to-orange-500 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between">
          {/* Text Content */}
          <div className="lg:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-md">
              Amazon Customer Support – Get Help Now!
            </h1>
            <p className="text-lg md:text-xl mb-6 drop-shadow-md">
              Facing issues with orders, returns, or accounts? We’re here to assist you with all your Amazon-related queries.
            </p>
            <div className="cta-buttons flex flex-col sm:flex-row justify-start items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                onClick={() => document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' })}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition transform hover:scale-105"
              >
                Submit a Query
              </button>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition transform hover:scale-105">
                Chat with Us
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="lg:w-1/4 mb-8 lg:mb-0">
            <img src="/popup/amazonCustomerCare.png" alt="Customer Support Illustration" className="w-full h-auto" />
          </div>
        </div>
      </header>

    <PopComponent/>
      {/* Navigation */}
      {/* <nav className="bg-blue-700 shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center space-x-6 py-4">
            <a href="#home" className="text-white hover:text-yellow-300 transition-colors text-lg font-medium">
              Home
            </a>
            <a href="#about" className="text-white hover:text-yellow-300 transition-colors text-lg font-medium">
              About Us
            </a>
            <a href="#services" className="text-white hover:text-yellow-300 transition-colors text-lg font-medium">
              Services
            </a>
            <a href="#support" className="text-white hover:text-yellow-300 transition-colors text-lg font-medium">
              Support
            </a>
            <a href="#contact" className="text-white hover:text-yellow-300 transition-colors text-lg font-medium">
              Contact
            </a>
          </div>
        </div>
      </nav> */}

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Home Section */}
        <section id="home" className="mb-12">
          <h2 className="text-3xl font-semibold text-blue-700 mb-6">How Can We Help You?</h2>
          <div className="faq space-y-4">
            {[
              { question: 'Where is my order?', answer: 'Track your package easily with our assistance.' },
              { question: 'How do I return an item?', answer: 'Learn how to initiate a return or request a refund.' },
              { question: 'I can’t log into my Amazon account!', answer: 'Let us help you recover your account or reset your password.' },
              { question: 'Why was my payment declined?', answer: 'Resolve payment errors quickly and securely.' },
              { question: 'How do I manage my Amazon Prime membership?', answer: 'Get assistance with upgrading, canceling, or renewing your subscription.' },
              { question: 'How do I contact an Amazon seller?', answer: 'Learn how to reach out to sellers for inquiries or issues.' },
            ].map((faq, index) => (
              <div key={index}>
                <h3
                  onClick={() => toggleFAQ(index)}
                  className="text-xl font-medium cursor-pointer flex justify-between items-center"
                >
                  {faq.question}
                  <span>{openFAQ === index ? '-' : '+'}</span>
                </h3>
                {openFAQ === index && <p className="mt-2 text-gray-700">{faq.answer}</p>}
              </div>
            ))}
          </div>
        </section>

        {/* Support Services Section */}
        <section id="support-services" className="mb-12">
          <h2 className="text-3xl font-semibold text-blue-700 mb-6">Our Amazon Support Services</h2>
          <ul className="list-disc list-inside space-y-3 text-gray-700">
            <li>
              <strong>Order Assistance:</strong> Track packages and resolve order-related issues.
            </li>
            <li>
              <strong>Returns and Refunds:</strong> Help with return requests and refunds.
            </li>
            <li>
              <strong>Account Recovery:</strong> Assistance with locked or hacked accounts.
            </li>
            <li>
              <strong>Payment Issues:</strong> Resolve declined transactions and payment errors.
            </li>
            <li>
              <strong>Prime Membership:</strong> Manage your Amazon Prime subscription and benefits.
            </li>
            <li>
              <strong>Technical Help:</strong> Assistance with Kindle, Fire TV, and other Amazon devices.
            </li>
          </ul>
        </section>

        {/* Contact Form Section */}
        <section id="contact-form" className="mb-12">
          <h2 className="text-3xl font-semibold text-blue-700 mb-6 text-center">Submit Your Amazon Query</h2>
          <form className="contact-form max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                Full Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                placeholder="Your Name"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Email Address:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                placeholder="Your Email"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                Phone Number:
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                placeholder="Your Phone Number"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="order" className="block text-gray-700 font-medium mb-2">
                Order Number:
              </label>
              <input
                type="text"
                id="order"
                name="order"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                placeholder="Your Order Number"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="query-type" className="block text-gray-700 font-medium mb-2">
                Query Type:
              </label>
              <select
                id="query-type"
                name="query-type"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              >
                <option value="" disabled selected>
                  Select a query type
                </option>
                <option value="orders">Orders</option>
                <option value="returns">Returns</option>
                <option value="account">Account</option>
                <option value="payment">Payment</option>
                <option value="prime">Prime Membership</option>
                <option value="seller">Seller</option>
                <option value="devices">Devices</option>
              </select>
            </div>
            <div className="mb-6">
              <label htmlFor="issue" className="block text-gray-700 font-medium mb-2">
                Describe Your Issue:
              </label>
              <textarea
                id="issue"
                name="issue"
                rows="5"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                placeholder="Describe your issue..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition transform hover:scale-105 flex items-center justify-center"
            >
              Submit Query
            </button>
          </form>
        </section>
      </main>

      <footer className="bg-blue-700 text-white text-center py-6">
        <p>
          © {new Date().getFullYear()} Amazon Support Services. All Rights Reserved. |{' '}
          <a href="#" className="text-yellow-300 hover:underline">
            Privacy Policy
          </a>{' '}
          |{' '}
          <a href="#" className="text-yellow-300 hover:underline">
            Terms of Service
          </a>
        </p>
      </footer>
    </div>
  );
}

export default AmazonCustomerSupport;