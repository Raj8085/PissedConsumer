// import  { useState } from 'react';
// import PopComponent from './PopComponent';
// // import SupportImage from './support-image.png'; 
// function AmazonCustomer() {
//   // State to manage which FAQ is open
//   const [openFAQ, setOpenFAQ] = useState(null);

//   // Function to toggle FAQ answers

//   const toggleFAQ = (index) => {
//     setOpenFAQ(openFAQ === index ? null : index);
//   };
//   return (
//     <div className="flex flex-col h-2">
//       {/* Header */}
//       <header className="w-full bg-gradient-to-r from-yellow-300 to-orange-500 text-white py-2 px-4">
//         <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between">
//           {/* Text Content */}
//           <div className="lg:w-1/2">
//             <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-md">
//               Amazon Customer Support – Get Help Now!
//             </h1>
//             <p className="text-lg md:text-xl mb-6 drop-shadow-md">
//               Facing issues with orders, returns, or accounts? We’re here to assist you with all your Amazon-related queries.
//             </p>
//             <div className="cta-buttons flex flex-col sm:flex-row justify-start items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
//               <button
//                 onClick={() => document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' })}
//                 className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition transform hover:scale-105"
//               >
//                 Submit a Query
//               </button>
//               <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition transform hover:scale-105">
//                 Chat with Us
//               </button>
//             </div>
//           </div>

//           {/* Image */}
//           <div className="lg:w-1/4 mb-8 lg:mb-0">
//             <img src="/popup/amazonCustomerCare.png" alt="Customer Support Illustration" className="w-full h-auto" />
//           </div>
//         </div>
//       </header>

//     <PopComponent/>
//       {/* Navigation */}
//       {/* <nav className="bg-blue-700 shadow-md sticky top-0 z-50">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="flex justify-center space-x-6 py-4">
//             <a href="#home" className="text-white hover:text-yellow-300 transition-colors text-lg font-medium">
//               Home
//             </a>
//             <a href="#about" className="text-white hover:text-yellow-300 transition-colors text-lg font-medium">
//               About Us
//             </a>
//             <a href="#services" className="text-white hover:text-yellow-300 transition-colors text-lg font-medium">
//               Services
//             </a>
//             <a href="#support" className="text-white hover:text-yellow-300 transition-colors text-lg font-medium">
//               Support
//             </a>
//             <a href="#contact" className="text-white hover:text-yellow-300 transition-colors text-lg font-medium">
//               Contact
//             </a>
//           </div>
//         </div>
//       </nav> */}

//       {/* Main Content */}
//       <main className="flex-grow container mx-auto px-4 py-8">
//         {/* Home Section */}
//         <section id="home" className="mb-12">
//           <h2 className="text-3xl font-semibold text-blue-700 mb-6">How Can We Help You?</h2>
//           <div className="faq space-y-4">
//             {[
//               { question: 'Where is my order?', answer: 'Track your package easily with our assistance.' },
//               { question: 'How do I return an item?', answer: 'Learn how to initiate a return or request a refund.' },
//               { question: 'I can’t log into my Amazon account!', answer: 'Let us help you recover your account or reset your password.' },
//               { question: 'Why was my payment declined?', answer: 'Resolve payment errors quickly and securely.' },
//               { question: 'How do I manage my Amazon Prime membership?', answer: 'Get assistance with upgrading, canceling, or renewing your subscription.' },
//               { question: 'How do I contact an Amazon seller?', answer: 'Learn how to reach out to sellers for inquiries or issues.' },
//             ].map((faq, index) => (
//               <div key={index}>
//                 <h3
//                   onClick={() => toggleFAQ(index)}
//                   className="text-xl font-medium cursor-pointer flex justify-between items-center"
//                 >
//                   {faq.question}
//                   <span>{openFAQ === index ? '-' : '+'}</span>
//                 </h3>
//                 {openFAQ === index && <p className="mt-2 text-gray-700">{faq.answer}</p>}
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Support Services Section */}
//         <section id="support-services" className="mb-12">
//           <h2 className="text-3xl font-semibold text-blue-700 mb-6">Our Amazon Support Services</h2>
//           <ul className="list-disc list-inside space-y-3 text-gray-700">
//             <li>
//               <strong>Order Assistance:</strong> Track packages and resolve order-related issues.
//             </li>
//             <li>
//               <strong>Returns and Refunds:</strong> Help with return requests and refunds.
//             </li>
//             <li>
//               <strong>Account Recovery:</strong> Assistance with locked or hacked accounts.
//             </li>
//             <li>
//               <strong>Payment Issues:</strong> Resolve declined transactions and payment errors.
//             </li>
//             <li>
//               <strong>Prime Membership:</strong> Manage your Amazon Prime subscription and benefits.
//             </li>
//             <li>
//               <strong>Technical Help:</strong> Assistance with Kindle, Fire TV, and other Amazon devices.
//             </li>
//           </ul>
//         </section>

//         {/* Contact Form Section */}
//         <section id="contact-form" className="mb-12">
//           <h2 className="text-3xl font-semibold text-blue-700 mb-6 text-center">Submit Your Amazon Query</h2>
//           <form className="contact-form max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
//             <div className="mb-6">
//               <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
//                 Full Name:
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 required
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
//                 placeholder="Your Name"
//               />
//             </div>

//             <div className="mb-6">
//               <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
//                 Email Address:
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 required
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
//                 placeholder="Your Email"
//               />
//             </div>

//             <div className="mb-6">
//               <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
//                 Phone Number:
//               </label>
//               <input
//                 type="text"
//                 id="phone"
//                 name="phone"
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
//                 placeholder="Your Phone Number"
//               />
//             </div>

