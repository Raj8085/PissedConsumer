/* eslint-disable react/prop-types */
import { PenLine, Mail, Scale, Newspaper, Building, MapPin, Facebook, Youtube, Linkedin, Instagram, Twitter } from 'lucide-react';

// Contact Card Component
const ContactCard = ({ 
  icon: Icon, 
  title, 
  description, 
  buttonText 
}) => (
  <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
    <div className="flex items-start space-x-4">
      <div className="bg-blue-50 p-3 rounded-lg">
        <Icon className="w-6 h-6 text-blue-600" />
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
          {buttonText}
        </button>
      </div>
    </div>
  </div>
);

// Social Icon Component
const SocialIcon = ({ icon: Icon, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition-colors"
  >
    <Icon className="w-5 h-5 text-gray-600" />
  </a>
);

function ContactPissedConsumer() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-2xl font-bold text-gray-900">Contact PissedConsumer</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Write Review Section */}
        <section className="mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-50 p-3 rounded-lg">
                <PenLine className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Write Review</h2>
                <ul className="space-y-2">
                  <li className="text-blue-600 hover:text-blue-800">
                    • Submit public review about any company, business service or product.
                  </li>
                  <li className="text-blue-600 hover:text-blue-800">
                    • Submit public review about PissedConsumer.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Inquiry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <ContactCard
            icon={Mail}
            title="General Inquiry"
            description="PissedConsumer.com general questions: get help with user profiles, subscriptions, technical issues and other general inquiries."
            buttonText="Submit general inquiry"
          />
          <ContactCard
            icon={Scale}
            title="Legal Inquiry"
            description="PissedConsumer.com legal questions: submit court orders or subpoenas, report defamatory or abusive content."
            buttonText="Submit legal inquiry"
          />
          <ContactCard
            icon={Newspaper}
            title="Media Inquiry"
            description="PissedConsumer.com media questions: for reporters, researchers, journalists and other members of media who are looking for more information about reviews, companies etc."
            buttonText="Submit media inquiry"
          />
          <ContactCard
            icon={Building}
            title="Business Inquiry"
            description="PissedConsumer.com business questions: for business owners who have questions about set up, usage and optimization of business account. Fill out the form and we will contact you."
            buttonText="Submit business inquiry"
          />
        </div>

        {/* Mailing Address Section */}
        <section className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Mailing Address</h2>
          <div className="flex items-start space-x-4">
            <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <p className="text-gray-700">Consumer Opinion LLC</p>
              <p className="text-gray-700">1930 Village Center Circle #3-6953</p>
              <p className="text-gray-700">Las Vegas, NV 89134</p>
              <p className="text-sm text-gray-500 mt-4">
                By using the mailing address above you will be contacting PissedConsumer.com. We do not have information or 
                relationship to other companies discussed on our site. Mail directed to any other company will be discarded.
              </p>
            </div>
          </div>
        </section>

        {/* Social Networks Section */}
        <section className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Social Networks</h2>
          <div className="flex space-x-4">
            <SocialIcon icon={Facebook} href="#" />
            <SocialIcon icon={Youtube} href="#" />
            <SocialIcon icon={Linkedin} href="#" />
            <SocialIcon icon={Instagram} href="#" />
            <SocialIcon icon={Twitter} href="#" />
          </div>
        </section>
      </main>
    </div>
  );
}

export default ContactPissedConsumer;