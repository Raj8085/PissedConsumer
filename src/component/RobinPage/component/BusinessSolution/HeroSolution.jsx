import { Award, Star, DollarSign } from 'lucide-react';

function HeroSolution() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Left Column */}
            <div className="max-w-xl">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                PissedConsumer Review Management
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Gain valuable customer insights, manage reviews, and build a positive online
                reputation. Choose a plan now and boost your success!
              </p>
              <button className="bg-red-500 hover:bg-red-600 text-white font-semibold px-8 py-3 rounded-md transition-colors">
                Choose your plan
              </button>
            </div>
            
            {/* Right Column - Analytics Dashboard */}
            <div className="w-full md:w-1/2 bg-white rounded-lg shadow-lg p-4">
              <img 
                src="/Bussiness/review_management.svg"
                alt="Analytics Dashboard"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Check Company Profile Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Check your company&apos;s profile
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Use our solutions to boost the company&apos;s success by demonstrating dedication to customer satisfaction.
            Manage your profile, interact with reviewers, and address customer issues directly.
          </p>

          {/* Company Card */}
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-6">
              {/* Company Logo */}
              <div className="w-32 h-32 bg-gray-200 rounded-lg flex-shrink-0"></div>
              
              {/* Company Info */}
              <div className="flex-grow">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                  <h3 className="text-2xl font-bold text-gray-900">Bajaj Finserv</h3>
                  <button className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Close</span>
                    ✕
                  </button>
                </div>
                
                {/* Stats */}
                <div className="flex flex-wrap justify-center md:justify-start gap-8 mt-4">
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-blue-500" />
                    <div>
                      <div className="font-bold text-xl">1.7</div>
                      <div className="text-sm text-gray-500">RATING</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-blue-500" />
                    <div>
                      <div className="font-bold text-xl">1090</div>
                      <div className="text-sm text-gray-500">REVIEWS</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-blue-500" />
                    <div>
                      <div className="font-bold text-xl">2.5M</div>
                      <div className="text-sm text-gray-500">CLAIMED LOSSES</div>
                    </div>
                  </div>
                </div>

                <a href="#" className="text-blue-500 hover:text-blue-600 mt-4 inline-block">
                  Company Profile →
                </a>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center">
            <p className="text-lg font-semibold text-gray-900 mb-4">
              Is this your business?
            </p>
            <p className="text-gray-600 mb-6">
              Claim your company profile.
            </p>
            <button className="bg-white hover:bg-gray-50 text-blue-500 font-semibold px-8 py-3 rounded-md border border-blue-500 transition-colors">
              Free Trial
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
export default HeroSolution;