//             <div className="mb-6">
//               <label htmlFor="order" className="block text-gray-700 font-medium mb-2">
//                 Order Number:
//               </label>
//               <input
//                 type="text"
//                 id="order"
//                 name="order"
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
//                 placeholder="Your Order Number"
//               />
//             </div>

//             <div className="mb-6">
//               <label htmlFor="query-type" className="block text-gray-700 font-medium mb-2">
//                 Query Type:
//               </label>
//               <select
//                 id="query-type"
//                 name="query-type"
//                 required
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
//               >
//                 <option value="" disabled selected>
//                   Select a query type
//                 </option>
//                 <option value="orders">Orders</option>
//                 <option value="returns">Returns</option>
//                 <option value="account">Account</option>
//                 <option value="payment">Payment</option>
//                 <option value="prime">Prime Membership</option>
//                 <option value="seller">Seller</option>
//                 <option value="devices">Devices</option>
//               </select>
//             </div>
//             <div className="mb-6">
//               <label htmlFor="issue" className="block text-gray-700 font-medium mb-2">
//                 Describe Your Issue:
//               </label>
//               <textarea
//                 id="issue"
//                 name="issue"
//                 rows="5"
//                 required
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
//                 placeholder="Describe your issue..."
//               ></textarea>
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition transform hover:scale-105 flex items-center justify-center"
//             >
//               Submit Query
//             </button>
//           </form>
//         </section>
//       </main>

//       <footer className="bg-blue-700 text-white text-center py-6">
//         <p>
//           © {new Date().getFullYear()} Amazon Support Services. All Rights Reserved. |{' '}
//           <a href="#" className="text-yellow-300 hover:underline">
//             Privacy Policy
//           </a>{' '}
//           |{' '}
//           <a href="#" className="text-yellow-300 hover:underline">
//             Terms of Service
//           </a>
//         </p>
//       </footer>
//     </div>
//   );
// }
// export default AmazonCustomer;




import { useState } from 'react';
import { Search, ShoppingCart, Phone, Mail, MessageCircle, Clock, Shield } from 'lucide-react';

function AmazonCustomer() {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const commonIssues = [
    {
      icon: <ShoppingCart className="w-8 h-8 text-blue-600" />,
      title: "Track Your Amazon Order",
      description: "Get real-time updates on your package delivery status"
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Amazon Account Security",
      description: "Secure account access and password reset assistance"
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-blue-600" />,
      title: "Amazon Live Chat Support",
      description: "Connect with our customer service team instantly"
    }
  ];

  const faqs = [
    {
      question: "How do I track my Amazon order status?",
      answer: "Sign in to your Amazon account, go to 'Orders' and find your tracking information. You can also use the Amazon mobile app for real-time delivery updates."
    },
    {
      question: "How to contact Amazon customer service?",
      answer: "You can reach Amazon customer service 24/7 through live chat, phone support at 1-888-280-4331, or by submitting a query through our contact form."
    },
    {
      question: "What is Amazon Prime customer service number?",
      answer: "Amazon Prime members can reach dedicated support at 1-888-280-4331 for premium assistance with memberships, deliveries, and exclusive benefits."
    },
    {
      question: "How do I start an Amazon return?",
      answer: "Go to 'Your Orders', select the item you want to return, choose a reason, and print your return label. Most items are eligible for free returns within 30 days."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">
                Amazon Customer Service Help Center
              </h1>
              <p className="text-xl mb-8">
                24/7 Support for Orders, Returns, Prime & Account Issues
              </p>
              <div className="bg-white rounded-lg p-2 flex items-center">
                <Search className="text-gray-400 w-6 h-6 mx-2" />
                <input
                  type="text"
                  placeholder="Search help topics, track orders, or find solutions..."
                  className="w-full p-2 text-gray-800 focus:outline-none"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            <div className="flex justify-center">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: <Phone />, text: "24/7 Phone Support" },
                  { icon: <Mail />, text: "Email Assistance" },
                  { icon: <MessageCircle />, text: "Live Chat" },
                  { icon: <Clock />, text: "Quick Resolution" }
                ].map((item, index) => (
                  <div key={index} className="bg-white bg-opacity-10 p-4 rounded-lg text-center">
                    <div className="flex justify-center mb-2">{item.icon}</div>
                    <p className="text-sm">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Common Issues Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Popular Amazon Help Topics</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {commonIssues.map((issue, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-4">{issue.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{issue.title}</h3>
              <p className="text-gray-600">{issue.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center"
              >
                <span className="font-semibold">{faq.question}</span>
                <span className="text-blue-600">{openFAQ === index ? '−' : '+'}</span>
              </button>
              {openFAQ === index && (
                <div className="px-6 py-4 border-t">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center mb-8">Contact Amazon Support</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Order Number</label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your order number"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Issue Description</label>
              <textarea
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                rows="4"
                placeholder="Describe your issue..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Submit Request
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-400">Track Package</a></li>
                <li><a href="#" className="hover:text-blue-400">Returns Center</a></li>
                <li><a href="#" className="hover:text-blue-400">Prime Membership</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Support Hours</h3>
              <p>24/7 Customer Service</p>
              <p>Live Chat Available</p>
              <p>Phone Support: 1-888-280-4331</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-400">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-blue-400">Terms of Service</a></li>
                <li><a href="#" className="hover:text-blue-400">Help & FAQ</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p>© {new Date().getFullYear()} Amazon Customer Support. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default AmazonCustomer;