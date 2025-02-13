import { useState } from 'react';

const Services = () => {
  const [activeTab, setActiveTab] = useState('advertisers');

  return (
    <div className="container mx-auto px-6 py-16">
      {/* Header Section */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-blue-600">Services Tailored for Advertisers and Publishers</h1>
        <p className="text-lg text-gray-700 mt-4">
          Empowering your success with cutting-edge tools and dedicated support.
        </p>
      </header>

      {/* Tabs */}
      <div className="flex justify-center border-b mb-8">
        <button
          className={`px-6 py-2 text-lg font-medium ${
            activeTab === 'advertisers' ? 'text-blue-600 border-b-4 border-blue-600' : 'text-gray-600'
          }`}
          onClick={() => setActiveTab('advertisers')}
        >
          Advertisers
        </button>
        <button
          className={`px-6 py-2 text-lg font-medium ${
            activeTab === 'publishers' ? 'text-blue-600 border-b-4 border-blue-600' : 'text-gray-600'
          }`}
          onClick={() => setActiveTab('publishers')}
        >
          Publishers
        </button>
      </div>

      {/* Content Section */}
      <div className="space-y-8">
        {activeTab === 'advertisers' && (
          <div className="bg-blue-50 p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-blue-600 mb-4">Services for Advertisers</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✔</span> 
                AI-Optimized Ad Formats (Banners, Native Ads, Video Pre-rolls, etc.)
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✔</span>
                Advanced Targeting
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✔</span>
                Real-Time Campaign Monitoring
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✔</span>
                Programmatic Advertising with OpenRTB
              </li>
            </ul>
          </div>
        )}

        {activeTab === 'publishers' && (
          <div className="bg-green-50 p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-green-600 mb-4">Services for Publishers</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✔</span>
                Monetization Tools
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✔</span>
                Fraud Protection
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✔</span>
                Revenue Analytics
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✔</span>
                24/7 Support
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;