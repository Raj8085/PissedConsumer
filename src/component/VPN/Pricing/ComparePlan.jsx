import { useState } from "react";

const plansData = {
  "2-year": [
    {
      name: "Complete",
      price: "$5.49",
      discount: "Save 69%",
      features: {
        "30-day money-back guarantee": true,
        "Secure, high-speed VPN": true,
        "Threat Protection": true,
        "10 devices secured at once": true,
        "Anti-malware protection": true,
        "Advanced browsing protection": true,
        "Ad and tracker blocker": true,
        "Cross-platform password manager": true,
        "Data breach scanner": true,
        "1 TB of encrypted cloud storage": true,
      },
      buttonText: "Get Complete",
      highlight: false,
    },
    {
      name: "Plus",
      price: "$4.49",
      discount: "Save 70%",
      features: {
        "30-day money-back guarantee": true,
        "Secure, high-speed VPN": true,
        "Threat Protection": true,
        "10 devices secured at once": true,
        "Anti-malware protection": true,
        "Advanced browsing protection": true,
        "Ad and tracker blocker": true,
        "Cross-platform password manager": true,
        "Data breach scanner": true,
        "1 TB of encrypted cloud storage": false,
      },
      buttonText: "Get Plus",
      highlight: true,
    },
    {
      name: "Basic",
      price: "$3.59",
      discount: "Save 69%",
      features: {
        "30-day money-back guarantee": true,
        "Secure, high-speed VPN": true,
        "Threat Protection": true,
        "10 devices secured at once": true,
        "Anti-malware protection": false,
        "Advanced browsing protection": false,
        "Ad and tracker blocker": false,
        "Cross-platform password manager": false,
        "Data breach scanner": false,
        "1 TB of encrypted cloud storage": false,
      },
      buttonText: "Get Basic",
      highlight: false,
    },
  ],
};

export default function ComparePlans() {
  const [selectedPlan, setSelectedPlan] = useState("2-year");

  const planFeatures = Object.keys(plansData[selectedPlan][0].features);

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Compare plans</h2>
        <div className="text-center mb-12">
          <select
            className="border border-gray-300 rounded-md px-4 py-2"
            value={selectedPlan}
            onChange={(e) => setSelectedPlan(e.target.value)}
          >
            <option value="2-year">2-year plans</option>
            {/* Add more plan durations here */}
          </select>
        </div>

        {/* Plans Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="w-1/4 border border-gray-200 p-4 text-left"></th>
                {plansData[selectedPlan].map((plan, index) => (
                  <th
                    key={index}
                    className={`w-1/4 border border-gray-200 p-4 text-center ${
                      plan.highlight ? "bg-blue-50 border-blue-500" : ""
                    }`}
                  >
                    <p className="text-sm font-medium text-red-500">
                      {plan.discount}
                    </p>
                    <h3 className="text-lg font-semibold text-gray-900 mt-2">
                      {plan.name}
                    </h3>
                    <p className="text-4xl font-bold text-gray-900 mt-4">
                      {plan.price}
                      <span className="text-lg font-medium text-gray-600">
                        /mo
                      </span>
                    </p>
                    <button
                      className={`mt-4 w-full py-2 rounded-md font-medium ${
                        plan.highlight
                          ? "bg-blue-600 text-white hover:bg-blue-700"
                          : "border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
                      }`}
                    >
                      {plan.buttonText}
                    </button>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {planFeatures.map((feature, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="border border-gray-200 p-4 text-left text-gray-700">
                    {feature}
                  </td>
                  {plansData[selectedPlan].map((plan, idx) => (
                    <td
                      key={idx}
                      className="border border-gray-200 p-4 text-center"
                    >
                      {plan.features[feature] ? (
                        <svg
                          className="h-6 w-6 text-green-500 mx-auto"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      ) : (
                        <span className="text-gray-400">—</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer Section */}
        <div className="mt-8 p-6 bg-gray-100 text-center rounded-md">
          <p className="text-gray-700">
            Need a VPN for your business security?{" "}
            <a
              href="#"
              className="text-blue-600 underline hover:text-blue-800"
            >
              Try NordLayer
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
