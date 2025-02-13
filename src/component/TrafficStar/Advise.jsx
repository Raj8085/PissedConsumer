const Advertisers = () => {
    return (
      <div className="container mx-auto px-6 py-16">
        {/* Header Section */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-blue-600">Advertise Smarter with TrafficStars</h1>
          <p className="text-lg text-gray-700 mt-4">
            Unlock the power of AI-driven advertising and maximize your ROI.
          </p>
        </header>
  
        {/* Why Choose Us */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Choose Us?</h2>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✔</span>
              Cutting-edge AI tools to optimize your campaigns.
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✔</span>
              Industry-leading fraud protection to safeguard your budget.
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✔</span>
              Global reach with a vast network of publishers.
            </li>
          </ul>
        </section>
  
        {/* Steps to Get Started */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Steps to Get Started</h2>
          <ol className="list-decimal pl-6 space-y-4 text-gray-700">
            <li>Sign up to create your account.</li>
            <li>Create a campaign tailored to your goals.</li>
            <li>Monitor your campaign and optimize for better results.</li>
          </ol>
        </section>
  
        {/* Pricing Models */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Pricing Models</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-blue-50 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-blue-600">CPM</h3>
              <p className="text-gray-700 mt-2">Cost per thousand impressions.</p>
            </div>
            <div className="p-6 bg-blue-50 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-blue-600">CPC</h3>
              <p className="text-gray-700 mt-2">Cost per click on your ad.</p>
            </div>
            <div className="p-6 bg-blue-50 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-blue-600">dCPM</h3>
              <p className="text-gray-700 mt-2">Dynamic cost per thousand impressions.</p>
            </div>
            <div className="p-6 bg-blue-50 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-blue-600">CPA</h3>
              <p className="text-gray-700 mt-2">Cost per action or conversion.</p>
            </div>
          </div>
        </section>
  
        {/* Call to Action */}
        <section className="text-center mt-12">
          <button className="bg-blue-600 text-white py-3 px-8 rounded-lg text-lg font-semibold hover:bg-blue-700 transition">
            Launch Your Campaign Now
          </button>
        </section>
      </div>
    );
  };
  
  export default Advertisers;
  