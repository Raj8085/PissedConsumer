/* eslint-disable react/prop-types */
import { Briefcase, Star, Shield, AlertCircle, Clock, MessageCircle, CheckCircle } from 'lucide-react';

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

// Latest Review Component
const LatestReview = ({ title, company }) => (
  <div className="border-b border-gray-200 pb-3 last:border-0">
    <h3 className="text-blue-600 hover:text-blue-800 text-sm font-medium">{company}</h3>
    <p className="text-gray-600 text-sm mt-1">{title}</p>
  </div>
);

// Responsibility Item Component
const ResponsibilityItem = ({ children }) => (
  <li className="flex items-start space-x-2 mb-2">
    <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
    <span className="text-gray-700">{children}</span>
  </li>
);

function Career() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-2xl font-bold text-gray-900">Consumer Expert or Advocate</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Summary Section */}
            <section className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Briefcase className="w-6 h-6 text-blue-600 mr-2" />
                Summary
              </h2>
              <p className="text-gray-700 leading-relaxed">
                PissedConsumer is seeking competent consumer advocates and experts with practical experience in resolving 
                consumer issues across various industries. We expect consumer advocates to have an understanding of 
                certain industries&apos; peculiarities, knowledge of dispute resolution, comprehension of ethical consumer practices, 
                and the ability to delve into the nature of consumer issues with brands.
              </p>
            </section>

            {/* Responsibilities Section */}
            <section className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Star className="w-6 h-6 text-blue-600 mr-2" />
                Consumer Advocate Responsibilities
              </h2>
              <ul className="space-y-3">
                <ResponsibilityItem>Carefully learn and analyze consumer concerns.</ResponsibilityItem>
                <ResponsibilityItem>Identify and assess customer needs to address the issue effectively.</ResponsibilityItem>
                <ResponsibilityItem>Offer proactive strategies tailored to the specific problem for resolving customer concerns.</ResponsibilityItem>
                <ResponsibilityItem>Clarify any aspects of the situation that need explanation to the consumer.</ResponsibilityItem>
                <ResponsibilityItem>Assist in outlining effective communication methods between consumers and businesses.</ResponsibilityItem>
                <ResponsibilityItem>Guide a consumer in comprehending complex processes and offer guidance on making informed decisions.</ResponsibilityItem>
                <ResponsibilityItem>Ensure and uphold the safety, security, and privacy of customer information.</ResponsibilityItem>
                <ResponsibilityItem>Prioritize honesty, integrity, and transparency in interactions with consumers.</ResponsibilityItem>
              </ul>
            </section>

            {/* Skills Section */}
            <section className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Shield className="w-6 h-6 text-blue-600 mr-2" />
                Preferred Skills and Experiences
              </h2>
              <ul className="space-y-3">
                <ResponsibilityItem>Have a background in resolving issues with different companies and industries.</ResponsibilityItem>
                <ResponsibilityItem>Demonstrate basic knowledge of consumer rights and consumer protection laws to offer appropriate guidance.</ResponsibilityItem>
                <ResponsibilityItem>Stay updated on various products and services to provide consumers with accurate information.</ResponsibilityItem>
                <ResponsibilityItem>Be passionate about helping others, empathetic, and willing to assist in issue resolution.</ResponsibilityItem>
              </ul>
            </section>

            {/* Why Join Section */}
            <section className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <MessageCircle className="w-6 h-6 text-blue-600 mr-2" />
                Why to Become a Consumer Advocate?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                By becoming a consumer advocate, you contribute to building a solid consumer environment where people are 
                not afraid of addressing injustices and voicing their concerns. Your expertise and knowledge may positively 
                impact consumers&apos; lives and assist in restoring justice and fair treatment by businesses. Empower consumers 
                and help them receive the customer experience they deserve - join our community of experts.
              </p>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Apply now
              </button>
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

            {/* Latest Reviews */}
            <section className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Clock className="w-5 h-5 text-blue-600 mr-2" />
                Latest Reviews
              </h2>
              <div className="space-y-4">
                <LatestReview 
                  company="Game Show Network"
                  title="Tasteful"
                />
                <LatestReview 
                  company="Sunkist Soda"
                  title="They taste like wafer"
                />
                <LatestReview 
                  company="Facebook"
                  title="No help"
                />
                <LatestReview 
                  company="Fire Kirin"
                  title="Regarding games"
                />
                <LatestReview 
                  company="McDonalds"
                  title="Manager didn't give me a refund for my mobile order"
                />
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Career;