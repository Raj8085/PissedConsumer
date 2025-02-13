const Pricing = () => {
    return (
      <div className="container mx-auto px-6 py-16">
        {/* Header Section */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-blue-600">Flexible Pricing to Fit Your Needs</h1>
          <p className="text-lg text-gray-700 mt-4">
            Choose the pricing model that suits your campaign goals and start advertising smarter.
          </p>
        </header>
  
        {/* Pricing Table */}
        <section className="mb-12">
          <table className="min-w-full table-auto border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-lg font-semibold text-gray-800 bg-gray-100">Model</th>
                <th className="px-6 py-3 text-left text-lg font-semibold text-gray-800 bg-gray-100">Description</th>
                <th className="px-6 py-3 text-left text-lg font-semibold text-gray-800 bg-gray-100">Starting Rate</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="px-6 py-4 text-gray-700">CPM</td>
                <td className="px-6 py-4 text-gray-700">Cost per 1,000 impressions</td>
                <td className="px-6 py-4 text-gray-700">$0.10</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-6 py-4 text-gray-700">CPC</td>
                <td className="px-6 py-4 text-gray-700">Cost per click</td>
                <td className="px-6 py-4 text-gray-700">$0.05</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-6 py-4 text-gray-700">dCPM</td>
                <td className="px-6 py-4 text-gray-700">Dynamic CPM</td>
                <td className="px-6 py-4 text-gray-700">$0.10+</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-gray-700">CPA</td>
                <td className="px-6 py-4 text-gray-700">Cost per action</td>
                <td className="px-6 py-4 text-gray-700">Varies</td>
              </tr>
            </tbody>
          </table>
        </section>
  
        {/* CTA Section */}
        <section className="text-center mt-12">
          <button className="bg-blue-600 text-white py-3 px-8 rounded-lg text-lg font-semibold hover:bg-blue-700 transition">
            View Full Pricing Details
          </button>
        </section>
      </div>
    );
  };
  
  export default Pricing;
  