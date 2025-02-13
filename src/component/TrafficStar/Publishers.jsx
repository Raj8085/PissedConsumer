const Publishers = () => {
    return (
      <div className="container mx-auto px-6 py-16">
        {/* Header Section */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-green-600">Maximize Your Earnings with TrafficStars</h1>
          <p className="text-lg text-gray-700 mt-4">
            Unlock your website’s potential with AI-driven monetization solutions.
          </p>
        </header>
  
        {/* Monetization Options */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Monetization Options</h2>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✔</span>
              Wide range of ad formats, including banners, native ads, and videos.
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✔</span>
              Guaranteed 100% fill rates for all your ad spots.
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✔</span>
              AI-optimized ads to maximize revenue.
            </li>
          </ul>
        </section>
  
        {/* Security Features */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Security</h2>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✔</span>
              Advanced fraud detection systems to protect your revenue.
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✔</span>
              Comprehensive brand safety tools to ensure high-quality ads.
            </li>
          </ul>
        </section>
  
        {/* Steps to Start */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Steps to Start</h2>
          <ol className="list-decimal pl-6 space-y-4 text-gray-700">
            <li>Register your account as a publisher.</li>
            <li>Integrate ad spots into your website or app.</li>
            <li>Start earning revenue from your traffic.</li>
          </ol>
        </section>
  
        {/* Call to Action */}
        <section className="text-center mt-12">
          <button className="bg-green-600 text-white py-3 px-8 rounded-lg text-lg font-semibold hover:bg-green-700 transition">
            Join as a Publisher Today
          </button>
        </section>
      </div>
    );
  };
  
  export default Publishers;
  