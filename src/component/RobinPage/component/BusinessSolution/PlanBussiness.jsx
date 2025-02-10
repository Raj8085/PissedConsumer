import { Award, Star, DollarSign, Check } from 'lucide-react';

function BusinessPlan() {
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
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000"
                alt="Analytics Dashboard"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Choose the Best Plan for Your Business
          </h2>
          
          {/* Billing Toggle */}
          <div className="flex justify-center gap-4 mb-12">
            <button className="px-4 py-2 rounded-md text-gray-600">Monthly</button>
            <button className="px-4 py-2 rounded-md bg-blue-600 text-white">
              Yearly <span className="text-xs bg-red-500 px-2 py-1 rounded-full ml-2">Save 15%</span>
            </button>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Bronze Plan */}
            <div className="border rounded-lg p-6 bg-white shadow-sm">
              <h3 className="text-2xl font-bold text-[#B8860B] mb-2">BRONZE PLAN</h3>
              <p className="text-gray-600 mb-4">Monitor & Respond to Reviews</p>
              <div className="text-3xl font-bold mb-6">
                $212.49 <span className="text-sm font-normal text-gray-500">/month</span>
              </div>
              <button className="w-full py-2 px-4 border border-blue-600 text-blue-600 rounded-md mb-4">
                Free Trial
              </button>
              <p className="text-sm text-gray-600 mb-6">For companies with up to 100 reviews</p>
              
              <h4 className="font-semibold mb-4">Popular features:</h4>
              <ul className="space-y-3">
                {['Monitoring dashboard', 'Real-time review alerts', 'Contact information of reviewers', 
                  'Weekly review report', 'Business verification badge'].map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Silver Plan */}
            <div className="border rounded-lg p-6 bg-white shadow-sm relative">
              <div className="absolute -top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-full text-sm">
                MOST POPULAR
              </div>
              <h3 className="text-2xl font-bold text-blue-600 mb-2">SILVER PLAN</h3>
              <p className="text-gray-600 mb-4">Improve Profile & Star Rating</p>
              <div className="text-3xl font-bold mb-6">
                $679.99 <span className="text-sm font-normal text-gray-500">/month</span>
              </div>
              <button className="w-full py-2 px-4 bg-blue-600 text-white rounded-md mb-4">
                Free Trial
              </button>
              <p className="text-sm text-gray-600 mb-6">For companies with up to 1000 reviews</p>
              
              <h4 className="font-semibold mb-4">Popular features:</h4>
              <ul className="space-y-3">
                {['Testimonials showcase', 'Review verification', 'Weighted rating calculation',
                  'Customized Google appearance', 'Showcase customer dedication'].map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Gold Plan */}
            <div className="border rounded-lg p-6 bg-white shadow-sm">
              <h3 className="text-2xl font-bold text-yellow-600 mb-2">GOLD PLAN</h3>
              <p className="text-gray-600 mb-4">Control Content Visibility</p>
              <div className="text-3xl font-bold mb-6">
                Name Your Own Price
              </div>
              <button className="w-full py-2 px-4 border border-blue-600 text-blue-600 rounded-md mb-4">
                Request a demo
              </button>
              
              <h4 className="font-semibold mb-4">Popular features:</h4>
              <ul className="space-y-3">
                {['Move content from PissedConsumer', 'Positive review collection form',
                  'Hidden star rating', 'Reduce anonymous reviews', 'Custom ads integration'].map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Guide Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            PissedConsumer Review Platform Guide
          </h2>
          <p className="text-center text-gray-600 mb-12">
            You&apos;ve got questions, we&apos;ve got answers
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Chapter 1 */}
            <div className="bg-red-50 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="text-sm text-gray-500 mb-2">CHAPTER 1</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                How to create a business account and respond to reviews
              </h3>
            </div>

            {/* Chapter 2 */}
            <div className="bg-yellow-50 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="text-sm text-gray-500 mb-2">CHAPTER 2</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                How to update my company information, change phone or email
              </h3>
            </div>

            {/* Chapter 3 */}
            <div className="bg-blue-50 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="text-sm text-gray-500 mb-2">CHAPTER 3</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                How to improve the company rating and encourage positive feedback
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Check Company Profile Section */}
      <section className="py-16 bg-white">
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

export default BusinessPlan;