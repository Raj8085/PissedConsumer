/* eslint-disable react/prop-types */
import { ChevronRight, Info, Shield, Users, FileQuestion, Clock, CheckCircle, AlertCircle } from 'lucide-react';

// Featured Review Component
const FeaturedReview = ({ title, company, hasResponse = false }) => (
  <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
    <h3 className="text-sm font-medium text-blue-600">{company}</h3>
    <p className="text-gray-600 text-sm mt-1">{title}</p>
    {hasResponse && (
      <div className="mt-2 text-xs text-green-600 flex items-center">
        <CheckCircle className="w-4 h-4 mr-1" />
        With Company Response
      </div>
    )}
  </div>
);

// FAQ Item Component
const FAQItem = ({ question, children }) => (
  <div className="mb-6">
    <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
      <ChevronRight className="w-5 h-5 text-blue-600 mr-2" />
      {question}
    </h3>
    <div className="text-gray-600 ml-7 space-y-2">
      {children}
    </div>
  </div>
);

function FAQCONSUMER() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-2xl font-bold text-gray-900">PissedConsumer Questions and Answers (FAQ) for Reviewers</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* About Us Section */}
            <section className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <Info className="w-6 h-6 text-blue-600 mr-2" />
                About us
              </h2>
              
              <div className="space-y-6">
                <FAQItem question="What is PissedConsumer.com?">
                  <p>We are a leading consumer advocacy and review platform giving voice to ordinary people and connecting businesses and consumers.</p>
                </FAQItem>

                <FAQItem question="Who are our users?">
                  <p>Our users are experts whose reviews can be trusted because they base them on their own experience and genuine opinion.</p>
                </FAQItem>

                <FAQItem question="Where does our content come from?">
                  <p>Our content is 100% user-generated and is mostly written by people who have experienced a product/service for some time and know exactly what they are talking about.</p>
                </FAQItem>
              </div>
            </section>

            {/* General Questions Section */}
            <section className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <FileQuestion className="w-6 h-6 text-blue-600 mr-2" />
                General Questions
              </h2>

              <div className="space-y-6">
                <FAQItem question="Who are Verified Reviewers?">
                  <p>A Verified Reviewer is a person who has created an account on PissedConsumer.com, provided valid contact information, and has not been caught retailing, spamming, or abusing our website.</p>
                </FAQItem>

                <FAQItem question="Who are Verified Buyers?">
                  <p>A Verified Buyer is a person who has purchased the reviewed product/service and confirms being a paying customer of a company which the reviewed product/service has been purchased from.</p>
                </FAQItem>

                <FAQItem question="How long will my posting remain on the website?">
                  <p>Provided that a posting complies with our Terms of Use, it shall remain active on our website indefinitely.</p>
                </FAQItem>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Featured Reviews */}
            <section className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <AlertCircle className="w-5 h-5 text-blue-600 mr-2" />
                Featured Reviews
              </h2>
              <div className="space-y-4">
                <FeaturedReview 
                  company="TUI Group"
                  title="Ongoing delay dispute"
                />
                <FeaturedReview 
                  company="PetSmart"
                  title="I want everyone to know about my experience"
                />
                <FeaturedReview 
                  company="Amazon"
                  title="Packages stolen"
                  hasResponse={true}
                />
              </div>
            </section>

            {/* Trust Indicators */}
            <section className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Shield className="w-5 h-5 text-blue-600 mr-2" />
                Why Trust Us
              </h2>
              <div className="space-y-4 text-sm text-gray-600">
                <div className="flex items-start">
                  <Users className="w-5 h-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                  <p>100% user-generated content from verified reviewers</p>
                </div>
                <div className="flex items-start">
                  <Clock className="w-5 h-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                  <p>Real-time moderation and verification process</p>
                </div>
                <div className="flex items-start">
                  <Shield className="w-5 h-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                  <p>Strict guidelines to ensure authentic reviews</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

export default FAQCONSUMER;