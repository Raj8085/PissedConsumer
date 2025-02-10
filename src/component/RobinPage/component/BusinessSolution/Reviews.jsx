/* eslint-disable react/prop-types */
import { BarChart3, Users, Brain, Award, Building2 } from 'lucide-react';

function ReviewsBussiness() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Is It Important to Work with Reviews?
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Based on our surveys, online reviews have a huge impact on consumers&apos; purchasing decisions. Businesses must effectively manage customer feedback to maintain a positive reputation and foster buyer&apos;s trust.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Download report
            </button>
          </div>
          <div className="flex justify-center">
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-4xl font-bold text-red-500 mb-2">89%</h3>
                  <p className="text-gray-600">Consumers say that negative reviews impact their purchase decisions</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-4xl font-bold text-red-500 mb-2">90.6%</h3>
                  <p className="text-gray-600">Consumers read online reviews before shopping</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-50 py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Service</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard 
              icon={<BarChart3 className="w-8 h-8 text-blue-600" />}
              title="Root Problem Resolution"
              description="We thoroughly investigate the underlying issues behind customer complaints and effectively address them."
            />
            <FeatureCard 
              icon={<Brain className="w-8 h-8 text-blue-600" />}
              title="Deep Consumer Insights"
              description="With over 17 years of experience, our in-depth understanding of consumer behavior empowers us."
            />
            <FeatureCard 
              icon={<Users className="w-8 h-8 text-blue-600" />}
              title="Over 20 million active users"
              description="We've consolidated consumers' voices into our platform, recognizing excellence in customer satisfaction."
            />
            <FeatureCard 
              icon={<Building2 className="w-8 h-8 text-blue-600" />}
              title="Comprehensive Services"
              description="We offer supplementary services like customer service outsourcing, ensuring holistic solutions."
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Are Saying</h2>
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-3xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <Award className="w-12 h-12 text-yellow-500" />
            </div>
            <blockquote className="text-center">
              <p className="text-xl text-gray-600 mb-4">
                &quot;Everything is great so far. Decided to create an account for customers that use your site who leave reviews. So far so good!&quot;
              </p>
              <footer className="text-gray-500">
                <p className="font-semibold">Adrian Gomez</p>
                <p className="text-sm">Marketing Specialist at Wash Multifamily Laundry Systems</p>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default ReviewsBussiness;