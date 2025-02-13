
import { useState } from "react";
import { Button } from "../../../src/components/ui/button"; // Import your Button component

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send email or store data)
    alert("Form submitted successfully!");
  };

  return (
    <div className="container mx-auto px-6 py-16">
      {/* Header Section */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-blue-600">Get in Touch with Us</h1>
        <p className="text-lg text-gray-700 mt-4">
          Have questions or need assistance? Reach out to our team!
        </p>
      </header>

      {/* Contact Form Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Contact Form</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Contact Information</h2>
          <div className="text-lg text-gray-700 mb-4">
            <p><strong>Email Support:</strong> <a href="mailto:support@trafficstars.com" className="text-blue-600">support@trafficstars.com</a></p>
          </div>
          <div className="text-lg text-gray-700 mb-4">
            <p><strong>Office Locations:</strong></p>
            <p><strong>Limassol, Cyprus</strong></p>
            <p><strong>Barcelona, Spain</strong></p>
          </div>
        </div>
      </section>

      {/* Login & Sign Up Buttons */}
      <div className="flex justify-center space-x-4 mt-8">
        <Button variant="outline" className="px-6 py-3 text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white">
          Login
        </Button>
        <Button className="px-6 py-3 bg-blue-600 text-white hover:bg-blue-700">
          Sign Up
        </Button>
      </div>
    </div>
  );
};

export default Contact;